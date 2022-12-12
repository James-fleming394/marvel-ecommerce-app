const { Router } = require("express");
const router = Router();

// Home

router.get('/', (req, res) => {
    res.send('Root Route');
})

// Products

router.get('/products')
router.post('/products')
router.get('/products/:id')

// Cart 

router.get('/cart')
router.put('/cart/:id')
router.delete('/cart')



modeule.exports = Router;