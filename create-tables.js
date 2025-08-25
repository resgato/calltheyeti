const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://atjhretcvnxzrnazanoi.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0amhyZXRjdm54enJuYXphbm9pIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTgwODQxNSwiZXhwIjoyMDcxMzg0NDE1fQ.GDRf2nAJKQiQ2SvFZzG9KYus7l-ruOPhYy235rQX7lE';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createTables() {
  try {
    console.log('Creating tables...');

    // Try to create admin user directly
    console.log('Creating admin user...');
    const { data: adminUser, error: adminError } = await supabase
      .from('admin_users')
      .insert({
        username: 'cami',
        password_hash: '$2a$10$gjcrV26rzHfTdWBypyXA1.t8/dkSAwQriEKz1EmTUIg0KOYGd0h16',
        role: 'admin'
      })
      .select()
      .single();

    if (adminError) {
      if (adminError.code === 'PGRST116') {
        console.log('Admin users table does not exist. Please create it manually in Supabase dashboard.');
      } else if (adminError.code === '23505') {
        console.log('Admin user already exists');
      } else {
        console.log('Admin user creation error:', adminError.message);
      }
    } else {
      console.log('Admin user created successfully:', adminUser.username);
    }

    // Try to create content entries
    console.log('Creating content entries...');
    const defaultContent = [
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
    ];

    for (const content of defaultContent) {
      const { data: contentData, error: contentError } = await supabase
        .from('content')
        .upsert(content, { onConflict: 'type' })
        .select()
        .single();

      if (contentError) {
        if (contentError.code === 'PGRST116') {
          console.log(`Content table does not exist for ${content.type}. Please create it manually in Supabase dashboard.`);
        } else {
          console.log(`Content creation error for ${content.type}:`, contentError.message);
        }
      } else {
        console.log(`Content created/updated for ${content.type}`);
      }
    }

    console.log('Table creation completed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

createTables();
