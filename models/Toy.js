const mongoose = require("mongoose");

const toySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        img: { type: String, required: true },
        price: { type: String, required: true },
    },
    { timestamps: true }
)

const Toy = mongoose.model('toy', toySchema);

module.exports = Toy;