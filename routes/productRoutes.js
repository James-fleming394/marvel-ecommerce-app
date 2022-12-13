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
router.put('/comics/:id', controllers.updateComic)
router.delete('/comics/:id', controllers.deleteComic)

//Toys

router.get('/toys')
router.get('/toys/:id')
router.post('/toys')
router.put('/toys/:id')
router.delete('/toys/:id')


module.exports = router;