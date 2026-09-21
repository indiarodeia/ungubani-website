import type { NextConfig } from "next";

// `npm run build:static` produces a plain HTML/CSS/JS export (in ./out) for
// hosting without Node.js. The normal build keeps the "/" -> "/pt" redirect.
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
  : {
      async redirects() {
        return [
          {
            source: "/",
            destination: "/pt",
            permanent: true,
          },
        ];
      },
    };

export default nextConfig;
