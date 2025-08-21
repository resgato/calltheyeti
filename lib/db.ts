import { supabase, validateSupabaseConfig } from './supabase';

export async function createTables() {
  try {
    // Validate Supabase configuration
    validateSupabaseConfig();
    
    // Check if content table exists by trying to query it
    const { error } = await supabase
      .from('content')
      .select('*')
      .limit(1);
    
    if (error && error.code === 'PGRST116') {
      console.log('Content table does not exist. Please run the SQL migration in Supabase SQL Editor.');
      console.log('You can find the migration file at: supabase-migration.sql');
      return;
    }

    // Check if content exists
    const { data: existingContent } = await supabase
      .from('content')
      .select('*')
      .in('type', ['homepage', 'contact', 'services']);

    if (!existingContent || existingContent.length === 0) {
      // Insert default content
      const defaultContent = [
        {
          type: 'homepage',
          data: {
            hero: {
              title: "Arizona's Best Plumber — Fast. Friendly. Fair.",
              subtitle: "Custom homes, renovations, and service plumbing done right.",
              description: "Custom homes, renovations, and service plumbing done right. Bathtubs, showers, faucets, kitchens, and more — same-day service across the Valley.",
              features: ["24/7 Emergency Service", "Licensed & Insured", "Upfront, Honest Pricing", "1000+ Local Homes Served"]
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
              features: ["Valley-wide coverage", "Great reviews", "Respect for your home", "Financing options"]
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

      const { error: insertError } = await supabase
        .from('content')
        .insert(defaultContent);

      if (insertError) {
        console.error('Error inserting default content:', insertError);
      }
    }

    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
    throw error;
  }
}

export async function getContent(type: string) {
  try {
    // Validate Supabase configuration
    validateSupabaseConfig();
    
    const { data, error } = await supabase
      .from('content')
      .select('data')
      .eq('type', type)
      .single();
    
    if (error) {
      console.error(`Error getting ${type} content:`, error);
      return null;
    }
    
    return data?.data || null;
  } catch (error) {
    console.error(`Error getting ${type} content:`, error);
    return null;
  }
}

export async function updateContent(type: string, data: any) {
  try {
    // Validate Supabase configuration
    validateSupabaseConfig();
    
    const { error } = await supabase
      .from('content')
      .upsert({
        type,
        data,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'type'
      });
    
    if (error) {
      console.error(`Error updating ${type} content:`, error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error(`Error updating ${type} content:`, error);
    return false;
  }
}

export async function resetContent() {
  try {
    // Validate Supabase configuration
    validateSupabaseConfig();
    
    const { error } = await supabase
      .from('content')
      .delete()
      .in('type', ['homepage', 'contact', 'services']);
    
    if (error) {
      console.error('Error deleting content:', error);
      return false;
    }
    
    await createTables(); // This will recreate the default content
    return true;
  } catch (error) {
    console.error('Error resetting content:', error);
    return false;
  }
}
