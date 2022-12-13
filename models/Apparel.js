const mongoose = require("mongoose");

const apparelSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        img: { type: String, required: true },
        price: { type: String, required: true },
    },
    { timestamps: true }
)

const Apparel = mongoose.model('apparel', apparelSchema);

module.exports = Apparel;