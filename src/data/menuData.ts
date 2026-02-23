// ─── Types ────────────────────────────────────────────────────────────────────

export interface MenuCategory {
    id: string;
    label: string;
    icon: string;
    order: number;
    color: string;
}

export interface MenuItem {
    id: string;
    categoryId: string;
    name: string;
    price: number;
    shortDescription: string;
    serves?: string;
    includes?: string[];
    image?: string;
    isRecommended?: boolean;
}

// ─── Categories ───────────────────────────────────────────────────────────────

export const menuCategories: MenuCategory[] = [
    { id: 'parrillas', label: 'Parrillas', icon: '🔥', order: 0, color: '#E25822' },
    { id: 'chivito', label: 'Chivito', icon: '🐐', order: 1, color: '#D4A574' },
    { id: 'platos', label: 'Platos Tradicionales', icon: '🍽️', order: 2, color: '#8B4513' },
    { id: 'pizzas', label: 'Pizzas', icon: '🍕', order: 3, color: '#FF6B35' },
    { id: 'empanadas', label: 'Empanadas', icon: '🥟', order: 4, color: '#A0522D' },
    { id: 'bebidas', label: 'Bebidas', icon: '🍷', order: 5, color: '#722F37' },
];

// ─── Menu Items ───────────────────────────────────────────────────────────────

