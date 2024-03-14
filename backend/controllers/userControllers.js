const router = require('express').Router()

// Destructured
const { fetchUser, registerUser } = require('../models/userModel')

router.post('/', registerUser)
router.get('/', fetchUser)

module.exports = router;