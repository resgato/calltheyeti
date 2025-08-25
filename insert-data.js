const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function insertData() {
  try {
    console.log('Starting data insertion...');

    // Insert default content
    console.log('Inserting default content...');
    const { error: contentError } = await supabase
      .from('content')
      .upsert([
        {
          type: 'homepage',
          data: {
            hero: {
              title: "Arizona's Best Plumber — Fast. Friendly. Fair.",
              subtitle: "Custom homes, renovations, and service plumbing done right.",
              description: "Custom homes, renovations, and service plumbing done right. Bathtubs, showers, faucets, kitchens, and more — same-day service across the Valley.",
              features: ["Licensed & Insured", "Upfront, Honest Pricing", "1000+ Local Homes Served"]
            },
            services: {
              title: "Plumbing Services",
              subtitle: "Expert technicians for any job — big or small.",
              items: [
                { title: "Custom Homes", description: "Plumbing rough-ins & finish", href: "/services" },
                { title: "Renovations", description: "Kitchen & bath remodel plumbing", href: "/services" },
                { title: "Service & Repairs", description: "Leaks, clogs, replacements", href: "/services" },
                { title: "Bathtubs & Showers", description: "Install & upgrades", href: "/services" },
                { title: "Faucets & Fixtures", description: "Repair or replace", href: "/services" },
                { title: "Water Heaters", description: "Repair & install", href: "/services" }
              ]
            },
            features: [
              { title: "Customer Education", description: "Clear options and pricing" },
              { title: "No Mess", description: "Clean protective jobsite" },
              { title: "Experienced Team", description: "Licensed • Insured" }
            ],
            gallery: {
              title: "Our Work Speaks for Itself",
              subtitle: "See the transformation from before to after",
              projects: [
                { title: "Kitchen Remodel", beforeImage: "/kitchenbefore.jpg", afterImage: "/kitchen.jpg" },
                { title: "Bathroom Upgrade", beforeImage: "/bathtubbefore.jpg", afterImage: "/bathtub.jpg" }
              ],
              familyImage: "/familyfirst.jpg",
              familyTitle: "Family-First Approach",
              familyDescription: "We treat every home like it's our own"
            },
            cta: {
              title: "Need a plumber now?",
              description: "We'll dispatch a pro to your door. Most issues resolved same day.",
              features: ["Valley-wide coverage", "Great reviews", "Respect for your home"]
            },
            serviceArea: {
              title: "Proudly Serving Arizona",
              areas: ["Phoenix", "Mesa", "Scottsdale", "Gilbert", "Chandler", "Queen Creek"]
            }
          }
        },
        {
          type: 'contact',
          data: {
            phone: "(801) 707-2547",
            phoneHref: "tel:+18017072547",
            email: "cayden@calltheyeti.com",
            address: {
              streetAddress: "",
              addressLocality: "Phoenix",
              addressRegion: "AZ",
              postalCode: "",
              addressCountry: "US"
            },
            serviceArea: ["Phoenix", "Mesa", "Scottsdale", "Gilbert", "Chandler", "Queen Creek"]
          }
        },
        {
          type: 'services',
          data: {
            title: "Plumbing Services",
            subtitle: "Expert technicians for any job — big or small.",
            services: [
              {
                title: "Custom Homes",
                description: "Complete plumbing systems for new custom homes",
                features: ["Rough-in plumbing", "Finish plumbing", "Fixture installation", "Code compliance"]
              },
              {
                title: "Renovations",
                description: "Kitchen and bathroom renovation plumbing services",
                features: ["Kitchen plumbing", "Bathroom plumbing", "Fixture upgrades", "Modern installations"]
              },
              {
                title: "Service & Repairs",
                description: "Emergency and routine plumbing repairs",
                features: ["Leak repairs", "Clog removal", "Fixture repairs", "Emergency service"]
              },
              {
                title: "Bathtubs & Showers",
                description: "Professional bathtub and shower installation",
                features: ["Tub installation", "Shower installation", "Upgrades", "Accessibility features"]
              },
              {
                title: "Faucets & Fixtures",
                description: "Repair and replacement of faucets and fixtures",
                features: ["Faucet repair", "Fixture replacement", "Modern upgrades", "Water efficiency"]
              },
              {
                title: "Water Heaters",
                description: "Water heater repair and installation services",
                features: ["Tank water heaters", "Tankless water heaters", "Repairs", "Energy efficiency"]
              }
            ]
          }
        }
      ], { onConflict: 'type' });

    if (contentError) {
      console.log('Content insertion error:', contentError.message);
    } else {
      console.log('Default content inserted successfully');
    }

    // Insert admin user
    console.log('Inserting admin user...');
    const bcrypt = require('bcryptjs');
    const passwordHash = await bcrypt.hash('siggy', 10);
    
    const { error: adminError } = await supabase
      .from('admin_users')
      .upsert({
        username: 'cami',
        password_hash: passwordHash,
        role: 'admin'
      }, { onConflict: 'username' });

    if (adminError) {
      console.log('Admin user insertion error:', adminError.message);
    } else {
      console.log('Admin user created successfully');
    }

    console.log('Data insertion completed successfully!');
    
    // Test the connection
    console.log('\nTesting connection...');
    const { data: contentTest, error: contentTestError } = await supabase
      .from('content')
      .select('type')
      .limit(1);
    
    if (contentTestError) {
      console.log('Content table test error:', contentTestError.message);
    } else {
      console.log('Content table test successful:', contentTest);
    }

  } catch (error) {
    console.error('Data insertion failed:', error);
  }
}

insertData();



