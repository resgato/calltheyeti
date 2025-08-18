import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Home Plumbing | Phoenix New Construction Plumbing",
  description: "Expert custom home plumbing in Phoenix, Arizona. New construction rough-ins, gas lines, finish plumbing, and code compliance. Licensed • Insured • ROC360510.",
  keywords: [
    "custom home plumbing Phoenix",
    "new construction plumbing Arizona",
    "plumbing rough-ins",
    "gas line installation",
    "finish plumbing",
    "custom home builder plumbing",
    "Phoenix new home plumbing",
    "Arizona construction plumbing",
  ],
  openGraph: {
    title: "Custom Home Plumbing | Phoenix New Construction Plumbing",
    description: "Expert custom home plumbing in Phoenix, Arizona. New construction rough-ins, gas lines, finish plumbing, and code compliance.",
    images: ["/kitchen.jpg"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/custom-homes",
  },
};

export default function CustomHomesPage() {
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
            Custom Home Plumbing in Phoenix, Arizona
          </h1>
          <p className="text-lg text-black/70 mb-6">
            Expert plumbing for custom homes and new construction. From rough-ins to finish work, 
            we ensure your dream home has reliable, code-compliant plumbing systems.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2>What is Custom Home Plumbing?</h2>
            <p>
              Custom home plumbing involves designing and installing complete plumbing systems for new construction. 
              This includes everything from underground pipes to fixture installation, ensuring your home has 
              reliable water supply, drainage, and gas systems.
            </p>

            <h2>Our Custom Home Plumbing Services</h2>
            <ul>
              <li><strong>Underground Plumbing:</strong> Main water lines, sewer connections, and gas lines</li>
              <li><strong>Rough-in Plumbing:</strong> Wall and floor pipe installation before drywall</li>
              <li><strong>Gas Line Installation:</strong> Safe, code-compliant gas piping for appliances</li>
              <li><strong>Finish Plumbing:</strong> Fixture installation and final connections</li>
              <li><strong>Code Compliance:</strong> Ensuring all work meets Arizona building codes</li>
              <li><strong>Inspection Support:</strong> Coordinating with building inspectors</li>
            </ul>

            <h2>Why Choose Yeti Plumbing for Custom Homes?</h2>
            <p>
              Building a custom home is a significant investment. Our experienced team ensures your 
              plumbing system is built to last, with attention to detail and strict adherence to 
              building codes and best practices.
            </p>

            <h2>Common Questions About Custom Home Plumbing</h2>
            
            <h3>How much does custom home plumbing cost?</h3>
            <p>
              Custom home plumbing costs vary based on home size, complexity, and fixtures chosen. 
              A typical 2,500 sq ft home ranges from $15,000-$25,000 for complete plumbing systems. 
              Contact us for a detailed estimate.
            </p>

            <h3>How long does custom home plumbing take?</h3>
            <p>
              Rough-in plumbing typically takes 1-2 weeks, while finish plumbing takes 3-5 days. 
              Total timeline depends on home size and complexity. We coordinate with your builder 
              to ensure timely completion.
            </p>

            <h3>What permits are required for custom home plumbing?</h3>
            <p>
              All custom home plumbing requires permits and inspections. We handle all permit 
              applications and coordinate inspections to ensure compliance with Arizona building codes.
            </p>

            <h3>Do you work with custom home builders?</h3>
            <p>
              Yes, we regularly work with custom home builders throughout Phoenix, Mesa, Scottsdale, 
              Gilbert, Chandler, and Queen Creek. We coordinate with your builder's timeline and 
              specifications.
            </p>

            <h2>Areas We Serve</h2>
            <p>
              We provide custom home plumbing services throughout the Phoenix metro area: {siteConfig.serviceArea.join(", ")}.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Get a Custom Home Plumbing Quote</h3>
            <p className="text-sm text-black/70 mb-4">
              Ready to start your custom home plumbing project? Get a detailed estimate today.
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
                <Link href="/services/renovations" className="text-red-700 hover:underline">
                  Renovation Plumbing
                </Link>
              </li>
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
                <Link href="/services/water-heaters" className="text-red-700 hover:underline">
                  Water Heaters
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
