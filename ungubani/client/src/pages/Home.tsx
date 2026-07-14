import { Link } from 'wouter';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import { Building2, Users, Award, Zap, Shield, Lightbulb } from 'lucide-react';

/**
 * Design: Replicação exata da referência
 * - Hero com overlay escuro
 * - Seção "Quem Somos" com layout alternado
 * - Ícones em grid
 * - Projetos em grid 3 colunas
 * - Seção Prime Infinity com fundo escuro
 * - Valores em grid 4 colunas
 * - Testemunhos com cards
 * - CTA section com fundo escuro
 */
export default function Home() {
  const projects = [
    {
      title: 'Prime Infinity Residences',
      location: 'Açores, Portugal',
      year: 2024,
      category: 'Residencial',
      image: '/manus-storage/project-residential-1_a1b2c3d4.png',
      description: 'Projeto residencial de luxo...',
    },
    {
      title: 'Edifício Comercial Moderno',
      location: 'Ponta Delgada',
      year: 2023,
      category: 'Comercial',
      image: '/manus-storage/project-commercial_e5f6g7h8.png',
      description: 'Complexo comercial com arquitetura...',
    },
    {
      title: 'Reabilitação Urbana',
      location: 'Angra do Heroísmo',
      year: 2023,
      category: 'Reabilitação',
      image: '/manus-storage/project-detail_i9j0k1l2.png',
      description: 'Modernização de edifício histórico...',
    },
  ];

  const values = [
    {
      icon: <Building2 size={32} />,
      title: 'Rigor Técnico',
      description: 'Conformidade total com normas e regulamentos de construção',
    },
    {
      icon: <Award size={32} />,
      title: 'Qualidade',
      description: 'Materiais premium e acabamentos impecáveis em cada projeto',
    },
    {
      icon: <Users size={32} />,
      title: 'Compromisso',
      description: 'Dedicação ao sucesso e satisfação de cada cliente',
    },
    {
      icon: <Zap size={32} />,
      title: 'Excelência',
      description: 'Inovação contínua e melhoria em processos construtivos',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Construção com rigor, qualidade e visão."
        subtitle="Projetos customizados com precisão, confiança e atenção aos detalhes."
        backgroundImage="/manus-storage/hero-construction_8fcc4a53.png"
        ctaButtons={[
          { label: 'Conhecer Projetos', href: '/projects' },
          { label: 'Abrir Contacto', href: '/contact', variant: 'secondary' },
        ]}
      />

      {/* Quem Somos Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Uma empresa orientada para a qualidade, o compromisso e a excelência.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                A Ungubani é uma empresa de construção civil e obras públicas sediada nos Açores, com mais de duas décadas de experiência na execução de projetos de elevada complexidade.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Ao longo dos anos, consolidamos uma reputação sólida nos Açores, desenvolvendo projetos residenciais, comerciais e de obras públicas que refletem nosso compromisso com a qualidade.
              </p>
              <Link href="/about">
                <a className="inline-block mt-6 text-blue-600 font-medium hover:text-blue-700">
                  Saber Mais →
                </a>
              </Link>
            </div>

            {/* Imagem */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/manus-storage/project-residential-1_a1b2c3d4.png"
                alt="Ungubani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação - Grid de Ícones */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Áreas de Atuação
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Oferecemos soluções completas em construção civil, adaptadas às necessidades de cada projeto.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🏗️', title: 'Construção Civil', desc: 'Projetos residenciais e comerciais' },
              { icon: '🏛️', title: 'Obras Públicas', desc: 'Infraestruturas e equipamentos públicos' },
              { icon: '🔧', title: 'LSF Engenheirado', desc: 'Construção em aço leve' },
              { icon: '🔨', title: 'Reabilitação', desc: 'Modernização de edifícios' },
            ].map((area, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Os Nossos Projetos
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos mais relevantes que refletem qualidade, rigor e excelência.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-700">
                Ver Todos os Projetos
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Prime Infinity Section */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="/manus-storage/project-residential-1_a1b2c3d4.png"
                alt="Prime Infinity Residences"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conteúdo */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prime Infinity Residences
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Um projeto residencial premium, pensado para quem busca qualidade, conforto e uma visão moderna de viver nos Açores.
              </p>
              <Link href="/prime-infinity">
                <a className="inline-block px-6 py-2.5 bg-white text-gray-900 font-medium rounded-sm hover:bg-gray-100">
                  Conhecer Projeto
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O que nos define */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            O que nos define
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reconhecimentos */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Reconhecimentos e Confiança
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Certificação Técnica',
                desc: 'Conformidade com normas ISO e regulamentos de construção',
              },
              {
                title: 'Seguro Profissional',
                desc: 'Cobertura completa e responsabilidade civil profissional',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tem um projeto em mente?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Fale connosco e discuta como a Ungubani pode transformar a sua ideia em realidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a className="px-8 py-3 bg-white text-gray-900 font-medium rounded-sm hover:bg-gray-100">
                Entrar em Contacto
              </a>
            </Link>
            <Link href="/projects">
              <a className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-sm hover:bg-white/10">
                Ver Projetos
              </a>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
