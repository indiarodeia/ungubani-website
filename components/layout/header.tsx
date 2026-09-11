"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollY } from "@/lib/use-scroll-y";
import { LanguageSwitch } from "@/components/shared/language-switch";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const { siteConfig } = getDictionary(locale).site;
  const pathname = usePathname();
  const scrollY = useScrollY();
  const isScrolled = scrollY > 8;
  const isHome = pathname === `/${locale}`;
  const transparent = isHome && !isScrolled;

  const otherPath = pathname.replace(/^\/(pt|en)/, "") || "";
  const languageHrefs = { pt: `/pt${otherPath}`, en: `/en${otherPath}` };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/80",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-6 transition-[height] duration-300",
          isScrolled ? "h-14" : "h-16",
        )}
      >
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src={transparent ? "/brand/logo-mark-inverted.png" : "/brand/logo-mark.png"}
            alt=""
            width={30}
            height={34}
            className={cn(
              "w-auto transition-all duration-300",
              isScrolled ? "h-8" : "h-9",
            )}
            priority
          />
          <span
            className={cn(
              "font-heading text-lg font-semibold tracking-tight transition-colors duration-300",
              transparent ? "text-white" : "text-foreground",
            )}
          >
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors",
                  transparent
                    ? "text-white/85 hover:text-white"
                    : "text-foreground/80 hover:text-foreground",
                  isActive && (transparent ? "text-white" : "text-foreground"),
                )}
              >
                {item.label}
                {isActive && (
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-1 h-px",
                      transparent ? "bg-white" : "bg-accent",
                    )}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitch locale={locale} hrefs={languageHrefs} variant={transparent ? "dark" : "light"} />
          <Button asChild variant={transparent ? "outline-invert" : "default"}>
            <Link href={siteConfig.primaryCta.href}>{siteConfig.primaryCta.label}</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn("md:hidden", transparent && "text-white hover:bg-white/10 hover:text-white")}
            >
              <Menu />
              <span className="sr-only">{locale === "pt" ? "Abrir menu" : "Open menu"}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {siteConfig.nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-md px-2 py-3 text-base font-medium text-foreground hover:bg-muted",
                      item.href === pathname && "text-accent",
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4 px-4 pb-4">
              <LanguageSwitch locale={locale} hrefs={languageHrefs} className="px-2" />
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link href={siteConfig.primaryCta.href}>{siteConfig.primaryCta.label}</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
