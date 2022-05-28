const express = require('express');
const routeUser = express.Router();
const userController = require('../controllers/user-controller');

routeUser.get('/api/v1/users', userController.getAllUsers);
routeUser.post('/api/v1/auth/user/register', userController.registerNewUser);

module.exports = { routeUser };
