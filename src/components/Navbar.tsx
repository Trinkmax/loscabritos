import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// SVG Icon component for the goat silhouette
const GoatIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 64 64" fill="currentColor">
    <path d="M52 20c-2-4-6-8-12-8-2 0-4 1-6 2-2-1-4-2-6-2-6 0-10 4-12 8-4 8-2 18 4 24 2 2 6 4 10 4h8c4 0 8-2 10-4 6-6 8-16 4-24zm-4 20c-2 2-4 3-8 3h-8c-4 0-6-1-8-3-4-4-6-12-2-18 2-3 4-5 8-5 2 0 4 1 6 3l2 2 2-2c2-2 4-3 6-3 4 0 6 2 8 5 4 6 2 14-2 18z" />
    <circle cx="24" cy="28" r="3" />
    <circle cx="40" cy="28" r="3" />
    <path d="M12 14c-2-4 0-10 4-12 2-1 4 0 4 2s-2 4-4 6c0 2 0 4-2 4h-2zm40 0c2-4 0-10-4-12-2-1-4 0-4 2s2 4 4 6c0 2 0 4 2 4h2z" />
  </svg>
);

interface NavLink {
  href: string;
  label: string;
  isRoute?: boolean;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '/carta', label: 'Carta', isRoute: true },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <a href="#inicio" className="navbar__logo">
          <GoatIcon className="navbar__logo-icon" />
          <span className="navbar__logo-text">Los Cabritos</span>
        </a>

        <ul className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href} className="navbar__item">
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="navbar__link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li className="navbar__item navbar__item--cta">
            <a href="tel:+542664269673" className="btn btn--primary navbar__cta">
              Reservar
            </a>
          </li>
        </ul>

        <button
          className={`navbar__toggle ${isMobileMenuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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
