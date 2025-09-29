import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      // keep empty for now; add libs if needed
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Reduce memory usage during build
  compress: true,
};

export default nextConfig;