export const menuItems: MenuItem[] = [
    // ── Parrillas ─────────────────────────────────────────────────────────────
    /*
    {
        id: 'parrilla-1',
        categoryId: 'parrillas',
        name: 'Parrilla para 1 Persona',
        shortDescription: 'Empanada, ensalada mixta, excelente parrilla, pan casero; postre: copa Grido.',
        price: 29000,
        serves: '1 persona',
        includes: ['Empanada', 'Ensalada Mixta', 'Parrilla', 'Pan Casero', 'Postre Copa Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },
    */
    {
        id: 'parrilla-2',
        categoryId: 'parrillas',
        name: 'Parrilla para 2 Personas',
        shortDescription: 'Empanada, ensalada mixta, excelente parrilla, pan casero; postre: copa Grido.',
        price: 55000,
        serves: '2 personas',
        includes: ['Empanada', 'Ensalada Mixta', 'Parrilla', 'Pan Casero', 'Postre Copa Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },
    {
        id: 'parrilla-3',
        categoryId: 'parrillas',
        name: 'Parrilla para 3 Personas',
        shortDescription: 'Empanadas, ensalada mixta, excelente parrilla, pan casero; postre: copa Grido.',
        price: 79000,
        isRecommended: true,
        serves: '3 personas',
        includes: ['Empanadas', 'Ensalada Mixta', 'Parrilla', 'Pan Casero', 'Postre Copa Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },
    {
        id: 'parrilla-4',
        categoryId: 'parrillas',
        name: 'Parrilla para 4 Personas',
        shortDescription: 'Empanadas, ensalada mixta, excelente parrilla, pan casero; postre: copa Grido.',
        price: 98000,
        isRecommended: true,
        serves: '4 personas',
        includes: ['Empanadas', 'Ensalada Mixta', 'Parrilla', 'Pan Casero', 'Postre Copa Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },

    // ── Chivito a las Brasas ──────────────────────────────────────────────────
    {
        id: 'chivito-2',
        categoryId: 'chivito',
        name: 'Chivito para 2 Personas',
        shortDescription: 'Con empanadas, chanfaina, papas fritas, ensaladas varias, pan casero; postre: copa Grido.',
        price: 72000,
        isRecommended: true,
        serves: '2 personas',
        includes: ['Empanadas', 'Chanfaina', 'Papas Fritas', 'Ensaladas Varias', 'Pan Casero', 'Postre Copa Grido'],
        image: '/images/comida/chivito-para-dos.webp',
    },
    {
        id: 'chivito-1',
        categoryId: 'chivito',
        name: 'Chivito para 1 Persona',
        shortDescription: 'Con empanada, chanfaina, papas fritas, ensaladas varias, pan casero; postre: copa de helado Grido.',
        price: 39000,
        serves: '1 persona',
        includes: ['Empanada', 'Chanfaina', 'Papas Fritas', 'Ensaladas Varias', 'Pan Casero', 'Postre Helado Grido'],
        image: '/images/comida/chivito-individual.webp',
    },

    // ── Platos Tradicionales ──────────────────────────────────────────────────
    {
        id: 'tallarines-peceto',
        categoryId: 'platos',
        name: 'Tallarines con Peceto',
        shortDescription: 'Estofado de peceto, pan casero; entrada: empanada.',
        price: 22000,
        includes: ['Empanada', 'Pan Casero'],
        image: '/images/comida/tallarines-con-peceto.webp',
    },
    {
        id: 'tallarines-salsa-blanca',
        categoryId: 'platos',
        name: 'Tallarines con Salsa Blanca',
        shortDescription: 'Salsa blanca, pan casero; entrada: empanada.',
        price: 22000,
        includes: ['Empanada', 'Pan Casero'],
        image: '/images/comida/tallarines-salsa-blanca.webp',
    },
    /*
    {
        id: 'noquis-peceto',
        categoryId: 'platos',
        name: 'Ñoquis con Peceto',
        shortDescription: 'Estofado de peceto, pan casero; entrada: empanada.',
        price: 20000,
        includes: ['Empanada', 'Pan Casero'],
        image: '/images/comida/noquis-peceto.webp',
    },
    */
    {
        id: 'ravioles',
        categoryId: 'platos',
        name: 'Ravioles',
        shortDescription: 'De verdura, pollo con verduras, 4 quesos, estofado de peceto o salsa blanca; entrada: empanada.',
        price: 24000,
        includes: ['Empanada'],
        image: '/images/comida/ravioles-verdura.webp',
    },
    {
        id: 'milanesa-napolitana',
        categoryId: 'platos',
        name: 'Milanesa Napolitana',
        shortDescription: 'Con ensaladas o papa frita, pan casero; postre: helado Grido.',
        price: 26000,
        includes: ['Ensaladas o Papas Fritas', 'Pan Casero', 'Postre Helado Grido'],
        image: '/images/comida/milanesa-napolitana.webp',
    },
    {
        id: 'pollo-grillado',
        categoryId: 'platos',
        name: 'Pollo Grillado con Fritas',
        shortDescription: 'Con fritas o ensalada, pan casero; entrada: empanada.',
        price: 22000,
        includes: ['Empanada', 'Fritas o Ensalada', 'Pan Casero'],
        image: '/images/comida/pollo-grillado.webp',
    },
    {
        id: 'pollo-horno',
        categoryId: 'platos',
        name: 'Pollo al Horno con Fritas',
        shortDescription: 'Pollo al horno con porción de fritas, pan casero; entrada: empanada.',
        price: 22000,
        includes: ['Empanada', 'Papas Fritas', 'Pan Casero'],
        image: '/images/comida/pollo-horno.webp',
    },
    /*
    {
        id: 'canelones',
        categoryId: 'platos',
        name: 'Canelones Caseros',
        shortDescription: 'Canelones caseros con salsa y queso gratinado, pan casero; entrada: empanada.',
        price: 20000,
        includes: ['Empanada', 'Pan Casero'],
        image: '/images/comida/canelones.webp',
    },
    */
    {
        id: 'vacio-costilla',
        categoryId: 'platos',
        name: 'Vacío o Costilla de Ternera',
        shortDescription: 'Con empanada, ensalada o papas fritas; postre: copa de helado Grido.',
        price: 27000,
        includes: ['Empanada', 'Ensalada o Papas Fritas', 'Postre Copa Helado Grido'],
        image: '/images/comida/vacio-costilla.png',
    },
    {
        id: 'carne-olla',
        categoryId: 'platos',
        name: 'Carne a la Olla',
        shortDescription: 'Con entrada: empanada; ensaladas varias, pan casero.',
        price: 24000,
        includes: ['Empanada', 'Ensaladas Varias', 'Pan Casero'],
        image: '/images/comida/carne-olla.webp',
    },
    {
        id: 'locro',
        categoryId: 'platos',
        name: 'Locro Campero',
        shortDescription: 'Empanada, locro con cebollitas fritas, pan casero; postre: helado Grido.',
        price: 21000,
        includes: ['Empanada', 'Cebollitas Fritas', 'Pan Casero', 'Postre Helado Grido'],
        image: '/images/comida/locro.webp',
    },
    {
        id: 'humita',
        categoryId: 'platos',
        name: 'Humita de Choclo',
        shortDescription: 'Con cebollitas fritas, con entrada: empanada, pan casero.',
        price: 26000,
        includes: ['Empanada', 'Cebollitas Fritas', 'Pan Casero'],
        image: '/images/comida/humita.webp',
    },
    {
        id: 'merluza',
        categoryId: 'platos',
        name: 'Merluza con Puré o Papas Fritas',
        shortDescription: 'Milanesa de merluza fresca, con entrada de empanadas de vigilia, pan casero.',
        price: 24000,
        includes: ['Empanadas de Vigilia', 'Puré o Papas Fritas', 'Pan Casero'],
        image: '/images/comida/merluza.webp',
    },

    // ── Pizzas Grandes ────────────────────────────────────────────────────────
    {
        id: 'pizza-jamon-queso',
        categoryId: 'pizzas',
        name: 'Pizza Especial con Muzzarella y Jamón Cocido',
        shortDescription: 'Pizza grande, especial con muzzarella y jamón cocido.',
        price: 23000,
        serves: 'Pizza grande',
        image: '/images/comida/pizzaespecial.png',
    },
    {
        id: 'pizza-muzzarella',
        categoryId: 'pizzas',
        name: 'Pizza Doble Muzzarella',
        shortDescription: 'Pizza grande, doble muzzarella.',
        price: 20000,
        serves: 'Pizza grande',
        image: '/images/comida/pizza.webp',
    },

    // ── Empanadas ─────────────────────────────────────────────────────────────
    {
        id: 'empanadas-docena',
        categoryId: 'empanadas',
        name: 'Empanadas (Docena para llevar)',
        shortDescription: 'Docena de empanadas de carne o jamón y queso para llevar.',
        price: 18000,
        serves: '12 unidades',
        image: '/images/comida/empanadas.png',
    },
    {
        id: 'empanada-unidad',
        categoryId: 'empanadas',
        name: 'Empanada (Unidad)',
        shortDescription: 'Empanada de carne o jamón y queso para consumir en el restaurante.',
        price: 2000,
        serves: '1 unidad',
        image: '/images/comida/empanadas.png',
    },

    // ── Bebidas ───────────────────────────────────────────────────────────────
    {
        id: 'bebida-linea-coca',
        categoryId: 'bebidas',
        name: 'Bebidas Línea Coca-Cola',
        shortDescription: 'Todas las bebidas son de 1,25 litros, en envase de vidrio, línea Coca-Cola.',
        price: 0,
        image: '/images/comida/bebida-linea-coca.png',
    },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Normalize a string for accent-insensitive, case-insensitive matching */
function normalize(str: string): string {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

/** Filter items by category */
export function filterByCategory(items: MenuItem[], cat: string): MenuItem[] {
    if (!cat) return items;
    return items.filter((item) => item.categoryId === cat);
}

/** Search items by name (accent/case-insensitive) */
export function searchItems(items: MenuItem[], query: string): MenuItem[] {
    if (!query.trim()) return items;
    const normalizedQuery = normalize(query.trim());
    return items.filter(
        (item) =>
            normalize(item.name).includes(normalizedQuery) ||
            normalize(item.shortDescription).includes(normalizedQuery)
    );
}

/** Format price in ARS */
export function formatPriceARS(price: number): string {
    if (price === 0) return 'Consultar';
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
    }).format(price);
}

/** Get category by id */
export function getCategoryById(id: string): MenuCategory | undefined {
    return menuCategories.find((c) => c.id === id);
}
