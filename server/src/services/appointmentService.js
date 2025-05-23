import Appointment from "../models/Appointment.js"

export default {
    getAll() {
        return Appointment.find({}).sort({ date: 1, time: 1 });
    },
    getByClient(clientId) {
        return Appointment.findById({ client: clientId })
    },
    create(appointmentData, creatorId) {
        return Appointment.create({
            ...appointmentData,
            client: creatorId,
        })
    },
}