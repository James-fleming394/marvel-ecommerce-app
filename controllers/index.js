const db = require("../db");
const { Product, Cart } = require('../models');

//Products 

const getAllProducts = async (req, res) => {
    const product = await Product.find()
    res.send(product);
}

const getProductById = async (req, res) => {
    const {id} = req.params
    const product = await Product.findById(id)
    res.send(product)
}

const createProduct = async (req,res) => {
    const product = await new Product(req.body)
    await product.save()
    res.send(product)
    console.log("New Product Created!")
}

const getCart = async (req, res) => {
    const cart = await Cart.find().populate(['products'])
    res.send(cart)
}

const deleteCart = async (req, res) => {
    const { id } = req.params
    const cart = await Cart.findByIdAndDelete(id)
    res.send(cart)
}




module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    getCart,
    deleteCart
}