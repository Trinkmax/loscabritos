import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
