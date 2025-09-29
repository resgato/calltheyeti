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
        <Link href="/services" className="text-red-700 dark:text-red-700 underline">
          ← Back to Services
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-black dark:text-black">
            Custom Home Plumbing in Phoenix, Arizona
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Expert plumbing for custom homes and new construction. From rough-ins to finish work, 
            we ensure your dream home has reliable, code-compliant plumbing systems.
          </p>

          <div className="mb-8">
            <img src="/kitchen.jpg" alt="Custom home kitchen plumbing" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">What is Custom Home Plumbing?</h2>
              <p className="text-black dark:text-black mb-6">
                Custom home plumbing involves designing and installing complete plumbing systems for new construction. 
                This includes everything from underground pipes to fixture installation, ensuring your home has 
                reliable water supply, drainage, and gas systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Our Custom Home Plumbing Services</h2>
              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Underground Plumbing</h3>
              <p className="text-black dark:text-black mb-4">
                We handle all underground plumbing work including main water lines, sewer connections, and gas lines. 
                This foundational work is critical for your home's plumbing system.
              </p>
              <ul className="text-black dark:text-black space-y-2 mb-6">
                <li>Main water line installation</li>
                <li>Sewer connection and drainage</li>
                <li>Gas line installation</li>
                <li>Underground pipe routing</li>
              </ul>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Rough-in Plumbing</h3>
              <p className="text-black dark:text-black mb-4">
                Rough-in plumbing involves installing pipes in walls and floors before drywall installation. 
                This phase sets up the framework for all your fixtures.
              </p>
              <ul className="text-black dark:text-black space-y-2 mb-6">
                <li>Wall and floor pipe installation</li>
                <li>Fixture stub-outs</li>
                <li>Drain and vent systems</li>
                <li>Gas line rough-ins</li>
              </ul>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Finish Plumbing</h3>
              <p className="text-black dark:text-black mb-4">
                Finish plumbing includes the final installation of fixtures and connections. This is where 
                your plumbing system becomes functional.
              </p>
              <ul className="text-black dark:text-black space-y-2">
                <li>Fixture installation and connection</li>
                <li>Final pipe connections</li>
                <li>Testing and inspection</li>
                <li>Code compliance verification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Why Choose Yeti Plumbing for Custom Homes?</h2>
              <p className="text-black dark:text-black mb-6">
                Building a custom home is a significant investment. Our experienced team ensures your 
                plumbing system is built to last, with attention to detail and strict adherence to 
                building codes and best practices.
              </p>

            <div className="my-8">
              <img src="/familyfirst.jpg" alt="Family-first custom home plumbing" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>

            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-6">Common Questions About Custom Home Plumbing</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">How much does custom home plumbing cost?</h3>
                  <p className="text-black dark:text-black">
                    Custom home plumbing costs vary based on home size, complexity, and fixtures chosen. 
                    A typical 2,500 sq ft home ranges from $15,000-$25,000 for complete plumbing systems. 
                    Contact us for a detailed estimate.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Areas We Serve</h2>
              <p className="text-black dark:text-black">
                We provide custom home plumbing services throughout the Phoenix metro area: {siteConfig.serviceArea.join(", ")}.
              </p>
            </section>

          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Get a Custom Home Plumbing Quote</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Ready to start your custom home plumbing project? Get a detailed estimate today.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Request Quote
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Related Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/renovations" className="text-red-700 dark:text-red-700 hover:underline">
                  Renovation Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/kitchen-plumbing" className="text-red-700 dark:text-red-700 hover:underline">
                  Kitchen Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/bathroom-plumbing" className="text-red-700 dark:text-red-700 hover:underline">
                  Bathroom Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/water-heaters" className="text-red-700 dark:text-red-700 hover:underline">
                  Water Heaters
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Why Choose Yeti Plumbing?</h3>
            <ul className="space-y-2 text-sm text-black dark:text-black">
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
