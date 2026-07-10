interface ProjectCardProps {
  title: string;
  location: string;
  year: number;
  category: string;
  image: string;
  description?: string;
  href?: string;
}

/**
 * Design: Sofisticado & Minimalista
 * - Imagem grande e limpa
 * - Informações discretas
 * - Hover effects sutis
 */
export default function ProjectCard({
  title,
  location,
  year,
  category,
  image,
  description,
  href = '#',
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="group block overflow-hidden rounded-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-xs text-gray-500">{location}</p>
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded-sm">
            {year}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs font-medium text-gray-600">
            {category}
          </span>
          {description && (
            <p className="text-xs text-gray-500 line-clamp-1">{description}</p>
          )}
        </div>
      </div>
    </a>
  );
}
