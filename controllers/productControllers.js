const Comic = require("../models/Comic");

const getAllComics = async (req, res) => {
    try {
        const allComics = await Comic.find()
        
        res.json({allComics})

    } catch (err) {
        res.status(500).json(err);

    }
}

const getComicById = async (req, res) => {
    try {
        const comic = await Comic.findById(req.params.id)

        res.json(comic);
    } catch (err) {
        res.status(500).json(err);

    }
}

const createComic = async (req, res) => {
    try {
        const newComic = await Comic.create(req.body)

        res.json(newComic)
    } catch (err) {
        res.status(500).json(err);

    }
}

module.exports = {
    getAllComics,
    getComicById,
    createComic
}