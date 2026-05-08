import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for production quality
  reactStrictMode: true,
  // Output standalone for easy deployment
  output: "standalone",
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
