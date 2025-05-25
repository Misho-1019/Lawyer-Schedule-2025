import { Router } from "express";
import appointmentService from "../services/appointmentService.js";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";

const appointmentController = Router();

appointmentController.post('/appointments', isAuth, async (req, res) => {
    const appointmentData = req.body;
    const clientId = req.user?.id;

    try {
        const result = await appointmentService.create(appointmentData, clientId);

        res.status(201).json(result)
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ message: err.message })
    }
})

appointmentController.get('/appointments', isAuth, async (req, res) => {
    const clientId = req.user?.id;

    try {
        const result = await appointmentService.getByClient(clientId)

        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
})

appointmentController.get('/appointments/admin', isAuth, isAdmin, async (req, res) => {

    try {
        const result = await appointmentService.getAll();

        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data!'})
    }
})

export default appointmentController;