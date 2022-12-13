const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        comic: [{type: Schema.Types.ObjectId, ref: 'Comic'}],
        toy: [{type: Schema.Types.ObjectId, ref: 'Toy'}],
        apparel: [{type: Schema.Types.ObjectId, ref: 'Apparel'}]
    },
    { timestamps: true }
)

module.exports = mongoose.model("Cart", CartSchema);