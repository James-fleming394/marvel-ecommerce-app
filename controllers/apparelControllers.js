const Apparel = require("../models/Apparel");

const getAllApparel = async (req, res) => {
    try {
        const allApparel = await Apparel.find()
        
        res.json({allApparel})

    } catch (err) {
        res.status(500).json(err);

    }
}

const getApparelById = async (req, res) => {
    try {
        const { id } = req.params;
        const apparel = await Apparel.findById(id)
    if (comic) {
        return res.status(200).json({ apparel })
    }
    return res.status(404).send('No Apparel Found!')
    } catch (error) {
    return res.status(500).send(error.message)
    }
}

const createApparel = async (req, res) => {
    try {
        const newApparel = await Apparel.create(req.body)

        res.json(newApparel)
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateApparel = async (req, res) => {
    try {
        const apparel = await Apparel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        return res.status(200).json(apparel)

    } catch (err) {
        return res.status(500).json(err)
    }
}

const deleteApparel = async (req, res) => {
    try {
        const { id } = req.params
        const deletedApparel = await Apparel.findByIdAndDelete(id)
        if (deletedApparel) {
            return res.status(200).send('Apparel deleted')
        }
        throw new Error('Apparel not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = {
    getAllApparel,
    getApparelById,
    createApparel,
    updateApparel,
    deleteApparel
}