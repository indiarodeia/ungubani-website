/**
 * Production domain is not decided yet. Set NEXT_PUBLIC_SITE_URL once it is —
 * this fallback is a placeholder only, used for metadataBase, sitemap.xml,
 * robots.txt and canonical/Open Graph URLs.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ungubani.pt";

/**
 * Search engines are blocked by default so draft/preview deployments never
 * get indexed. Set NEXT_PUBLIC_ALLOW_INDEXING=true only on the final launch.
 */
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
