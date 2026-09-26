import { Link, useLocation } from 'react-router-dom';
import { businessProfile, getWhatsApp, getEmail } from '../data/businessProfile';
import { isMundialActive } from '../data/mundialData';
import { trackReserveWhatsAppClick } from '../lib/analytics';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Footer.css';

// SVG Icons
const WhatsAppIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const MapPinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const Footer = () => {
    const wa = getWhatsApp();
    const email = getEmail();
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    const anchorHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

    const social = businessProfile.socialMedia;
    const hasSocial = social.instagram || social.facebook;

    const contentReveal = useScrollReveal<HTMLDivElement>({ threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

    return (
        <footer className="footer">
            <div className="footer__wave">
                <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
                    <path
                        d="M0,60 C240,0 480,60 720,30 C960,0 1200,45 1440,15 L1440,60 L0,60 Z"
                        fill="var(--color-charcoal)"
                    />
                </svg>
            </div>

            <div className="container">
                <div
                    ref={contentReveal.ref}
                    className={`footer__content ${hasSocial ? 'footer__content--with-social' : ''} reveal reveal--up ${contentReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src={businessProfile.logo} alt={businessProfile.brandName} className="footer__logo-img" />
                            <span className="footer__logo-text">{businessProfile.brandName}</span>
                        </div>
                        <p className="footer__tagline">{businessProfile.slogan}</p>
                        <p className="footer__description">
                            {businessProfile.description}
                        </p>
                    </div>

                    <div className="footer__links">
                        <h4>Navegación</h4>
                        <ul>
                            <li><a href={anchorHref('inicio')}>Inicio</a></li>
                            {isMundialActive() && <li><a href={anchorHref('mundial')}>Mundial 2026</a></li>}
                            <li><Link to="/nosotros">Nuestra Historia</Link></li>
                            <li><Link to="/entretenimiento">Entretenimiento</Link></li>
                            <li><Link to="/carta">Carta</Link></li>
                            <li><a href={anchorHref('contacto')}>Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer__contact">
                        <h4>Contacto</h4>
                        <ul>
                            <li>
                                <MapPinIcon />
                                <span>
                                    A 35 km de la ciudad de San Luis por la ruta provincial n° 3 o la ruta Nacional n° 146. En el corazón de Villa de la Quebrada, la Tierra de la Fe.
                                </span>
                            </li>
                            <li>
                                <MapPinIcon />
                                <span>
                                    A 78 km de San Luis, nuestra segunda sede: en LA CAROLINA, "el pueblo más lindo del mundo", declarado por la UNESCO en el año 2023.
                                </span>
                            </li>
                            <li>
                                <MapPinIcon />
                                <span>
                                    ¡Nuevo! Nuestro tercer local en NOGOLÍ, sobre calle 9 de Julio, camino al dique.
                                </span>
                            </li>
                            <li>
                                <WhatsAppIcon />
                                <a
                                    href={wa.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackReserveWhatsAppClick('footer')}
                                >
                                    {wa.value}
                                </a>
                            </li>
                            <li>
                                <MailIcon />
                                <a href={email.href}>{email.value}</a>
                            </li>
                        </ul>
                    </div>

                    {hasSocial && (
                        <div className="footer__social">
                            <h4>Seguinos</h4>
                            <div className="footer__social-links">
                                {social.instagram && (
                                    <a
                                        href={social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer__social-link"
                                        aria-label="Instagram"
                                    >
                                        <InstagramIcon />
                                    </a>
                                )}
                                {social.facebook && (
                                    <a
                                        href={social.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer__social-link"
                                        aria-label="Facebook"
                                    >
                                        <FacebookIcon />
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="footer__bottom">
                    <p>&copy; {new Date().getFullYear()} {businessProfile.brandName}. Todos los derechos reservados.</p>
                    <p className="footer__credits">
                        Hecho por Ignacio Baldovino - Prisma Studio.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
