const userSupabaseService = require('../supabase/user-supabase-service');

exports.registerNewUser = async (req, res) => {
  try {
    const user = req.body;
    await userSupabaseService.registerUser(user);
    res.json({ message: 'success', user });
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
