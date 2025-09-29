import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plumbing Repairs | Phoenix Emergency Plumbing Repair Service",
  description: "Expert plumbing repair services in Phoenix, Arizona. Emergency repairs, leak fixes, drain cleaning, pipe repairs, and more. Emergency service. Licensed • Insured • ROC360510.",
  keywords: [
    "plumbing repair Phoenix",
    "emergency plumbing Arizona",
    "leak repair",
    "drain cleaning",
    "pipe repair",
    "Phoenix plumber repair",
    "Arizona emergency plumbing",
    "Emergency plumbing service",
  ],
  openGraph: {
    title: "Plumbing Repairs | Phoenix Emergency Plumbing Repair Service",
    description: "Expert plumbing repair services in Phoenix, Arizona. Emergency repairs, leak fixes, drain cleaning, pipe repairs, and more. 24/7 emergency service.",
    images: ["/sinksfixed.jpeg"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/repairs",
  },
};

export default function RepairsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <Link href="/services" className="text-red-700 dark:text-red-700 underline">
          ← Back to Services
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-black dark:text-black">
            Plumbing Repairs in Phoenix, Arizona
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Expert plumbing repair services for residential and commercial properties. From emergency 
            repairs to routine maintenance, we fix plumbing issues quickly and professionally.
          </p>

          <div className="mb-8">
            <img src="/sinksfixed.jpeg" alt="Plumbing repair work" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-black dark:text-black">Emergency Plumbing Repairs</h2>
            <p className="text-black dark:text-black">
              Plumbing emergencies can happen at any time. Our emergency repair service ensures 
              you get help when you need it most.
            </p>

            <h3 className="text-black dark:text-black">Emergency Repair Services</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Burst Pipes:</strong> Immediate response to prevent water damage</li>
              <li><strong>Major Leaks:</strong> Quick identification and repair</li>
              <li><strong>Sewer Backups:</strong> Emergency drain and sewer clearing</li>
              <li><strong>No Water:</strong> Diagnose and restore water service</li>
              <li><strong>Gas Leaks:</strong> Emergency gas line repair</li>
              <li><strong>Water Heater Failures:</strong> Emergency water heater repair</li>
            </ul>

            <h2 className="text-black dark:text-black">Leak Detection & Repair</h2>
            <p className="text-black dark:text-black">
              Water leaks can cause significant damage if not addressed quickly. We use advanced 
              detection methods to find and fix leaks efficiently.
            </p>

            <h3 className="text-black dark:text-black">Types of Leaks We Repair</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Pipe Leaks:</strong> Copper, PVC, and PEX pipe repairs</li>
              <li><strong>Fixture Leaks:</strong> Faucet, toilet, and shower leaks</li>
              <li><strong>Appliance Leaks:</strong> Dishwasher, washing machine, and water heater leaks</li>
              <li><strong>Underground Leaks:</strong> Main water line and sewer line leaks</li>
              <li><strong>Roof Leaks:</strong> Plumbing vent and roof penetration leaks</li>
              <li><strong>Slab Leaks:</strong> Foundation and concrete slab leaks</li>
            </ul>

            <h3 className="text-black dark:text-black">Leak Detection Methods</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Visual Inspection:</strong> Thorough examination of visible plumbing</li>
              <li><strong>Pressure Testing:</strong> Test system pressure to identify leaks</li>
              <li><strong>Moisture Detection:</strong> Use moisture meters and thermal imaging</li>
              <li><strong>Dye Testing:</strong> Add dye to identify leak sources</li>
              <li><strong>Acoustic Detection:</strong> Listen for leak sounds</li>
              <li><strong>Video Inspection:</strong> Use cameras to inspect pipes</li>
            </ul>

            <h2 className="text-black dark:text-black">Drain & Sewer Services</h2>
            <p className="text-black dark:text-black">
              Clogged drains and sewer problems can disrupt your daily routine. We provide comprehensive 
              drain and sewer services to restore proper flow.
            </p>

            <h3 className="text-black dark:text-black">Drain Cleaning Services</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Kitchen Drains:</strong> Clear grease, food, and debris</li>
              <li><strong>Bathroom Drains:</strong> Remove hair, soap, and buildup</li>
              <li><strong>Shower Drains:</strong> Clear hair and soap scum</li>
              <li><strong>Floor Drains:</strong> Remove sediment and debris</li>
              <li><strong>Laundry Drains:</strong> Clear lint and detergent buildup</li>
              <li><strong>Main Sewer Lines:</strong> Clear tree roots and blockages</li>
            </ul>

            <h3 className="text-black dark:text-black">Drain Cleaning Methods</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Snaking:</strong> Mechanical drain cleaning</li>
              <li><strong>Hydro Jetting:</strong> High-pressure water cleaning</li>
              <li><strong>Video Inspection:</strong> Camera inspection of drains</li>
              <li><strong>Chemical Treatment:</strong> Safe chemical cleaning solutions</li>
              <li><strong>Root Removal:</strong> Remove tree roots from sewer lines</li>
            </ul>

            <h2 className="text-black dark:text-black">Pipe Repair & Replacement</h2>
            <p className="text-black dark:text-black">
              Damaged or corroded pipes can cause leaks and water quality issues. We repair and replace 
              pipes using modern techniques and quality materials.
            </p>

            <h3 className="text-black dark:text-black">Pipe Repair Services</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Copper Pipe Repair:</strong> Solder and compression fittings</li>
              <li><strong>PVC Pipe Repair:</strong> Glue and mechanical fittings</li>
              <li><strong>PEX Pipe Repair:</strong> Crimp and push-fit connections</li>
              <li><strong>Galvanized Pipe:</strong> Replace with modern materials</li>
              <li><strong>Cast Iron Pipe:</strong> Repair or replace as needed</li>
              <li><strong>Polybutylene Pipe:</strong> Replace with approved materials</li>
            </ul>

            <h3 className="text-black dark:text-black">Pipe Replacement Methods</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Trenchless Replacement:</strong> Minimal excavation required</li>
              <li><strong>Pipe Bursting:</strong> Replace pipes without digging</li>
              <li><strong>Pipe Lining:</strong> Reline existing pipes</li>
              <li><strong>Traditional Replacement:</strong> Full excavation when needed</li>
            </ul>

            <h2 className="text-black dark:text-black">Fixture Repair & Replacement</h2>
            <p className="text-black dark:text-black">
              We repair and replace all types of plumbing fixtures to ensure proper function and 
              water efficiency.
            </p>

            <h3 className="text-black dark:text-black">Fixture Services</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Faucet Repair:</strong> Fix leaks and replace cartridges</li>
              <li><strong>Toilet Repair:</strong> Fix flushing and leak issues</li>
              <li><strong>Shower Repair:</strong> Fix valves and showerheads</li>
              <li><strong>Sink Repair:</strong> Fix drains and garbage disposals</li>
              <li><strong>Bathtub Repair:</strong> Fix drains and overflow</li>
              <li><strong>Appliance Hookups:</strong> Connect dishwashers and washing machines</li>
            </ul>

            <h2 className="text-black dark:text-black">Preventive Maintenance</h2>
            <p className="text-black dark:text-black">
              Regular maintenance prevents costly repairs and extends the life of your plumbing system.
            </p>

            <h3 className="text-black dark:text-black">Maintenance Services</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Annual Inspections:</strong> Check for potential issues</li>
              <li><strong>Drain Cleaning:</strong> Prevent clogs and buildup</li>
              <li><strong>Water Heater Maintenance:</strong> Extend heater life</li>
              <li><strong>Fixture Maintenance:</strong> Check for leaks and wear</li>
              <li><strong>Pipe Inspection:</strong> Identify corrosion and damage</li>
              <li><strong>Water Quality Testing:</strong> Check for contaminants</li>
            </ul>

            <h2 className="text-black dark:text-black">Common Questions About Plumbing Repairs</h2>
            
            <h3 className="text-black dark:text-black">How much do plumbing repairs cost?</h3>
            <p className="text-black dark:text-black">
              Repair costs vary based on the issue and complexity. Simple repairs start at $150, while 
              major repairs may cost $500-2,000. We provide detailed estimates before starting work.
            </p>

            <h3 className="text-black dark:text-black">Do you provide emergency service?</h3>
            <p className="text-black dark:text-black">
              Yes! We provide emergency plumbing repair service. Emergency calls are prioritized 
              and we respond quickly to prevent water damage.
            </p>

            <h3 className="text-black dark:text-black">How quickly can you respond to emergencies?</h3>
            <p className="text-black dark:text-black">
              We typically respond to emergency calls within 1-2 hours. Response times may vary based 
              on location and current call volume.
            </p>

            <h3 className="text-black dark:text-black">Do you offer warranties on repairs?</h3>
            <p className="text-black dark:text-black">
              Yes! We provide warranties on all our repair work. Parts and labor are covered to ensure 
              your satisfaction and peace of mind.
            </p>

            <h3 className="text-black dark:text-black">Can you repair all types of plumbing?</h3>
            <p className="text-black dark:text-black">
              We repair all types of residential and commercial plumbing systems. Our technicians are 
              trained on all modern plumbing materials and techniques.
            </p>

            <h2 className="text-black dark:text-black">Areas We Serve</h2>
            <p className="text-black dark:text-black">
              We provide plumbing repair services throughout the Phoenix metro area: {siteConfig.serviceArea.join(", ")}.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Get a Repair Quote</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need plumbing repairs? Get a detailed estimate today.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Request Quote
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
                          <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Emergency Service</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Plumbing emergency? We provide 24/7 emergency repair service.
            </p>
            <a 
              href="tel:+18017072547" 
              className="inline-block bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Call Now: (801) 707-2547
            </a>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Related Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/emergency-plumbing" className="text-red-700 dark:text-red-700 hover:underline">
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/water-heaters" className="text-red-700 dark:text-red-700 hover:underline">
                  Water Heater Repair
                </Link>
              </li>
              <li>
                <Link href="/services/bathtubs-showers" className="text-red-700 dark:text-red-700 hover:underline">
                  Bathtub & Shower Repair
                </Link>
              </li>
              <li>
                <Link href="/services/faucets-fixtures" className="text-red-700 dark:text-red-700 hover:underline">
                  Faucet & Fixture Repair
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Why Choose Yeti Plumbing?</h3>
            <ul className="space-y-2 text-sm text-black dark:text-black">
              <li>✓ Licensed & Insured (ROC360510)</li>
              <li>✓ 15+ Years Experience</li>
              <li>✓ 24/7 Emergency Service</li>
              <li>✓ Competitive Pricing</li>
              <li>✓ Warranty on All Work</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
