import { Link } from 'react-router-dom';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import './Especialidades.css';

// ─── Icons ────────────────────────────────────────────────────────────────────

const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const FireIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
);

const SnowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />
    </svg>
);

const ArrowIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const parrillaCuts = ['Costillas', 'Vacío', 'Cortes de cerdo', 'Pollo', 'Chorizo', 'Morcilla', 'Chinchulines'];

interface WinterDish {
    name: string;
    description: string;
    image: string;
    priceNote?: string;
}

const winterDishes: WinterDish[] = [
    {
        name: 'Locro Campero',
        description: 'El clásico de olla, con cebollitas fritas y pan casero. Pura tradición criolla para los días fríos.',
        image: '/images/comida/locro.webp',
    },
    {
        name: 'Carne a la Olla',
        description: 'Cocción lenta hasta deshacerse, con ensaladas varias y pan casero. Sabor de casa.',
        image: '/images/comida/carne-olla.webp',
    },
    {
        name: 'Chivito al Vino Blanco',
        description: 'Nuestro chivito braseado al vino blanco, tierno y aromático. Una receta para el invierno.',
        image: '/images/comida/chivito-individual.webp',
        priceNote: 'Al mismo precio que la carne a la olla',
    },
];

// ─── Component ──────────────────────────────────────────────────────────────────

const Especialidades = () => {
    const headerReveal = useScrollReveal<HTMLDivElement>();
    const starReveal = useScrollReveal<HTMLDivElement>({ rootMargin: '0px 0px -80px 0px' });
    const parrillaReveal = useScrollReveal<HTMLDivElement>({ rootMargin: '0px 0px -80px 0px' });
    const winterHeaderReveal = useScrollReveal<HTMLDivElement>();
    const winterStagger = useStaggerReveal<HTMLDivElement>({ threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    return (
        <section id="especialidades" className="especialidades section">
            <div className="container">
                <div
                    ref={headerReveal.ref}
                    className={`especialidades__header reveal reveal--up ${headerReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <h2 className="section__title">Nuestras Especialidades</h2>
                    <div className="divider">
                        <span className="divider__line"></span>
                        <span className="divider__icon"><FireIcon /></span>
                        <span className="divider__line"></span>
                    </div>
                    <p className="section__subtitle">
                        Más de 50 años perfeccionando el fuego lento. Estos son los platos que nos hicieron famosos.
                    </p>
                </div>

                {/* ── Plato estrella: Chivito a las brasas con chanfaina ── */}
                <article
                    ref={starReveal.ref}
                    className={`esp-star reveal reveal--up ${starReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <div className="esp-star__media">
                        <img
                            src="/images/comida/chivito-para-dos.webp"
                            alt="Chivito a las brasas con chanfaina, el plato estrella de Los Cabritos De Oro"
                            className="esp-star__img"
                            loading="lazy"
                            decoding="async"
                        />
                        <span className="esp-star__ribbon">
                            <StarIcon /> Plato estrella
                        </span>
                    </div>
                    <div className="esp-star__body">
                        <p className="esp-star__eyebrow">Nuestra especialidad desde 1970</p>
                        <h3 className="esp-star__title">Chivito a las brasas <span>con chanfaina</span></h3>
                        <p className="esp-star__desc">
                            Chivito joven cocido lentamente sobre brasas de leña, con esa cocción pareja y ese sabor
                            ahumado que no se consigue en ningún otro lado. Lo servimos con su <strong>chanfaina</strong> casera,
                            papas fritas, ensaladas varias, empanada y pan casero.
                        </p>
                        <div className="esp-star__actions">
                            <Link to="/carta?cat=chivito" className="btn btn--primary esp-star__cta">
                                Verlo en la carta <ArrowIcon />
                            </Link>
                        </div>
                    </div>
                </article>

                {/* ── La Parrilla de Oro ── */}
                <article
                    ref={parrillaReveal.ref}
                    className={`esp-parrilla reveal reveal--up ${parrillaReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <div className="esp-parrilla__body">
                        <span className="esp-parrilla__tag"><FireIcon /> Para compartir</span>
                        <h3 className="esp-parrilla__title">La Parrilla de Oro</h3>
                        <p className="esp-parrilla__desc">
                            Nuestra parrillada insignia, con <strong>todas las carnes</strong> hechas al punto sobre las brasas.
                            Todo lo bueno del asado argentino en una sola mesa.
                        </p>
                        <ul className="esp-parrilla__cuts" aria-label="Cortes incluidos en la Parrilla de Oro">
                            {parrillaCuts.map((cut) => (
                                <li key={cut} className="esp-parrilla__cut">{cut}</li>
                            ))}
                        </ul>
                        <Link to="/carta?cat=parrillas" className="esp-parrilla__link">
                            Ver parrillas en la carta <ArrowIcon />
                        </Link>
                    </div>
                    <div className="esp-parrilla__media">
                        <img
                            src="/images/comida/parrillada-completa-mesa-los-cabritos.webp"
                            alt="La Parrilla de Oro con todos los cortes: costillas, vacío, cerdo, pollo, chorizo, morcilla y chinchulines"
                            className="esp-parrilla__img"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </article>

                {/* ── Especialidades de invierno ── */}
                <div
                    ref={winterHeaderReveal.ref}
                    className={`esp-winter__header reveal reveal--up ${winterHeaderReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <span className="esp-winter__eyebrow"><SnowIcon /> Para los días de invierno <SnowIcon /></span>
                    <h3 className="esp-winter__title">Platos que abrigan</h3>
                </div>

                <div ref={winterStagger.containerRef} className="esp-winter__grid">
                    {winterDishes.map((dish, index) => (
                        <article
                            key={dish.name}
                            data-reveal-item={index}
                            className={`esp-card reveal reveal--up ${winterStagger.visibleItems.has(index) ? 'reveal--visible' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="esp-card__media">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="esp-card__img"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="esp-card__body">
                                <h4 className="esp-card__name">{dish.name}</h4>
                                <p className="esp-card__desc">{dish.description}</p>
                                {dish.priceNote && (
                                    <span className="esp-card__price-note">{dish.priceNote}</span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="esp-footer">
                    <Link to="/carta" className="btn btn--primary esp-footer__cta">
                        Ver carta completa <ArrowIcon />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Especialidades;
