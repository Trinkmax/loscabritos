import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPhone } from '../data/businessProfile';
import { trackReserveCallClick } from '../lib/analytics';
import './Navbar.css';

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
              href={getPhone().href}
              className="btn btn--primary navbar__cta"
              onClick={() => trackReserveCallClick('navbar')}
            >
              Reservar
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
