const router = require('express').Router()

const { postOrder, fetchOrder } = require('../models/orderModel')
const { authenticateToken } = require('../models/userModel');

router.post('/', authenticateToken, postOrder)
router.get('/:id', fetchOrder)

module.exports = router;