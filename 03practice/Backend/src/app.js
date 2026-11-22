const express = require('express')
const connectDB = require('./db/db')
const cardmodel = require('./models/card.model')
const multer = require('multer')
const uploadFile = require('./services/storage.services')
const cors = require('cors')

connectDB()
const app = express()
app.use(cors())

app.use(express.json())
const upload = multer({ storage: multer.memoryStorage() })


app.post('/create-post', upload.single('image'), async (req, res) => {
    //  frontend se file aayegi body me 
    //  uske bad use multer ka use karke buffer me convert karenge 
    // and fir use image kit par uplaod karenge upload hone ke bad jo imagekit response dega jisme image ka url hoga

    if (!req.file) return res.status(400).json({ message: 'Image file is required' })

    const response = await uploadFile(req.file.buffer)
    const caption = req.body.caption;

    console.log(response)
    
    await cardmodel.create({
        image: response.url,
        caption: caption
    })

    res.status(200).json({
        message: 'post created'
    })
})


app.get('/posts', async (req, res) => {
    const posts = await cardmodel.find()

    res.status(201).json({
        message: 'posts fetched Successfully',
        posts: posts
    })
})


app.delete('/posts/:id', async (req, res) => {
    const id = req.params.id
    await cardmodel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: 'post deleted'
    })
})



module.exports = app 
