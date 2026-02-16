import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { businessProfile, getPhone, getWhatsApp, isCurrentlyOpen } from '../data/businessProfile';
import {
    menuCategories,
    menuItems,
    filterByCategory,
    searchItems,
    formatPriceARS,
    getCategoryById,
} from '../data/menuData';
import type { MenuItem } from '../data/menuData';
import {
    trackReserveCallClick,
    trackReserveWhatsAppClick,
    trackQrMenuOpen,
    trackMenuCategorySelect,
    trackMenuSearch,
    trackMenuNoResults,
} from '../lib/analytics';
import SeoHead from '../components/SeoHead';
import StructuredData from '../components/StructuredData';
import { generateCartaSchema } from '../seo/schema';
import './CartaPage.css';

// ─── Icons (inline SVG components) ────────────────────────────────────────────

const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
    </svg>
);

const CloseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

const WebIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
);

const ClockIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const ChevronUpIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
    </svg>
);

const FireIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
);

const InfoIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
    </svg>
);



// ─── Sub-components ───────────────────────────────────────────────────────────

/** Immersive hero header */
function CartaHero({ isOpen }: { isOpen: boolean }) {
    return (
        <header className="carta-hero" role="banner">
            <img
                src={businessProfile.logo}
                alt={`${businessProfile.brandName} logo`}
                className="carta-hero__logo"
                width="56"
                height="56"
            />
            <h1 className="carta-hero__title">{businessProfile.brandName}</h1>
            <p className="carta-hero__subtitle">Nuestra Carta</p>
            <div className="carta-hero__divider">
                <span className="carta-hero__divider-line" />
                <span className="carta-hero__divider-icon">
                    <FireIcon />
                </span>
                <span className="carta-hero__divider-line" />
            </div>
            <span
                className={`carta-hero__status ${isOpen ? 'carta-hero__status--open' : 'carta-hero__status--closed'}`}
            >
                <span className="carta-hero__status-dot" />
                {isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
            </span>
        </header>
    );
}

/** Search bar with enhanced UX */
function MenuSearchBar({
    value,
    onChange,
}: {
    value: string;
    onChange: (v: string) => void;
}) {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="carta-search" role="search">
            <span className="carta-search__icon">
                <SearchIcon />
            </span>
            <input
                ref={inputRef}
                type="search"
                className="carta-search__input"
                placeholder="¿Qué te gustaría comer?"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-label="Buscar plato en la carta"
            />
            {value && (
                <button
                    className="carta-search__clear"
                    onClick={() => {
                        onChange('');
                        inputRef.current?.focus();
                    }}
                    aria-label="Limpiar búsqueda"
                    type="button"
                >
                    <CloseIcon />
                </button>
            )}
        </div>
    );
}

