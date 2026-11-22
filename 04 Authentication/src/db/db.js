const mongoose = require('mongoose')

async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database Connected');
    } catch (error) {
        console.log( 'an error Accured',error);
        
    }
}

module.exports = ConnectDB