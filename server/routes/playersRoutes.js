var express = require('express')
var router = express.Router()
var playersController = require('../controllers/playersController.js')

router.get('/', playersController.list)
router.post('/', playersController.create)
router.put('/:id', playersController.update)
router.delete('/:id', playersController.remove)

module.exports = router
