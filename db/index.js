const mongoose = require("mongoose");
require('dotenv').config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Successfully connected to MongoDB Servers"))
    .catch((err) =>console.log(err));

    const db = mongoose.connection

    module.exports = db;