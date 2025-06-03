import cron from "node-cron";
import dayjs from "dayjs";
import Appointment from "../models/Appointment";
import { sendAppointmentEmail } from "./email";

cron.schedule('*/5* * * *', async () => {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000)
    const twentyFourHoursLater = new Date(now.getTime() + 24 * 60 * 60 * 1000)

    try {
        const hourAppointments = await Appointment.find({
            date: {
                $eq: dayjs(oneHourLater).format('YYYY-MM-DD')
            },
            time: dayjs(oneHourLater).format('HH:mm'),
            reminder1hSent: false,
        })

        for (let app of hourAppointments) {
            await sendAppointmentEmail(
                process.env.EMAIL_USER,
                '1 Hour Reminder: Appointment',
                `Reminder: You have an appointment at ${app.time} today.`
            )

            app.reminder1hSent = true;
            await app.save();
        }

        const dayAppointments = await Appointment.find({
            date: {
                $eq: dayjs(twentyFourHoursLater).format('YYYY-MM-DD')
            },
            time: dayjs(twentyFourHoursLater).format('HH:mm'),
            reminder24hSent: false,
        })

        for (let app of dayAppointments) {
            await sendAppointmentEmail(
                process.env.EMAIL_USER,
                '24 Hour Reminder: Appointment',
                `Reminder: You have an appointment tomorrow at ${app.time}.`
            )

            app.reminder24hSent = true;
            await app.save();
        }
    } catch (error) {
        console.error(error.message);
        
    }
})