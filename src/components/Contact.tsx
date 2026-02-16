import { businessProfile, getPhone, getWhatsApp, getEmail, isCurrentlyOpen, getCurrentDayIndex } from '../data/businessProfile';
import { trackReserveCallClick, trackReserveWhatsAppClick, trackDirectionsClick } from '../lib/analytics';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

// SVG Icons
const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const MapPinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const StarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const CalendarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const GoatIcon = () => (
    <svg width="32" height="32" viewBox="0 0 64 64" fill="currentColor">
        <path d="M52 20c-2-4-6-8-12-8-2 0-4 1-6 2-2-1-4-2-6-2-6 0-10 4-12 8-4 8-2 18 4 24 2 2 6 4 10 4h8c4 0 8-2 10-4 6-6 8-16 4-24z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const Contact = () => {
    const phone = getPhone();
    const wa = getWhatsApp();
    const email = getEmail();
    const loc0 = businessProfile.locations[0];
    const loc1 = businessProfile.locations[1];
    const todayIndex = getCurrentDayIndex();

    const headerReveal = useScrollReveal<HTMLDivElement>();
    const infoCardReveal = useScrollReveal<HTMLDivElement>({ rootMargin: '0px 0px -60px 0px' });
    const scheduleCardReveal = useScrollReveal<HTMLDivElement>({ rootMargin: '0px 0px -60px 0px' });
    const mapsHeaderReveal = useScrollReveal<HTMLHeadingElement>();
    const mapCard0Reveal = useScrollReveal<HTMLDivElement>({ rootMargin: '0px 0px -40px 0px' });
    const mapCard1Reveal = useScrollReveal<HTMLDivElement>({ rootMargin: '0px 0px -40px 0px' });

    return (
        <section id="contacto" className="contact section">
            <div className="container">
                <div
                    ref={headerReveal.ref}
                    className={`contact__header reveal reveal--up ${headerReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <h2 className="section__title">Visitanos</h2>
                    <div className="divider">
                        <span className="divider__line"></span>
                        <span className="divider__icon"><MapPinIcon /></span>
                        <span className="divider__line"></span>
                    </div>
                    <p className="section__subtitle">
                        Te esperamos en nuestras dos sucursales para vivir una experiencia gastronómica única
                    </p>
                </div>

                <div className="contact__grid">
                    {/* Info Card */}
                    <div
                        ref={infoCardReveal.ref}
                        className={`contact__card contact__card--info reveal reveal--left ${infoCardReveal.isVisible ? 'reveal--visible' : ''}`}
                    >
                        <div className="contact__status">
                            <span className={`contact__status-dot ${isCurrentlyOpen() ? 'contact__status-dot--open' : ''}`}></span>
                            <span>{isCurrentlyOpen() ? 'Abierto ahora' : 'Cerrado'}</span>
                        </div>

                        <h3 className="contact__card-title">Información</h3>

                        <div className="contact__info-list">
                            <div className="contact__info-item">
                                <span className="contact__info-icon"><MapPinIcon /></span>
                                <div>
                                    <strong>Sucursal {loc0.shortName}</strong>
                                    <p>{loc0.locality}, {loc0.region}</p>
                                    <p className="contact__info-sub">{loc0.subtitle}</p>
                                </div>
                            </div>

                            <div className="contact__info-item">
                                <span className="contact__info-icon"><MapPinIcon /></span>
                                <div>
                                    <strong>Sucursal {loc1.shortName}</strong>
                                    <p>{loc1.locality}, {loc1.region}</p>
                                    <p className="contact__info-sub">{loc1.subtitle}</p>
                                </div>
                            </div>

                            <div className="contact__info-item">
                                <span className="contact__info-icon"><PhoneIcon /></span>
                                <div>
                                    <strong>{phone.label}</strong>
                                    <p>
                                        <a href={phone.href}>{phone.value}</a>
                                    </p>
                                </div>
                            </div>

                            <div className="contact__info-item">
                                <span className="contact__info-icon"><MailIcon /></span>
                                <div>
                                    <strong>{email.label}</strong>
                                    <p>
                                        <a href={email.href}>{email.value}</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="contact__cta">
                            <a
                                href={phone.href}
                                className="btn btn--primary contact__btn"
                                onClick={() => trackReserveCallClick('contact')}
                            >
                                <PhoneIcon /> Llamar para Reservar
                            </a>
                            <a
                                href={wa.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn contact__btn contact__btn--whatsapp"
                                onClick={() => trackReserveWhatsAppClick('contact')}
                            >
                                <WhatsAppIcon />
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Schedule Card */}
                    <div
                        ref={scheduleCardReveal.ref}
                        className={`contact__card contact__card--schedule reveal reveal--right ${scheduleCardReveal.isVisible ? 'reveal--visible' : ''}`}
                    >
                        <h3 className="contact__card-title">Horarios</h3>

                        <div className="contact__schedule-list">
                            {businessProfile.openingHoursDisplay.map((item) => {
                                const isToday = item.dayIndex === todayIndex;
                                return (
                                    <div
                                        key={item.day}
                                        className={`contact__schedule-item ${isToday ? 'contact__schedule-item--today' : ''}`}
                                    >
                                        <span className="contact__schedule-day">{item.day}</span>
                                        <span className="contact__schedule-line"></span>
                                        <span className="contact__schedule-hours">{item.hours}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="contact__schedule-note">
                            <CalendarIcon />
                            <p>En fechas especiales y fiestas religiosas extendemos nuestros horarios</p>
                        </div>
                    </div>
                </div>

                {/* Maps Section */}
                <div className="contact__maps">
                    <h3
                        ref={mapsHeaderReveal.ref}
                        className={`contact__maps-title reveal reveal--up ${mapsHeaderReveal.isVisible ? 'reveal--visible' : ''}`}
                    >
                        Nuestras Ubicaciones
                    </h3>

                    <div className="contact__maps-grid">
                        {/* Villa de la Quebrada */}
                        <div
                            ref={mapCard0Reveal.ref}
                            className={`contact__map-card reveal reveal--left ${mapCard0Reveal.isVisible ? 'reveal--visible' : ''}`}
                        >
                            <div className="contact__map-header">
                                <span className="contact__map-icon"><GoatIcon /></span>
                                <div>
                                    <h4>{loc0.name}</h4>
                                    <p>{loc0.shortName}</p>
                                </div>
                            </div>
                            <div className="contact__map-iframe">
                                <iframe
                                    src={loc0.googleMapsEmbed}
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Mapa ${loc0.name} - ${loc0.shortName}`}
                                />
                            </div>
                            <div className="contact__map-directions">
                                <p>
                                    <strong>Cómo llegar:</strong> {loc0.directionsNote}
                                </p>
                                <a
                                    href={loc0.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__directions-link"
                                    onClick={() => trackDirectionsClick(loc0.shortName)}
                                >
                                    Ver en Google Maps →
                                </a>
                            </div>
                        </div>

                        {/* La Carolina */}
                        <div
                            ref={mapCard1Reveal.ref}
                            className={`contact__map-card reveal reveal--right ${mapCard1Reveal.isVisible ? 'reveal--visible' : ''}`}
                        >
                            <div className="contact__map-header">
                                <span className="contact__map-icon"><StarIcon /></span>
                                <div>
                                    <h4>{loc1.name}</h4>
                                    <p>{loc1.shortName}</p>
                                </div>
                            </div>
                            <div className="contact__map-iframe">
                                <iframe
                                    src={loc1.googleMapsEmbed}
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Mapa ${loc1.name} - ${loc1.shortName}`}
                                />
                            </div>
                            <div className="contact__map-directions">
                                <p>
                                    <strong>Cómo llegar:</strong> {loc1.directionsNote}
                                </p>
                                <a
                                    href={loc1.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__directions-link"
                                    onClick={() => trackDirectionsClick(loc1.shortName)}
                                >
                                    Ver en Google Maps →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
