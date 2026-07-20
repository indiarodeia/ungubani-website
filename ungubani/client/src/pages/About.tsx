import HeroSection from '@/components/HeroSection';
import ValueCard from '@/components/ValueCard';
import { Award, Users, Target, Zap } from 'lucide-react';

/**
 * Design: About Page
 * - Hero section
 * - História e experiência
 * - Áreas de atuação
 * - Valores e compromisso
 */
export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Quem Somos"
        subtitle="Mais de duas décadas de experiência em construção civil de qualidade"
        backgroundImage="/casa-brown.jpg"
      />

      {/* History Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">A Nossa História</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A Ungubani nasceu da visão de profissionais experientes em construção civil, com o objetivo de criar uma empresa que combinasse rigor técnico com excelência na execução.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ao longo dos anos, construímos uma reputação sólida nos Açores, desenvolvendo projetos residenciais, comerciais e de obras públicas que refletem o nosso compromisso com a qualidade.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hoje, a Ungubani é reconhecida como uma construtora premium, capaz de executar projetos de elevada complexidade técnica com precisão e profissionalismo.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/sala.jpg"
                alt="Ungubani - História"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-28 bg-[#F5F7FA]">
        <div className="container">
          <h2 className="section-title mb-12 text-center">Experiência e Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { number: '20+', label: 'Anos de Experiência' },
              { number: '150+', label: 'Projetos Concluídos' },
              { number: '100+', label: 'Clientes Satisfeitos' },
              { number: 'Classe 4', label: 'Alvará de Construtor' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-lg border border-gray-200">
                <div className="text-4xl font-bold text-[#0099D8] mb-2">{stat.number}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="section-title mb-12 text-center">Áreas de Atuação</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Construção Civil',
                items: ['Residencial', 'Comercial', 'Misto'],
              },
              {
                title: 'Obras Públicas',
                items: ['Infraestruturas', 'Equipamentos', 'Reabilitação'],
              },
              {
                title: 'Tecnologias Avançadas',
                items: ['LSF Engenheirado', 'Betão Celular', 'Sistemas Inovadores'],
              },
              {
                title: 'Serviços Complementares',
                items: ['Gestão de Obra', 'Consultoria', 'Supervisão'],
              },
            ].map((area, idx) => (
              <div key={idx} className="p-8 bg-[#E8F5FB] rounded-lg border border-[#0099D8]/20">
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-[#0099D8] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#E8F5FB] to-white">
        <div className="container">
          <h2 className="section-title mb-12 text-center">Compromisso com a Qualidade</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award size={24} />,
                title: 'Rigor Técnico',
                description: 'Conformidade total com normas e regulamentos internacionais.',
              },
              {
                icon: <Target size={24} />,
                title: 'Precisão',
                description: 'Atenção aos detalhes em cada fase da construção.',
              },
              {
                icon: <Users size={24} />,
                title: 'Profissionalismo',
                description: 'Equipa experiente e dedicada ao sucesso de cada projeto.',
              },
              {
                icon: <Zap size={24} />,
                title: 'Inovação',
                description: 'Tecnologias avançadas e métodos construtivos modernos.',
              },
            ].map((value, idx) => (
              <ValueCard
                key={idx}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="section-title mb-12 text-center">Certificações e Qualificações</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Alvará Classe 4',
                description: 'Licença para construção de edifícios de qualquer tipo e dimensão.',
              },
              {
                title: 'Certificações Técnicas',
                description: 'Conformidade com normas ISO e regulamentos de construção.',
              },
              {
                title: 'Seguros Profissionais',
                description: 'Cobertura completa e responsabilidade civil profissional.',
              },
            ].map((cert, idx) => (
              <div key={idx} className="p-8 bg-[#F5F7FA] rounded-lg border border-gray-200 text-center">
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-3">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
