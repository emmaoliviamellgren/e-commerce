const router = require('express').Router()

// Destructured
const { fetchProducts } = require('../models/productsModel')

router.get('/', fetchProducts)


module.exports = router;