const router = require("express").Router();
const User = require("../models/user");
const Cryptojs = require("crypto-js")

//Register 

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Cryptojs.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
    
});



module.exports = router;