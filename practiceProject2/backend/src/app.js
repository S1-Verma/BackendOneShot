const express = require('express');
const connectDB = require('./DB/db');
const authRoutes = require('./routes/auth.routes')
const musicRoutes = require('./routes/music.routes')
const cookieParcer = require('cookie-parser')

const app = express()
connectDB()


app.use(express.json())
app.use(cookieParcer())
app.use('/api/auth/', authRoutes)
app.use('/api/music/', musicRoutes)

module.exports = app;