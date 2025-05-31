import { Router } from "express";
import appointmentService from "../services/appointmentService.js";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";

const blockedTimeController = Router();

blockedTimeController.post('/blocked-time', isAuth, isAdmin, async (req, res) => {
    const { date, time, reason } = req.body;

    try {
        const blockedTime = await appointmentService.blockedTime({ date, time, reason })

        res.status(201).json(blockedTime)
    } catch (err) {
        if (err.message === 'Time slot already blocked!') {
            return res.status(409).json({ message: err.message })
        }

        res.status(500).json({ message: err.message })
    }
})

blockedTimeController.get('/blocked-time', isAuth, async (req, res) => {
    try {
        const blockedTimes = await appointmentService.getBlockedTime();

        res.status(200).json(blockedTimes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

blockedTimeController.delete('/blocked-time/:appointmentId', isAuth, isAdmin, async (req, res) => {
    const appointmentId = req.params.appointmentId;

    try {
        await appointmentService.deleteBlockedTime(appointmentId)

        res.status(200).json({ message: 'Free up time for meetings'})
    } catch (err) {
        if (err.message === 'Blocked time is not found!') {
            return res.status(404).json({ error: err.message })
        }

        res.status(500).json({ message: err.message })
    }
})

export default blockedTimeController