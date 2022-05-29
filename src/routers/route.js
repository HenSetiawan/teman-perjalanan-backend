const express = require('express');
const route = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user-controller');
const adminController = require('../controllers/admin-controller');

route.get('/api/v1/users', userController.getAllUsers);
route.delete('/api/v1/user/:id', userController.deleteUserById);
route.post(
  '/api/v1/auth/user/register',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  userController.registerNewUser
);

route.delete('/api/v1/admin/:id', adminController.deleteAdminById);
route.get('/api/v1/admins', adminController.getAllAdmins);
route.post(
  '/api/v1/admin/',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  adminController.addNewAdmin
);

module.exports = { route };
