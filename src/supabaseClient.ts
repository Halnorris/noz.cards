import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://guvgkybhekrwnknobvrj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1dmdreWJoZWtyd25rbm9idnJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzODM2NDIsImV4cCI6MjA2NDk1OTY0Mn0.v_YdAk2A7uEoIm0HQBjqFSpwbU7wrzygsXPO7Ohv6Jg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
