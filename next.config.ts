import type { NextConfig } from "next";

// When deploying to GitHub Pages at `username.github.io/AsterTest/`, the
// Pages workflow sets NEXT_PUBLIC_BASE_PATH=/AsterTest so all asset URLs
// (`/_next/static/...`) resolve correctly under that subpath. When running
// `next dev` locally or deploying to a custom domain / Vercel, leave the
// variable unset and the site is served from `/`.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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

  // Honour the configured subpath in production builds (no-op when empty).
  basePath,
  assetPrefix: basePath || undefined,

  reactStrictMode: true,
};

export default nextConfig;
