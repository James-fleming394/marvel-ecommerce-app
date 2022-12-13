const Cart = require('../models/Cart')

const getCart = async (req, res) => {
    const cart = await Cart.find().populate(['comics', 'toys', 'apparel'])
    res.send(cart)
}

const deleteCart = async (req, res) => {
    const { id } = req.params
    const cart = await Cart.findByIdAndDelete(id)
    res.send(cart)
}

module.exports = {
    getCart,
    deleteCart
}