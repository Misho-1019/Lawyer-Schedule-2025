import { Schema, Types, model } from "mongoose";

const appointmentSchema = new Schema({
    client: {
        type: Types.ObjectId,
        ref: 'User',
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
    }
});

const Appointment = model('Appointment', appointmentSchema);

export default Appointment;
