import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Homes, Renovations & Service Plumbing",
  description:
    "Phoenix specialists in custom homes, renovations, and service plumbing—bathtubs, showers, faucets, kitchens, water heaters and more.",
};

export default function ServicesPage() {
  const services = [
    { title: "Custom Homes", copy: "Ground-up rough-ins, gas, and finish plumbing." },
    { title: "Renovations", copy: "Kitchen & bath re-pipes, fixture moves, code upgrades." },
    { title: "Service & Repairs", copy: "Leaks, clogs, replacements, same-day fixes." },
    { title: "Bathtubs & Showers", copy: "New installs, pans, valves, and surrounds." },
    { title: "Faucets & Fixtures", copy: "Repair or replace toilets, sinks, disposals." },
    { title: "Water Heaters", copy: "Tank & tankless install and repair." },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Plumbing Services</h1>
      <p className="mt-2 text-black/70">Licensed • Insured • ROC360510</p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-lg border border-black/10 p-4">
            <div className="text-lg font-medium">{s.title}</div>
            <div className="text-sm text-black/70">{s.copy}</div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/" className="text-[--color-primary] underline">
          Back to home
        </Link>
      </div>
    </main>
  );
}


