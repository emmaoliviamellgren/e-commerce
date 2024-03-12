const router = require('express').Router()

// Destructured
const { fetchUsers, registerUser } = require('../models/usersModel')

router.get('/', fetchUsers)
router.post('/', registerUser)


module.exports = router;