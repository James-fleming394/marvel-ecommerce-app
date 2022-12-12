const express = require("express");
const PORT = process.env.PORT || 5001;
const db = require('./db');
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`)
})

