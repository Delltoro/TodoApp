const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');


// Base route /api/users
router
    .route('/')
    .get(usersController.getUserById)



module.exports = router;