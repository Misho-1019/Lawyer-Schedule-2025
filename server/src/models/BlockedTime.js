import { Schema, model } from "mongoose";

const blockedTimeSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        default: 'On this day or hour i am unavailable so call me or choose another day or hour.',
    }
}, {
    timestamps: true,
})

const BlockedTime = model('BlockedTime', blockedTimeSchema)

export default BlockedTime;