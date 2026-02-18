import { useState } from 'react';
import { menuCategories, menuItems, filterByCategory, formatPriceARS, getCategoryById } from '../data/menuData';
import './Menu.css';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('parrillas');

    const filteredItems = filterByCategory(menuItems, activeCategory);

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
                    {menuCategories.map(category => (
                        <button
                            key={category.id}
                            className={`menu__category ${activeCategory === category.id ? 'menu__category--active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="menu__category-icon">{category.icon}</span>
                            <span className="menu__category-name">{category.label}</span>
                        </button>
                    ))}
                </div>

                <div className="menu__grid">
                    {filteredItems.map((item, index) => {
                        const catObj = getCategoryById(item.categoryId);
                        return (
                            <div
                                key={item.id}
                                className={`menu__item ${item.isRecommended ? 'menu__item--special' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {item.isRecommended && (
                                    <div className="menu__item-badge">
                                        <span>⭐ Recomendado</span>
                                    </div>
                                )}

                                <div className="menu__item-image">
                                    <span className="menu__item-icon">
                                        {catObj?.icon || '🍽️'}
                                    </span>
                                </div>

                                <div className="menu__item-content">
                                    <div className="menu__item-header">
                                        <h3 className="menu__item-name">{item.name}</h3>
                                        {item.serves && (
                                            <span className="menu__item-serves">{item.serves}</span>
                                        )}
                                    </div>

                                    <p className="menu__item-description">{item.shortDescription}</p>

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
                                        <span className="menu__item-price">{formatPriceARS(item.price)}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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
