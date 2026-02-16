import './About.css';

// SVG Icons
const ClockIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
    </svg>
);

const FamilyIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const FireIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
);

const LocationIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);



const About = () => {
    const features = [
        {
            icon: <ClockIcon />,
            title: 'Más de 50 años',
            description: 'de tradición culinaria transmitida de generación en generación'
        },
        {
            icon: <FamilyIcon />,
            title: 'Negocio Familiar',
            description: 'Atención personalizada con el calor de una familia argentina'
        },
        {
            icon: <FireIcon />,
            title: 'Brasa Tradicional',
            description: 'Cocción lenta y técnicas ancestrales para el mejor sabor'
        },
        {
            icon: <LocationIcon />,
            title: 'Ubicación Única',
            description: 'En el corazón de Villa de la Quebrada, San Luis'
        }
    ];

    return (
        <section id="nosotros" className="about section">
            <div className="container">
                <div className="about__header">
                    <h2 className="section__title">Nuestra Historia</h2>
                    <div className="divider">
                        <span className="divider__line"></span>
                        <span className="divider__line"></span>
                    </div>
                    <p className="section__subtitle">
                        Una tradición que comenzó en 1970 y sigue conquistando paladares
                    </p>
                </div>

                <div className="about__content">
                    <div className="about__story">
                        <div className="about__image-container">
                            <img
                                src="/images/fundador/fundador-juan-carlos-woronko-los-cabritos.webp"
                                alt="Juan Carlos Woronko - Fundador de Los Cabritos"
                                className="about__image"
                                loading="lazy"
                            />
                            <div className="about__image-badge">
                                <span>Fundador</span>
                            </div>
                        </div>
                    </div>

                    <div className="about__text">
                        <h3 className="about__title">
                            El Legado de Juan Carlos Woronko
                        </h3>
                        <p className="about__paragraph">
                            En 1970, con tan solo <strong>21 años de edad</strong>, Juan Carlos Woronko tuvo la visión
                            de crear un lugar donde la tradición culinaria de San Luis pudiera brillar. Así nació
                            <strong> Los Cabritos</strong>, un restaurante que se convertiría en sinónimo de autenticidad
                            y sabor en la región.
                        </p>
                        <p className="about__paragraph">
                            Lo que comenzó como un pequeño emprendimiento familiar, hoy es uno de los
                            <strong> restaurantes más emblemáticos de San Luis</strong>. Nuestra especialidad,
                            el cabrito y chivito a la parrilla, se prepara siguiendo las técnicas que aprendimos
                            de nuestros mayores.
                        </p>

                        <img
                            src="/images/fundador/familia.jpeg"
                            alt="Familia Woronko - Juan Carlos, Estrella e hijos"
                            className="about__family-image"
                            loading="lazy"
                        />

                        <p className="about__paragraph">
                            Esta historia de esfuerzo y pasión no sería posible sin el incondicional apoyo de su esposa,
                            <strong> Estrella de los Ángeles Rodríguez Rojos</strong>, quien ha acompañado a Juan Carlos durante
                            28 años de arduo trabajo. Juntos han forjado un verdadero negocio familiar.
                        </p>
                        <p className="about__paragraph">
                            Hoy, el legado continúa creciendo junto a sus hijos <strong>Kía (20), Vladimir (18) y Karol (20)</strong>,
                            y su nieto <strong>Ludwing (19)</strong>. Cada plato que servimos lleva consigo más de
                            <strong> 50 años de tradición</strong> y el calor de nuestra gran familia.
                        </p>

                        <blockquote className="about__quote">
                            <p>"Si vas a Villa de la Quebrada y no comés en Los Cabritos, te falta una parte del viaje."</p>
                        </blockquote>
                    </div>
                </div>

                <div className="about__features">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="about__feature"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="about__feature-icon">{feature.icon}</div>
                            <h4 className="about__feature-title">{feature.title}</h4>
                            <p className="about__feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
