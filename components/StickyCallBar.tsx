import Link from "next/link";
import { siteConfig } from "@/lib/site";

/**
 * Persistent call/quote bar pinned to the bottom of the viewport on mobile.
 *
 * Local plumbing search is mostly mobile and high-intent, so the phone number
 * should never be more than one tap away. Hidden on md+ where the header call
 * button is always visible. Taps are picked up by ClickToCallTracker and sent
 * to GA4 as `clicktocall`.
 */
export function StickyCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="flex items-stretch gap-2 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        <a
          href={siteConfig.phoneHref}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-red-700 px-4 py-3 text-base font-bold text-white shadow hover:bg-red-800"
          aria-label={`Call Yeti Plumbing at ${siteConfig.phone}`}
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border border-red-700 px-4 py-3 text-base font-semibold text-red-700 hover:bg-red-50"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
