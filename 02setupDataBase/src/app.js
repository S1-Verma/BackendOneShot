const express = require('express')
const noteModel = require('./models/notes.models')
const connectDB = require('./db/db')



connectDB()
const app = express()

app.use(express.json())

app.post('/notes', async (req, res) => {
    const data = req.body

    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message:'note created successfully'
    })
})


app.get('/notes', async (req, res) => {
     const notes =  await noteModel.find()
     res.status(200).json({
        message: 'notes fetched Successfully',
        notes : notes 
     })
})

app.delete('/notes/:id', async (req, res)=>{
    const id = req.params.id 
    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: 'notes deleted Successfully ',
    })
})

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id ; 
    const { title, description } = req.body ; 

    await noteModel.findOneAndUpdate({
        _id: id 
    }, {
        title: title,
        description: description 
    })

    res.status(200).json({
        message : 'note upadated successfully'
    })
})

module.exports = app; 