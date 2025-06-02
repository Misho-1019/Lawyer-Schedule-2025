import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
})

export async function sendAppointmentEmail(to, subject, htmlContent) {
    const mailOptions = {
        from: `"Lawyer Appointments" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html: htmlContent,
    }

    try {
        const info = await transporter.sendMail(mailOptions)

        console.log('Email sent', info.response);
    } catch (err) {
        console.log('Email sending error:', err.message);
        
    }
}