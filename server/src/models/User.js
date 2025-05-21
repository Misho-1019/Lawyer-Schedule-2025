import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const User = model('User', userSchema)

export default User