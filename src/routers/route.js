const express = require('express');
const route = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user-controller');
const adminController = require('../controllers/admin-controller');
const destinationController = require('../controllers/destination-controller');
const adminAuth = require('../middlewares/admin-auth');

// user route
route.get('/api/v1/users', adminAuth.isAdmin, userController.getAllUsers);
route.delete(
  '/api/v1/user/:id',
  adminAuth.isAdmin,
  userController.deleteUserById
);
route.post(
  '/api/v1/auth/user/register',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  adminAuth.isAdmin,
  userController.registerNewUser
);

// admin routes
route.post('/api/v1/auth/admin/login', adminController.loginAdmin);
route.delete(
  '/api/v1/admin/:id',
  adminAuth.isAdmin,
  adminController.deleteAdminById
);
route.get('/api/v1/admins', adminAuth.isAdmin, adminController.getAllAdmins);
route.post(
  '/api/v1/admin/',
  body('email').isEmail(),
  body('name').isLength({ min: 1 }),
  body('password').isLength({ min: 5 }),
  body('username').isLength({ min: 1 }),
  adminAuth.isAdmin,
  adminController.addNewAdmin
);
route.get('/api/v1/admin', adminAuth.isAdmin, adminController.getCurrentAdmin);
route.put(
  '/api/v1/admin/:id',
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('username').isLength({ min: 5 }),
  adminAuth.isAdmin,
  adminController.updateAdmin
);

// destination
route.get('/api/v1/destinations', destinationController.getAllDestinations);
route.post(
  '/api/v1/destinations',
  destinationController.addNewDestination
);

module.exports = { route };
