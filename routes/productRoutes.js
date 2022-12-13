const express = require("express");
const router = express.Router();
const controllers = require('../controllers/productControllers')

router.get('/', (req, res) => {
    res.send('Root page route functional')
})

//Comics 

router.get('/comics', controllers.getAllComics )
router.get('/comics/:id', controllers.getComicById)
router.post('/comics', controllers.createComic)
router.delete('/comics/:id', controllers.deleteComic)



module.exports = router;