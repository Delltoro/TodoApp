const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks');

// Base route /api/tasks
router
    .route('/')
    .get(tasksController.getTaskById)



module.exports = router;