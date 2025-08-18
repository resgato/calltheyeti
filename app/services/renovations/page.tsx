import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Renovation Plumbing | Phoenix Kitchen & Bath Remodel Plumbing",
  description: "Expert renovation plumbing in Phoenix, Arizona. Kitchen remodels, bathroom renovations, fixture upgrades, and code compliance. Licensed • Insured • ROC360510.",
  keywords: [
    "renovation plumbing Phoenix",
    "kitchen remodel plumbing Arizona",
    "bathroom renovation plumbing",
    "remodel plumbing contractor",
    "fixture replacement Phoenix",
    "kitchen sink installation",
    "bathroom fixture upgrade",
    "Phoenix renovation plumber",
  ],
  openGraph: {
    title: "Renovation Plumbing | Phoenix Kitchen & Bath Remodel Plumbing",
    description: "Expert renovation plumbing in Phoenix, Arizona. Kitchen remodels, bathroom renovations, fixture upgrades, and code compliance.",
    images: ["/bathtub.jpg"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/renovations",
  },
};

export default function RenovationsPage() {
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
            Renovation Plumbing in Phoenix, Arizona
          </h1>
          <p className="text-lg text-black/70 mb-6">
            Transform your kitchen and bathroom with expert renovation plumbing. From fixture upgrades 
            to complete remodels, we ensure your renovation project has reliable, modern plumbing systems.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2>What is Renovation Plumbing?</h2>
            <p>
              Renovation plumbing involves updating or replacing existing plumbing systems during home 
              remodeling projects. This includes upgrading fixtures, relocating plumbing lines, and 
              ensuring all work meets current building codes and standards.
            </p>

            <h2>Our Renovation Plumbing Services</h2>
            <ul>
              <li><strong>Kitchen Remodel Plumbing:</strong> Sink installation, dishwasher hookups, garbage disposal</li>
              <li><strong>Bathroom Renovation:</strong> Toilet, sink, shower, and bathtub installation</li>
              <li><strong>Fixture Upgrades:</strong> Modern faucets, showerheads, and fixtures</li>
              <li><strong>Pipe Relocation:</strong> Moving plumbing lines for new layouts</li>
              <li><strong>Code Upgrades:</strong> Bringing old plumbing up to current standards</li>
              <li><strong>Gas Line Work:</strong> Stove, dryer, and appliance gas connections</li>
            </ul>

            <h2>Kitchen Renovation Plumbing</h2>
            <p>
              Kitchen renovations often require significant plumbing work. We handle everything from 
              simple sink replacements to complete kitchen plumbing overhauls, including:
            </p>
            <ul>
              <li>Kitchen sink installation and replacement</li>
              <li>Dishwasher installation and hookups</li>
              <li>Garbage disposal installation</li>
              <li>Pot filler installation</li>
              <li>Refrigerator water line installation</li>
              <li>Gas line installation for stoves</li>
            </ul>

            <h2>Bathroom Renovation Plumbing</h2>
            <p>
              Bathroom renovations can transform your home's value and comfort. Our bathroom plumbing 
              services include:
            </p>
            <ul>
              <li>Toilet installation and replacement</li>
              <li>Vanity sink installation</li>
              <li>Shower and bathtub installation</li>
              <li>Shower valve replacement</li>
              <li>Bathroom fixture upgrades</li>
              <li>Accessibility modifications</li>
            </ul>

            <h2>Common Questions About Renovation Plumbing</h2>
            
            <h3>How much does renovation plumbing cost?</h3>
            <p>
              Renovation plumbing costs vary widely based on project scope. Simple fixture replacements 
              start at $200-500, while complete kitchen or bathroom remodels range from $3,000-$15,000. 
              Contact us for a detailed estimate.
            </p>

            <h3>How long does renovation plumbing take?</h3>
            <p>
              Timeline depends on project complexity. Simple fixture replacements take 2-4 hours, 
              while complete renovations take 1-3 days. We coordinate with your contractor to 
              minimize disruption.
            </p>

            <h3>Do I need permits for renovation plumbing?</h3>
            <p>
              Most renovation plumbing work requires permits, especially when moving or adding 
              plumbing lines. We handle all permit applications and coordinate inspections.
            </p>

            <h3>Can you work with my contractor?</h3>
            <p>
              Absolutely! We regularly work with contractors, designers, and homeowners to ensure 
              smooth renovation projects. We coordinate timing and specifications with your team.
            </p>

            <h3>What if you find problems during renovation?</h3>
            <p>
              We thoroughly inspect existing plumbing before starting work. If we discover issues 
              like old pipes or code violations, we'll provide options and estimates for repairs.
            </p>

            <h2>Areas We Serve</h2>
            <p>
              We provide renovation plumbing services throughout the Phoenix metro area: {siteConfig.serviceArea.join(", ")}.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Get a Renovation Quote</h3>
            <p className="text-sm text-black/70 mb-4">
              Planning a renovation? Get a detailed plumbing estimate for your project.
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
                <Link href="/services/kitchen-plumbing" className="text-red-700 hover:underline">
                  Kitchen Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/bathroom-plumbing" className="text-red-700 hover:underline">
                  Bathroom Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/bathtubs-showers" className="text-red-700 hover:underline">
                  Bathtubs & Showers
                </Link>
              </li>
              <li>
                <Link href="/services/faucets-fixtures" className="text-red-700 hover:underline">
                  Faucets & Fixtures
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
