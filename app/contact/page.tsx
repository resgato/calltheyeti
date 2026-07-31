import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig } from "@/lib/site";
import { FAQSection } from "@/components/FAQSection";
import { pageFaqs } from "@/lib/service-faqs";

export const metadata: Metadata = {
  title: "Contact Us | Get Fast Plumbing Service",
  description: "Contact Yeti Plumbing for fast, reliable plumbing service across the Phoenix metro. Based in Mesa, AZ. Call (801) 707-2547, email, or request service online. Licensed • Insured • ROC360510.",
  keywords: [
    "contact Yeti Plumbing",
    "Phoenix plumber contact",
    "emergency plumbing contact",
    "plumbing service request",
    "Yeti Plumbing phone number",
  ],
  openGraph: {
    title: "Contact Yeti Plumbing | Get Fast Plumbing Service",
    description: "Contact Yeti Plumbing for fast, reliable plumbing service across the Phoenix metro.",
    images: ["/yeti-logo.png"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-12">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-black">Contact Us</h1>
          <p className="mt-2 text-black/70 dark:text-black/70">Mesa, Arizona • Serving the Phoenix metro • ROC360510</p>
          <div className="mt-6 space-y-3 text-sm">
            <div>
              <div className="font-medium text-black dark:text-black">Phone</div>
              <a href={siteConfig.phoneHref} className="text-brand-600 underline">
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <div className="font-medium text-black dark:text-black">Email</div>
              <a href={`mailto:${siteConfig.email}`} className="text-brand-600 underline">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <div className="font-medium text-black dark:text-black">Location</div>
              <address className="not-italic text-black/70 dark:text-black/70">
                1726 E Gary St<br />
                Mesa, AZ 85203
              </address>
            </div>
          </div>
        </div>
        <LeadForm />
      </div>
      <div className="-mx-4">
        <FAQSection faqs={pageFaqs["contact"]} />
      </div>
    </main>
  );
}


