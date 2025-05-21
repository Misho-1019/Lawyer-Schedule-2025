import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.post('/register', async (req, res) => {
    const authData = req.body;

    await authService.register(authData)
    
    res.end();
})

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await authService.login(email, password);
        console.log(result);
        
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
})

export default authController;