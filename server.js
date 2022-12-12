const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jamesfleming394:jamesfleming394@cluster0.bwkdphq.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Successfully connected to MongoDB Servers")).catch((err) =>console.log(err));

app.listen(5001, () => {
    console.log("Connected to server");
});

