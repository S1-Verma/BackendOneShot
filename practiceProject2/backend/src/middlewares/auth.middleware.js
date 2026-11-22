const jwt = require('jsonwebtoken')

async function authmiddleware(req, res, next) {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "unauthorized user" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
      
        if (decoded.role !== 'artist') {
            return res.status(403).json({ message: "user not allowed for create music" })
        }

        req.user = decoded ;
        next()

    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: "unauthorized access " })
    }
}

module.exports = authmiddleware ;