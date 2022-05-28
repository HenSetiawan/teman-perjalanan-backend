const userSupabaseService = require('../supabase/user-supabase-service');

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
      await userSupabaseService.registerUser(user);
      res.json({ message: 'success', user });
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
    const users = await userSupabaseService.getUsers();
    res.json({ message: 'success', users });
  } catch (error) {
    res.json({ message: 'error', error });
  }
};

exports.deleteUserById = async (req, res) => {
  const idUser = req.params.id;
  try {
    const result = await userSupabaseService.deleteUserById(idUser);
    if (result.length < 1) {
      res.json({ message: 'user not found', result });
    } else {
      res.json({ message: result });
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
};
