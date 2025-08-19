import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Water Heaters | Phoenix Water Heater Installation & Repair",
  description: "Expert water heater installation, repair, and replacement in Phoenix, Arizona. Tank and tankless water heaters, repairs, maintenance, and emergency service. Licensed • Insured • ROC360510.",
  keywords: [
    "water heater installation Phoenix",
    "water heater repair Arizona",
    "tankless water heater",
    "water heater replacement",
    "Phoenix water heater service",
    "Arizona water heater plumber",
    "emergency water heater repair",
    "water heater maintenance",
  ],
  openGraph: {
    title: "Water Heaters | Phoenix Water Heater Installation & Repair",
    description: "Expert water heater installation, repair, and replacement in Phoenix, Arizona. Tank and tankless water heaters, repairs, maintenance, and emergency service.",
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
        <Link href="/services" className="text-red-700 dark:text-red-700 underline">
          ← Back to Services
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-black dark:text-black">
            Water Heaters in Phoenix, Arizona
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Expert water heater installation, repair, and replacement services. From traditional tank water 
            heaters to modern tankless systems, we ensure reliable hot water for your home.
          </p>

          <div className="mb-8">
            <img src="/toiletinstalled.jpeg" alt="Water heater installation" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-black dark:text-black">Water Heater Installation & Replacement</h2>
            <p className="text-black dark:text-black">
              Whether you need a new water heater installation or are replacing an old one, our expert team 
              ensures proper installation with attention to safety and efficiency.
            </p>

            <h3 className="text-black dark:text-black">Types of Water Heaters We Install</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Traditional Tank Water Heaters:</strong> Reliable and cost-effective options</li>
              <li><strong>Tankless Water Heaters:</strong> Energy-efficient, on-demand hot water</li>
              <li><strong>Hybrid Water Heaters:</strong> Heat pump technology for energy savings</li>
              <li><strong>Solar Water Heaters:</strong> Environmentally friendly options</li>
              <li><strong>Point-of-Use Water Heaters:</strong> Small units for specific locations</li>
              <li><strong>Commercial Water Heaters:</strong> Large capacity for businesses</li>
            </ul>

            <h3 className="text-black dark:text-black">Water Heater Installation Process</h3>
            <p className="text-black dark:text-black">
              Our water heater installation process ensures safety, efficiency, and lasting performance.
            </p>
            <ul className="text-black dark:text-black">
              <li>Remove old water heater and inspect connections</li>
              <li>Prepare installation area and ensure proper ventilation</li>
              <li>Install new water heater with proper support</li>
              <li>Connect water lines and test for leaks</li>
              <li>Connect gas or electrical connections</li>
              <li>Test system and adjust temperature settings</li>
              <li>Final inspection and safety check</li>
            </ul>

            <h2 className="text-black dark:text-black">Water Heater Repair Services</h2>
            <p className="text-black dark:text-black">
              We provide comprehensive repair services to keep your water heater working efficiently 
              and safely.
            </p>

            <h3 className="text-black dark:text-black">Common Water Heater Problems</h3>
            <ul className="text-black dark:text-black">
              <li><strong>No Hot Water:</strong> Diagnose and fix heating element issues</li>
              <li><strong>Insufficient Hot Water:</strong> Adjust settings or replace components</li>
              <li><strong>Water Too Hot:</strong> Fix thermostat and safety valve issues</li>
              <li><strong>Strange Noises:</strong> Address sediment buildup and component wear</li>
              <li><strong>Leaks:</strong> Repair tank, valve, or connection leaks</li>
              <li><strong>Pilot Light Issues:</strong> Fix ignition and gas flow problems</li>
            </ul>

            <h3 className="text-black dark:text-black">Repair Services We Offer</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Thermostat Replacement:</strong> Fix temperature control issues</li>
              <li><strong>Heating Element Repair:</strong> Replace faulty heating elements</li>
              <li><strong>Anode Rod Replacement:</strong> Prevent tank corrosion</li>
              <li><strong>Pressure Relief Valve Repair:</strong> Ensure safety compliance</li>
              <li><strong>Drain Valve Replacement:</strong> Fix maintenance access issues</li>
              <li><strong>Gas Valve Repair:</strong> Fix gas flow and ignition problems</li>
            </ul>

            <h2 className="text-black dark:text-black">Tankless Water Heaters</h2>
            <p className="text-black dark:text-black">
              Tankless water heaters provide energy efficiency and endless hot water. We install and 
              maintain all types of tankless systems.
            </p>

            <h3 className="text-black dark:text-black">Benefits of Tankless Water Heaters</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Energy Efficiency:</strong> Only heat water when needed</li>
              <li><strong>Endless Hot Water:</strong> Never run out of hot water</li>
              <li><strong>Space Saving:</strong> Compact design saves space</li>
              <li><strong>Longer Lifespan:</strong> Last 20+ years with proper maintenance</li>
              <li><strong>Lower Operating Costs:</strong> Reduce energy bills</li>
              <li><strong>Environmentally Friendly:</strong> Reduce energy consumption</li>
            </ul>

            <h3 className="text-black dark:text-black">Tankless Installation Considerations</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Sizing:</strong> Proper sizing for your household needs</li>
              <li><strong>Gas Line Requirements:</strong> Ensure adequate gas supply</li>
              <li><strong>Electrical Requirements:</strong> Check electrical capacity for electric models</li>
              <li><strong>Ventilation:</strong> Proper venting for gas models</li>
              <li><strong>Water Quality:</strong> Consider water softener for hard water areas</li>
            </ul>

            <h2 className="text-black dark:text-black">Maintenance & Service</h2>
            <p className="text-black dark:text-black">
              Regular maintenance extends the life of your water heater and ensures efficient operation.
            </p>

            <h3 className="text-black dark:text-black">Maintenance Services</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Annual Inspections:</strong> Check for wear and potential issues</li>
              <li><strong>Tank Flushing:</strong> Remove sediment buildup</li>
              <li><strong>Anode Rod Inspection:</strong> Prevent tank corrosion</li>
              <li><strong>Temperature Adjustment:</strong> Optimize for efficiency and safety</li>
              <li><strong>Safety Valve Testing:</strong> Ensure proper safety operation</li>
              <li><strong>Component Lubrication:</strong> Maintain moving parts</li>
            </ul>

            <h2 className="text-black dark:text-black">Common Questions About Water Heaters</h2>
            
            <h3 className="text-black dark:text-black">How much does water heater installation cost?</h3>
            <p className="text-black dark:text-black">
              Water heater installation costs vary based on type and size. Traditional tank water heaters 
              range from $800-2,000, while tankless systems range from $1,500-4,000. Contact us for a 
              detailed estimate.
            </p>

            <h3 className="text-black dark:text-black">How long does water heater installation take?</h3>
            <p className="text-black dark:text-black">
              Traditional water heater installation takes 2-4 hours, while tankless installations may take 
              4-6 hours. We work efficiently to minimize disruption to your home.
            </p>

            <h3 className="text-black dark:text-black">Should I repair or replace my water heater?</h3>
            <p className="text-black dark:text-black">
              We'll assess your water heater's age, condition, and repair costs. Generally, water heaters 
              over 10 years old may be better replaced, especially if repairs are costly.
            </p>

            <h3 className="text-black dark:text-black">How often should I maintain my water heater?</h3>
            <p className="text-black dark:text-black">
              We recommend annual maintenance for optimal performance and longevity. This includes 
              inspection, flushing, and component checks.
            </p>

            <h3 className="text-black dark:text-black">Do you provide emergency water heater service?</h3>
            <p className="text-black dark:text-black">
              Yes! We provide 24/7 emergency water heater repair service for urgent issues like no hot 
              water or leaks.
            </p>

            <h2 className="text-black dark:text-black">Areas We Serve</h2>
            <p className="text-black dark:text-black">
              We provide water heater services throughout the Phoenix metro area: {siteConfig.serviceArea.join(", ")}.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Get a Water Heater Quote</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a new water heater? Get a detailed estimate today.
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
              No hot water? We provide 24/7 emergency water heater repair service.
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
                <Link href="/services/repairs" className="text-red-700 dark:text-red-700 hover:underline">
                  Plumbing Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-plumbing" className="text-red-700 dark:text-red-700 hover:underline">
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/renovations" className="text-red-700 dark:text-red-700 hover:underline">
                  Renovation Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/custom-homes" className="text-red-700 dark:text-red-700 hover:underline">
                  Custom Home Plumbing
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
