"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "li";
};

export function Reveal({ children, delay = 0, className, style, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | HTMLLIElement>(null);
  // Always starts hidden, matching the server-rendered markup — the
  // `motion-reduce:` CSS variants below (not this state) are what keep
  // reduced-motion users from ever seeing the hidden/animated state, so
  // there's no need to branch on matchMedia here (and doing so during the
  // initial client render would mismatch the SSR output).
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Comp = as;

  return (
    <Comp
      ref={ref as never}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "opacity-0 translate-y-6 transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none",
        visible && "opacity-100 translate-y-0",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
