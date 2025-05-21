import jwt from "jsonwebtoken";

const secret = process.env.SECRET || 'BASICSECRET';

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) return next();

    try {
        const decodedToken = jwt.verify(token, secret)

        req.user = decodedToken;

        next();
    } catch (error) {
        //TODO:
    }
}