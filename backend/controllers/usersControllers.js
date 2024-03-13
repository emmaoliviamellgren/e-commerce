const router = require('express').Router()

// Destructured
const { fetchUser, registerUser } = require('../models/usersModel')

router.post('/', registerUser)
router.get('/', fetchUser)

module.exports = router;