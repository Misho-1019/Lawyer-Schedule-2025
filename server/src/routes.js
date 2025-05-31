import { Router } from "express";
import authController from "./controllers/authController.js";
import appointmentController from "./controllers/appointmentController.js";
import blockedTimeController from "./controllers/blockedTimeController.js";

const router = Router();

router.use('/auth', authController)
router.use('/appointments', appointmentController)
router.use(blockedTimeController)

export default router;