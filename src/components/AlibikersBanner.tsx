import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { businessProfile, getPhone, getWhatsApp } from '../data/businessProfile';
import { trackReserveCallClick, trackReserveWhatsAppClick } from '../lib/analytics';
import { motoRide, isMotoRideActive } from '../data/motoRideData';
import './AlibikersBanner.css';

// ─── Icons ────────────────────────────────────────────────────────────────────

const MotoIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M5.5 17.5 9 10h4.5l3 4.5h2.5" />
        <path d="M9 10 7 6.5H4.5" />
        <path d="M12.5 10l2-3.5" />
    </svg>
);

const PercentIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="19" y1="5" x2="5" y2="19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
);

const GiftIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8" />
        <path d="M16.5 8a2.5 2.5 0 0 0 0-5C14 3 12 8 12 8" />
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

const AlibikersBanner = () => {
    const headerReveal = useScrollReveal<HTMLDivElement>();
    const mediaReveal = useScrollReveal<HTMLDivElement>({ rootMargin: '0px 0px -80px 0px' });
    const benefitsStagger = useStaggerReveal<HTMLDivElement>({ threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    const ctaReveal = useScrollReveal<HTMLDivElement>();

    const phone = getPhone();
    const wa = getWhatsApp();
    const branches = businessProfile.locations.map((l) => l.shortName);

    if (!isMotoRideActive()) return null;

    return (
        <section id="alibikers" className="alibikers" aria-labelledby="alibikers-title">
            <div className="alibikers__glow" aria-hidden="true" />
            <div className="alibikers__road" aria-hidden="true" />

            <div className="container alibikers__container">
                {/* ── Header ── */}
                <div
                    ref={headerReveal.ref}
                    className={`alibikers__header reveal reveal--up ${headerReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <div className="alibikers__eyebrow">
                        <span className="alibikers__eyebrow-line" aria-hidden="true" />
                        <span className="alibikers__eyebrow-text">
                            <MotoIcon /> {motoRide.eventLabel} · {motoRide.dateLabel}
                        </span>
                        <span className="alibikers__eyebrow-line" aria-hidden="true" />
                    </div>

                    <h2 id="alibikers-title" className="alibikers__title">
                        <span className="alibikers__title-accent">{motoRide.eventName}</span> llega a San Luis
                    </h2>

                    <p className="alibikers__subtitle">
                        La {motoRide.eventName} promete reunir a <strong>cientos de motociclistas</strong> de
                        todo el país, con salida en {motoRide.startCity}, en una travesía de cerca de{' '}
                        <strong>{motoRide.routeKm} km</strong> por algunos de los escenarios naturales más
                        impactantes de San Luis. Los Cabritos De Oro se suma a esta iniciativa{' '}
                        <span aria-hidden="true">🇦🇷</span>
                    </p>
                </div>

                {/* ── Fotos ── */}
                <div
                    ref={mediaReveal.ref}
                    className={`alibikers__media reveal reveal--up ${mediaReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <div className="alibikers__media-main">
                        <img
                            src={motoRide.heroImage}
                            alt={motoRide.heroImageAlt}
                            className="alibikers__media-img"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="alibikers__media-scrim" aria-hidden="true" />
                        <div className="alibikers__km-badge">
                            <span className="alibikers__km-number">{motoRide.routeKm}</span>
                            <span className="alibikers__km-label">KM de recorrido</span>
                        </div>
                    </div>
                    <div className="alibikers__media-side">
                        <img
                            src={motoRide.detailImage}
                            alt={motoRide.detailImageAlt}
                            className="alibikers__media-img"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="alibikers__media-scrim alibikers__media-scrim--side" aria-hidden="true" />
                        <span className="alibikers__flag-badge" aria-hidden="true">🇦🇷</span>
                    </div>
                </div>

                {/* ── Beneficios ── */}
                <div ref={benefitsStagger.containerRef} className="alibikers__benefits">
                    <article
                        data-reveal-item={0}
                        className={`alibikers-benefit alibikers-benefit--discount reveal reveal--up ${benefitsStagger.visibleItems.has(0) ? 'reveal--visible' : ''}`}
                    >
                        <span className="alibikers-benefit__token alibikers-benefit__token--value">
                            {motoRide.discountPercent}%
                        </span>
                        <div className="alibikers-benefit__body">
                            <span className="alibikers-benefit__eyebrow">
                                <PercentIcon /> Descuento para motoqueros
                            </span>
                            <p className="alibikers-benefit__desc">
                                Para los motociclistas que arriben a <strong>La Carolina</strong>,{' '}
                                <strong>Nogolí</strong> o <strong>Villa de la Quebrada</strong>: te esperamos
                                en cualquiera de nuestros 3 locales.
                            </p>
                        </div>
                    </article>

                    <article
                        data-reveal-item={1}
                        className={`alibikers-benefit alibikers-benefit--gift reveal reveal--up ${benefitsStagger.visibleItems.has(1) ? 'reveal--visible' : ''}`}
                        style={{ transitionDelay: '0.08s' }}
                    >
                        <span className="alibikers-benefit__token alibikers-benefit__token--icon">
                            <GiftIcon />
                        </span>
                        <div className="alibikers-benefit__body">
                            <span className="alibikers-benefit__eyebrow">Un presente de bienvenida</span>
                            <p className="alibikers-benefit__desc">
                                Cada participante del encuentro recibe un obsequio de{' '}
                                <strong>Los Cabritos De Oro</strong> al pasar por cualquiera de nuestros tres
                                locales.
                            </p>
                        </div>
                    </article>
                </div>

                {/* ── Locales ── */}
                <ul className="alibikers__branches" aria-label="Locales adheridos a la promoción">
                    {branches.map((b) => (
                        <li key={b} className="alibikers__branch">
                            <PinIcon /> {b}
                        </li>
                    ))}
                </ul>

                {/* ── CTA ── */}
                <div
                    ref={ctaReveal.ref}
                    className={`alibikers__cta reveal reveal--blur ${ctaReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <p className="alibikers__cta-text">¿Sos motoquero y tenés dudas de la promo? Escribinos</p>
                    <div className="alibikers__cta-buttons">
                        <a
                            href={phone.href}
                            className="btn btn--primary alibikers__btn"
                            onClick={() => trackReserveCallClick('alibikers')}
                        >
                            <PhoneIcon /> Llamar
                        </a>
                        <a
                            href={wa.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn alibikers__btn alibikers__btn--whatsapp"
                            onClick={() => trackReserveWhatsAppClick('alibikers')}
                        >
                            <WhatsAppIcon /> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlibikersBanner;