/** Category navigation with item counts */
function CategoryNav({
    activeId,
    onSelect,
}: {
    activeId: string;
    onSelect: (id: string) => void;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const active = container.querySelector('[aria-selected="true"]') as HTMLElement;
        if (active) {
            active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }, [activeId]);

    // Pre-compute item counts per category
    const counts = useMemo(() => {
        const map: Record<string, number> = {};
        menuCategories.forEach((cat) => {
            map[cat.id] = menuItems.filter((item) => item.categoryId === cat.id).length;
        });
        return map;
    }, []);

    return (
        <nav className="carta-categories" aria-label="Categorías del menú">
            <div className="carta-categories__scroll" role="tablist" ref={containerRef}>
                {menuCategories.map((cat) => (
                    <button
                        key={cat.id}
                        role="tab"
                        className={`carta-cat-btn ${activeId === cat.id ? 'carta-cat-btn--active' : ''}`}
                        onClick={() => onSelect(cat.id)}
                        aria-selected={activeId === cat.id}
                        style={{ '--chip-color': cat.color } as React.CSSProperties}
                    >
                        <span className="carta-cat-btn__icon" aria-hidden="true">
                            {cat.icon}
                        </span>
                        <span className="carta-cat-btn__label">{cat.label}</span>
                        <span className="carta-cat-btn__count">{counts[cat.id]}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}

/** Single menu item card — redesigned */
function MenuItemCard({ item }: { item: MenuItem }) {
    const category = getCategoryById(item.categoryId);
    return (
        <article
            className={`carta-item ${item.isRecommended ? 'carta-item--recommended' : ''}`}
        >

            <div className="carta-item__content">
                <div className="carta-item__visual">
                    {item.image ? (
                        <img
                            src={item.image}
                            alt={item.name}
                            className="carta-item__img"
                            loading="lazy"
                            decoding="async"
                            width="80"
                            height="80"
                        />
                    ) : (
                        <span className="carta-item__icon-fallback" aria-hidden="true">
                            {category?.icon || '🍽️'}
                        </span>
                    )}
                </div>
                <div className="carta-item__info">
                    <div className="carta-item__header">
                        <h3 className="carta-item__name">{item.name}</h3>
                        <span className="carta-item__price">{formatPriceARS(item.price)}</span>
                    </div>
                    <div className="carta-item__meta">
                        {item.serves && (
                            <span className="carta-item__serves">{item.serves}</span>
                        )}
                    </div>
                    <p className="carta-item__desc">{item.shortDescription}</p>
                </div>
            </div>
            {item.includes && item.includes.length > 0 && (
                <div className="carta-item__includes">
                    <span className="carta-item__includes-label">Incluye</span>
                    <div className="carta-item__tags">
                        {item.includes.map((inc, i) => (
                            <span key={i} className="carta-item__tag">
                                {inc}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}

/** Empty state with better visuals */
function MenuEmptyState({ query }: { query: string }) {
    return (
        <div className="carta-empty" role="status">
            <div className="carta-empty__icon">
                <SearchIcon />
            </div>
            <h3 className="carta-empty__title">Sin resultados</h3>
            <p className="carta-empty__text">
                No encontramos platos para "<strong>{query}</strong>". Probá con otro nombre o categoría.
            </p>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const CartaPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCat = searchParams.get('cat') || 'combos';
    const initialQuery = searchParams.get('q') || '';

    const [activeCategory, setActiveCategory] = useState(initialCat);
    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const phone = getPhone();
    const wa = getWhatsApp();
    const cartaSchema = generateCartaSchema();
    const isOpen = isCurrentlyOpen();

    // Track QR menu open
    useEffect(() => {
        trackQrMenuOpen();
    }, []);

    // Scroll listener
    useEffect(() => {
        const onScroll = () => setShowScrollTop(window.scrollY > 300);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Sync state → URL (debounced for search)
    const searchDebounceRef = useRef<ReturnType<typeof setTimeout>>();
    useEffect(() => {
        clearTimeout(searchDebounceRef.current);
        searchDebounceRef.current = setTimeout(() => {
            const params: Record<string, string> = {};
            if (activeCategory && activeCategory !== 'combos') params.cat = activeCategory;
            if (searchQuery.trim()) params.q = searchQuery.trim();
            setSearchParams(params, { replace: true });
        }, 300);
        return () => clearTimeout(searchDebounceRef.current);
    }, [activeCategory, searchQuery, setSearchParams]);

    // Filter + search items
    const displayedItems = useMemo(() => {
        let items = menuItems;
        if (searchQuery.trim()) {
            items = searchItems(items, searchQuery);
        } else {
            items = filterByCategory(items, activeCategory);
        }
        return items;
    }, [activeCategory, searchQuery]);

    // Track search analytics
    const prevQueryRef = useRef('');
    useEffect(() => {
        const q = searchQuery.trim();
        if (q && q !== prevQueryRef.current) {
            trackMenuSearch(q);
            if (displayedItems.length === 0) {
                trackMenuNoResults(q);
            }
        }
        prevQueryRef.current = q;
    }, [searchQuery, displayedItems.length]);

    const handleCategorySelect = useCallback(
        (id: string) => {
            setActiveCategory(id);
            setSearchQuery('');
            trackMenuCategorySelect(id);
        },
        []
    );

    const handleSearchChange = useCallback((v: string) => {
        setSearchQuery(v);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // Active category object
    const activeCatObj = getCategoryById(activeCategory);

    // Build hours display
    const hoursLabel = useMemo(() => {
        const groups = new Map<string, string[]>();
        businessProfile.openingHoursDisplay.forEach((h) => {
            const existing = groups.get(h.hours) || [];
            existing.push(h.day);
            groups.set(h.hours, existing);
        });
        return Array.from(groups.entries())
            .map(([hours, days]) => {
                if (days.length === 1) return `${days[0]}: ${hours}`;
                return `${days[0]} a ${days[days.length - 1]}: ${hours}`;
            })
            .join(' · ');
    }, []);

    const isSearching = searchQuery.trim().length > 0;

    return (
        <div className="carta-page">
            <SeoHead routeKey="carta" />
            <StructuredData schema={cartaSchema} />

            {/* ─── Hero ─── */}
            <CartaHero isOpen={isOpen} />

            {/* ─── Sticky Controls ─── */}
            <div className="carta-controls">
                <MenuSearchBar value={searchQuery} onChange={handleSearchChange} />
                {!isSearching && (
                    <CategoryNav activeId={activeCategory} onSelect={handleCategorySelect} />
                )}
            </div>

            {/* ─── Breadcrumb ─── */}
            <nav className="carta-breadcrumb" aria-label="Breadcrumb">
                <ol className="carta-breadcrumb__list">
                    <li className="carta-breadcrumb__item">
                        <a href="/" className="carta-breadcrumb__link">
                            Inicio
                        </a>
                        <span className="carta-breadcrumb__sep" aria-hidden="true">
                            ›
                        </span>
                    </li>
                    <li
                        className="carta-breadcrumb__item carta-breadcrumb__item--current"
                        aria-current="page"
                    >
                        Carta
                    </li>
                </ol>
            </nav>

            {/* ─── Section Header ─── */}
            {!isSearching && (
                <div className="carta-section-header">
                    <div className="carta-section-header__left">
                        <div className="carta-section-header__icon" aria-hidden="true">
                            {activeCatObj?.icon}
                        </div>
                        <h2 className="carta-section-header__title">{activeCatObj?.label}</h2>
                    </div>
                    <span className="carta-section-header__count">
                        {displayedItems.length} {displayedItems.length === 1 ? 'plato' : 'platos'}
                    </span>
                </div>
            )}

            {isSearching && displayedItems.length > 0 && (
                <div className="carta-section-header">
                    <div className="carta-section-header__left">
                        <h2 className="carta-section-header__title">Resultados</h2>
                    </div>
                    <span className="carta-section-header__count">
                        {displayedItems.length} {displayedItems.length === 1 ? 'resultado' : 'resultados'}
                    </span>
                </div>
            )}

            {/* ─── Menu Items ─── */}
            <main className="carta-main" id="carta-items">
                {displayedItems.length > 0 ? (
                    <div className="carta-grid">
                        {displayedItems.map((item, idx) => (
                            <div
                                key={item.id}
                                style={{ '--i': idx } as React.CSSProperties}
                                className="carta-grid__item"
                            >
                                <MenuItemCard item={item} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <MenuEmptyState query={searchQuery} />
                )}
            </main>

            {/* ─── Footer ─── */}
            <footer className="carta-footer">
                {/* Info banner */}
                <div className="carta-footer__info">
                    <div className="carta-footer__info-icon">
                        <InfoIcon />
                    </div>
                    <p className="carta-footer__info-text">
                        Los precios pueden variar. <strong>No cobramos cubiertos.</strong> Porciones abundantes estilo casero.
                    </p>
                </div>

                {/* CTA buttons */}
                <div className="carta-footer__cta">
                    <a
                        href={phone.href}
                        className="carta-cta-btn carta-cta-btn--call"
                        onClick={() => trackReserveCallClick('carta')}
                        aria-label="Llamar al restaurante"
                    >
                        <PhoneIcon />
                        <span>Llamar</span>
                    </a>
                    <a
                        href={wa.href}
                        className="carta-cta-btn carta-cta-btn--wa"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackReserveWhatsAppClick('carta')}
                        aria-label="Contactar por WhatsApp"
                    >
                        <WhatsAppIcon />
                        <span>WhatsApp</span>
                    </a>
                    <a href="/" className="carta-cta-btn carta-cta-btn--web" aria-label="Ir al sitio web">
                        <WebIcon />
                        <span>Visitar Web</span>
                    </a>
                </div>

                {/* Hours */}
                <div className="carta-footer__meta">
                    <div className="carta-footer__meta-row">
                        <ClockIcon />
                        <span>{hoursLabel}</span>
                    </div>
                </div>

                {/* Brand */}
                <div className="carta-footer__brand">
                    <span className="carta-footer__brand-name">{businessProfile.brandName}</span>
                    <span className="carta-footer__brand-year">
                        © {new Date().getFullYear()}
                    </span>
                </div>
            </footer>

            {/* ─── Scroll to Top ─── */}
            <button
                className={`carta-fab ${showScrollTop ? 'carta-fab--visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Volver arriba"
                type="button"
            >
                <ChevronUpIcon />
            </button>
        </div>
    );
};

export default CartaPage;
