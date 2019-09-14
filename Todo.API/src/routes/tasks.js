const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks');

router
  .route('/')
  .get(tasksController.getTasks);

router
  .route('/')
  .post(tasksController.addTask);




module.exports = router;