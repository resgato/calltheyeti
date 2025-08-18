import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Yeti Plumbing",
  description: "Call, email, or request service online for fast plumbing help across Arizona.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-2 text-black/70">Phoenix, Arizona • ROC360510</p>
          <div className="mt-6 space-y-3 text-sm">
            <div>
              <div className="font-medium">Phone</div>
              <a href={siteConfig.phoneHref} className="text-[--color-primary] underline">
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <div className="font-medium">Email</div>
              <a href={`mailto:${siteConfig.email}`} className="text-[--color-primary] underline">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <div className="font-medium">Location</div>
              <div className="text-black/70">Phoenix, Arizona</div>
            </div>
          </div>
        </div>
        <LeadForm />
      </div>
    </main>
  );
}


