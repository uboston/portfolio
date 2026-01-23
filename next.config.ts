import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for S3 + CloudFront hosting
  output: "export",

  // Optimize images for static hosting
  images: {
    unoptimized: true, // Required for static export
  },

  // Better compatibility with S3 routing
  trailingSlash: true,

  // Get rid of dev tools
  devIndicators: false,
};

export default nextConfig;
