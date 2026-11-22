const express = require('express')
const authRoutes = require('./routes/auth.routes')
const postRoute = require('./routes/post.routes')
const ConnectDB = require('./db/db')
const cookieParser = require('cookie-parser')
const app = express()
;

ConnectDB()
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth/', authRoutes)
app.use('/api/post/', postRoute )

module.exports = app ; 