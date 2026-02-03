import { useState } from 'react';
import './Menu.css';

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
        name: 'Parrilla Completa para 2 Personas',
        description: 'La experiencia completa de nuestra parrilla para compartir en pareja.',
        price: 49000,
        category: 'combos',
        serves: '2 personas',
        includes: ['Empanadas', 'Vacío', 'Chorizos', 'Costillas', 'Ensaladas', 'Pollo/Cerdo']
    },
    {
        id: 'parrilla-3',
        name: 'Parrilla Completa para 3 Personas',
        description: 'Todo el sabor de la parrilla argentina con postre incluido. No cobramos cubiertos.',
        price: 69000,
        category: 'combos',
        isSpecial: true,
        serves: '3 personas',
        includes: ['Empanadas', 'Vacío', 'Chorizos', 'Costillas', 'Ensaladas', 'Pollo/Cerdo', 'Postre Helado Grido']
    },
    {
        id: 'parrilla-4',
        name: 'Parrilla Completa para 4 Personas',
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
        name: 'Chivito a las Brasas - 1 Persona',
        description: 'Nuestro plato insignia. Chivito tierno cocinado lentamente sobre las brasas.',
        price: 36000,
        category: 'especialidades',
        serves: '1 persona'
    },
    {
        id: 'chivito-2',
        name: 'Chivito a las Brasas - 2 Personas',
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
        description: 'Empanada + Tallarines o ravioles con salsa bolognesa o salsa blanca, o Milanesa de Ternera con Fritas.',
        price: 19000,
        category: 'individuales',
        serves: '1 persona'
    },
    // Entradas
    {
        id: 'empanadas-carne',
        name: 'Empanadas de Carne (x3)',
        description: 'Empanadas criollas hechas al horno con carne cortada a cuchillo.',
        price: 6500,
        category: 'entradas'
    },
    {
        id: 'empanadas-jq',
        name: 'Empanadas de Jamón y Queso (x3)',
        description: 'Empanadas crujientes rellenas de jamón y queso derretido.',
        price: 6500,
        category: 'entradas'
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
        description: 'Ravioles artesanales con salsa bolognesa o salsa blanca a elección.',
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
        description: 'Milanesa de carne de ternera, crocante por fuera y jugosa por dentro.',
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
    { id: 'combos', name: 'Combos', icon: '🍖' },
    { id: 'especialidades', name: 'Especialidades', icon: '🐐' },
    { id: 'individuales', name: 'Individuales', icon: '🍽️' },
    { id: 'entradas', name: 'Entradas', icon: '🥟' },
    { id: 'parrilla', name: 'Parrilla', icon: '🔥' },
    { id: 'pastas', name: 'Pastas', icon: '🍝' },
    { id: 'milanesas', name: 'Milanesas', icon: '🥩' },
    { id: 'guarniciones', name: 'Guarniciones', icon: '🥗' },
    { id: 'bebidas', name: 'Bebidas', icon: '🍷' },
    { id: 'postres', name: 'Postres', icon: '🍨' }
];

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('combos');

    const filteredItems = menuItems.filter(item => item.category === activeCategory);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0
        }).format(price);
    };

    return (
        <section id="carta" className="menu section section--dark">
            <div className="container">
                <div className="menu__header">
                    <h2 className="section__title">Nuestra Carta</h2>
                    <div className="divider">
                        <span className="divider__line"></span>
                        <span className="divider__icon">🍖</span>
                        <span className="divider__line"></span>
                    </div>
                    <p className="section__subtitle">
                        Platos tradicionales preparados con productos de la región
                    </p>
                </div>

                <div className="menu__categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`menu__category ${activeCategory === category.id ? 'menu__category--active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="menu__category-icon">{category.icon}</span>
                            <span className="menu__category-name">{category.name}</span>
                        </button>
                    ))}
                </div>

                <div className="menu__grid">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`menu__item ${item.isSpecial ? 'menu__item--special' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {item.isSpecial && (
                                <div className="menu__item-badge">
                                    <span>⭐ Recomendado</span>
                                </div>
                            )}

                            <div className="menu__item-image">
                                <span className="menu__item-icon">
                                    {categories.find(c => c.id === item.category)?.icon || '🍽️'}
                                </span>
                            </div>

                            <div className="menu__item-content">
                                <div className="menu__item-header">
                                    <h3 className="menu__item-name">{item.name}</h3>
                                    {item.serves && (
                                        <span className="menu__item-serves">{item.serves}</span>
                                    )}
                                </div>

                                <p className="menu__item-description">{item.description}</p>

                                {item.includes && item.includes.length > 0 && (
                                    <div className="menu__item-includes">
                                        <span className="menu__item-includes-label">Incluye:</span>
                                        <div className="menu__item-includes-list">
                                            {item.includes.map((inc, i) => (
                                                <span key={i} className="menu__item-include">{inc}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="menu__item-footer">
                                    <span className="menu__item-price">{formatPrice(item.price)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="menu__note">
                    <p>
                        <strong>📌 Nota:</strong> Los precios pueden variar. No cobramos cubiertos.
                        Porciones abundantes estilo casero.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Menu;
