import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bathtubs & Showers | Phoenix Bathroom Fixture Installation",
  description: "Expert bathtub and shower installation in Phoenix, Arizona. New installations, replacements, repairs, and upgrades. Licensed • Insured • ROC360510.",
  keywords: [
    "bathtub installation Phoenix",
    "shower installation Arizona",
    "bathtub replacement",
    "shower replacement",
    "bathroom fixture installation",
    "tub to shower conversion",
    "shower pan installation",
    "Phoenix bathroom plumber",
  ],
  openGraph: {
    title: "Bathtubs & Showers | Phoenix Bathroom Fixture Installation",
    description: "Expert bathtub and shower installation in Phoenix, Arizona. New installations, replacements, repairs, and upgrades.",
    images: ["/shower.jpeg"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/bathtubs-showers",
  },
};

export default function BathtubsShowersPage() {
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
            Bathtubs & Showers in Phoenix, Arizona
          </h1>
          <p className="text-lg text-black/70 mb-6">
            Expert bathtub and shower installation, replacement, and repair services. From luxury 
            soaking tubs to modern walk-in showers, we create the perfect bathroom experience.
          </p>

          <div className="mb-8">
            <img src="/shower.jpeg" alt="Shower installation and repair" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Bathtub Installation & Replacement</h2>
            <p>
              Whether you're installing a new bathtub or replacing an old one, our expert team ensures 
              proper installation with attention to detail and code compliance.
            </p>

            <h3>Types of Bathtubs We Install</h3>
            <ul>
              <li><strong>Acrylic Bathtubs:</strong> Lightweight, durable, and easy to maintain</li>
              <li><strong>Cast Iron Bathtubs:</strong> Classic, heavy-duty, and long-lasting</li>
              <li><strong>Fiberglass Bathtubs:</strong> Cost-effective and versatile</li>
              <li><strong>Freestanding Tubs:</strong> Modern, elegant centerpiece installations</li>
              <li><strong>Soaking Tubs:</strong> Deep, relaxing bath experiences</li>
              <li><strong>Whirlpool Tubs:</strong> Therapeutic massage and relaxation</li>
            </ul>

            <div className="my-8">
              <img src="/bathtubbefore.jpg" alt="Bathtub before installation" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>

            <h2>Shower Installation & Replacement</h2>
            <p>
              Modern showers offer convenience and accessibility. We install all types of shower systems 
              with proper waterproofing and drainage.
            </p>

            <h3>Shower Systems We Install</h3>
            <ul>
              <li><strong>Walk-in Showers:</strong> Accessible, modern shower designs</li>
              <li><strong>Shower Pans:</strong> Custom and pre-fabricated shower bases</li>
              <li><strong>Shower Doors:</strong> Framed and frameless glass doors</li>
              <li><strong>Shower Valves:</strong> Temperature control and pressure balancing</li>
              <li><strong>Shower Heads:</strong> Fixed, handheld, and rain shower systems</li>
              <li><strong>Shower Surrounds:</strong> Tile, acrylic, and fiberglass options</li>
            </ul>

            <div className="my-8">
              <img src="/bathtub.jpg" alt="Bathtub after installation" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>

            <h2>Tub to Shower Conversion</h2>
            <p>
              Converting a bathtub to a shower can improve accessibility and modernize your bathroom. 
              Our conversion services include complete transformation of your bathroom space.
            </p>

            <h3>Conversion Process</h3>
            <ul>
              <li>Removing existing bathtub and plumbing</li>
              <li>Installing new shower pan and drain</li>
              <li>Updating plumbing for shower fixtures</li>
              <li>Installing shower doors and hardware</li>
              <li>Ensuring proper waterproofing</li>
              <li>Code compliance and permits</li>
            </ul>

            <h3>Benefits of Tub to Shower Conversion</h3>
            <ul>
              <li>Improved accessibility for all ages</li>
              <li>Modern, updated bathroom appearance</li>
              <li>Increased home value</li>
              <li>Better safety for elderly family members</li>
              <li>More efficient use of space</li>
            </ul>

            <h2>Common Questions About Bathtubs & Showers</h2>
            
            <h3>How much does bathtub installation cost?</h3>
            <p>
              Bathtub installation costs vary based on type and complexity. Basic acrylic tub installation 
              starts at $800-1,200, while luxury freestanding tubs range from $2,000-5,000. Contact us 
              for a detailed estimate.
            </p>

            <h3>How much does shower installation cost?</h3>
            <p>
              Shower installation costs depend on size and features. Basic shower installation starts at 
              $1,500-2,500, while custom tile showers range from $3,000-8,000. Walk-in showers typically 
              cost $2,500-4,000.
            </p>

            <h3>How long does bathtub/shower installation take?</h3>
            <p>
              Simple bathtub replacements take 4-6 hours, while complex installations take 1-2 days. 
              Shower installations typically take 1-3 days depending on complexity and materials.
            </p>

            <h3>Do I need permits for bathtub/shower installation?</h3>
            <p>
              Most bathtub and shower installations require permits, especially when changing plumbing 
              or structure. We handle all permit applications and coordinate inspections.
            </p>

            <h3>Can you install a walk-in shower for accessibility?</h3>
            <p>
              Yes! We specialize in accessible bathroom design including walk-in showers, grab bars, 
              and ADA-compliant fixtures. We can make your bathroom safer and more accessible.
            </p>

            <h3>What if my existing plumbing needs updating?</h3>
            <p>
              We thoroughly inspect existing plumbing before installation. If updates are needed, 
              we'll provide options and estimates for bringing your plumbing up to code.
            </p>

            <h2>Areas We Serve</h2>
            <p>
              We provide bathtub and shower services throughout the Phoenix metro area: {siteConfig.serviceArea.join(", ")}.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Get a Bathtub/Shower Quote</h3>
            <p className="text-sm text-black/70 mb-4">
              Ready to upgrade your bathroom? Get a detailed estimate for your project.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Request Quote
            </Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Related Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/bathroom-plumbing" className="text-red-700 hover:underline">
                  Bathroom Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/renovations" className="text-red-700 hover:underline">
                  Renovation Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/faucets-fixtures" className="text-red-700 hover:underline">
                  Faucets & Fixtures
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:underline">
                  Emergency Plumbing
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Why Choose Yeti Plumbing?</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Licensed & Insured (ROC360510)</li>
              <li>✓ 15+ Years Experience</li>
              <li>✓ Code Compliant Work</li>
              <li>✓ Competitive Pricing</li>
              <li>✓ Warranty on All Work</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
