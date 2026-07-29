"use client";

import Image from "next/image";

import { useScrollY } from "@/lib/use-scroll-y";

type ParallaxMediaProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  strength?: number;
};

export function ParallaxMedia({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  strength = 0.06,
}: ParallaxMediaProps) {
  const scrollY = useScrollY();
  const offset = Math.max(-28, Math.min(28, scrollY * strength));

  return (
    <div className="absolute inset-[-8%]">
      <div
        className="relative h-full w-full"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
