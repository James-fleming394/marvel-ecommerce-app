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

// Login

router.post("/login", async (req, res) => {
    try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Username not found");

    const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASSWORD_SECRET
    );
    const OriginalPassword = hashedPassword.toString();

    OriginalPassword !== req.body.password &&
        res.status(401).json("Password incorrect");

    const { password, ...others } = user._test;

    res.status(200).json({...others, accessToken});
    } catch (err) {
    res.status(500).json(err);
    }
});


module.exports = router;