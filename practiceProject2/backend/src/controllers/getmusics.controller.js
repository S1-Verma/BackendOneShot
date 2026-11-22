
const musicModel = require('../models/music.model');

async function getmusics (req, res) {
        const musics = await musicModel.find().skip().limit(3)
        res.status(200).json({
            message : 'songs fetched successfully',
            musics : musics
        })
    }
 


module.exports = getmusics ; 