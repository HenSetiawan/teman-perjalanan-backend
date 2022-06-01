const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

exports.getAllData = async (table) => {
  try {
    const { data, error } = await supabase.from(table).select();
    if (error) {
      console.error(error);
      return error;
    }
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

exports.insertData = async (table, newData) => {
  try {
    const { data, error } = await supabase.from(table).insert([newData]);
    if (error) {
      console.error(error);
    }
    return { data: data, error: error };
  } catch (error) {
    console.error(error);
    return error;
  }
};

exports.deleteDataById = async (table, id) => {
  try {
    const { data, error } = await supabase
      .from(table)
      .delete()
      .match({ id: id });
    if (error) {
      console.error(error);
    }
    return { data: data, error: error };
  } catch (error) {
    console.error(error);
    return error;
  }
};

exports.getSpecificData = async (table, column, value) => {
  try {
    const { data, error } = await supabase
      .from(table)
      .select()
      .eq(column, value);
    if (error) {
      console.error(error);
      return error;
    }
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

exports.updateSpecificData = async (table, id, Newdata) => {
  try {
    const { data, error } = await supabase
      .from(table)
      .update(Newdata)
      .match({ id: id });
    if (error) {
      console.error(error);
      return error;
    }
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
