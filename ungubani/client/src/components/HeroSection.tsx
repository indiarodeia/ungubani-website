import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  ctaButtons?: Array<{
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }>;
}

/**
 * Design: Hero com overlay azul fade
 * - Overlay em gradiente azul
 * - Tipografia elegante
 * - Espaçamento generoso
 */
export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  children,
  ctaButtons,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay azul com fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-700/50"></div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight font-serif">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        )}

        {children}

        {ctaButtons && ctaButtons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            {ctaButtons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.href}
                className={`px-8 py-3 font-medium transition-all duration-300 rounded-none ${
                  btn.variant === 'secondary'
                    ? 'bg-transparent border-2 border-white text-white hover:bg-white/20'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                }`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
