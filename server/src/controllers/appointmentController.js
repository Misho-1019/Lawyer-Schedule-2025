import { Router } from "express";
import appointmentService from "../services/appointmentService.js";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";

const appointmentController = Router();

appointmentController.post('/', isAuth, async (req, res) => {
    const appointmentData = req.body;
    const clientId = req.user?.id;

    try {
        const result = await appointmentService.create(appointmentData, clientId);

        res.status(201).json(result)
    } catch (err) {
        if (err.message === 'This time slot is already booked!') {
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

        res.status(200).json('Deleted successfully!')
    } catch (err) {
        if (err.message === 'Appointment not found!') {
            return res.status(404).json({ message: err.message });
        }

        res.status(500).json({ message: 'Failed to delete appointment!' })
    }
})

export default appointmentController;