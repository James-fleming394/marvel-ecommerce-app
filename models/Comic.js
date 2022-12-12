const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        img: { type: String, required: true },
        price: { type: String, required: true },
    },
    { timestamps: true }
)

const Comic = mongoose.model('comic', comicSchema);

module.exports = Comic;