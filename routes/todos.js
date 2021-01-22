const express = require('express');
const router = express.Router({mergeParams: true});
const controller = require('../controllers/todos');

/*
    Route: /lists/:id/todos
*/
router.get('/', controller.find);
router.get('/:id', controller.findById);
router.post('/', controller.insert);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;