const supabaseService = require('../supabase/supabase-service');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const saltRounds = 10;

exports.addNewAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const admin = req.body;
    bcrypt.hash(admin.password, saltRounds, async (err, hash) => {
      admin.password = hash;
      const result = await supabaseService.insertData('admins', admin);
      return res.status(200).json(result);
    });
  } catch (error) {
    res.json({ message: 'error', error });
  }
};

exports.deleteAdminById = async (req, res) => {
  const idAdmin = req.params.id;
  try {
    const result = await supabaseService.deleteDataById('admins', idAdmin);
    if (result.data.length < 1) {
      res.status(404).json({ message: 'error data not found', result });
    } else {
      res.json(result);
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await supabaseService.getAllData('admins');
    res.json({ message: 'success', admins });
  } catch (error) {
    res.json({ message: 'error', error });
  }
};

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  const adminJwtKey = process.env.ADMIN_JWT_KEY;

  try {
    const admin = await supabaseService.getSpecificData(
      'admins',
      'username',
      username
    );
    if (admin.length < 1) {
      return res
        .status(404)
        .json({ message: `username ${username} not found` });
    }

    adminPassword = admin[0].password;
    bcrypt.compare(password, adminPassword, (err, result) => {
      if (result) {
        jwt.sign(
          { id: admin[0].id, role: 'admin' },
          adminJwtKey,
          (err, token) => {
            return res.json({
              message: 'login succes',
              token: token,
            });
          }
        );
      } else {
        return res.json({ message: 'username or password is wrong' });
      }
    });
  } catch (error) {
    res.json({ message: 'error', error });
  }
};

exports.getCurrentAdmin = async (req, res) => {
  const { id } = req.adminData;
  try {
    const admin = await supabaseService.getSpecificData('admins', 'id', id);
    return res.status(200).json({
      message: 'success',
      admin: { name: admin[0].name, email: admin[0].email },
    });
  } catch (error) {
    res.status(400).json({ message: 'error', error });
  }
};

exports.updateAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, username, email } = req.body;
  const id = req.params.id;
  try {
    const admin = await supabaseService.updateSpecificData('admins', id, {
      name,
      username,
      email,
    });

    return res.status(200).json({
      message: 'success',
      admin: { name: admin[0].name, email: admin[0].email, id: admin[0].id },
    });
  } catch (error) {
    res.status(400).json({ message: 'error', error });
  }
};
