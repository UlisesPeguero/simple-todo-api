const express = require('express');
const router = express.Router();
const controller = require('../controllers/lists');
const todosRouter = require('./todos');

/*
    Route: /lists
*/
router.use((request, response, next) => {
    console.log(request.url);
    next();
});

router.get('/', controller.find);
router.get('/:id', controller.findById);
router.post('/', controller.insert);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
// add router for todos
router.use('/:id/todos', todosRouter);

module.exports = router;