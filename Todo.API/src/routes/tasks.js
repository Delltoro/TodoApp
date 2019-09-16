const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks');
const auth = require('../middleware/auth.js');

// router
router
    .use(auth)

router
    .route('/')
    .get(tasksController.getTasks);

router
    .route('/:id')
    .get(tasksController.getTaskById);

router
    .route('/')
    .post(tasksController.addTask);

router
    .route('/:id')
    .put(tasksController.updateTask);

router
    .route('/:id')
    .delete(tasksController.removeTask);

module.exports = router;