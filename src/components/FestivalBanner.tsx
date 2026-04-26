import { useScrollReveal } from '../hooks/useScrollReveal';
import './FestivalBanner.css';

const FESTIVAL_END = new Date('2026-05-04T00:00:00-03:00');

type Special = {
    dateLabel: string;
    dateShort: string;
    dish: string;
    price: string;
};

const dailySpecials: Special[] = [
    {
        dateLabel: '30 de Abril',
        dateShort: '30 ABR',
        dish: 'Locro Campero',
        price: '$15.000',
    },
    {
        dateLabel: '1 de Mayo',
        dateShort: '01 MAY',
        dish: 'Humita',
        price: '$15.000',
    },
    {
        dateLabel: '2 y 3 de Mayo',
        dateShort: '02–03 MAY',
        dish: 'Milanesa de ternera con empanada',
        price: '$20.000',
    },
];

const PinIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const StarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const FestivalBanner = () => {
    const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

    if (Date.now() >= FESTIVAL_END.getTime()) return null;

    return (
        <section
            ref={ref}
            id="fiesta-cristo"
            className={`festival ${isVisible ? 'festival--visible' : ''}`}
            aria-labelledby="festival-title"
        >
            <div className="festival__glow" aria-hidden="true" />
            <div className="festival__pattern" aria-hidden="true" />
            <div className="festival__sparkles" aria-hidden="true">
                {Array.from({ length: 14 }).map((_, i) => (
                    <span
                        key={i}
                        className="festival__sparkle"
                        style={{
                            left: `${(i * 7.3 + 5) % 100}%`,
                            animationDelay: `${(i * 0.7) % 8}s`,
                            animationDuration: `${9 + (i % 5)}s`,
                        }}
                    />
                ))}
            </div>

            <div className="festival__container">
                <header className="festival__header">
                    <div className="festival__eyebrow">
                        <span className="festival__eyebrow-line" aria-hidden="true" />
                        <span className="festival__eyebrow-text">
                            <StarIcon />
                            Fiesta Patronal · 2026
                            <StarIcon />
                        </span>
                        <span className="festival__eyebrow-line" aria-hidden="true" />
                    </div>

                    <h2 id="festival-title" className="festival__title">
                        ¡Bienvenidos a la Fiesta del{' '}
                        <span className="festival__title-accent">Cristo de la Quebrada 2026</span>!
                    </h2>

                    <p className="festival__subtitle">
                        Los esperamos con nuestros exquisitos platos a precios muy accesibles.
                    </p>
                </header>

                <article className="festival__feature" aria-label="Oferta especial para peregrinos">
                    <div className="festival__feature-ribbon">
                        <StarIcon />
                        Para los peregrinos
                        <StarIcon />
                    </div>

                    <div className="festival__feature-body">
                        <div className="festival__feature-date">
                            <span className="festival__feature-day">30</span>
                            <span className="festival__feature-month">Abril</span>
                        </div>

                        <div className="festival__feature-content">
                            <p className="festival__feature-eyebrow">Combo especial</p>
                            <h3 className="festival__feature-dish">
                                PARRILLA COMPLETA PARA DOS PERSONAS
                            </h3>
                            <p className="festival__feature-extras">
                                Con empanadas + postre Grido
                            </p>
                        </div>

                        <div className="festival__feature-price">
                            <span className="festival__feature-price-label">Precio</span>
                            <span className="festival__feature-price-value">$49.000</span>
                            <span className="festival__feature-price-meta">para 2 personas</span>
                        </div>
                    </div>
                </article>

                <ul className="festival__grid" role="list">
                    {dailySpecials.map((s, i) => (
                        <li
                            key={s.dateShort}
                            className="festival__card"
                            style={{ '--card-delay': `${i * 100}ms` } as React.CSSProperties}
                        >
                            <div className="festival__card-date" aria-label={s.dateLabel}>
                                {s.dateShort}
                            </div>
                            <h3 className="festival__card-dish">{s.dish}</h3>
                            <div className="festival__card-divider" aria-hidden="true" />
                            <div className="festival__card-price">{s.price}</div>
                        </li>
                    ))}
                </ul>

                <div className="festival__location" role="note">
                    <PinIcon />
                    <span>
                        Promociones <strong>únicamente</strong> en nuestra sucursal de{' '}
                        <strong>Villa de la Quebrada</strong>.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default FestivalBanner;
