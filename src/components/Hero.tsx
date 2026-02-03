import './Hero.css';

const Hero = () => {
    return (
        <section id="inicio" className="hero">
            <div className="hero__overlay"></div>
            <div className="hero__particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="hero__particle" style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                    }}></div>
                ))}
            </div>

            <div className="hero__content container">
                <div className="hero__badge animate-fade-in-up">
                    <svg className="hero__badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span>Desde 1970</span>
                </div>

                <h1 className="hero__title animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Los Cabritos
                </h1>

                <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    Tradición y sabor en cada bocado
                </p>

                <p className="hero__description animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    Restaurante tradicional en Villa de la Quebrada, San Luis. <br />
                    Especialistas en cabrito y chivito a la parrilla.
                </p>

                <div className="hero__cta animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <a href="#carta" className="btn btn--primary">
                        Ver Carta
                    </a>
                    <a href="#contacto" className="btn btn--secondary">
                        Cómo Llegar
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
