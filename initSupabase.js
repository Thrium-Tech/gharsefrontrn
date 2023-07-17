import 'react-native-url-polyfill/auto'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient("https://whugwpyhfdkwtrqikymi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndodWd3cHloZmRrd3RycWlreW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0NDU4NjYsImV4cCI6MjAwNTAyMTg2Nn0.Q4m95THpDDH9KLtWsvxVwWIjplxOD0iJrZbjWcQSR_Q", {
  localStorage: AsyncStorage,
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
});
