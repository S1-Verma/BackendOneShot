const mongoose = require('mongoose') ;

async function connectDB () {
   await mongoose.connect(process.env.MONGODB_POSTS_URI)
   console.log('DataBase Connected')
}

module.exports = connectDB ; 