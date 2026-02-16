import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { businessProfile } from '../data/businessProfile';
import './Hero.css';

// Pre-computed at module load — no impure calls during render
const particleStyles = [...Array(20)].map(() => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 6}s`,
    animationDuration: `${8 + Math.random() * 7}s`,
    width: `${2 + Math.random() * 3}px`,
    height: `${2 + Math.random() * 3}px`,
}));

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="inicio" className="hero">
            {/* Full-screen logo as background */}
            <div className="hero__bg-image-wrapper">
                <img
                    src="/images/branding/logo-los-cabritos-de-oro.png"
                    alt="Los Cabritos De Oro — Logo del restaurante de cabrito y parrilla en San Luis"
                    className="hero__bg-image"
                    fetchPriority="high"
                />
            </div>

            {/* Radial gold glow */}
            <div className="hero__glow"></div>

            {/* Gradient overlays for text readability */}
            <div className="hero__overlay"></div>

            {/* Subtle golden particles */}
            <div className="hero__particles">
                {particleStyles.map((style, i) => (
                    <div key={i} className="hero__particle" style={style}></div>
                ))}
            </div>

            {/* Badge positioned above the goats */}
            <div className={`hero__badge-wrapper ${isLoaded ? 'hero__content--loaded' : ''}`}>
                <div className="hero__badge">
                    <svg className="hero__badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span>Desde {businessProfile.foundedYear}</span>
                </div>
            </div>

            <div className={`hero__content ${isLoaded ? 'hero__content--loaded' : ''}`}>
                <h1 className="hero__title">
                    Los Cabritos <span className="hero__title-accent">De Oro</span>
                </h1>

                <div className="hero__divider">
                    <span className="hero__divider-line"></span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hero__divider-icon">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="hero__divider-line"></span>
                </div>

                <p className="hero__subtitle">
                    Tradición y sabor en cada bocado
                </p>

                <p className="hero__description">
                    Restaurante de cabrito y parrilla en Villa de la Quebrada y La Carolina, San Luis. <br />
                    Especialistas en chivito a las brasas desde 1970.
                </p>

                <div className="hero__cta">
                    <Link to="/carta" className="btn btn--primary">
                        Ver Carta
                    </Link>
                    <a href="#contacto" className="btn btn--secondary">
                        Cómo Llegar
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
