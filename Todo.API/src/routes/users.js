const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const auth = require('../middleware/auth.js');

// Base route /api/users
router
    .route('/')
    .get(usersController.getUsers)
    .post(usersController.addUser);

router
    .use(auth)
    .route('/me')
    .get(usersController.getCurrentUser);

router
    .route('/:id')
    .get(usersController.getUserById)
    .put(usersController.updateUser)
    .delete(usersController.removeUser);

module.exports = router;