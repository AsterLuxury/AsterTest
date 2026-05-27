import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — produces an `out/` folder you can host anywhere.
  // Remove this line to deploy as a full Next.js app on Vercel/Node.
  output: "export",

  // Required for static export since Next/Image's optimizer needs a server.
  images: {
    unoptimized: true,
  },

  // Add a trailing slash so `/about` becomes `/about/index.html` in static export.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
