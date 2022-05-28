import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://ogxbpcyxlipxnuyrlbml.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neGJwY3l4bGlweG51eXJsYm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0NzA5MjksImV4cCI6MTk2OTA0NjkyOX0.7G5Puqad65WvjHvlpG2YxTR_t4X2ADFLLhejNMsePgs'
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
