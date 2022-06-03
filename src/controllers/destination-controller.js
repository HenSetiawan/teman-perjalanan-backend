const supabaseService = require('../supabase/supabase-service');
const fs = require('fs');
const path = require('path');

exports.getAllDestinations = async (req, res) => {
  try {
    const destination = await supabaseService.getAllData('wisata');
    res.json({ message: 'success', destination });
  } catch (error) {
    res.json({ message: 'error', error });
  }
};

exports.addNewDestination = async (req, res) => {};

exports.deleteDestination = async (req, res) => {
  const idDestination = req.params.id;
  try {
    const result = await supabaseService.deleteDataById('wisata', idDestination);
    if (result.data.length < 1) {
      res.status(404).json({ message: 'error data not found', result });
    } else {
      res.json(result);
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
};
