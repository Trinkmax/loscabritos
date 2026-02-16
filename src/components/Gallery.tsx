import { useState } from 'react';
import './Gallery.css';

const GoatIcon = () => (
    <svg width="32" height="32" viewBox="0 0 64 64" fill="currentColor">
        <path d="M52 20c-2-4-6-8-12-8-2 0-4 1-6 2-2-1-4-2-6-2-6 0-10 4-12 8-4 8-2 18 4 24 2 2 6 4 10 4h8c4 0 8-2 10-4 6-6 8-16 4-24z" />
    </svg>
);

interface GalleryImage {
    src: string;
    alt: string;
    category: string;
    span?: 'wide' | 'tall' | 'featured';
}

const galleryImages: GalleryImage[] = [
    {
        src: '/images/restaurante/frente-restaurante-los-cabritos-villa-quebrada.webp',
        alt: 'Frente del restaurante Los Cabritos - Villa de la Quebrada',
        category: 'Nuestro Restaurante',
        span: 'wide',
    },
    {
        src: '/images/comida/parrilla-tradicional-mejor-chivito-san-luis.webp',
        alt: 'Parrilla tradicional con cartel "El Mejor Chivito de San Luis"',
        category: 'La Parrilla',
        span: 'tall',
    },
    {
        src: '/images/comida/cabrito-asado-brasas-san-luis.webp',
        alt: 'Cabrito asándose a las brasas',
        category: 'Nuestros Platos',
    },
    {
        src: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
        alt: 'Parrillada completa servida en la mesa',
        category: 'Nuestros Platos',
    },
    {
        src: '/images/restaurante/cava-vinos-restaurante-san-luis.webp',
        alt: 'Cava de vinos del restaurante',
        category: 'Nuestro Restaurante',
    },
    {
        src: '/images/restaurante/vista-lateral-los-cabritos-san-luis.webp',
        alt: 'Vista lateral del restaurante Los Cabritos',
        category: 'Nuestro Restaurante',
        span: 'wide',
    },
    {
        src: '/images/restaurante/cartel-los-cabritos-de-oro-parrilla.webp',
        alt: 'Cartel del restaurante Los Cabritos de Oro Parrilla',
        category: 'Nuestro Restaurante',
    },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [imageLoadStates, setImageLoadStates] = useState<Record<number, boolean>>({});

    const handleImageLoad = (index: number) => {
        setImageLoadStates(prev => ({ ...prev, [index]: true }));
    };

    return (
        <section id="galeria" className="gallery section">
            <div className="container">
                <div className="gallery__header">
                    <h2 className="section__title">Nuestra Galería</h2>
                    <div className="divider">
                        <span className="divider__line"></span>
                        <GoatIcon />
                        <span className="divider__line"></span>
                    </div>
                    <p className="section__subtitle">
                        Conocé nuestro restaurante, nuestra parrilla y nuestros platos
                    </p>
                </div>

                <div className="gallery__grid">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className={`gallery__item ${image.span ? `gallery__item--${image.span}` : ''} ${imageLoadStates[index] ? 'gallery__item--loaded' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="gallery__image"
                                loading="lazy"
                                onLoad={() => handleImageLoad(index)}
                            />
                            <div className="gallery__item-overlay">
                                <span className="gallery__item-category">{image.category}</span>
                                <div className="gallery__item-zoom">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                        <line x1="11" y1="8" x2="11" y2="14" />
                                        <line x1="8" y1="11" x2="14" y2="11" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="gallery__lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="gallery__lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Cerrar">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="gallery__lightbox-image"
                        />
                        <p className="gallery__lightbox-caption">{selectedImage.alt}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
