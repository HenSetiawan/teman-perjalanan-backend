const express = require('express');
const route = express.Router();
const userController = require('../controllers/user-controller');

route.get('/api/v1/users', userController.getAllUsers);
route.post('/api/v1/auth/user/register', userController.registerNewUser);
route.delete('/api/v1/user/:id', userController.deleteUserById);

module.exports = { route };
