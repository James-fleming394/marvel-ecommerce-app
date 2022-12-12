const router = require("express").Router();

router.get('/user', (req, res) => {
    res.send("User Test is Successful")
})

router.post("/userpost", (req, res) => {
    const username = req.body.username
    res.send("Your username is: " + username)
})

module.exports = router