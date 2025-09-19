import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Faucets & Fixtures | Phoenix Plumbing Fixture Installation & Repair",
  description: "Expert faucet and fixture installation, repair, and replacement in Phoenix, Arizona. Kitchen and bathroom fixtures, garbage disposals, and more. Licensed • Insured • ROC360510.",
  keywords: [
    "faucet installation Phoenix",
    "fixture replacement Arizona",
    "kitchen faucet repair",
    "bathroom fixture installation",
    "garbage disposal repair",
    "Phoenix fixture plumber",
    "Arizona faucet service",
    "fixture upgrade",
  ],
  openGraph: {
    title: "Faucets & Fixtures | Phoenix Plumbing Fixture Installation & Repair",
    description: "Expert faucet and fixture installation, repair, and replacement in Phoenix, Arizona. Kitchen and bathroom fixtures, garbage disposals, and more.",
    images: ["/sinksinstalled.webp"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/faucets-fixtures",
  },
};

export default function FaucetsFixturesPage() {
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
            Faucets & Fixtures in Phoenix, Arizona
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Expert faucet and fixture installation, repair, and replacement services. From kitchen faucets 
            to bathroom fixtures, we ensure your plumbing fixtures work perfectly.
          </p>

          <div className="mb-8">
            <img src="/sinksinstalled.webp" alt="Faucet and fixture installation" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Faucet Installation & Replacement</h2>
              <p className="text-black dark:text-black mb-6">
                Whether you need a new faucet installation or are replacing an old one, our expert team 
                ensures proper installation with attention to detail and functionality.
              </p>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Kitchen Faucets</h3>
              <p className="text-black dark:text-black mb-4">
                Kitchen faucets are the workhorse of your kitchen. We install and repair all types of 
                kitchen faucets to keep your kitchen running smoothly.
              </p>
              <ul className="text-black dark:text-black space-y-2 mb-6">
                <li><strong>Pull-down Faucets:</strong> Modern, versatile kitchen faucets</li>
                <li><strong>Pull-out Faucets:</strong> Flexible spray options for cleaning</li>
                <li><strong>Bridge Faucets:</strong> Classic, elegant design</li>
                <li><strong>Commercial-style Faucets:</strong> Professional-grade performance</li>
                <li><strong>Touchless Faucets:</strong> Modern convenience and hygiene</li>
                <li><strong>Pot Fillers:</strong> Convenient stove-top water access</li>
              </ul>

            <div className="my-8">
              <img src="/sinksfixed.jpeg" alt="Kitchen faucet repair work" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Bathroom Faucets</h3>
              <p className="text-black dark:text-black mb-4">
                Bathroom faucets combine style and function. We install and repair all types of bathroom 
                faucets to match your bathroom's design and needs.
              </p>
              <ul className="text-black dark:text-black space-y-2">
                <li><strong>Single-handle Faucets:</strong> Simple, modern operation</li>
                <li><strong>Double-handle Faucets:</strong> Classic temperature control</li>
                <li><strong>Widespread Faucets:</strong> Elegant three-piece design</li>
                <li><strong>Centerset Faucets:</strong> Compact, space-saving option</li>
                <li><strong>Wall-mount Faucets:</strong> Contemporary, space-efficient</li>
                <li><strong>Touchless Faucets:</strong> Hygienic, modern convenience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Fixture Installation & Repair</h2>
              <p className="text-black dark:text-black mb-6">
                From sinks to toilets, we handle all types of plumbing fixture installation and repair 
                to keep your home's plumbing working perfectly.
              </p>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Sink Installation & Repair</h3>
              <p className="text-black dark:text-black mb-4">
                Sinks are essential fixtures in every home. We install and repair all types of sinks 
                with professional quality and attention to detail.
              </p>
              <ul className="text-black dark:text-black space-y-2 mb-6">
                <li><strong>Kitchen Sinks:</strong> Undermount, drop-in, and farmhouse styles</li>
                <li><strong>Bathroom Sinks:</strong> Pedestal, vanity, and vessel sinks</li>
                <li><strong>Utility Sinks:</strong> Laundry and garage sink installation</li>
                <li><strong>Bar Sinks:</strong> Entertainment area sink options</li>
                <li><strong>Garbage Disposal:</strong> Installation and repair services</li>
              </ul>

            <div className="my-8">
              <img src="/toiletinstalled.jpeg" alt="Toilet installation and repair" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Toilet Installation & Repair</h3>
              <p className="text-black dark:text-black mb-4">
                Toilets are one of the most important fixtures in your home. We provide complete 
                toilet installation and repair services.
              </p>
              <ul className="text-black dark:text-black space-y-2">
                <li><strong>Toilet Installation:</strong> New toilet setup and connection</li>
                <li><strong>Toilet Replacement:</strong> Upgrade to modern, efficient models</li>
                <li><strong>Toilet Repair:</strong> Fix leaks, clogs, and running issues</li>
                <li><strong>Toilet Parts:</strong> Flapper, fill valve, and handle replacement</li>
                <li><strong>Dual Flush Toilets:</strong> Water-saving toilet options</li>
                <li><strong>ADA Compliant:</strong> Accessible toilet installations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Garbage Disposal Services</h2>
              <p className="text-black dark:text-black mb-6">
                Garbage disposals make kitchen cleanup easier and more efficient. We install, repair, 
                and maintain all types of garbage disposal systems.
              </p>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Garbage Disposal Installation</h3>
              <ul className="text-black dark:text-black space-y-2 mb-6">
                <li>New garbage disposal installation</li>
                <li>Replacement of old units</li>
                <li>Electrical connection and testing</li>
                <li>Plumbing connection and leak testing</li>
                <li>Safety switch installation</li>
              </ul>

              <h3 className="text-xl font-semibold text-black dark:text-black mb-3">Garbage Disposal Repair</h3>
              <ul className="text-black dark:text-black space-y-2">
                <li>Motor and blade repair</li>
                <li>Electrical troubleshooting</li>
                <li>Clog removal and clearing</li>
                <li>Leak repair and sealing</li>
                <li>Reset button and safety features</li>
              </ul>

            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-6">Common Questions About Faucets & Fixtures</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">How much does faucet installation cost?</h3>
                  <p className="text-black dark:text-black">
                    Faucet installation costs vary based on type and complexity. Basic faucet installation 
                    starts at $150-300, while complex installations with additional plumbing work range from 
                    $300-800. Contact us for a detailed estimate.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">How long does faucet installation take?</h3>
                  <p className="text-black dark:text-black">
                    Simple faucet replacements take 1-2 hours, while complex installations with additional 
                    plumbing work may take 2-4 hours. We work efficiently to minimize disruption.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Do I need to replace my faucet or can it be repaired?</h3>
                  <p className="text-black dark:text-black">
                    Many faucet issues can be repaired with new parts. We'll assess your faucet and provide 
                    repair options or recommend replacement if it's more cost-effective.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Areas We Serve</h2>
              <p className="text-black dark:text-black">
                We provide faucet and fixture services throughout the Phoenix metro area: {siteConfig.serviceArea.join(", ")}.
              </p>
            </section>

          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Get a Faucet/Fixture Quote</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a new faucet or fixture? Get a detailed estimate today.
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
              Fixture emergency? We provide emergency repair service.
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
                <Link href="/services/renovations" className="text-red-700 dark:text-red-700 hover:underline">
                  Renovation Plumbing
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

