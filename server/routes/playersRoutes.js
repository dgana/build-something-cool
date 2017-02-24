var express = require('express');
var router = express.Router();
var playersController = require('../controllers/playersController.js');

/*
 * GET
 */
router.get('/', playersController.list);

/*
 * GET
 */
router.get('/:id', playersController.show);

/*
 * POST
 */
router.post('/', playersController.create);

/*
 * PUT
 */
router.put('/:id', playersController.update);

/*
 * DELETE
 */
router.delete('/:id', playersController.remove);

module.exports = router;
