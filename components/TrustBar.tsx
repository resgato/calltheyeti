/**
 * Credential strip. Standard pattern on national home-service sites, surfaces
 * licensing and guarantees above the fold where they answer the "can I trust
 * this contractor" question before the visitor scrolls.
 *
 * Every claim here is one the site already makes on /about.
 */
const TRUST_ITEMS = [
  { label: "Licensed & Bonded", detail: "ROC360510" },
  { label: "Fully Insured", detail: "For your protection" },
  { label: "Free Estimates", detail: "No obligation" },
  { label: "Upfront Pricing", detail: "Approve before we start" },
  { label: "Warranty Backed", detail: "On every job" },
];

export function TrustBar() {
  return (
    <section aria-label="Our credentials" className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {TRUST_ITEMS.map((item) => (
            <li key={item.label} className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1.5l6.5 2.9v4.2c0 4-2.8 7.7-6.5 8.9-3.7-1.2-6.5-4.9-6.5-8.9V4.4L10 1.5zm3.2 6.1a1 1 0 00-1.4-1.4L9 9l-.8-.8a1 1 0 10-1.4 1.4l1.5 1.5a1 1 0 001.4 0l3.5-3.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="text-sm font-semibold text-black">{item.label}</div>
                <div className="text-xs text-black/60">{item.detail}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
