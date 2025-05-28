import { Schema, Types, model } from "mongoose";

const appointmentSchema = new Schema({
    client: {
        type: Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'rejected'],
        default: 'pending',
    }
})

const Appointment = model('Appointment', appointmentSchema)

export default Appointment;