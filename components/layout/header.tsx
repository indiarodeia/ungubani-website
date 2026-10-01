"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { DropdownMenu } from "radix-ui";

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

const moreInLabelByLocale: Record<Locale, (label: string) => string> = {
  pt: (label) => `Mais em ${label}`,
  en: (label) => `More in ${label}`,
  fr: (label) => `Plus dans ${label}`,
};

const openMenuLabelByLocale: Record<Locale, string> = {
  pt: "Abrir menu",
  en: "Open menu",
  fr: "Ouvrir le menu",
};

export function Header({ locale }: HeaderProps) {
  const { siteConfig } = getDictionary(locale).site;
  const rawPathname = usePathname();
  const pathname = rawPathname.length > 1 ? rawPathname.replace(/\/$/, "") : rawPathname;
  const scrollY = useScrollY();
  const isScrolled = scrollY > 8;
  const isHome = pathname === `/${locale}`;
  const transparent = isHome && !isScrolled;

  const otherPath = pathname.replace(/^\/(pt|en|fr)/, "") || "";
  const languageHrefs = {
    pt: `/pt${otherPath}`,
    en: `/en${otherPath}`,
    fr: `/fr${otherPath}`,
  };

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
          isScrolled ? "h-[4.5rem]" : "h-20",
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
              isScrolled ? "h-9" : "h-10",
            )}
            priority
          />
          <span
            className={cn(
              "font-heading text-xl font-semibold tracking-tight transition-colors duration-300",
              transparent ? "text-white" : "text-foreground",
            )}
          >
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive =
              item.href === pathname || item.children?.some((child) => child.href === pathname);
            const linkColor = transparent
              ? "text-white/85 hover:text-white"
              : "text-foreground/80 hover:text-foreground";
            const activeColor = transparent ? "text-white" : "text-foreground";

            if (!item.children?.length) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors",
                    linkColor,
                    isActive && activeColor,
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
            }

            return (
              <div key={item.href} className="relative flex items-center gap-1">
                <Link
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors",
                    linkColor,
                    isActive && activeColor,
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
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "rounded-[2px] p-0.5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                        linkColor,
                      )}
                    >
                      <ChevronDown className="size-3.5" />
                      <span className="sr-only">{moreInLabelByLocale[locale](item.label)}</span>
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      align="start"
                      sideOffset={16}
                      className="z-50 min-w-48 border border-border bg-background py-1.5 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)] data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0"
                    >
                      {item.children.map((child) => (
                        <DropdownMenu.Item key={child.href} asChild>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm font-medium text-foreground/80 outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground"
                          >
                            {child.label}
                          </Link>
                        </DropdownMenu.Item>
                      ))}
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
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
              <span className="sr-only">{openMenuLabelByLocale[locale]}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {siteConfig.nav.map((item) => (
                <div key={item.href} className="flex flex-col">
                  <SheetClose asChild>
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
                  {item.children?.map((child) => (
                    <SheetClose asChild key={child.href}>
                      <Link
                        href={child.href}
                        className={cn(
                          "rounded-md px-2 py-2.5 pl-6 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                          child.href === pathname && "text-accent",
                        )}
                      >
                        {child.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
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
