import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Water Heaters | Phoenix Water Heater Installation & Repair",
  description: "Expert water heater installation, repair, and replacement in Phoenix, Arizona. Tank and tankless water heaters, emergency repairs, and maintenance. Licensed • Insured • ROC360510.",
  keywords: [
    "water heater installation Phoenix",
    "water heater repair Arizona",
    "tankless water heater",
    "water heater replacement",
    "emergency water heater repair",
    "Phoenix water heater service",
    "Arizona water heater contractor",
    "water heater maintenance",
  ],
  openGraph: {
    title: "Water Heaters | Phoenix Water Heater Installation & Repair",
    description: "Expert water heater installation, repair, and replacement in Phoenix, Arizona. Tank and tankless water heaters, emergency repairs, and maintenance.",
    images: ["/toiletinstalled.jpeg"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/water-heaters",
  },
};

export default function WaterHeatersPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <Link href="/services" className="text-red-700 underline">
          ← Back to Services
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Water Heaters in Phoenix, Arizona
          </h1>
          <p className="text-lg text-black/70 mb-6">
            Expert water heater installation, repair, and replacement services. From traditional tank 
            water heaters to modern tankless systems, we ensure reliable hot water for your home.
          </p>

          <div className="mb-8">
            <img src="/toiletinstalled.jpeg" alt="Water heater installation and repair" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Water Heater Installation & Replacement</h2>
            <p>
              Whether you need a new water heater installation or are replacing an old unit, our expert 
              team ensures proper installation with attention to safety and efficiency.
            </p>

            <h3>Types of Water Heaters We Install</h3>
            <ul>
              <li><strong>Tank Water Heaters:</strong> Traditional, reliable hot water storage systems</li>
              <li><strong>Tankless Water Heaters:</strong> Energy-efficient, on-demand hot water</li>
              <li><strong>Gas Water Heaters:</strong> Natural gas and propane powered units</li>
              <li><strong>Electric Water Heaters:</strong> Clean, efficient electric systems</li>
              <li><strong>Hybrid Water Heaters:</strong> Heat pump technology for maximum efficiency</li>
              <li><strong>Solar Water Heaters:</strong> Renewable energy hot water systems</li>
            </ul>

            <div className="my-8">
              <img src="/sinksfixed.jpeg" alt="Water heater repair work" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>

            <h2>Water Heater Repair Services</h2>
            <p>
              Don't let water heater problems leave you without hot water. Our repair services include 
              comprehensive diagnostics and reliable solutions.
            </p>

            <h3>Common Water Heater Problems We Fix</h3>
            <ul>
              <li><strong>No Hot Water:</strong> Diagnosing and fixing heating element issues</li>
              <li><strong>Leaking Water Heaters:</strong> Tank and connection leak repairs</li>
              <li><strong>Strange Noises:</strong> Sediment buildup and component repairs</li>
              <li><strong>Pilot Light Issues:</strong> Gas water heater ignition problems</li>
              <li><strong>Temperature Problems:</strong> Thermostat and control repairs</li>
              <li><strong>Pressure Relief Valve:</strong> Safety valve replacement and repair</li>
            </ul>

            <h3>Emergency Water Heater Services</h3>
            <p>
              Water heater emergencies can happen at any time. We provide 24/7 emergency services for 
              urgent situations that require immediate attention.
            </p>
            <ul>
              <li>Complete water heater failure</li>
              <li>Major water leaks</li>
              <li>Gas leaks from water heaters</li>
              <li>Electrical issues</li>
              <li>Safety concerns</li>
              <li>Emergency replacements</li>
            </ul>

            <div className="my-8">
              <img src="/sinksinstalled.webp" alt="Professional water heater installation" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>

            <h2>Water Heater Maintenance</h2>
            <p>
              Regular maintenance extends the life of your water heater and prevents costly repairs. 
              Our maintenance services keep your system running efficiently.
            </p>

            <h3>Maintenance Services We Provide</h3>
            <ul>
              <li>Annual inspections and tune-ups</li>
              <li>Sediment removal and tank flushing</li>
              <li>Anode rod replacement</li>
              <li>Temperature and pressure testing</li>
              <li>Safety valve testing</li>
              <li>Efficiency optimization</li>
            </ul>

            <h3>Benefits of Regular Maintenance</h3>
            <ul>
              <li>Extended water heater lifespan</li>
              <li>Improved energy efficiency</li>
              <li>Prevention of costly repairs</li>
              <li>Better hot water performance</li>
              <li>Safety assurance</li>
              <li>Warranty protection</li>
            </ul>

            <h2>Common Questions About Water Heaters</h2>
            
            <h3>How much does water heater installation cost?</h3>
            <p>
              Water heater installation costs vary based on type and size. Traditional tank water heaters 
              range from $800-2,500, while tankless systems cost $1,500-4,000. Contact us for a detailed 
              estimate based on your needs.
            </p>

            <h3>How long do water heaters last?</h3>
            <p>
              Traditional tank water heaters typically last 8-12 years, while tankless systems can last 
              20+ years with proper maintenance. Regular maintenance and water quality affect lifespan.
            </p>

            <h3>Should I repair or replace my water heater?</h3>
            <p>
              Consider replacement if your water heater is over 10 years old, requires frequent repairs, 
              or shows signs of rust/leaking. We can assess your unit and provide recommendations.
            </p>

            <h3>What size water heater do I need?</h3>
            <p>
              Water heater size depends on household size, hot water usage, and peak demand. We calculate 
              your needs based on family size, number of bathrooms, and usage patterns.
            </p>

            <h3>Are tankless water heaters worth it?</h3>
            <p>
              Tankless water heaters offer energy savings, unlimited hot water, and longer lifespan. 
              While initial cost is higher, they typically pay for themselves through energy savings 
              over time.
            </p>

            <h3>Do you offer emergency water heater service?</h3>
            <p>
              Yes! We provide 24/7 emergency water heater services for urgent repairs and replacements. 
              Call us anytime for immediate assistance with water heater emergencies.
            </p>

            <h2>Areas We Serve</h2>
            <p>
              We provide water heater services throughout the Phoenix metro area: {siteConfig.serviceArea.join(", ")}.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Get a Water Heater Quote</h3>
            <p className="text-sm text-black/70 mb-4">
              Need a new water heater or repair? Get a detailed estimate today.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Request Quote
            </Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Emergency Service</h3>
            <p className="text-sm text-black/70 mb-4">
              No hot water? We provide 24/7 emergency water heater service.
            </p>
            <a 
              href="tel:+18017072547" 
              className="inline-block bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Call Now: (801) 707-2547
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Related Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:underline">
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/repairs" className="text-red-700 hover:underline">
                  Plumbing Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/gas-lines" className="text-red-700 hover:underline">
                  Gas Lines
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-red-700 hover:underline">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Why Choose Yeti Plumbing?</h3>
            <ul className="space-y-2 text-sm">
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
