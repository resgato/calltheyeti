/**
 * Renders JSON-LD structured data as a real inline <script> in the server HTML.
 *
 * next/script defers injection to the client, which left our LocalBusiness, FAQ,
 * and breadcrumb markup out of the initial HTML response. Crawlers pick up
 * server-rendered JSON-LD far more reliably, so structured data uses this
 * instead of <Script>.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
