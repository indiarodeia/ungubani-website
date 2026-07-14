import { Link } from 'wouter';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

/**
 * Design: Professional Footer
 * - Azul escuro background com texto branco
 * - Informações de contacto e links úteis
 * - Redes sociais
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2C2C] text-white mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/manus-storage/ungubanilogo_2fd42f83.png"
                alt="Ungubani"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Construção civil e obras públicas com rigor, qualidade e excelência na execução.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#0099D8] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#0099D8] transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-[#0099D8] transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#0099D8] transition-colors">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Construção Civil</li>
              <li>Obras Públicas</li>
              <li>LSF Engenheirado</li>
              <li>Reabilitação</li>
              <li>Gestão de Obra</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contactos</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">+351 XXX XXX XXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">info@ungubani.pt</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Açores, Portugal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Ungubani. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-[#0099D8] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#0099D8] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#0099D8] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
