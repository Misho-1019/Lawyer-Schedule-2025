import { Router } from "express";
import { body, validationResult } from "express-validator";
import appointmentService from "../services/appointmentService.js";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import { sendAppointmentEmail } from "../utils/email.js";

const appointmentController = Router();

appointmentController.post('/', isAuth, [
    body('date').notEmpty().withMessage('Date is required!').isISO8601().withMessage('Date must be in valid YYYY-MM-DD format!'),
    body('time').notEmpty().withMessage('Time is required!').matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/).withMessage('Time must be in HH:MM 24-hour format!'),
    body('status').optional().isIn(['pending', 'confirmed', 'completed', 'cancelled']).withMessage('Status must be one of: pending, confirmed, completed, cancelled')
], async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const appointmentData = req.body;
    const clientId = req.user?.id;
    const clientEmail = req.user.email


    try {
        const result = await appointmentService.create(appointmentData, clientId, clientEmail);

        await sendAppointmentEmail(
            clientEmail,
            'Appointment Confirmation',
            `Your appointment has been booked for ${result.date} at ${result.time}`
        )

        await sendAppointmentEmail(
            process.env.ADMIN_EMAIL,
            'New Appointment Booked',
            `New appointment booked by ${clientEmail} on ${result.date} at ${result.time}`
        )

        res.status(201).json(result)
    } catch (err) {
        if (err.message === 'This time slot is already booked!' || err.message === 'During this time slot Victor Todorov is already busy. Choose another time slot!') {
            res.status(409).json({ message: err.message })
        }

        res.status(400).json({ message: err.message })
    }
})

appointmentController.get('/', isAuth, async (req, res) => {
    const clientId = req.user?.id;

    try {
        const result = await appointmentService.getByClient(clientId)

        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
})

appointmentController.get('/admin', isAuth, isAdmin, async (req, res) => {

    try {
        const result = await appointmentService.getAll();

        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data!' })
    }
})

appointmentController.get('/admin/:appointmentId', isAuth, isAdmin, async (req, res) => {
    const appointmentId = req.params.appointmentId;

    try {
        const appointment = await appointmentService.getOne(appointmentId)

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found!' })
        }

        res.status(200).json(appointment)
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message })
    }
})

appointmentController.patch('/:appointmentId', isAuth, isAdmin, async (req, res) => {
    const appointmentId = req.params.appointmentId;
    const { date, time, status } = req.body;

    const validStatuses = ['pending', 'confirmed', 'completed'];
    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid status!' })
    }

    try {
        const existingAppointment = await appointmentService.getOne(appointmentId)

        if (!existingAppointment) {
            return res.status(404).json({ message: 'Appointment not found!' })
        }

        const updatedData = await appointmentService.update(appointmentId, { date, time, status })

        if (date !== existingAppointment.date || time !== existingAppointment.time) {
            await sendAppointmentEmail(
                process.env.EMAIL_USER,
                'Appointment Rescheduled',
                `<p>Your appointment has been rescheduled to ${updatedData.date} at ${updatedData.time}.<p>`
            )
        }
        else if (status && status !== existingAppointment.status) {
            await sendAppointmentEmail(
                process.env.EMAIL_USER,
                'Appointment Status Update',
                `<p>Your appointment on ${updatedData.date} at ${updatedData.time} is now <strong>${status}<strong>.<p>`
            )
        }

        res.status(200).json(updatedData)
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: err.message })
    }
})

appointmentController.delete('/:appointmentId', isAuth, isAdmin, async (req, res) => {
    const appointmentId = req.params.appointmentId;

    try {
        await appointmentService.delete(appointmentId)

        res.status(200).json({ message: 'Deleted successfully!' })
    } catch (err) {
        if (err.message === 'Appointment not found!') {
            return res.status(404).json({ message: err.message });
        }

        res.status(500).json({ message: 'Failed to delete appointment!' })
    }
})

appointmentController.patch('/:appointmentId/cancel', isAuth, [
    body('status').equals('cancelled').withMessage('Only "cancelled" status is allowed on this endpoint!')
], async (req, res) => {
    const appointmentId = req.params.appointmentId;
    const userId = req.user.id;
    const { status } = req.body

    if (status !== 'cancelled') {
        return res.status(400).json({ message: 'Invalid status change!' })
    }

    try {
        const appointment = await appointmentService.getOne(appointmentId)

        if (appointment.client.toString() !== userId) {
            return res.status(409).json({ message: 'Appointment does not belong to that user!' })
        }

        const updatedAppointment = await appointmentService.update(appointmentId, { status })

        if (updatedAppointment.status === 'cancelled') {
            await sendAppointmentEmail(
                process.env.ADMIN_EMAIL,
                'Appointment Cancelled',
                `Appointment cancelled by ${updatedAppointment.email} on ${updatedAppointment.date} at ${updatedAppointment.time}`
            )

            await sendAppointmentEmail(
                process.env.EMAIL_USER,
                'Appointment Cancelled',
                `<p>Your appointment on ${updatedAppointment.date} at ${updatedAppointment.time} was cancelled.</p>`
            )
        }

        res.status(200).json(updatedAppointment)
    } catch (err) {
        if (err.message === 'Appointment does not exist!') {
            return res.status(404).json({ message: err.message })
        }

        res.status(500).json({ message: err.message })
    }
})

appointmentController.get('/stats', isAuth, isAdmin, async (req, res) => {
    try {
        const stats = await appointmentService.getStats();

        res.status(200).json(stats)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

export default appointmentController;