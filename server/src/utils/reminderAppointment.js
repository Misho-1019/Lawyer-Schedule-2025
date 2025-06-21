import cron from "node-cron";
import dayjs from "dayjs";
import Appointment from "../models/Appointment.js";
import { sendAppointmentEmail } from "./email.js";

cron.schedule('*/5 * * * *', async () => {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);
    const twentyFourHoursLater = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    const hourTargetDate = dayjs(oneHourLater).format('YYYY-MM-DD');
    const hourTargetTime = dayjs(oneHourLater).format('HH:mm');

    const dayTargetDate = dayjs(twentyFourHoursLater).format('YYYY-MM-DD');
    const dayTargetTime = dayjs(twentyFourHoursLater).format('HH:mm');

    try {
        // 1h reminders
        const hourAppointments = await Appointment.find({
            date: hourTargetDate,
            time: hourTargetTime,
            reminder1hSent: false,
        });

        await Promise.all(hourAppointments.map(async (app) => {
            await sendAppointmentEmail(
                process.env.EMAIL_USER,
                '🔔 1 Hour Reminder: Appointment',
                `Hi, this is a reminder that you have an appointment with Victor Todorov at ${app.time} today.`
            );

            app.reminder1hSent = true;
            await app.save();
        }));

        // 24h reminders
        const dayAppointments = await Appointment.find({
            date: dayTargetDate,
            time: dayTargetTime,
            reminder24hSent: false,
        });

        await Promise.all(dayAppointments.map(async (app) => {
            await sendAppointmentEmail(
                process.env.EMAIL_USER,
                '📅 24 Hour Reminder: Appointment',
                `Hi, just a reminder that you have an appointment tomorrow at ${app.time} with Victor Todorov.`
            );

            app.reminder24hSent = true;
            await app.save();
        }));
    } catch (error) {
        console.error('Reminder cron job failed:', error.message);
    }
});
