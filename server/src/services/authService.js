import User from "../models/User.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET || 'BASICSECRET';

export default {
    async register(authData) {
        return User.create(authData)
    },
    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Invalid email or password!')
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            throw new Error('Invalid email or password!')
        }

        const payload = {
            id: user.id,
            email: user.email,
        }

        const token = jwt.sign(payload, secret, { expiresIn: '2h' })

        return {
            token,
            _id: user._id,
            email: user.email,
            username: user.username,
        }
    }
}