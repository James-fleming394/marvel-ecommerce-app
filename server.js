const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
