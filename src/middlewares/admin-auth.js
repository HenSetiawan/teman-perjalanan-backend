const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.isAdmin = (req, res, next) => {
  const key = process.env.ADMIN_JWT_KEY;
  const token = req.headers['authorization'];
  jwt.verify(token, key, (err, adminData) => {
    if (err) {
      return res.json({
        message: 'auth error',
        error: err,
      });
    } else {
      req.adminData = adminData;
      next();
    }
  });
};
