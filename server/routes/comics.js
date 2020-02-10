const express = require('express')
const router = express.Router()
const comicsController = require('../controllers/comics')

router.get('/', comicsController.showAll)
router.put('/:id', comicsController.update)

module.exports = router