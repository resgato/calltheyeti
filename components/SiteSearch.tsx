"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchSite, type SearchEntry } from "@/lib/search-index";

/**
 * Site search over a small static index.
 *
 * Deliberately client-side: the whole site is 22 pages, so shipping an index
 * and matching in memory is instant and needs no search backend. Results are
 * plain links, so keyboard and screen reader users get real navigation rather
 * than a JS-only widget.
 *
 * `variant="hero"` is the large Carvana-style bar; `variant="compact"` is the
 * header field.
 */
export function SiteSearch({
  variant = "compact",
  placeholder = "Search services or your city",
  className = "",
}: {
  variant?: "hero" | "compact";
  placeholder?: string;
  className?: string;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const listId = useId();

  useEffect(() => {
    const hits = searchSite(query);
    setResults(hits);
    setActive(hits.length ? 0 : -1);
    setOpen(hits.length > 0);
  }, [query]);

  // Close when focus or a click leaves the widget
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const go = (entry: SearchEntry) => {
    setOpen(false);
    setQuery("");
    router.push(entry.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") { setOpen(false); return; }
    if (!open || !results.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((i) => (i + 1) % results.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((i) => (i - 1 + results.length) % results.length); }
    else if (e.key === "Enter" && active >= 0) { e.preventDefault(); go(results[active]); }
  };

  const isHero = variant === "hero";

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <label htmlFor={`${listId}-input`} className="sr-only">
        Search plumbing services and service areas
      </label>

      <div className="relative">
        <svg
          className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft ${isHero ? "h-5 w-5" : "h-4 w-4"}`}
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
        </svg>

        <input
          id={`${listId}-input`}
          type="search"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          autoComplete="off"
          value={query}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(results.length > 0)}
          onKeyDown={onKeyDown}
          className={
            isHero
              ? "w-full rounded-full border border-white/20 bg-white/95 py-4 pl-12 pr-4 text-base text-ink shadow-lg outline-none placeholder:text-ink-soft focus:border-brand-600"
              : "w-full rounded-full border border-line bg-white py-2 pl-10 pr-3 text-sm text-ink outline-none placeholder:text-ink-soft focus:border-brand-600"
          }
        />
      </div>

      {open && results.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-line bg-white shadow-xl"
        >
          {results.map((entry, i) => (
            <li key={entry.href} role="option" aria-selected={i === active}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(entry)}
                className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left ${
                  i === active ? "bg-brand-50" : "bg-white"
                }`}
              >
                <span className="text-sm font-medium text-ink">{entry.title}</span>
                <span className="shrink-0 text-xs text-ink-soft">{entry.category}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
