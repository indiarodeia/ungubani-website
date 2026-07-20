import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { MapView } from '@/components/Map';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Design: Contact Page
 * - Hero section com imagem de construção
 * - Informações de contacto com ícones
 * - Formulário de contacto funcional
 * - Mapa interativo Google Maps com marcador da empresa
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Contacte-nos"
        subtitle="Estamos aqui para responder às suas dúvidas e discutir o seu projeto"
        backgroundImage="/paisagem.jpg"
      />

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="section-title mb-8">Informações</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2C2C2C] to-[#0099D8] text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C2C2C] mb-1">Telefone</h3>
                    <p className="text-gray-600">+351 XXX XXX XXX</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2C2C2C] to-[#0099D8] text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C2C2C] mb-1">Email</h3>
                    <p className="text-gray-600">info@ungubani.pt</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2C2C2C] to-[#0099D8] text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C2C2C] mb-1">Localização</h3>
                    <p className="text-gray-600">Açores, Portugal</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2C2C2C] to-[#0099D8] text-white">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C2C2C] mb-1">Horário</h3>
                    <p className="text-gray-600">Seg-Sex: 09:00 - 18:00</p>
                    <p className="text-gray-600">Sáb-Dom: Fechado</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-[#2C2C2C] mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  {['Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 bg-[#E8F5FB] text-[#2C2C2C] rounded-lg hover:bg-[#0099D8] hover:text-white transition-colors text-sm font-medium"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="section-title mb-8">Envie-nos uma Mensagem</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099D8] focus:ring-2 focus:ring-[#0099D8]/20 transition-all"
                      placeholder="Seu nome"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099D8] focus:ring-2 focus:ring-[#0099D8]/20 transition-all"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099D8] focus:ring-2 focus:ring-[#0099D8]/20 transition-all"
                    placeholder="+351 XXX XXX XXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099D8] focus:ring-2 focus:ring-[#0099D8]/20 transition-all resize-none"
                    placeholder="Descreva o seu projeto ou dúvida..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-28 bg-[#F5F7FA]">
        <div className="container">
          <h2 className="section-title mb-8 text-center">Localização</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <MapView
              initialCenter={{ lat: 37.7412, lng: -25.6756 }}
              initialZoom={10}
              onMapReady={(map: google.maps.Map) => {
                // Adicionar marcador da Ungubani
                const marker = new window.google.maps.Marker({
                  position: { lat: 37.7412, lng: -25.6756 },
                  map: map,
                  title: 'Ungubani - Construção Civil',
                  icon: 'http://maps.google.com/mapfiles/ms/icons/0099D8-marker.png',
                });

                // Info window
                const infoWindow = new window.google.maps.InfoWindow({
                  content: `
                    <div style="padding: 12px; font-family: Inter, sans-serif;">
                      <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1A1A1A;">Ungubani</h3>
                      <p style="margin: 0 0 4px 0; font-size: 14px; color: #666;">Construção Civil e Obras Públicas</p>
                      <p style="margin: 0; font-size: 13px; color: #0099D8;">Açores, Portugal</p>
                    </div>
                  `,
                });

                marker.addListener('click', () => {
                  infoWindow.open(map, marker);
                });
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
