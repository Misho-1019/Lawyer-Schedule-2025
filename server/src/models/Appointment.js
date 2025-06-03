import { Schema, Types, model } from "mongoose";

const appointmentSchema = new Schema({
    client: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending',
        trim: true,
    },
    reminder24hSent: {
        type: Boolean,
        default: false
    },
    reminder1hSent: {
        type: Boolean,
        default: false,
    }
});

const Appointment = model('Appointment', appointmentSchema);

export default Appointment;
