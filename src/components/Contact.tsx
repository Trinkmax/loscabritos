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

const Contact = () => {
    const schedule = [
        { day: 'Domingo', hours: '11:00 - 20:00' },
        { day: 'Lunes', hours: '11:00 - 20:00' },
        { day: 'Martes', hours: '11:00 - 20:00' },
        { day: 'Miércoles', hours: '11:00 - 20:00' },
        { day: 'Jueves', hours: '11:00 - 20:00' },
        { day: 'Viernes', hours: '11:00 - 20:00' },
        { day: 'Sábado', hours: '10:00 - 22:00', isSpecial: true }
    ];

    const isOpen = () => {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();

        if (day === 6) { // Sábado
            return hour >= 10 && hour < 22;
        }
        return hour >= 11 && hour < 20;
    };

    return (
        <section id="contacto" className="contact section">
            <div className="container">
                <div className="contact__header">
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
                    <div className="contact__card contact__card--info">
                        <div className="contact__status">
                            <span className={`contact__status-dot ${isOpen() ? 'contact__status-dot--open' : ''}`}></span>
                            <span>{isOpen() ? 'Abierto ahora' : 'Cerrado'}</span>
                        </div>

                        <h3 className="contact__card-title">Información</h3>

                        <div className="contact__info-list">
                            <div className="contact__info-item">
                                <span className="contact__info-icon"><MapPinIcon /></span>
                                <div>
                                    <strong>Sucursal Villa de la Quebrada</strong>
                                    <p>Villa de la Quebrada, San Luis</p>
                                    <p className="contact__info-sub">La casa matriz desde 1970</p>
                                </div>
                            </div>

                            <div className="contact__info-item">
                                <span className="contact__info-icon"><MapPinIcon /></span>
                                <div>
                                    <strong>Sucursal La Carolina</strong>
                                    <p>La Carolina, San Luis</p>
                                    <p className="contact__info-sub">Los Cabritos de Oro</p>
                                </div>
                            </div>

                            <div className="contact__info-item">
                                <span className="contact__info-icon"><PhoneIcon /></span>
                                <div>
                                    <strong>Teléfono</strong>
                                    <p>
                                        <a href="tel:+542664269673">+54 266 426-9673</a>
                                    </p>
                                </div>
                            </div>

                            <div className="contact__info-item">
                                <span className="contact__info-icon"><MailIcon /></span>
                                <div>
                                    <strong>Email</strong>
                                    <p>
                                        <a href="mailto:loscabritosv.q@gmail.com">loscabritosv.q@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="contact__cta">
                            <a href="tel:+542664269673" className="btn btn--primary contact__btn">
                                <PhoneIcon /> Llamar para Reservar
                            </a>
                            <a
                                href="https://wa.me/542664269673"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn contact__btn contact__btn--whatsapp"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Schedule Card */}
                    <div className="contact__card contact__card--schedule">
                        <h3 className="contact__card-title">Horarios</h3>

                        <div className="contact__schedule-list">
                            {schedule.map((item) => (
                                <div
                                    key={item.day}
                                    className={`contact__schedule-item ${item.isSpecial ? 'contact__schedule-item--special' : ''}`}
                                >
                                    <span className="contact__schedule-day">{item.day}</span>
                                    <span className="contact__schedule-line"></span>
                                    <span className="contact__schedule-hours">{item.hours}</span>
                                </div>
                            ))}
                        </div>

                        <div className="contact__schedule-note">
                            <CalendarIcon />
                            <p>En fechas especiales y fiestas religiosas extendemos nuestros horarios</p>
                        </div>
                    </div>
                </div>

                {/* Maps Section */}
                <div className="contact__maps">
                    <h3 className="contact__maps-title">Nuestras Ubicaciones</h3>

                    <div className="contact__maps-grid">
                        {/* Villa de la Quebrada */}
                        <div className="contact__map-card">
                            <div className="contact__map-header">
                                <span className="contact__map-icon"><GoatIcon /></span>
                                <div>
                                    <h4>Parrilla Los Cabritos</h4>
                                    <p>Villa de la Quebrada</p>
                                </div>
                            </div>
                            <div className="contact__map-iframe">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4662.560073095738!2d-66.29088292329097!3d-33.01554177796149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d45ce17b363973%3A0x52d2d40efa406ca4!2sParrilla%20Los%20Cabritos!5e1!3m2!1ses-419!2sar!4v1770142577891!5m2!1ses-419!2sar"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mapa Parrilla Los Cabritos - Villa de la Quebrada"
                                />
                            </div>
                            <div className="contact__map-directions">
                                <p>
                                    <strong>Cómo llegar:</strong> A 90 km de la ciudad de San Luis por la Ruta Provincial 9.
                                    En el corazón de Villa de la Quebrada, la Tierra de la Fe.
                                </p>
                            </div>
                        </div>

                        {/* La Carolina */}
                        <div className="contact__map-card">
                            <div className="contact__map-header">
                                <span className="contact__map-icon"><StarIcon /></span>
                                <div>
                                    <h4>Los Cabritos de Oro</h4>
                                    <p>La Carolina</p>
                                </div>
                            </div>
                            <div className="contact__map-iframe">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.063752974187!2d-66.09676510480989!3d-32.811894972344845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d489000c2468ef%3A0xac9f970e8d6239b5!2sLos%20cabritos%20de%20oro!5e1!3m2!1ses-419!2sar!4v1770142691204!5m2!1ses-419!2sar"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mapa Los Cabritos de Oro - La Carolina"
                                />
                            </div>
                            <div className="contact__map-directions">
                                <p>
                                    <strong>Cómo llegar:</strong> En el pintoresco pueblo de La Carolina,
                                    conocido por su historia minera y sus paisajes serranos únicos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
