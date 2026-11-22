const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    image: {
        type: String ,
    },
    caption: {
        type: String,
    }
})

const cardmodel = mongoose.model('card', cardSchema)

module.exports = cardmodel ; 