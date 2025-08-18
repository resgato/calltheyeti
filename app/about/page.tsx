import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Yeti Plumbing | Phoenix's Trusted Plumber",
  description:
    "Learn about Yeti Plumbing, Phoenix's trusted plumber for custom homes, renovations, and service work. Licensed • Insured • ROC360510. Serving Phoenix, Mesa, Scottsdale, Gilbert, Chandler, and Queen Creek.",
  keywords: [
    "about Yeti Plumbing",
    "Phoenix plumber company",
    "Arizona plumbing contractor",
    "licensed plumber Phoenix",
    "trusted plumber Arizona",
  ],
  openGraph: {
    title: "About Yeti Plumbing | Phoenix's Trusted Plumber",
    description: "Learn about Yeti Plumbing, Phoenix's trusted plumber for custom homes, renovations, and service work.",
    images: ["/familyfirst.jpg"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">About Yeti Plumbing</h1>
      <p className="mt-4 text-black/70">
        We’re an Arizona plumbing company focused on quality craftsmanship for
        custom homes, renovations, and responsive service work. Our licensed,
        background-checked technicians prioritize clean jobsites and clear
        communication.
      </p>
      <p className="mt-4 text-black/70">
        We serve Phoenix, Mesa, Scottsdale, Gilbert, Chandler, and Queen Creek.
        ROC360510 • Fully licensed and insured.
      </p>
    </main>
  );
}


