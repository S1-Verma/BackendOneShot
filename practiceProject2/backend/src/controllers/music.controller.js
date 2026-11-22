const musicModel = require('../models/music.model')
const albumModel = require("../models/album.model")
const uploadFile = require('../services/storage.service')

async function uploadMusic(req, res) {

    const title = req.body.title;

    // creating buffer of uploaed file 
    const file = await req.file.buffer.toString('base64')


    // uploading buffer to imagekit and storing response in result 
    const result = await uploadFile(file)

    const music = await musicModel.create({
        uri: result.url,
        title: title,
        artist: req.user.id
    })

    res.status(201).json({
        message: "music uploaded successfully",
        music: {
            id: music.id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })

}




// createAlbum api 

async function createAlbum(req, res) {

    const { title, musics } = req.body;

    const album = await albumModel.create({
        title: title,
        musics: musics,
        artist: req.user.id
    })

    console.log(album)

    res.status(201).json({
        message: 'album created successfully',
        album: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics
        }
    })
}

module.exports = { uploadMusic, createAlbum }