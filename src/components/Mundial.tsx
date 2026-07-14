import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { businessProfile, getPhone, getWhatsApp } from '../data/businessProfile';
import { trackReserveCallClick, trackReserveWhatsAppClick } from '../lib/analytics';
import { mundial, getNextMatchIndex } from '../data/mundialData';
import './Mundial.css';

// ─── Icons ────────────────────────────────────────────────────────────────────

const BallIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="m12 7 3 2.2-1.1 3.6h-3.8L9 9.2 12 7zM12 2v5M4.5 9l4.5.2M19.5 9 15 9.2M6.8 19.5l2.3-3.7M17.2 19.5l-2.3-3.7" />
    </svg>
);

const TrophyIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 9a6 6 0 0 0 12 0V4H6v5z" />
        <path d="M6 5H4a2 2 0 0 0 0 4h2M18 5h2a2 2 0 0 1 0 4h-2M9 21h6M12 15v6" />
    </svg>
);

const PinIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
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

const Mundial = () => {
    const headerReveal = useScrollReveal<HTMLDivElement>();
    const tvReveal = useScrollReveal<HTMLDivElement>({ rootMargin: '0px 0px -80px 0px' });
    const fixtureHeaderReveal = useScrollReveal<HTMLDivElement>();
    const fixtureStagger = useStaggerReveal<HTMLDivElement>({ threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    const ctaReveal = useScrollReveal<HTMLDivElement>();

    const phone = getPhone();
    const wa = getWhatsApp();
    const nextMatch = getNextMatchIndex();
    const branches = businessProfile.locations.map((l) => l.shortName);

    return (
        <section id="mundial" className="mundial" aria-labelledby="mundial-title">
            <div className="mundial__glow" aria-hidden="true" />
            <div className="mundial__stripes" aria-hidden="true" />

            <div className="container mundial__container">
                {/* ── Header ── */}
                <div
                    ref={headerReveal.ref}
                    className={`mundial__header reveal reveal--up ${headerReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <div className="mundial__eyebrow">
                        <span className="mundial__eyebrow-line" aria-hidden="true" />
                        <span className="mundial__eyebrow-text">
                            <BallIcon /> {mundial.edition} · {mundial.startLabel} al {mundial.endLabel}
                        </span>
                        <span className="mundial__eyebrow-line" aria-hidden="true" />
                    </div>

                    <h2 id="mundial-title" className="mundial__title">
                        Viví el Mundial en <span className="mundial__title-accent">Los Cabritos De Oro</span>
                    </h2>

                    <p className="mundial__subtitle">
                        Con especial dedicación a nuestra <strong>{mundial.teamName}</strong> <span aria-hidden="true">🇦🇷</span>, campeona del mundo.
                        Cada partido, el mejor chivito a las brasas y mucho aliento. <span className="mundial__vamos">¡Vamos Argentina!</span>
                    </p>
                </div>

                {/* ── Pantalla gigante / Smart TVs ── */}
                <div
                    ref={tvReveal.ref}
                    className={`mundial__tv reveal reveal--up ${tvReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <div className="mundial__tv-screen" aria-hidden="true">
                        <img
                            src="/images/argentina-campeon.jpg.webp"
                            alt=""
                            className="mundial__tv-photo"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="mundial__tv-scrim" />
                        <div className="mundial__tv-live">
                            <span className="mundial__tv-live-dot" /> EN VIVO
                        </div>
                        <div className="mundial__tv-bug">
                            <span className="mundial__tv-number">85"</span>
                            <span className="mundial__tv-label">Smart TV</span>
                        </div>
                    </div>

                    <div className="mundial__tv-info">
                        <h3 className="mundial__tv-title">Todos los partidos en pantalla gigante</h3>
                        <p className="mundial__tv-text">
                            Tenemos <strong>Disney+ y DGO</strong> en <strong>Smart TV de 85 pulgadas</strong>{' '}
                            en nuestros <strong>{branches.length} locales</strong>: no te perdés ni un partido del
                            Mundial. Vení con tu familia y tus amigos a disfrutar el fútbol como se debe, en{' '}
                            <strong>ambientes climatizados</strong> y con buena comida.
                        </p>
                        <ul className="mundial__apps" aria-label="Servicios con los que transmitimos los partidos">
                            <li className="mundial__app">Disney+</li>
                            <li className="mundial__app">DGO</li>
                        </ul>
                        <ul className="mundial__branches" aria-label="Locales con pantalla gigante">
                            {branches.map((b) => (
                                <li key={b} className="mundial__branch">
                                    <PinIcon /> {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ── Fixture de la Selección ── */}
                <div
                    ref={fixtureHeaderReveal.ref}
                    className={`mundial__fixture-header reveal reveal--up ${fixtureHeaderReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <span className="mundial__fixture-eyebrow">
                        <TrophyIcon />
                        {mundial.stageLabel}
                    </span>
                    <h3 className="mundial__fixture-title">Los partidos que se vienen</h3>
                </div>

                {mundial.fixtureVerified && mundial.matches.length > 0 ? (
                    <div ref={fixtureStagger.containerRef} className="mundial__fixture-grid">
                        {mundial.matches.map((m, index) => (
                            <article
                                key={m.id}
                                data-reveal-item={index}
                                className={`mundial-match reveal reveal--up ${index === nextMatch ? 'mundial-match--next' : ''} ${m.featured ? 'mundial-match--featured' : ''} ${fixtureStagger.visibleItems.has(index) ? 'reveal--visible' : ''}`}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className="mundial-match__top">
                                    <span className="mundial-match__matchday">{m.stage}</span>
                                    {index === nextMatch && <span className="mundial-match__badge">Próximo</span>}
                                </div>

                                <div className="mundial-match__teams">
                                    <span className="mundial-match__team">
                                        <span className="mundial-match__flag" aria-hidden="true">{m.home.flag}</span>
                                        {m.home.name}
                                    </span>
                                    <span className="mundial-match__vs">vs</span>
                                    <span className="mundial-match__team">
                                        <span className="mundial-match__flag" aria-hidden="true">{m.away.flag}</span>
                                        {m.away.name}
                                    </span>
                                </div>

                                {(m.dateLabel || m.kickoffArg) && (
                                    <div className="mundial-match__meta">
                                        {m.dateLabel && <span className="mundial-match__date">{m.dateLabel}</span>}
                                        {m.kickoffArg && (
                                            <span className="mundial-match__time">{m.kickoffArg} hs <small>(ARG)</small></span>
                                        )}
                                    </div>
                                )}
                                {m.venue && (
                                    <div className="mundial-match__venue">
                                        <PinIcon /> {m.venue}{m.city && ` · ${m.city}`}
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                ) : (
                    <ul className="mundial__timeline" aria-label="Fechas clave del Mundial 2026">
                        {mundial.milestones.map((ms) => (
                            <li key={ms.label} className="mundial__milestone">
                                <span className="mundial__milestone-date">{ms.dateLabel}</span>
                                <span className="mundial__milestone-label">{ms.label}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* ── CTA ── */}
                <div
                    ref={ctaReveal.ref}
                    className={`mundial__cta reveal reveal--blur ${ctaReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <p className="mundial__cta-text">Asegurá tu mesa para ver los partidos <span aria-hidden="true">🇦🇷</span></p>
                    <div className="mundial__cta-buttons">
                        <a
                            href={phone.href}
                            className="btn btn--primary mundial__btn"
                            onClick={() => trackReserveCallClick('mundial')}
                        >
                            <PhoneIcon /> Reservar mesa
                        </a>
                        <a
                            href={wa.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn mundial__btn mundial__btn--whatsapp"
                            onClick={() => trackReserveWhatsAppClick('mundial')}
                        >
                            <WhatsAppIcon /> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mundial;
