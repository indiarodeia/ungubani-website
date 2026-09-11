import Link from "next/link";

import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/locale";

type LanguageSwitchProps = {
  locale: Locale;
  hrefs: { pt: string; en: string };
  variant?: "light" | "dark";
  className?: string;
};

/** PT/EN switch — links to the equivalent page in the other language. */
export function LanguageSwitch({ locale, hrefs, variant = "light", className }: LanguageSwitchProps) {
  const dark = variant === "dark";
  const activeClass = dark ? "text-primary-foreground" : "text-foreground";
  const inactiveClass = cn(
    "transition-colors",
    dark ? "text-primary-foreground/50 hover:text-primary-foreground/80" : "text-foreground/50 hover:text-foreground/80",
  );

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-xs font-medium tracking-wide",
        className,
      )}
    >
      <Link href={hrefs.pt} className={locale === "pt" ? activeClass : inactiveClass}>
        PT
      </Link>
      <span aria-hidden className={dark ? "text-primary-foreground/40" : "text-foreground/40"}>
        /
      </span>
      <Link href={hrefs.en} className={locale === "en" ? activeClass : inactiveClass}>
        EN
      </Link>
    </div>
  );
}
