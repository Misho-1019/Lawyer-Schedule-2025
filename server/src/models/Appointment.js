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
    match: /^([01]\d|2[0-3]):([0-5]\d)$/, // Validates HH:MM in 24-hour format
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'rejected'],
    default: 'pending',
    trim: true,
  }
});

const Appointment = model('Appointment', appointmentSchema);

export default Appointment;
