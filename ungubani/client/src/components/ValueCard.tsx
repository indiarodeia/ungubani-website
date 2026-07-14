import { ReactNode } from 'react';

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

/**
 * Design: Sofisticado & Minimalista
 * - Ícone simples e elegante
 * - Tipografia clara
 * - Espaçamento generoso
 */
export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="text-center">
      {/* Icon */}
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-gray-700">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
