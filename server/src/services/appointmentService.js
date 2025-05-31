import Appointment from "../models/Appointment.js"
import BlockedTime from "../models/BlockedTime.js";

export default {
    getAll() {
        return Appointment.find({}).sort({ date: 1, time: 1 });
    },
    async getOne(appointmentId) {
        const appointment = await Appointment.findById(appointmentId)

        if (!appointment) {
            throw new Error('Appointment does not exist!');
        }

        return appointment
    },
    getByClient(clientId) {
        return Appointment.find({ client: clientId })
    },
    async create(appointmentData, creatorId) {
        const { date, time } = appointmentData

        const conflict = await Appointment.findOne({ date, time })

        if (conflict) {
            throw new Error('This time slot is already booked!')
        }

        const blocked = await BlockedTime.findOne({ date, time })

        if (blocked) {
            throw new Error('During this time slot Victor Todorov is already busy. Choose another time slot!')
        }
        
        return await Appointment.create({
            ...appointmentData,
            client: creatorId,
        })
    },
    async update(appointmentId, updateData) {
        const appointment = await Appointment.findById(appointmentId)

        if (!appointment) {
            throw new Error('Appointment not found!')
        }

        if (updateData.date !== undefined) {
            appointment.date = updateData.date
        }

        if (updateData.time !== undefined) {
            appointment.time = updateData.time
        }

        if (updateData.status !== undefined) {
            appointment.status = updateData.status
        }

        const result = await appointment.save();

        return result;
    },
    async delete(appointmentId) {
        const appointment = await Appointment.findById(appointmentId)

        if (!appointment) {
            throw new Error('Appointment not found!')
        }

        await Appointment.findByIdAndDelete(appointmentId)

        return appointment
    },
    async blockedTime(blockedTimeData) {
        const { date, time } = blockedTimeData;

        const exists = await BlockedTime.findOne({ date, time })

        if (exists) {
            throw new Error('Time slot already blocked!')
        }

        const result = await BlockedTime.create(blockedTimeData)

        return result;
    },
    async getBlockedTime() {
        return await BlockedTime.find({}).sort({ date: 1, time: 1 })
    }
}