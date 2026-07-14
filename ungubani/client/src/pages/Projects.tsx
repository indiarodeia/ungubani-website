import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';

/**
 * Design: Projects Page
 * - Hero section
 * - Filtros por categoria
 * - Grelha de projetos
 */
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const allProjects = [
    {
      title: 'Prime Infinity Residences',
      location: 'Açores, Portugal',
      year: 2024,
      category: 'Residencial',
      image: '/manus-storage/project-residential-1_4d77dea1.png',
      description: 'Projeto residencial de luxo em desenvolvimento',
      href: '/projects/prime-infinity',
    },
    {
      title: 'Edifício Comercial Moderno',
      location: 'Ponta Delgada',
      year: 2023,
      category: 'Comercial',
      image: '/manus-storage/project-commercial_6303d279.png',
      description: 'Complexo comercial com arquitetura contemporânea',
    },
    {
      title: 'Reabilitação Urbana',
      location: 'Angra do Heroísmo',
      year: 2023,
      category: 'Reabilitação',
      image: '/manus-storage/project-detail_0b9bf064.png',
      description: 'Modernização de edifício histórico',
    },
    {
      title: 'Infraestrutura Pública',
      location: 'São Miguel',
      year: 2022,
      category: 'Obras Públicas',
      image: '/manus-storage/hero-construction_8fcc4a53.png',
      description: 'Obra pública de grande envergadura',
    },
    {
      title: 'Complexo Residencial',
      location: 'Terceira',
      year: 2022,
      category: 'Residencial',
      image: '/manus-storage/project-residential-1_4d77dea1.png',
      description: 'Conjunto habitacional de qualidade',
    },
    {
      title: 'Projeto Comercial',
      location: 'Horta',
      year: 2021,
      category: 'Comercial',
      image: '/manus-storage/project-commercial_6303d279.png',
      description: 'Centro comercial moderno',
    },
  ];

  const categories = ['Todos', 'Residencial', 'Comercial', 'Obras Públicas', 'Reabilitação', 'Em Curso', 'Concluídos'];

  const filteredProjects = selectedCategory === 'Todos'
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Nossos Projetos"
        subtitle="Conheça os projetos que refletem qualidade, rigor e excelência"
        backgroundImage="/manus-storage/hero-construction_8fcc4a53.png"
      />

      {/* Projects Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          {/* Filters */}
          <div className="mb-12">
            <h2 className="section-title mb-8">Filtrar por Categoria</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#2C2C2C] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                location={project.location}
                year={project.year}
                category={project.category}
                image={project.image}
                description={project.description}
                href={project.href}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
