const db = require('../db');

//Products Controllers

const getAllComics = async (req, res) => {
    const comic = await Comic.find()
    res.send(comic)
}

const getComicById = async (req, res) => {
    const { id } = req.params;
    const comic = await Comic.findById(id)
    res.send(comic)
}

const createComic = async (req, res) => {
    const comic = await newComic(req.body);
    await comic.save();
    res.send(comic)
}

const deleteComic = async (req, res) => {
    const { id } = req.params;
    const comic = await Comic.findByIdAndDelete(id)
    res.send(comic)
}

module.exports = {
    getAllComics,
    getComicById,
    createComic,
    deleteComic
}