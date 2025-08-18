import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/yeti-logo.png" alt="Yeti Plumbing" className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight">Yeti Plumbing</span>
          <span className="sr-only">Home</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            Call Now {siteConfig.phone}
          </a>
        </div>
      </div>
    </header>
  );
}


