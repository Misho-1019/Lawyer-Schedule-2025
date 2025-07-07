import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import router from "./routes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import './utils/reminderAppointment.js';

dotenv.config();

const app = express();

try {
    const uri = process.env.URI;
    mongoose.connect(uri)
    
    console.log('DB Connected successfully!');
} catch (error) {
    console.log('Cannot connect to DB!');
    console.error(error.message);
}

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

app.use(helmet())
app.use(express.json())
app.use(cookieParser())

// const globalLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 200,
//     message: 'Too many requests from this IP, please try again later.',
// })

// app.use(globalLimiter)
app.use(authMiddleware)

app.use(router)

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}...`))
