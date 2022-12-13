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
        const { id } = req.params;
        const comic = await Comic.findById(id)
    if (comic) {
        return res.status(200).json({ comic })
    }
    return res.status(404).send('No Comic Found!')
    } catch (error) {
    return res.status(500).send(error.message)
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

const updateComic = async (req, res) => {
    try {
        const comic = await Comic.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        return res.status(200).json(comic)

    } catch (err) {
        return res.status(500).json(err)
    }
}

const deleteComic = async (req, res) => {
    try {
        const { id } = req.params
        const deletedComic = await Comic.findByIdAndDelete(id)
        if (deletedComic) {
            return res.status(200).send('Comic deleted')
        }
        throw new Error('Comic not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = {
    getAllComics,
    getComicById,
    createComic,
    updateComic,
    deleteComic
}