const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

// Home 
router.get('/', (req, res) => {
    res.send("welcome Home")
;})

// Comic Products

router.get('/products-comics', controllers.getAllComics)
router.post('/products-comics', controllers.createComic)
router.get('/products-comics/:id', controllers.getComicById)
router.delete('/products-comic/:id', controllers.deleteComic)


module.exports = router;