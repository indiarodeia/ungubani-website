import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, isLocale } from "@/lib/locale";

/**
 * Picks the best-matching supported locale from an `Accept-Language` header,
 * without pulling in a negotiation library — we only ever match against our
 * own three locales. Falls back to `defaultLocale` when nothing matches.
 */
function detectLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, qValue] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: qValue ? parseFloat(qValue) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferred) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}

/**
 * Only handles "/" — every other route is already locale-prefixed. Not used
 * by the static export (`npm run build:static`); Proxy requires a server, so
 * that build falls back to a fixed redirect baked into the exported HTML.
 */
export function proxy(request: NextRequest) {
  const locale = detectLocale(request);
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: "/",
};
