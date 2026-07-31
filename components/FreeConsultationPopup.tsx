"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const STORAGE_KEY = "yeti_consult_offer_dismissed_at";
const SUPPRESS_DAYS = 30;
const DELAY_MS = 25_000;
const SCROLL_TRIGGER = 0.5;

/**
 * Free-consultation offer, shown once the visitor has actually engaged.
 *
 * Deliberately NOT an immediate full-screen interstitial: Google demotes mobile
 * pages whose content is covered on arrival from search. It waits for a dwell or
 * scroll signal, renders as a bottom sheet on mobile, and stays dismissed for
 * SUPPRESS_DAYS so repeat visitors are not nagged.
 */
export function FreeConsultationPopup() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocused = useRef<Element | null>(null);

  const track = useCallback((event: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, offer: "free_consultation" });
  }, []);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* private mode — fall back to once-per-page-load */
    }
    track("offer_popup_dismissed");
  }, [track]);

  useEffect(() => {
    // Already converting on these pages — don't interrupt.
    if (pathname === "/contact" || pathname?.startsWith("/admin")) return;

    try {
      const dismissedAt = Number(window.localStorage.getItem(STORAGE_KEY) || 0);
      if (dismissedAt && Date.now() - dismissedAt < SUPPRESS_DAYS * 86_400_000) return;
    } catch {
      /* ignore storage errors and just show once */
    }

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      // Still shown, just without the slide-in — handled in the class list below.
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setOpen(true);
      track("offer_popup_shown");
      window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= SCROLL_TRIGGER) reveal();
    };

    const timer = window.setTimeout(reveal, DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname, track]);

  // Focus management + Escape to close
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      (previouslyFocused.current as HTMLElement | null)?.focus?.();
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-offer-title"
    >
      {/* Backdrop is light on mobile so page content stays visible behind the sheet */}
      <button
        aria-label="Close offer"
        tabIndex={-1}
        onClick={dismiss}
        className="absolute inset-0 bg-black/20 sm:bg-black/50"
      />

      <div className="relative w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl bg-white shadow-2xl border border-black/10 mb-[env(safe-area-inset-bottom)]">
        <button
          ref={closeRef}
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full p-2 text-black/50 hover:bg-black/5 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-6 pt-7 pb-6">
          <div className="inline-flex items-center rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
            Free Consultation
          </div>

          <h2 id="consult-offer-title" className="mt-3 text-2xl font-bold tracking-tight text-black">
            Talk to a licensed plumber — free.
          </h2>
          <p className="mt-2 text-sm text-black/70">
            Planning a remodel, a new build, or trying to figure out what that leak is going to cost? Get a
            free, no-obligation consultation and an upfront quote before any work begins.
          </p>

          <ul className="mt-4 space-y-1.5 text-sm text-black/80">
            <li>✓ No-obligation estimate</li>
            <li>✓ Upfront pricing — you approve before we start</li>
            <li>✓ Licensed &amp; insured (ROC360510)</li>
          </ul>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              onClick={() => track("offer_popup_call")}
              className="flex-1 inline-flex items-center justify-center rounded-md bg-red-700 px-4 py-3 text-base font-bold text-white hover:bg-red-800"
            >
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => { track("offer_popup_form"); setOpen(false); }}
              className="flex-1 inline-flex items-center justify-center rounded-md border border-red-700 px-4 py-3 text-base font-semibold text-red-700 hover:bg-red-50"
            >
              Request Online
            </Link>
          </div>

          <button
            onClick={dismiss}
            className="mt-3 w-full text-center text-xs text-black/50 underline hover:text-black/70"
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}
