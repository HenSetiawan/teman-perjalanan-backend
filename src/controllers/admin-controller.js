const supabaseService = require('../supabase/supabase-service');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.addNewAdmin = async (req, res) => {
  try {
    const admin = req.body;
    if (
      user.hasOwnProperty('name') &&
      user.hasOwnProperty('username') &&
      user.hasOwnProperty('email') &&
      user.hasOwnProperty('password')
    ) {
      bcrypt.hash(admin.password, saltRounds, async (err, hash) => {
        admin.password = hash;
        const result = await supabaseService.insertData('users', admin);
        res.json(result);
      });
    } else {
      res.json({ message: `admin data not complete` });
      return;
    }
  } catch (error) {
    res.json(error);
  }
};
