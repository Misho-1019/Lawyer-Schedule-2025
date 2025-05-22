import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 2,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /\@[a-zA-Z]+.[a-zA-Z]+$/,
        minLength: 8,
    },
    password: {
        type: String,
        minLength: 6,
        match: /^\w+$/,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'client'],
        default: 'client'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10)
})

const User = model('User', userSchema)

export default User