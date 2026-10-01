import type { NextConfig } from "next";

// `npm run build:static` produces a plain HTML/CSS/JS export (in ./out) for
// hosting without Node.js. Proxy (proxy.ts) needs a server, so it never runs
// against that build — "/" there falls back to a fixed redirect baked into
// the exported HTML by scripts/package-static.mjs instead. The normal build
// relies on proxy.ts to redirect "/" based on the visitor's language.
const isStaticExport = process.env.STATIC_EXPORT === "true";
// Subfolder the static export is uploaded to (e.g. domain.com/ungubani/).
const basePath = process.env.STATIC_BASE_PATH ?? "/ungubani";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { loader: "custom", loaderFile: "./lib/static-image-loader.ts" },
      env: { NEXT_PUBLIC_BASE_PATH: basePath },
    }
  : {};

export default nextConfig;
