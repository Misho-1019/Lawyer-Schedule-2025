import { Schema, Types, model } from "mongoose";

const appointmentSchema = new Schema({
    client: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'rejected'],
        default: 'pending',
        trim: true,
    }
});


const Appointment = model('Appointment', appointmentSchema)

export default Appointment;