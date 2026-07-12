import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { businessProfile, getPhone, getWhatsApp } from '../data/businessProfile';
import { isMundialActive } from '../data/mundialData';
import { isInviernoActive } from '../data/inviernoData';
import { trackReserveCallClick, trackReserveWhatsAppClick } from '../lib/analytics';
import './Invierno.css';

// ─── Icons ────────────────────────────────────────────────────────────────────

const SnowIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />
    </svg>
);

const TvIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="m8 21 4-3 4 3" />
        <path d="M9.5 8.5 14 10.5 9.5 12.5v-4z" />
    </svg>
);

const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

// ─── Component ──────────────────────────────────────────────────────────────────

interface Perk {
    id: string;
    image: string;
    alt: string;
    title: string;
    desc: ReactNode;
    link?: { to: string; label: string };
}

const Invierno = () => {
    const headerReveal = useScrollReveal<HTMLDivElement>();
    const grid = useStaggerReveal<HTMLDivElement>({ threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    const ctaReveal = useScrollReveal<HTMLDivElement>();

    const phone = getPhone();
    const wa = getWhatsApp();
    const branchCount = businessProfile.locations.length;
    const mundialActive = isMundialActive();

    // La sección vive en la portada y en /entretenimiento: el fixture está sólo
    // en la portada, y la tarjeta de juegos sobra en la solapa que ya los detalla.
    const { pathname } = useLocation();
    const isEntretenimiento = pathname === '/entretenimiento';

    if (!isInviernoActive()) return null;

    const perks: Perk[] = [
        {
            id: 'clima',
            image: '/images/invierno/ambientes-climatizados.webp',
            alt: 'Salón climatizado de Los Cabritos De Oro, con la mesa servida en un día de frío',
            title: 'Ambientes climatizados',
            desc: (
                <>
                    En nuestros <strong>{branchCount} locales</strong>: Villa de la Quebrada, La Carolina y
                    Nogolí. Afuera hace frío; adentro se está bárbaro.
                </>
            ),
        },
        {
            id: 'postre',
            image: '/images/invierno/postre-regalo.webp',
            alt: 'Postre artesanal con helado, de regalo con el menú',
            title: 'El postre, de regalo',
            desc: (
                <>
                    <strong>Postres artesanales</strong> y <strong>helados GRIDO</strong> gratis con el menú.
                    Sí: incluido, sin cargo.
                </>
            ),
        },
    ];

    if (!isEntretenimiento) {
        perks.push({
            id: 'juegos',
            image: '/images/invierno/juegos-chicos.webp',
            alt: 'Cuadernillos para colorear y cartones de bingo para los chicos',
            title: 'Juegos para los chicos',
            desc: (
                <>
                    Cuadernillos para colorear y <strong>bingo gratis</strong> con premios, mientras esperan
                    la comida.
                </>
            ),
            link: { to: '/entretenimiento', label: 'Ver entretenimiento' },
        });
    }

    return (
        <section id="invierno" className="invierno" aria-labelledby="invierno-title">
            <div className="invierno__glow" aria-hidden="true" />

            <div className="container invierno__container">
                {/* ── Header ── */}
                <div
                    ref={headerReveal.ref}
                    className={`invierno__header reveal reveal--up ${headerReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <span className="invierno__eyebrow">
                        <SnowIcon /> Vacaciones de invierno <SnowIcon />
                    </span>

                    <h2 id="invierno-title" className="invierno__title">
                        Estas vacaciones, <span className="invierno__title-accent">vení con la familia</span>
                    </h2>

                    <p className="invierno__subtitle">
                        Entrá del frío y quedate toda la tarde: ambientes climatizados, el Mundial en pantalla
                        gigante y el postre de regalo. Así se disfrutan las vacaciones en Los Cabritos De Oro.
                    </p>
                </div>

                {/* ── Beneficios: pieza principal + columna de apoyo ── */}
                <div ref={grid.containerRef} className="invierno__grid">
                    <article
                        data-reveal-item={0}
                        className={`inv-feature reveal reveal--up ${grid.visibleItems.has(0) ? 'reveal--visible' : ''}`}
                    >
                        <img
                            src="/images/invierno/disney-dgo-partidos.webp"
                            alt="Los partidos del Mundial en la Smart TV de 85 pulgadas de Los Cabritos De Oro"
                            className="inv-feature__img"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="inv-feature__scrim" aria-hidden="true" />

                        <div className="inv-feature__body">
                            <span className="inv-feature__eyebrow">
                                <TvIcon /> En Smart TV de 85 pulgadas
                            </span>
                            <h3 className="inv-feature__title">Disney+ y DGO</h3>
                            <p className="inv-feature__desc">
                                {mundialActive ? (
                                    <>
                                        Tenemos <strong>Disney+ y DGO</strong>: pasamos <strong>todos los partidos
                                        del Mundial</strong>. No te perdés ni un gol.
                                    </>
                                ) : (
                                    <>
                                        Tenemos <strong>Disney+ y DGO</strong>: fútbol, pelis y series mientras
                                        esperás la comida.
                                    </>
                                )}
                            </p>
                            {mundialActive && (
                                <Link to="/#mundial" className="inv-feature__link">
                                    Ver el fixture <ArrowIcon />
                                </Link>
                            )}
                        </div>
                    </article>

                    <div className="invierno__side">
                        {perks.map((perk, i) => (
                            <article
                                key={perk.id}
                                data-reveal-item={i + 1}
                                className={`inv-card reveal reveal--up ${grid.visibleItems.has(i + 1) ? 'reveal--visible' : ''}`}
                                style={{ transitionDelay: `${(i + 1) * 0.08}s` }}
                            >
                                <div className="inv-card__thumb">
                                    <img
                                        src={perk.image}
                                        alt={perk.alt}
                                        className="inv-card__img"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <div className="inv-card__body">
                                    <h3 className="inv-card__title">{perk.title}</h3>
                                    <p className="inv-card__desc">{perk.desc}</p>
                                    {perk.link && (
                                        <Link to={perk.link.to} className="inv-card__link">
                                            {perk.link.label} <ArrowIcon />
                                        </Link>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* ── CTA ── */}
                <div
                    ref={ctaReveal.ref}
                    className={`invierno__cta reveal reveal--blur ${ctaReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <p className="invierno__cta-text">Traé a la familia: reservá tu mesa</p>
                    <div className="invierno__cta-buttons">
                        <a
                            href={phone.href}
                            className="btn btn--primary invierno__btn"
                            onClick={() => trackReserveCallClick('invierno')}
                        >
                            <PhoneIcon /> Reservar mesa
                        </a>
                        <a
                            href={wa.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn invierno__btn invierno__btn--whatsapp"
                            onClick={() => trackReserveWhatsAppClick('invierno')}
                        >
                            <WhatsAppIcon /> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Invierno;
