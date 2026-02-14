import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { businessProfile } from '../data/businessProfile';
import './Hero.css';

const YOUTUBE_VIDEO_ID = 'DN0fqBdFxQg';

// Pre-computed at module load — no impure calls during render
const particleStyles = [...Array(15)].map(() => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
}));

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Lazy-load video: use IntersectionObserver to load iframe when hero is visible
    // and after a short delay to prioritize LCP
    useEffect(() => {
        const timer = setTimeout(() => {
            setVideoLoaded(true);
        }, 2000); // Load video 2s after mount to prioritize LCP
        return () => clearTimeout(timer);
    }, []);

    const handleVideoClick = useCallback(() => {
        if (!videoLoaded) setVideoLoaded(true);
    }, [videoLoaded]);

    return (
        <section id="inicio" className="hero">
            {/* YouTube Video Background — lazy loaded */}
            <div className="hero__video-container" onClick={handleVideoClick}>
                {videoLoaded ? (
                    <iframe
                        className="hero__video"
                        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=https://loscabritos.com`}
                        title="Los Cabritos - Video del restaurante de cabrito y parrilla en San Luis"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        loading="lazy"
                    />
                ) : (
                    <img
                        className="hero__video-thumbnail"
                        src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                        alt="Video del restaurante Los Cabritos - Parrilla en San Luis"
                        fetchPriority="low"
                    />
                )}
            </div>

            {/* Dark cinematic overlay */}
            <div className="hero__overlay"></div>

            {/* Subtle ember particles */}
            <div className="hero__particles">
                {particleStyles.map((style, i) => (
                    <div key={i} className="hero__particle" style={style}></div>
                ))}
            </div>

            <div className={`hero__content container ${isLoaded ? 'hero__content--loaded' : ''}`}>
                <div className="hero__badge animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <svg className="hero__badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span>Desde {businessProfile.foundedYear}</span>
                </div>

                <h1 className="hero__title animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    {businessProfile.brandName}
                </h1>

                <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    Tradición y sabor en cada bocado
                </p>

                <p className="hero__description animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                    Restaurante de cabrito y parrilla en Villa de la Quebrada y La Carolina, San Luis. <br />
                    Especialistas en chivito a las brasas desde 1970.
                </p>

                <div className="hero__cta animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
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
