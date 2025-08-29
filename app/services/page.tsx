import type { Metadata } from "next";
import Link from "next/link";
import { defaultServicesContent } from "@/lib/content";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Plumbing Services | Custom Homes, Renovations & Repairs",
  description:
    "Professional plumbing services in Phoenix, Arizona. Custom homes, renovations, repairs, bathtubs, showers, faucets, kitchens, water heaters. Licensed • Insured • ROC360510.",
  keywords: [
    "Phoenix plumbing services",
    "custom home plumbing",
    "renovation plumbing",
    "plumbing repairs",
    "bathtub installation",
    "shower installation",
    "kitchen plumbing",
    "water heater repair",
    "emergency plumbing",
  ],
  openGraph: {
    title: "Plumbing Services | Yeti Plumbing",
    description: "Professional plumbing services in Phoenix, Arizona. Custom homes, renovations, repairs, and emergency service.",
    images: ["/kitchen.jpg"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/services",
  },
};

export default function ServicesPage() {
  const servicesContent = defaultServicesContent;
  
  // Map the CMS services to the page format with proper image matching
  const services = servicesContent.services.map((service, index) => {
    // Create a mapping of service titles to appropriate images and links
    const serviceMappings = {
      "Custom Homes": {
        image: "/kitchen.jpg",
        href: "/services/custom-homes"
      },
      "Renovations": {
        image: "/bathtub.jpg",
        href: "/services/renovations"
      },
      "Service & Repairs": {
        image: "/sinksfixed.jpeg",
        href: "/services/repairs"
      },
      "Bathtubs & Showers": {
        image: "/shower.jpeg",
        href: "/services/bathtubs-showers"
      },
      "Faucets & Fixtures": {
        image: "/sinksinstalled.webp",
        href: "/services/faucets-fixtures"
      },
      "Water Heaters": {
        image: "/arizonawaterheater.png",
        href: "/services/water-heaters"
      }
    };
    
    const mapping = serviceMappings[service.title as keyof typeof serviceMappings] || {
      image: "/kitchen.jpg",
      href: "/services"
    };
    
    return {
      title: service.title,
      copy: service.description,
      image: service.image || mapping.image,
      href: mapping.href
    };
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-black dark:text-black">{servicesContent.title}</h1>
      <p className="mt-2 text-black/70 dark:text-black/70">{servicesContent.subtitle}</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-gray-50 shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={s.image} alt={s.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="text-lg font-medium text-black dark:text-black">{s.title}</div>
              <div className="text-sm text-black/70 dark:text-black/70 mt-1">{s.copy}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 dark:bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-black dark:text-black">Why Choose Yeti Plumbing?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🏠</div>
            <h3 className="font-semibold text-black dark:text-black">Family-First</h3>
            <p className="text-sm text-black/70 dark:text-black/70">We treat every home like it's our own</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold text-black dark:text-black">Fast Response</h3>
            <p className="text-sm text-black/70 dark:text-black/70">Same-day service across the Valley</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="font-semibold text-black dark:text-black">Licensed & Insured</h3>
            <p className="text-sm text-black/70 dark:text-black/70">ROC360510 - Your protection is our priority</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-black">Request Service</h2>
        <p className="text-black/70 dark:text-black/70 mb-6">
          Need plumbing help? Fill out the form and we'll get back to you quickly. 
          Same-day service available across the Valley.
        </p>
        <div className="flex justify-center">
          <LeadForm />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black dark:text-black">Recent Work Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <img src="/kitchen.jpg" alt="Kitchen renovation" className="w-full h-32 object-cover rounded-lg shadow-sm" />
            <p className="text-sm text-black/70 dark:text-black/70 text-center">Kitchen Renovation</p>
          </div>
          <div className="space-y-2">
            <img src="/bathtub.jpg" alt="Bathroom upgrade" className="w-full h-32 object-cover rounded-lg shadow-sm" />
            <p className="text-sm text-black/70 dark:text-black/70 text-center">Bathroom Upgrade</p>
          </div>
          <div className="space-y-2">
            <img src="/arizonawaterheater.png" alt="Water heater installation" className="w-full h-32 object-cover rounded-lg shadow-sm" />
            <p className="text-sm text-black/70 dark:text-black/70 text-center">Water Heater</p>
          </div>
          <div className="space-y-2">
            <img src="/sinksinstalled.webp" alt="Fixture installation" className="w-full h-32 object-cover rounded-lg shadow-sm" />
            <p className="text-sm text-black/70 dark:text-black/70 text-center">Fixture Installation</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-red-700 dark:text-red-700 underline">
          Back to home
        </Link>
      </div>
    </main>
  );
}


