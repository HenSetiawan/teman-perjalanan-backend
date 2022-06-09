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

exports.uploadFile = async (bucket, file, fileName) => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
      });
  } catch (error) {
    console.error(error);
    return error;
  }
};

exports.getImagePublicUrl = async (bucket, fileName) => {
  try {
    const { publicURL } = supabase.storage.from(bucket).getPublicUrl(fileName);
    return publicURL;
  } catch (error) {
    console.error(error);
    return error;
  }
};

exports.deleteImage = async (bucket, fileName) => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .remove([fileName]);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
