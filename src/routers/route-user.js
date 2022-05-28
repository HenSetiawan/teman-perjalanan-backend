const express = require('express');
const routeUser = express.Router();

routeUser.get('/api/v1/users', (req, res) => {
  res.json({ message: 'success' });
});

module.exports = routeUser;
