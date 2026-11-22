const imageKit = require('@imagekit/nodejs')
const dotenv = require('dotenv').config()

const imagekit = new imageKit({
    privateKey : process.env.IMAGEKT_PRIVATE_KEY
})

async function uploadFile (buffer) {
    return await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: 'image.jpg'
    }) 
}


module.exports = uploadFile