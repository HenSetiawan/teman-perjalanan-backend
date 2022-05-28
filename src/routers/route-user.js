const express = require('express');
const routeUser = express.Router();
const userSupabaseService = require('../supabase/user-supabase-service');

routeUser.get('/api/v1/users', async (req, res) => {
  const users = await userSupabaseService.getUsers();
  res.json({ message: 'success', users });
});

routeUser.post('/api/v1/auth/user/register', async (req, res) => {
  const user = req.body;
  await userSupabaseService.registerUser(user);
  res.json({ message: 'success', user });
});
module.exports = { routeUser };
