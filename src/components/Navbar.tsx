import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getWhatsApp } from '../data/businessProfile';
import { trackReserveWhatsAppClick } from '../lib/analytics';
import './Navbar.css';

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface NavLink {
  label: string;
  /** anchor id (sección del home) o ruta */
  target: string;
  kind: 'anchor' | 'route';
}

const navLinks: NavLink[] = [
  { label: 'Inicio', target: 'inicio', kind: 'anchor' },
  { label: 'Nosotros', target: '/nosotros', kind: 'route' },
  { label: 'Entretenimiento', target: '/entretenimiento', kind: 'route' },
  { label: 'Carta', target: '/carta', kind: 'route' },
  { label: 'Contacto', target: 'contacto', kind: 'anchor' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // En el home las secciones se navegan con #ancla (scroll suave);
  // desde otra solapa se usa /#ancla para volver al home y posicionar.
  const anchorHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} aria-label="Navegación principal">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src="/images/branding/logo-los-cabritos-de-oro.png" alt="Los Cabritos De Oro" className="navbar__logo-img" />
          <span className="navbar__logo-text">Los Cabritos De Oro</span>
        </Link>

        <ul className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label} className="navbar__item">
              {link.kind === 'route' ? (
                <Link to={link.target} className="navbar__link" onClick={closeMenu}>
                  {link.label}
                </Link>
              ) : (
                <a href={anchorHref(link.target)} className="navbar__link" onClick={closeMenu}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li className="navbar__item navbar__item--cta">
            <a
              href={getWhatsApp().href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary navbar__cta"
              onClick={() => trackReserveWhatsAppClick('navbar')}
            >
              <WhatsAppIcon /> Reservar
            </a>
          </li>
        </ul>

        <button
          className={`navbar__toggle ${isMobileMenuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menú"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
