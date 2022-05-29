const supabaseService = require('../supabase/supabase-service');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.registerNewUser = async (req, res) => {
  try {
    const user = req.body;
    if (
      user.hasOwnProperty('name') &&
      user.hasOwnProperty('username') &&
      user.hasOwnProperty('email') &&
      user.hasOwnProperty('password') &&
      user.hasOwnProperty('address')
    ) {
      bcrypt.hash(user.password, saltRounds, async (err, hash) => {
        user.password = hash;
        const result = await supabaseService.insertData('users', user);
        res.json(result);
      });
    } else {
      res.json({ message: `user data not complete` });
      return;
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await supabaseService.getAllData('users');
    res.json({ message: 'success', users });
  } catch (error) {
    res.json({ message: 'error', error });
  }
};

exports.deleteUserById = async (req, res) => {
  const idUser = req.params.id;
  try {
    const result = await supabaseService.deleteDataById('users', idUser);
    if (result.data.length < 1) {
      res.json({ message: 'error', result });
    } else {
      res.json(result);
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
};
