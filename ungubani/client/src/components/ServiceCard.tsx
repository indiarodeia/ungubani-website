interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

/**
 * Design: Sofisticado & Minimalista
 * - Cards limpos com bordas sutis
 * - Sem decorações desnecessárias
 * - Foco na tipografia e espaçamento
 */
export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
