-- Create the content table for the CMS
CREATE TABLE IF NOT EXISTS content (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50) NOT NULL UNIQUE,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on the type column for faster lookups
CREATE INDEX IF NOT EXISTS idx_content_type ON content(type);

-- Create admin users table for authentication
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on username for faster lookups
CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);

-- Enable Row Level Security (RLS) for security
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies that allow all operations (for now - you can make this more restrictive later)
CREATE POLICY "Allow all operations on content" ON content
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Allow all operations on admin_users" ON admin_users
  FOR ALL USING (true) WITH CHECK (true);



