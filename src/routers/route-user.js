const express = require('express');
const routeUser = express.Router();
const userSupabaseService = require('../supabase/user-supabase-service');

routeUser.get('/api/v1/users', async (req, res) => {
  const users = await userSupabaseService.getUsers();
  res.json({ message: 'success', users });
});

module.exports = { routeUser };
