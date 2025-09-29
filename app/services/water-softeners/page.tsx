import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Water Softeners | Phoenix Water Softener Installation & Repair",
  description: "Expert water softener installation, repair, and maintenance in Phoenix, Arizona. Whole house water treatment systems, salt-free options, and water quality solutions. Licensed • Insured • ROC360510.",
  keywords: [
    "water softener installation Phoenix",
    "water softener repair Arizona",
    "whole house water treatment",
    "water quality solutions",
    "Phoenix water softener service",
    "Arizona water treatment",
    "salt-free water softener",
    "water softener maintenance",
  ],
  openGraph: {
    title: "Water Softeners | Phoenix Water Softener Installation & Repair",
    description: "Expert water softener installation, repair, and maintenance in Phoenix, Arizona. Whole house water treatment systems, salt-free options, and water quality solutions.",
    images: ["/watersoftener.jpg"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/water-softeners",
  },
};

export default function WaterSoftenersPage() {
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
            Water Softeners in Phoenix, Arizona
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Expert water softener installation, repair, and maintenance services. From traditional salt-based 
            systems to modern salt-free options, we provide complete water treatment solutions for your home.
          </p>

          <div className="mb-8">
            <img src="/watersoftener.jpg" alt="Water softener installation" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Water Softener Installation & Replacement</h2>
              <p className="text-black dark:text-black mb-6">
                Hard water can cause damage to your plumbing, appliances, and fixtures. Our expert team 
                installs and maintains water softeners to protect your home and improve water quality.
              </p>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Types of Water Softeners We Install</h3>
              <ul className="text-black dark:text-black space-y-2 mb-6">
                <li><strong>Traditional Salt-Based Softeners:</strong> Ion exchange technology for hard water treatment</li>
                <li><strong>Salt-Free Water Conditioners:</strong> Template-assisted crystallization (TAC) systems</li>
                <li><strong>Dual-Tank Systems:</strong> Continuous soft water supply during regeneration</li>
                <li><strong>Whole House Systems:</strong> Complete home water treatment</li>
                <li><strong>Point-of-Entry Systems:</strong> Main water line treatment</li>
                <li><strong>Point-of-Use Systems:</strong> Specific fixture treatment</li>
              </ul>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Water Softener Installation Process</h3>
              <p className="text-black dark:text-black mb-4">
                Our water softener installation process ensures proper sizing, placement, and connection 
                for optimal performance.
              </p>
              <ul className="text-black dark:text-black space-y-2">
                <li>Water quality testing and system sizing</li>
                <li>Location selection and space preparation</li>
                <li>Main water line connection and bypass valve installation</li>
                <li>Drain line connection for regeneration</li>
                <li>Electrical connection for control systems</li>
                <li>System programming and testing</li>
                <li>Water quality verification and adjustment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Water Softener Repair Services</h2>
              <p className="text-black dark:text-black mb-6">
                We provide comprehensive repair services to keep your water softener working efficiently 
                and effectively.
              </p>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Common Water Softener Problems</h3>
              <ul className="text-black dark:text-black space-y-2 mb-6">
                <li><strong>Hard Water Getting Through:</strong> Resin bed exhaustion or bypass valve issues</li>
                <li><strong>Salt Not Dissolving:</strong> Salt bridge formation or water level problems</li>
                <li><strong>Excessive Salt Usage:</strong> Regeneration timing or valve problems</li>
                <li><strong>No Regeneration:</strong> Timer, control valve, or electrical issues</li>
                <li><strong>Water Pressure Issues:</strong> Clogged resin or flow control problems</li>
                <li><strong>Strange Noises:</strong> Mechanical wear or improper installation</li>
              </ul>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Repair Services We Offer</h3>
              <ul className="text-black dark:text-black space-y-2">
                <li><strong>Control Valve Repair:</strong> Fix timing and regeneration issues</li>
                <li><strong>Resin Bed Replacement:</strong> Restore softening capacity</li>
                <li><strong>Bypass Valve Repair:</strong> Ensure proper water flow</li>
                <li><strong>Salt Bridge Removal:</strong> Clear salt buildup in brine tank</li>
                <li><strong>Timer Programming:</strong> Optimize regeneration schedule</li>
                <li><strong>Electrical Repairs:</strong> Fix control system issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Salt-Free Water Conditioners</h2>
              <p className="text-black dark:text-black mb-6">
                Salt-free water conditioners provide an alternative to traditional softeners, using 
                template-assisted crystallization to prevent scale buildup.
              </p>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Benefits of Salt-Free Systems</h3>
              <ul className="text-black dark:text-black space-y-2 mb-6">
                <li><strong>No Salt Required:</strong> Eliminate salt maintenance and disposal</li>
                <li><strong>No Waste Water:</strong> No regeneration cycles</li>
                <li><strong>Preserve Minerals:</strong> Keep beneficial minerals in water</li>
                <li><strong>Low Maintenance:</strong> Minimal ongoing care required</li>
                <li><strong>Environmentally Friendly:</strong> No salt discharge to environment</li>
                <li><strong>Better for Plants:</strong> Conditioned water is better for irrigation</li>
              </ul>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">When to Choose Salt-Free</h3>
              <ul className="text-black dark:text-black space-y-2">
                <li><strong>Moderate Hard Water:</strong> Less than 10 grains per gallon hardness</li>
                <li><strong>Scale Prevention Focus:</strong> Primary goal is preventing buildup</li>
                <li><strong>Environmental Concerns:</strong> Want to avoid salt discharge</li>
                <li><strong>Low Maintenance Preference:</strong> Minimal ongoing care desired</li>
                <li><strong>Garden Irrigation:</strong> Water plants with conditioned water</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Maintenance & Service</h2>
              <p className="text-black dark:text-black mb-6">
                Regular maintenance ensures optimal water softener performance and extends system life.
              </p>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Maintenance Services</h3>
              <ul className="text-black dark:text-black space-y-2">
                <li><strong>Annual System Inspection:</strong> Check all components and connections</li>
                <li><strong>Resin Bed Cleaning:</strong> Remove iron and sediment buildup</li>
                <li><strong>Salt Level Monitoring:</strong> Ensure adequate salt supply</li>
                <li><strong>Water Quality Testing:</strong> Verify softening effectiveness</li>
                <li><strong>Timer Calibration:</strong> Optimize regeneration schedule</li>
                <li><strong>Component Lubrication:</strong> Maintain moving parts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-6">Common Questions About Water Softeners</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">How much does water softener installation cost?</h3>
                  <p className="text-black dark:text-black">
                    Water softener installation costs vary based on system type and size. Traditional salt-based 
                    systems range from $1,500-3,500, while salt-free systems range from $2,000-4,000. Contact us 
                    for a detailed estimate based on your water quality and household needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">How long does water softener installation take?</h3>
                  <p className="text-black dark:text-black">
                    Water softener installation typically takes 3-6 hours, depending on system complexity and 
                    location. We work efficiently to minimize disruption to your home.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Should I choose salt-based or salt-free?</h3>
                  <p className="text-black dark:text-black">
                    The choice depends on your water hardness, preferences, and goals. Salt-based systems are 
                    more effective for very hard water, while salt-free systems are better for moderate hardness 
                    and environmental concerns.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">How often should I maintain my water softener?</h3>
                  <p className="text-black dark:text-black">
                    We recommend annual maintenance for optimal performance. This includes inspection, cleaning, 
                    and water quality testing to ensure your system is working effectively.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Do you provide emergency water softener service?</h3>
                  <p className="text-black dark:text-black">
                    Yes! We provide emergency water softener repair service for urgent issues like system 
                    failure or water quality problems.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Areas We Serve</h2>
              <p className="text-black dark:text-black">
                We provide water softener services throughout the Phoenix metro area: {siteConfig.serviceArea.join(", ")}.
              </p>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Get a Water Softener Quote</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a water softener? Get a detailed estimate today.
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
              Water softener problems? We provide emergency repair service.
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
                <Link href="/services/water-heaters" className="text-red-700 dark:text-red-700 hover:underline">
                  Water Heaters
                </Link>
              </li>
              <li>
                <Link href="/services/repairs" className="text-red-700 dark:text-red-700 hover:underline">
                  Plumbing Repairs
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
              <li>✓ Emergency Service</li>
              <li>✓ Competitive Pricing</li>
              <li>✓ Warranty on All Work</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}