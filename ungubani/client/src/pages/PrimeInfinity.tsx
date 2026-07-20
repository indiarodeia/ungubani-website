import HeroSection from '@/components/HeroSection';
import { CheckCircle, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Design: Prime Infinity Residences Project Page
 * - Hero section com render do projeto
 * - Apresentação do projeto
 * - Características principais
 * - Galeria de imagens
 * - Estado do projeto
 * - CTA para manifestação de interesse
 */
export default function PrimeInfinity() {
  const features = [
    'Arquitetura contemporânea de luxo',
    'Acabamentos premium em todas as unidades',
    'Localização privilegiada nos Açores',
    'Infraestruturas modernas e completas',
    'Áreas comuns de qualidade superior',
    'Estacionamento privado para cada unidade',
    'Sistema de segurança 24/7',
    'Eficiência energética certificada',
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Prime Infinity Residences"
        subtitle="Um novo conceito de habitação premium nos Açores"
        backgroundImage="/casa.jpg"
        ctaButtons={[
          { label: 'Manifestar Interesse', href: '#interest', variant: 'primary' },
          { label: 'Voltar aos Projetos', href: '/projects', variant: 'secondary' },
        ]}
      />

      {/* Project Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Sobre o Projeto</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Prime Infinity Residences é um projeto residencial de luxo que redefine o conceito de habitação contemporânea nos Açores. Desenvolvido pela Ungubani com rigor técnico e atenção aos detalhes, este projeto combina arquitetura moderna com acabamentos premium.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Localizado numa zona privilegiada, o projeto oferece uma oportunidade única de investimento em habitação de qualidade superior, com infraestruturas completas e serviços de excelência.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-[#E8F5FB] rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Localização</p>
                  <p className="font-bold text-[#2C2C2C]">Açores</p>
                </div>
                <div className="p-4 bg-[#E8F5FB] rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Estado</p>
                  <p className="font-bold text-[#2C2C2C]">Em Desenvolvimento</p>
                </div>
                <div className="p-4 bg-[#E8F5FB] rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Unidades</p>
                  <p className="font-bold text-[#2C2C2C]">24 Apartamentos</p>
                </div>
                <div className="p-4 bg-[#E8F5FB] rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Previsão</p>
                  <p className="font-bold text-[#2C2C2C]">2025</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/cozinha.jpg"
                alt="Prime Infinity Residences"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-28 bg-[#F5F7FA]">
        <div className="container">
          <h2 className="section-title mb-12 text-center">Características Principais</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0099D8] transition-colors">
                <CheckCircle className="text-[#0099D8] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="section-title mb-12 text-center">Detalhes do Projeto</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin size={24} />,
                title: 'Localização Estratégica',
                description: 'Situado numa zona privilegiada dos Açores, com fácil acesso a infraestruturas e serviços.',
              },
              {
                icon: <Calendar size={24} />,
                title: 'Cronograma Definido',
                description: 'Projeto em fase de desenvolvimento com previsão de conclusão para 2025.',
              },
              {
                icon: <Users size={24} />,
                title: 'Comunidade Exclusiva',
                description: '24 unidades habitacionais cuidadosamente projetadas para máximo conforto.',
              },
            ].map((detail, idx) => (
              <div key={idx} className="p-8 bg-[#E8F5FB] rounded-lg border border-[#0099D8]/20">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2C2C2C] to-[#0099D8] text-white mb-4">
                  {detail.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-3">{detail.title}</h3>
                <p className="text-gray-700">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-[#F5F7FA]">
        <div className="container">
          <h2 className="section-title mb-12 text-center">Galeria de Imagens</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/casa.jpg',
              '/cozinha.jpg',
              '/sala.jpg',
              '/predio.jpg',
              '/casa-premium.jpg',
              '/bar.jpg',
            ].map((image, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                <img
                  src={image}
                  alt={`Prime Infinity ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section id="interest" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title mb-4 text-center">Manifestar Interesse</h2>
            <p className="text-center text-gray-600 mb-12">
              Preencha o formulário abaixo para receber mais informações sobre o Prime Infinity Residences.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099D8] focus:ring-2 focus:ring-[#0099D8]/20"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu email"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099D8] focus:ring-2 focus:ring-[#0099D8]/20"
                  required
                />
              </div>

              <input
                type="tel"
                placeholder="Seu telefone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099D8] focus:ring-2 focus:ring-[#0099D8]/20"
              />

              <textarea
                placeholder="Mensagem (opcional)"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099D8] focus:ring-2 focus:ring-[#0099D8]/20 resize-none"
              ></textarea>

              <button type="submit" className="w-full btn-primary">
                Enviar Manifestação de Interesse
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-12 bg-[#F5F7FA] border-t border-gray-200">
        <div className="container text-center">
          <Link href="/projects" className="inline-block btn-secondary">
            ← Voltar aos Projetos
          </Link>
        </div>
      </section>
    </main>
  );
}
