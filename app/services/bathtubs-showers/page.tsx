import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bathtubs & Showers | Phoenix Bathtub & Shower Installation & Repair",
  description: "Expert bathtub and shower installation, repair, and replacement in Phoenix, Arizona. New installations, upgrades, repairs, and accessibility modifications. Licensed • Insured • ROC360510.",
  keywords: [
    "bathtub installation Phoenix",
    "shower installation Arizona",
    "bathtub replacement",
    "shower repair Phoenix",
    "bathtub repair Arizona",
    "shower valve replacement",
    "Phoenix bathtub plumber",
    "Arizona shower installation",
  ],
  openGraph: {
    title: "Bathtubs & Showers | Phoenix Bathtub & Shower Installation & Repair",
    description: "Expert bathtub and shower installation, repair, and replacement in Phoenix, Arizona. New installations, upgrades, repairs, and accessibility modifications.",
    images: ["/bathtub.jpg"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/bathtubs-showers",
  },
};

export default function BathtubsShowersPage() {
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
            Bathtubs & Showers in Phoenix, Arizona
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Expert bathtub and shower installation, repair, and replacement services. From new installations 
            to upgrades and repairs, we ensure your bathroom fixtures work perfectly and look great.
          </p>

          <div className="mb-8">
            <img src="/bathtub.jpg" alt="Bathtub and shower installation" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-black dark:text-black">Bathtub Installation & Replacement</h2>
            <p className="text-black dark:text-black">
              Whether you're installing a new bathtub or replacing an old one, our expert team ensures 
              proper installation with attention to detail and functionality.
            </p>

            <h3 className="text-black dark:text-black">Types of Bathtubs We Install</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Alcove Bathtubs:</strong> Standard bathtubs that fit between three walls</li>
              <li><strong>Drop-in Bathtubs:</strong> Freestanding tubs that drop into a deck or platform</li>
              <li><strong>Undermount Bathtubs:</strong> Tubs that mount underneath a deck surface</li>
              <li><strong>Freestanding Bathtubs:</strong> Standalone tubs that don't require walls</li>
              <li><strong>Corner Bathtubs:</strong> Triangular tubs that fit in corner spaces</li>
              <li><strong>Walk-in Bathtubs:</strong> Accessible tubs with doors for easy entry</li>
            </ul>

            <div className="my-8">
              <img src="/bathtubbefore.jpg" alt="Bathtub before installation" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>

            <h3 className="text-black dark:text-black">Bathtub Installation Process</h3>
            <p className="text-black dark:text-black">
              Our bathtub installation process ensures quality work and lasting results.
            </p>
            <ul className="text-black dark:text-black">
              <li>Remove old bathtub and inspect plumbing</li>
              <li>Prepare installation area and level surface</li>
              <li>Install new bathtub with proper support</li>
              <li>Connect plumbing and test for leaks</li>
              <li>Install fixtures and accessories</li>
              <li>Final inspection and cleanup</li>
            </ul>

            <h2 className="text-black dark:text-black">Shower Installation & Upgrades</h2>
            <p className="text-black dark:text-black">
              Modern showers can transform your bathroom experience. We install and upgrade all types 
              of shower systems with professional quality.
            </p>

            <h3 className="text-black dark:text-black">Shower Types We Install</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Walk-in Showers:</strong> Modern, accessible shower designs</li>
              <li><strong>Shower-Tub Combinations:</strong> Versatile bathing options</li>
              <li><strong>Custom Shower Enclosures:</strong> Tailored to your space</li>
              <li><strong>Steam Showers:</strong> Luxury spa-like experiences</li>
              <li><strong>Accessibility Showers:</strong> ADA-compliant designs</li>
              <li><strong>Outdoor Showers:</strong> Pool and patio installations</li>
            </ul>

            <div className="my-8">
              <img src="/shower.jpeg" alt="Shower installation work" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>

            <h3 className="text-black dark:text-black">Shower Components</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Shower Valves:</strong> Temperature and flow control</li>
              <li><strong>Showerheads:</strong> Fixed, handheld, and rain shower options</li>
              <li><strong>Shower Pans:</strong> Waterproof bases and drains</li>
              <li><strong>Shower Doors:</strong> Sliding, hinged, and frameless options</li>
              <li><strong>Shower Walls:</strong> Tile, acrylic, and solid surface options</li>
              <li><strong>Shower Accessories:</strong> Shelves, benches, and grab bars</li>
            </ul>

            <h2 className="text-black dark:text-black">Repair & Maintenance Services</h2>
            <p className="text-black dark:text-black">
              We provide comprehensive repair and maintenance services to keep your bathtubs and showers 
              working perfectly.
            </p>

            <h3 className="text-black dark:text-black">Common Repairs</h3>
            <ul className="text-black dark:text-black">
              <li><strong>Leak Repairs:</strong> Fix water leaks and prevent damage</li>
              <li><strong>Drain Issues:</strong> Clear clogs and repair drains</li>
              <li><strong>Valve Repairs:</strong> Fix temperature and flow problems</li>
              <li><strong>Fixture Replacement:</strong> Update showerheads and faucets</li>
              <li><strong>Caulking & Sealing:</strong> Prevent water damage</li>
              <li><strong>Accessibility Upgrades:</strong> Add safety features</li>
            </ul>

            <h2 className="text-black dark:text-black">Common Questions About Bathtubs & Showers</h2>
            
            <h3 className="text-black dark:text-black">How much does bathtub installation cost?</h3>
            <p className="text-black dark:text-black">
              Bathtub installation costs vary based on type and complexity. Basic alcove tub installation 
              starts at $800-1,500, while luxury freestanding tubs range from $2,000-5,000. Contact us 
              for a detailed estimate.
            </p>

            <h3 className="text-black dark:text-black">How long does shower installation take?</h3>
            <p className="text-black dark:text-black">
              Simple shower installations take 1-2 days, while custom shower projects may take 3-5 days. 
              We work efficiently to minimize disruption to your home.
            </p>

            <h3 className="text-black dark:text-black">Can you convert a bathtub to a shower?</h3>
            <p className="text-black dark:text-black">
              Yes! We can convert bathtubs to walk-in showers or shower-tub combinations. We'll assess 
              your space and provide options that work best for your needs.
            </p>

            <h3 className="text-black dark:text-black">Do you install walk-in bathtubs?</h3>
            <p className="text-black dark:text-black">
              Absolutely! We install walk-in bathtubs for accessibility and safety. We'll ensure proper 
              installation and test all safety features.
            </p>

            <h3 className="text-black dark:text-black">What if I have a leak in my shower?</h3>
            <p className="text-black dark:text-black">
              We provide emergency leak repair services. We'll quickly identify the source and fix the 
              issue to prevent water damage to your home.
            </p>

            <h2 className="text-black dark:text-black">Areas We Serve</h2>
            <p className="text-black dark:text-black">
              We provide bathtub and shower services throughout the Phoenix metro area: {siteConfig.serviceArea.join(", ")}.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Get a Bathtub/Shower Quote</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a new bathtub or shower? Get a detailed estimate today.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Request Quote
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Emergency Repair</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Bathtub or shower emergency? We provide emergency repair service.
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
                <Link href="/services/bathroom-plumbing" className="text-red-700 dark:text-red-700 hover:underline">
                  Bathroom Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/renovations" className="text-red-700 dark:text-red-700 hover:underline">
                  Renovation Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/faucets-fixtures" className="text-red-700 dark:text-red-700 hover:underline">
                  Faucets & Fixtures
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-plumbing" className="text-red-700 dark:text-red-700 hover:underline">
                  Emergency Plumbing
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
