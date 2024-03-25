const router = require('express').Router()

const { postOrder, fetchOrder } = require('../models/orderModel')
const { authenticateToken } = require('../models/userModel');

// Using authenticateToken as a middleware to authenticate user before order management
router.post('/', authenticateToken, postOrder)
router.get('/', authenticateToken, fetchOrder)

module.exports = router;