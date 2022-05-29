const supabaseService = require('../supabase/supabase-service');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.addNewAdmin = async (req, res) => {
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
    res.json({message: 'error', error});
  }
};
