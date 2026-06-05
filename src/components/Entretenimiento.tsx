import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import './Entretenimiento.css';

// ─── Icons ────────────────────────────────────────────────────────────────────

const PaletteIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .8-1.7 1.8-1.7H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8z" />
        <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
        <circle cx="12" cy="7.5" r="1" fill="currentColor" />
        <circle cx="16.5" cy="10.5" r="1" fill="currentColor" />
    </svg>
);

const BingoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        <circle cx="6" cy="6" r="0.6" fill="currentColor" />
        <circle cx="18" cy="18" r="0.6" fill="currentColor" />
    </svg>
);

const GiftIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13M5 12v9h14v-9" />
        <path d="M12 8S10.5 3 8 3a2 2 0 0 0 0 5h4zM12 8s1.5-5 4-5a2 2 0 0 1 0 5h-4z" />
    </svg>
);

const HeartIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Activity {
    icon: React.ReactNode;
    color: string;
    title: string;
    description: string;
}

const activities: Activity[] = [
    {
        icon: <PaletteIcon />,
        color: '#E25822',
        title: 'Cuadernillos para colorear',
        description: 'Mientras esperan la comida, los más chicos se divierten coloreando. Pedíselos a nuestro personal: ¡son de regalo!',
    },
    {
        icon: <BingoIcon />,
        color: '#4A90C2',
        title: 'Bingo gratis',
        description: 'Repartimos cartones de bingo sin cargo para chicos y grandes. Una excusa perfecta para jugar todos juntos en la mesa.',
    },
    {
        icon: <GiftIcon />,
        color: '#B8860B',
        title: 'Premios para ganar',
        description: 'Quienes completen su cartón se llevan diversos premios. Diversión asegurada mientras disfrutan su estadía.',
    },
];

// ─── Component ──────────────────────────────────────────────────────────────────

interface EntretenimientoProps {
    showHeader?: boolean;
}

const Entretenimiento = ({ showHeader = true }: EntretenimientoProps) => {
    const headerReveal = useScrollReveal<HTMLDivElement>();
    const grid = useStaggerReveal<HTMLDivElement>({ threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    const noteReveal = useScrollReveal<HTMLDivElement>();

    return (
        <section id="entretenimiento" className="entre section">
            <div className="container">
                {showHeader && (
                    <div
                        ref={headerReveal.ref}
                        className={`entre__header reveal reveal--up ${headerReveal.isVisible ? 'reveal--visible' : ''}`}
                    >
                        <h2 className="section__title">Diversión para toda la familia</h2>
                        <div className="divider">
                            <span className="divider__line"></span>
                            <span className="divider__icon"><HeartIcon /></span>
                            <span className="divider__line"></span>
                        </div>
                        <p className="section__subtitle">
                            En Los Cabritos De Oro la pasamos bien de principio a fin. Mientras disfrutás la comida,
                            los más chicos (y los grandes también) tienen con qué entretenerse.
                        </p>
                    </div>
                )}

                <div ref={grid.containerRef} className="entre__grid">
                    {activities.map((act, index) => (
                        <article
                            key={act.title}
                            data-reveal-item={index}
                            className={`entre-card reveal reveal--up ${grid.visibleItems.has(index) ? 'reveal--visible' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s`, '--act-color': act.color } as React.CSSProperties}
                        >
                            <div className="entre-card__icon">{act.icon}</div>
                            <h3 className="entre-card__title">{act.title}</h3>
                            <p className="entre-card__desc">{act.description}</p>
                        </article>
                    ))}
                </div>

                <div
                    ref={noteReveal.ref}
                    className={`entre__note reveal reveal--blur ${noteReveal.isVisible ? 'reveal--visible' : ''}`}
                >
                    <HeartIcon />
                    <p>
                        Consultá los días y horarios del bingo en cada sucursal. ¡Te esperamos para disfrutar en familia!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Entretenimiento;
