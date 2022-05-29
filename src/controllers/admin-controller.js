const supabaseService = require('../supabase/supabase-service');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const saltRounds = 10;

exports.addNewAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const admin = req.body;
    if (
      admin.hasOwnProperty('name') &&
      admin.hasOwnProperty('username') &&
      admin.hasOwnProperty('email') &&
      admin.hasOwnProperty('password')
    ) {
      bcrypt.hash(admin.password, saltRounds, async (err, hash) => {
        admin.password = hash;
        const result = await supabaseService.insertData('admins', admin);
        res.json(result);
      });
    } else {
      res.json({ message: `admin data not complete` });
      return;
    }
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
