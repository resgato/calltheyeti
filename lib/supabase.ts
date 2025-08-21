import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a Supabase client with service role key for admin operations
export const supabase = createClient(
  supabaseUrl || 'https://atjhretcvnxzrnazanoi.supabase.co',
  supabaseServiceKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0amhyZXRjdm54enJuYXphbm9pIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTgwODQxNSwiZXhwIjoyMDcxMzg0NDE1fQ.GDRf2nAJKQiQ2SvFZzG9KYus7l-ruOPhYy235rQX7lE'
);

// Create a public client for read-only operations
export const supabasePublic = createClient(
  supabaseUrl || 'https://atjhretcvnxzrnazanoi.supabase.co',
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0amhyZXRjdm54enJuYXphbm9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MDg0MTUsImV4cCI6MjA3MTM4NDQxNX0.tdygLS9BiWAQ_ydPkClhmhSYmxNyzj2VofRjdFKCe2A'
);
