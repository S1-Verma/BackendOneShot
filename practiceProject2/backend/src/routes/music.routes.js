const getmusics = require('../controllers/getmusics.controller')
const musicControllers = require('../controllers/music.controller')
const authmiddleware = require('../middlewares/auth.middleware')
const express = require('express')
const multer = require('multer')
const musicMiddleware = require('../middlewares/music.middleware')
const getAlbum = require('../controllers/getAlbum.controller')

const upload = multer({
    storage: multer.memoryStorage()
})

const router = express.Router()

router.post('/upload', authmiddleware, upload.single('music'),  musicControllers.uploadMusic)
router.post('/createAlbum', authmiddleware, musicControllers.createAlbum)
router.get('/', musicMiddleware, getmusics) 
router.get('/albums/:id', musicMiddleware, getAlbum)


module.exports = router ;  