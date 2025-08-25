const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://atjhretcvnxzrnazanoi.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0amhyZXRjdm54enJuYXphbm9pIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTgwODQxNSwiZXhwIjoyMDcxMzg0NDE1fQ.GDRf2nAJKQiQ2SvFZzG9KYus7l-ruOPhYy235rQX7lE';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function runMigrations() {
  try {
    console.log('Running migrations...');

    // Migration 1: Create content table
    console.log('Creating content table...');
    const { error: contentError } = await supabase.rpc('exec_sql', {
      sql: `
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

        -- Insert default content if the table is empty
        INSERT INTO content (type, data) 
        SELECT * FROM (VALUES 
          ('homepage', '{"hero":{"title":"Arizona'\''s Best Plumber — Fast. Friendly. Fair.","subtitle":"Custom homes, renovations, and service plumbing done right.","description":"Custom homes, renovations, and service plumbing done right. Bathtubs, showers, faucets, kitchens, and more — same-day service across the Valley.","features":["Licensed & Insured","Upfront, Honest Pricing","1000+ Local Homes Served"]},"services":{"title":"Plumbing Services","subtitle":"Expert technicians for any job — big or small.","items":[{"title":"Custom Homes","description":"Plumbing rough-ins & finish","href":"/services"},{"title":"Renovations","description":"Kitchen & bath remodel plumbing","href":"/services"},{"title":"Service & Repairs","description":"Leaks, clogs, replacements","href":"/services"},{"title":"Bathtubs & Showers","description":"Install & upgrades","href":"/services"},{"title":"Faucets & Fixtures","description":"Repair or replace","href":"/services"},{"title":"Water Heaters","description":"Repair & install","href":"/services"}]},"features":[{"title":"Customer Education","description":"Clear options and pricing"},{"title":"No Mess","description":"Clean protective jobsite"},{"title":"Experienced Team","description":"Licensed • Insured"}],"gallery":{"title":"Our Work Speaks for Itself","subtitle":"See the transformation from before to after","projects":[{"title":"Kitchen Remodel","beforeImage":"/kitchenbefore.jpg","afterImage":"/kitchen.jpg"},{"title":"Bathroom Upgrade","beforeImage":"/bathtubbefore.jpg","afterImage":"/bathtub.jpg"}],"familyImage":"/familyfirst.jpg","familyTitle":"Family-First Approach","familyDescription":"We treat every home like it'\''s our own"},"cta":{"title":"Need a plumber now?","description":"We'\''ll dispatch a pro to your door. Most issues resolved same day.","features":["Valley-wide coverage","Great reviews","Respect for your home"]},"serviceArea":{"title":"Proudly Serving Arizona","areas":["Phoenix","Mesa","Scottsdale","Gilbert","Chandler","Queen Creek"]}}'::jsonb),
          ('contact', '{"phone":"(801) 707-2547","phoneHref":"tel:+18017072547","email":"cayden@calltheyeti.com","address":{"streetAddress":"","addressLocality":"Phoenix","addressRegion":"AZ","postalCode":"","addressCountry":"US"},"serviceArea":["Phoenix","Mesa","Scottsdale","Gilbert","Chandler","Queen Creek"]}'::jsonb),
          ('services', '{"title":"Plumbing Services","subtitle":"Expert technicians for any job — big or small.","services":[{"title":"Custom Homes","description":"Complete plumbing systems for new custom homes","features":["Rough-in plumbing","Finish plumbing","Fixture installation","Code compliance"]},{"title":"Renovations","description":"Kitchen and bathroom renovation plumbing services","features":["Kitchen plumbing","Bathroom plumbing","Fixture upgrades","Modern installations"]},{"title":"Service & Repairs","description":"Emergency and routine plumbing repairs","features":["Leak repairs","Clog removal","Fixture repairs","Emergency service"]},{"title":"Bathtubs & Showers","description":"Professional bathtub and shower installation","features":["Tub installation","Shower installation","Upgrades","Accessibility features"]},{"title":"Faucets & Fixtures","description":"Repair and replacement of faucets and fixtures","features":["Faucet repair","Fixture replacement","Modern upgrades","Water efficiency"]},{"title":"Water Heaters","description":"Water heater repair and installation services","features":["Tank water heaters","Tankless water heaters","Repairs","Energy efficiency"]}]}'::jsonb)
        ) AS v(type, data)
        WHERE NOT EXISTS (SELECT 1 FROM content WHERE type = v.type);

        -- Enable Row Level Security (RLS) for security
        ALTER TABLE content ENABLE ROW LEVEL SECURITY;

        -- Create a policy that allows all operations (for now - you can make this more restrictive later)
        CREATE POLICY "Allow all operations on content" ON content
          FOR ALL USING (true) WITH CHECK (true);
      `
    });

    if (contentError) {
      console.log('Content table migration error (might already exist):', contentError.message);
    } else {
      console.log('Content table created successfully');
    }

    // Migration 2: Create admin users table
    console.log('Creating admin users table...');
    const { error: adminError } = await supabase.rpc('exec_sql', {
      sql: `
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
      `
    });

    if (adminError) {
      console.log('Admin users table migration error (might already exist):', adminError.message);
    } else {
      console.log('Admin users table created successfully');
    }

    console.log('Migrations completed!');
  } catch (error) {
    console.error('Migration error:', error);
  }
}

runMigrations();
