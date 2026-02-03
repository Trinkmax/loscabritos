import { useState, useEffect } from 'react';
import './CartaPage.css';

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    isSpecial?: boolean;
    serves?: string;
    includes?: string[];
}

const menuItems: MenuItem[] = [
    // Combos Parrillada
    {
        id: 'parrilla-2',
        name: 'Parrilla Completa para 2',
        description: 'La experiencia completa de nuestra parrilla para compartir en pareja.',
        price: 49000,
        category: 'combos',
        serves: '2 personas',
        includes: ['Empanadas', 'Vacío', 'Chorizos', 'Costillas', 'Ensaladas', 'Pollo/Cerdo']
    },
    {
        id: 'parrilla-3',
        name: 'Parrilla Completa para 3',
        description: 'Todo el sabor de la parrilla argentina con postre incluido. No cobramos cubiertos.',
        price: 69000,
        category: 'combos',
        isSpecial: true,
        serves: '3 personas',
        includes: ['Empanadas', 'Vacío', 'Chorizos', 'Costillas', 'Ensaladas', 'Pollo/Cerdo', 'Postre Helado Grido']
    },
    {
        id: 'parrilla-4',
        name: 'Parrilla Completa para 4',
        description: 'El combo ideal para familias y grupos. Abundante y completo con postre incluido.',
        price: 79000,
        category: 'combos',
        isSpecial: true,
        serves: '4 personas',
        includes: ['Empanadas', 'Vacío', 'Chorizos', 'Costillas', 'Ensaladas', 'Pollo/Cerdo', 'Postre Helado Grido']
    },
    // Especialidad: Chivito
    {
        id: 'chivito-1',
        name: 'Chivito a las Brasas',
        description: 'Nuestro plato insignia. Chivito tierno cocinado lentamente sobre las brasas.',
        price: 36000,
        category: 'especialidades',
        serves: '1 persona'
    },
    {
        id: 'chivito-2',
        name: 'Chivito a las Brasas',
        description: 'Chivito para compartir con todo lo necesario para una experiencia completa.',
        price: 69000,
        category: 'especialidades',
        isSpecial: true,
        serves: '2 personas',
        includes: ['Empanadas', 'Chivito', 'Chanfaina', 'Papas Fritas', 'Ensaladas', 'Postre Grido']
    },
    // Platos Individuales
    {
        id: 'combo-individual',
        name: 'Combo Individual',
        description: 'Empanada + Tallarines/Ravioles con salsa o Milanesa de Ternera con Fritas.',
        price: 19000,
        category: 'individuales',
        serves: '1 persona'
    },
    // Entradas
    {
        id: 'empanadas-carne',
        name: 'Empanadas de Carne',
        description: 'Empanadas criollas hechas al horno con carne cortada a cuchillo.',
        price: 6500,
        category: 'entradas',
        serves: 'x3 unidades'
    },
    {
        id: 'empanadas-jq',
        name: 'Empanadas Jamón y Queso',
        description: 'Empanadas crujientes rellenas de jamón y queso derretido.',
        price: 6500,
        category: 'entradas',
        serves: 'x3 unidades'
    },
    {
        id: 'provoleta',
        name: 'Provoleta a la Parrilla',
        description: 'Queso provolone fundido en la parrilla con orégano y tomate.',
        price: 9500,
        category: 'entradas'
    },
    // Parrilla Individual
    {
        id: 'asado-costilla',
        name: 'Asado / Costilla',
        description: 'Corte tradicional argentino cocido lentamente a las brasas.',
        price: 18000,
        category: 'parrilla'
    },
    {
        id: 'vacio',
        name: 'Vacío',
        description: 'Corte jugoso y tierno, preferido de los amantes de la parrilla.',
        price: 19000,
        category: 'parrilla'
    },
    {
        id: 'matambre',
        name: 'Matambre a la Parrilla',
        description: 'Matambre tierno y sabroso, cocinado al punto perfecto.',
        price: 17000,
        category: 'parrilla'
    },
    {
        id: 'pollo-parrilla',
        name: 'Pollo a la Parrilla',
        description: 'Medio pollo dorado y jugoso, cocido sobre las brasas.',
        price: 13000,
        category: 'parrilla'
    },
    {
        id: 'chorizo-morcilla',
        name: 'Chorizo y Morcilla',
        description: 'Clásico de la parrilla argentina para acompañar o picar.',
        price: 7000,
        category: 'parrilla'
    },
    // Pastas
    {
        id: 'ravioles',
        name: 'Ravioles Caseros',
        description: 'Ravioles artesanales con salsa bolognesa o salsa blanca.',
        price: 14000,
        category: 'pastas'
    },
    {
        id: 'tallarines',
        name: 'Tallarines Caseros',
        description: 'Tallarines frescos con salsa bolognesa, fileto o crema.',
        price: 13000,
        category: 'pastas'
    },
    {
        id: 'noquis',
        name: 'Ñoquis de Papa',
        description: 'Ñoquis caseros de papa con la salsa de tu preferencia.',
        price: 13000,
        category: 'pastas'
    },
    // Milanesas
    {
        id: 'milanesa-ternera',
        name: 'Milanesa de Ternera',
        description: 'Milanesa crocante por fuera y jugosa por dentro.',
        price: 15000,
        category: 'milanesas'
    },
    {
        id: 'milanesa-pollo',
        name: 'Milanesa de Pollo',
        description: 'Suprema de pollo empanada y dorada a la perfección.',
        price: 13000,
        category: 'milanesas'
    },
    {
        id: 'milanesa-napolitana',
        name: 'Milanesa Napolitana',
        description: 'Milanesa con jamón, queso, tomate y orégano gratinada.',
        price: 17000,
        category: 'milanesas'
    },
    // Guarniciones
    {
        id: 'papas-fritas',
        name: 'Papas Fritas',
        description: 'Papas cortadas y fritas al momento.',
        price: 5000,
        category: 'guarniciones'
    },
    {
        id: 'ensalada-mixta',
        name: 'Ensalada Mixta',
        description: 'Lechuga, tomate, cebolla y zanahoria.',
        price: 5000,
        category: 'guarniciones'
    },
    {
        id: 'pure',
        name: 'Puré de Papa',
        description: 'Puré cremoso de papa casero.',
        price: 5000,
        category: 'guarniciones'
    },
    // Bebidas
    {
        id: 'gaseosa',
        name: 'Gaseosa 1.5L',
        description: 'Coca-Cola, Sprite, Fanta o Paso de los Toros.',
        price: 4500,
        category: 'bebidas'
    },
    {
        id: 'agua',
        name: 'Agua Mineral',
        description: 'Con o sin gas.',
        price: 3000,
        category: 'bebidas'
    },
    {
        id: 'vino-tinto',
        name: 'Vino Tinto de la Casa',
        description: 'Jarra de vino tinto de la región.',
        price: 8000,
        category: 'bebidas'
    },
    // Postres
    {
        id: 'helado',
        name: 'Helado Grido',
        description: 'Pote individual de helado con sabores a elección.',
        price: 5500,
        category: 'postres'
    },
    {
        id: 'flan',
        name: 'Flan Casero',
        description: 'Flan con dulce de leche y crema.',
        price: 5000,
        category: 'postres'
    }
];

