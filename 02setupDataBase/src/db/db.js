const mongoos = require("mongoose");

async function connectDB() {
    await mongoos.connect(process.env.MONGO_URI)
    console.log('Connected to DB');    
}

module.exports  = connectDB