const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.post('/', userController.register)
router.post('/random', userController.randomUser)

module.exports = router