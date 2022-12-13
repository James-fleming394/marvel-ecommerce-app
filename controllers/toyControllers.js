const Toy = require("../models/Toy");

const getAllToys = async (req, res) => {
    try {
        const allToys = await Toy.find()
        
        res.json({allToys})

    } catch (err) {
        res.status(500).json(err);

    }
}

const getToyById = async (req, res) => {
    try {
        const { id } = req.params;
        const toy = await Toy.findById(id)
    if (toy) {
        return res.status(200).json({ toy })
    }
    return res.status(404).send('No Toy Found!')
    } catch (error) {
    return res.status(500).send(error.message)
    }
}

const createToy = async (req, res) => {
    try {
        const newToy = await Toy.create(req.body)

        res.json(newToy)
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateToy = async (req, res) => {
    try {
        const toy = await Toy.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        return res.status(200).json(toy)

    } catch (err) {
        return res.status(500).json(err)
    }
}

const deleteToy = async (req, res) => {
    try {
        const { id } = req.params
        const deletedToy = await Toy.findByIdAndDelete(id)
        if (deletedToy) {
            return res.status(200).send('Toy deleted')
        }
        throw new Error('Toy not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = {
    getAllToys,
    getToyById,
    createToy,
    updateToy,
    deleteToy
}