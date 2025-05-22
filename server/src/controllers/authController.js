import { Router } from "express";
import authService from "../services/authService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

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
        
        res.cookie('auth', result.token)
        
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
})

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    return res.status(200).json({ message: 'Logout successfully!' })
})

export default authController;