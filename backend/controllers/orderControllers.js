const router = require('express').Router()

const { postOrder } = require('../models/orderModel')
const { authenticateToken } = require('../models/userModel');

router.post('/', authenticateToken, postOrder)

module.exports = router;