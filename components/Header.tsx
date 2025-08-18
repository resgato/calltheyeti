"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/yeti-logo.png" alt="Yeti Plumbing" className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight">Yeti Plumbing</span>
          <span className="sr-only">Home</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-2">
          {/* Desktop Call Button */}
          <a
            href={siteConfig.phoneHref}
            className="hidden md:inline-flex items-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            Call Now {siteConfig.phone}
          </a>
          
          {/* Mobile Call Button - Just "Call Now" */}
          <a
            href={siteConfig.phoneHref}
            className="md:hidden inline-flex items-center rounded-full bg-yellow-400 px-3 py-2 text-sm font-semibold text-black shadow hover:bg-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            Call Now
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-3">
            <Link
              href="/services"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


