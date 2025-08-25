-- Create admin users table for authentication
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin user (username: cami, password: siggy)
-- Password will be hashed with bcrypt
INSERT INTO admin_users (username, password_hash, role) VALUES 
  ('cami', '$2a$10$gjcrV26rzHfTdWBypyXA1.t8/dkSAwQriEKz1EmTUIg0KOYGd0h16', 'admin')
ON CONFLICT (username) DO NOTHING;

-- Enable Row Level Security (RLS) for security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (for admin authentication)
CREATE POLICY "Allow all operations on admin_users" ON admin_users
  FOR ALL USING (true) WITH CHECK (true);

-- Create an index on username for faster lookups
CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);
