const express = require('express')
const router = express.Router()
const loginRoutes = require('./login')
const comicsRoutes = require('./comics')
const registerRoutes = require('./register')
const auth = require('../middlewares/authentication')

router.use('/login', loginRoutes)
router.use('/register', registerRoutes)

router.use(auth)

router.use('/comics', comicsRoutes)


module.exports = router