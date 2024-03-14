const router = require('express').Router()

const { logInUser, registerUser } = require('../models/userModel')

router.post('/', registerUser)
router.post('/login', logInUser)

module.exports = router;