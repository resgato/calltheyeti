import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { siteConfig, buildLocalBusinessJsonLd } from "@/lib/site";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Best Plumber in Arizona | Yeti Plumbing",
    template: "%s | Yeti Plumbing",
  },
  description:
    "Phoenix plumbers for custom homes, renovations, and service. Bathtubs, showers, faucets, kitchens, water heaters and more. Licensed • Insured • ROC360510.",
  keywords: [
    "Phoenix plumber",
    "custom home plumbing",
    "renovation plumbing",
    "kitchen plumbing",
    "bathroom plumber",
    "water heater install",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Yeti Plumbing | Phoenix Custom Homes, Renovations & Service",
    description:
      "Phoenix specialists in custom homes, renovations, and service plumbing — bathtubs, showers, faucets, kitchens and more.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeti Plumbing | Phoenix Custom Homes, Renovations & Service",
    description:
      "Phoenix specialists in custom homes, renovations, and service plumbing — bathtubs, showers, faucets, kitchens and more.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="yeti-jsonld" type="application/ld+json">
          {JSON.stringify(buildLocalBusinessJsonLd())}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <footer className="mt-24 border-t border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-black/70">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode} · {siteConfig.phone} · ROC360510
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
