export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefixes a locale-agnostic path (e.g. "/projects") with its locale segment. */
export function localeHref(locale: Locale, path: string) {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
