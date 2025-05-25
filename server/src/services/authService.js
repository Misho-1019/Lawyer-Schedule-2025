import User from "../models/User.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET || 'BASICSECRET';

export default {
    async register(authData) {
        const userCount = await User.countDocuments({ email: authData.email });

        if (userCount > 0) {
            throw new Error('User already exists!')
        }
        
        const user = await User.create(authData)

        const payload = {
            id: user.id,
            email: user.email,
            role: user.role,
        }

        const token = jwt.sign(payload, secret, { expiresIn: '2h' })

        return {
            token,
            _id: user._id,
            email: user.email,
            username: user.username,
            role: user.role,
        }
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
            role: user.role,
        }

        const token = jwt.sign(payload, secret, { expiresIn: '2h' })

        return {
            token,
            _id: user._id,
            email: user.email,
            username: user.username,
            role: user.role,
        }
    }
}