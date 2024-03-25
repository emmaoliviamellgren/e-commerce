const router = require('express').Router()

const { fetchAllProducts, fetchProduct, postProduct, updateProduct, deleteProduct } = require('../models/productModel')

router.get('/', fetchAllProducts)
router.get('/:id', fetchProduct)
router.post('/', postProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;