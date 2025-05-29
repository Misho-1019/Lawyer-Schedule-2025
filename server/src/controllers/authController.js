import { Router } from "express";
import authService from "../services/authService.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";

const authController = Router();

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many login attempts, please try again after 15 minutes.',
})

authController.post('/register', authLimiter, isGuest, [
    body('username').notEmpty().withMessage('Username is required!').isString().withMessage('Username must be a string!'),
    body('email').isEmail().withMessage('Email must be a valid!'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters!'),
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ array: errors.array() })
    }

    const authData = req.body;

    try {
        const result = await authService.register(authData);

        res.cookie('auth', result.token, { httpOnly: true })

        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message }).end()
    }
    
    res.end();
})

authController.post('/login', authLimiter, isGuest, [
    body('email').isEmail().withMessage('Email must be valid!'),
    body('password').notEmpty().withMessage('Password is required!'),
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ array: errors.array() })
    }

    const { email, password } = req.body;

    try {
        const result = await authService.login(email, password);
        
        res.cookie('auth', result.token)
        
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
})

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    return res.status(200).json({ message: 'Logout successfully!' })
})

export default authController;