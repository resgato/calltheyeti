"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a `clicktocall` analytics event whenever a visitor clicks any
 * phone link (`<a href="tel:...">`) anywhere on the site.
 *
 * Uses a single delegated listener so every phone link — hard-coded or
 * driven by siteConfig.phoneHref — is tracked without per-link changes.
 *
 * The event is pushed to the GTM dataLayer (primary path: GTM forwards it
 * to GA4). If a gtag() GA4 tag is ever loaded directly, that path is used
 * too as a harmless fallback.
 */
export function ClickToCallTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const phoneNumber = href.replace(/^tel:/i, "").trim();
      const payload = {
        phone_number: phoneNumber,
        link_text: (link.textContent || "").trim(),
        link_url: href,
        page_location: window.location.href,
        page_path: window.location.pathname,
      };

      // Primary path: GTM dataLayer -> GA4 event tag
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "clicktocall", ...payload });

      // Fallback path: direct GA4 (only if a gtag config is present)
      if (typeof window.gtag === "function") {
        window.gtag("event", "clicktocall", payload);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
