const jwt = require('jsonwebtoken');
async function musicMiddleware(req, res, next) {
    
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'unthorized user access' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded.role == 'user' || !decoded.role == "artist") {
            return res.status(401).json({ message: 'unauthorized user' })
        }

        next ()
    }
    catch (err) {
        res.status(401).json({ message: 'unauthorized user' })
    }

}

module.exports = musicMiddleware; 