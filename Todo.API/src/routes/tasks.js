const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks');

router
    .route('/')
    .get(tasksController.getTasks)
    .post(tasksController.addTask);

router
    .route('/:id')
    .get(tasksController.getTaskById)
    .put(tasksController.updateTask)
    .delete(tasksController.removeTask);

module.exports = router;