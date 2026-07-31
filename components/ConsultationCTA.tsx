import Link from "next/link";
import { siteConfig } from "@/lib/site";

/**
 * On-page counterpart to the free-consultation popup.
 *
 * The offer needs a permanent home on the page too, visitors who dismiss the
 * popup (or never trigger it) should still be able to find and take the offer.
 */
export function ConsultationCTA() {
  return (
    <section className="bg-brand-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="inline-flex items-center rounded-full bg-accent-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
              Free Consultation
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Not sure what it will cost? Find out for free.
            </h2>
            <p className="mt-3 text-white/90">
              Whether you are planning a kitchen remodel, speccing plumbing for a new build, or staring at a
              leak you do not understand, we will look at it and give you a straight answer at no charge. You
              get an upfront price before any work begins, and you are never obligated to move forward.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/90 sm:grid-cols-3">
              <li>✓ No-obligation estimate</li>
              <li>✓ Licensed &amp; insured</li>
              <li>✓ Serving the whole Valley</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-accent-400 px-5 py-4 text-lg font-bold text-black shadow hover:bg-accent-500"
            >
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-4 text-lg font-semibold text-white hover:bg-white/10"
            >
              Request Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
