const express = require("express");
const router = express.Router();
const controllers = require('../controllers/productControllers')

//Comics 

router.get('/comics', controllers.getAllComics )
router.get('/comics/:id', controllers.getComicById)
router.post('/comics', controllers.createComic)



module.exports = router;