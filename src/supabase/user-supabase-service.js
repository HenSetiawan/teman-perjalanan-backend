import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

console.log(process.env)

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const getUsers = async () => {
  try {
    const { data, error } = await supabase.from('users').select();
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

export { getUsers };
