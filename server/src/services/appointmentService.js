import Appointment from "../models/Appointment.js"

export default {
    getAll() {
        return Appointment.find({}).sort({ date: 1, time: 1 });
    },
    getByClient(clientId) {
        return Appointment.find({ client: clientId })
    },
    create(appointmentData, creatorId) {
        return Appointment.create({
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
    }
}