const categories = [
    { id: 'combos', name: 'Combos', icon: '🍖', color: '#E25822' },
    { id: 'especialidades', name: 'Chivito', icon: '🐐', color: '#D4A574' },
    { id: 'individuales', name: 'Individuales', icon: '🍽️', color: '#8B4513' },
    { id: 'entradas', name: 'Entradas', icon: '🥟', color: '#A0522D' },
    { id: 'parrilla', name: 'Parrilla', icon: '🔥', color: '#FF6B35' },
    { id: 'pastas', name: 'Pastas', icon: '🍝', color: '#DEB887' },
    { id: 'milanesas', name: 'Milanesas', icon: '🥩', color: '#B8860B' },
    { id: 'guarniciones', name: 'Extras', icon: '🥗', color: '#4A7C59' },
    { id: 'bebidas', name: 'Bebidas', icon: '🍷', color: '#722F37' },
    { id: 'postres', name: 'Postres', icon: '🍨', color: '#E8A87C' }
];

const CartaPage = () => {
    const [activeCategory, setActiveCategory] = useState('combos');
    const [showScrollTop, setShowScrollTop] = useState(false);

    const filteredItems = menuItems.filter(item => item.category === activeCategory);
    const activeCategObj = categories.find(c => c.id === activeCategory);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0
        }).format(price);
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategoryClick = (categoryId: string) => {
        setActiveCategory(categoryId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="carta-page">
            {/* Header */}
            <header className="carta-header">
                <div className="carta-header__bg"></div>
                <div className="carta-header__content">
                    <h1 className="carta-header__title">Los Cabritos</h1>
                    <p className="carta-header__tagline">Parrilla & Restaurante</p>
                    <div className="carta-header__badge">
                        <span className="carta-header__badge-icon">🔥</span>
                        <span>El auténtico sabor de la parrilla</span>
                    </div>
                </div>
                <div className="carta-header__wave">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
                    </svg>
                </div>
            </header>

            {/* Categories Navigation */}
            <nav className="carta-nav" role="navigation" aria-label="Categorías del menú">
                <div className="carta-nav__container">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`carta-nav__item ${activeCategory === category.id ? 'carta-nav__item--active' : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                            style={{ '--category-color': category.color } as React.CSSProperties}
                            aria-pressed={activeCategory === category.id}
                        >
                            <span className="carta-nav__icon">{category.icon}</span>
                            <span className="carta-nav__name">{category.name}</span>
                        </button>
                    ))}
                </div>
            </nav>

            {/* Category Title */}
            <div className="carta-category-title">
                <span className="carta-category-title__icon">{activeCategObj?.icon}</span>
                <h2 className="carta-category-title__text">{activeCategObj?.name}</h2>
                <span className="carta-category-title__count">{filteredItems.length} platos</span>
            </div>

            {/* Menu Items */}
            <main className="carta-main">
                <div className="carta-items">
                    {filteredItems.map((item, index) => (
                        <article
                            key={item.id}
                            className={`carta-item ${item.isSpecial ? 'carta-item--special' : ''}`}
                            style={{ '--animation-delay': `${index * 0.08}s` } as React.CSSProperties}
                        >
                            {item.isSpecial && (
                                <div className="carta-item__badge">
                                    <span>⭐ Recomendado</span>
                                </div>
                            )}

                            <div className="carta-item__main">
                                <div className="carta-item__icon-wrapper">
                                    <span className="carta-item__icon">
                                        {categories.find(c => c.id === item.category)?.icon || '🍽️'}
                                    </span>
                                </div>

                                <div className="carta-item__info">
                                    <div className="carta-item__header">
                                        <h3 className="carta-item__name">{item.name}</h3>
                                        {item.serves && (
                                            <span className="carta-item__serves">{item.serves}</span>
                                        )}
                                    </div>
                                    <p className="carta-item__description">{item.description}</p>
                                </div>

                                <div className="carta-item__price">
                                    {formatPrice(item.price)}
                                </div>
                            </div>

                            {item.includes && item.includes.length > 0 && (
                                <div className="carta-item__includes">
                                    <span className="carta-item__includes-label">Incluye:</span>
                                    <div className="carta-item__includes-list">
                                        {item.includes.map((inc, i) => (
                                            <span key={i} className="carta-item__include-tag">{inc}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </main>

            {/* Info Footer */}
            <footer className="carta-footer">
                <div className="carta-footer__note">
                    <span className="carta-footer__icon">📌</span>
                    <p>Los precios pueden variar. <strong>No cobramos cubiertos.</strong> Porciones abundantes estilo casero.</p>
                </div>

                <div className="carta-footer__contact">
                    <a href="tel:+5493548123456" className="carta-footer__btn carta-footer__btn--call">
                        <span>📞</span>
                        <span>Llamar</span>
                    </a>
                    <a href="https://wa.me/5493548123456" className="carta-footer__btn carta-footer__btn--whatsapp" target="_blank" rel="noopener noreferrer">
                        <span>💬</span>
                        <span>WhatsApp</span>
                    </a>
                    <a href="/" className="carta-footer__btn carta-footer__btn--web">
                        <span>🌐</span>
                        <span>Web</span>
                    </a>
                </div>

                <div className="carta-footer__hours">
                    <span className="carta-footer__hours-icon">🕐</span>
                    <div className="carta-footer__hours-info">
                        <span>Mar a Dom: 12:00 - 15:00 | 20:00 - 00:00</span>
                        <span className="carta-footer__hours-closed">Lunes cerrado</span>
                    </div>
                </div>

                <div className="carta-footer__brand">
                    <span>🐐</span>
                    <span>Los Cabritos</span>
                    <span className="carta-footer__year">© 2026</span>
                </div>
            </footer>

            {/* Scroll to top button */}
            <button
                className={`carta-scroll-top ${showScrollTop ? 'carta-scroll-top--visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Volver arriba"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </button>
        </div>
    );
};

export default CartaPage;
