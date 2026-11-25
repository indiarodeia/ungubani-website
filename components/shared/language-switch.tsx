import Link from "next/link";

import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/lib/locale";

type LanguageSwitchProps = {
  locale: Locale;
  hrefs: Record<Locale, string>;
  variant?: "light" | "dark";
  className?: string;
};

const labels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  fr: "FR",
};

/** PT/EN/FR switch — links to the equivalent page in each language. */
export function LanguageSwitch({ locale, hrefs, variant = "light", className }: LanguageSwitchProps) {
  const dark = variant === "dark";
  const activeClass = dark ? "text-primary-foreground" : "text-foreground";
  const inactiveClass = cn(
    "transition-colors",
    dark ? "text-primary-foreground/50 hover:text-primary-foreground/80" : "text-foreground/50 hover:text-foreground/80",
  );
  const dividerClass = dark ? "text-primary-foreground/40" : "text-foreground/40";

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-xs font-medium tracking-wide",
        className,
      )}
    >
      {locales.map((item, index) => (
        <span key={item} className="flex items-center gap-1.5">
          {index > 0 && (
            <span aria-hidden className={dividerClass}>
              /
            </span>
          )}
          <Link href={hrefs[item]} className={locale === item ? activeClass : inactiveClass}>
            {labels[item]}
          </Link>
        </span>
      ))}
    </div>
  );
}
