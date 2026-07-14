import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

/**
 * Design: Premium Institutional Header
 * - Azul escuro background com logo e navegação limpa
 * - Sticky positioning para navegação sempre visível
 * - Responsive menu para mobile
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Quem Somos', href: '/about' },
    { label: 'Projetos', href: '/projects' },
    { label: 'Contactos', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src="/manus-storage/ungubanilogo_2fd42f83.png"
            alt="Ungubani"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-700 font-medium hover:text-[#0099D8] transition-colors duration-200 relative group">
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0099D8] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <Link href="/contact" className="hidden md:inline-block btn-primary">
          Contactar
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

        {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 py-4">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 font-medium hover:text-[#0099D8] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
              Contactar
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
