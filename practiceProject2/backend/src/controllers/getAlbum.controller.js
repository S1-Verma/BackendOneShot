const albumModel = require("../models/album.model");


async function getAlbum (req, res) {

    const albumId = req.params.id
    const Albums = await albumModel.find({_id : albumId}).populate();

    res.status(200).json({
        message: "album fetched successfully",
        album: Albums
    })
    
}

module.exports = getAlbum ;