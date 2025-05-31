import { Router } from "express";
import { body, validationResult } from "express-validator";
import appointmentService from "../services/appointmentService.js";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";

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
        res.status(500).json({ error: 'Failed to fetch data!'})
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
        const updatedData = await appointmentService.update(appointmentId, { date, time, status })

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

        res.status(200).json({ message: 'Deleted successfully!'})
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

        res.status(200).json(updatedAppointment)
    } catch (err) {
        if (err.message === 'Appointment does not exist!') {
            return res.status(404).json({ message: err.message })
        }

        res.status(500).json({ message: err.message })
    }
})

export default appointmentController;