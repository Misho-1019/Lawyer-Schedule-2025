import jwt from "jsonwebtoken";

const secret = process.env.SECRET || 'BASICSECRET';

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) return next();

    try {
        const decodedToken = jwt.verify(token, secret)

        req.user = decodedToken;
        res.locals.user = decodedToken;

        next();
    } catch (error) {
        res.clearCookie('auth')
        return res.status(401).json({ message: 'Invalid token' })
    }
}

export const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized'})
    }

    next()
}

export const isGuest = (req, res, next) => {
    if (req.user) {
        return res.status(403).json({ message: 'You are already logged in!' })
    }

    next();
}

export const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied! Admins only!' })
    }

    next();
}