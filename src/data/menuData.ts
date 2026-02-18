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
    {
        id: 'parrilla-2',
        categoryId: 'parrillas',
        name: 'Parrilla Completa',
        shortDescription: 'Incluye: empanadas, vacío, chorizos, costillas, pollo y cerdo, ensaladas y postre (helado Grido).',
        price: 53000,
        serves: '2 personas',
        includes: ['Empanadas', 'Vacío', 'Chorizos', 'Costillas', 'Pollo', 'Cerdo', 'Ensaladas', 'Postre Helado Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },
    {
        id: 'parrilla-3',
        categoryId: 'parrillas',
        name: 'Parrilla Completa',
        shortDescription: 'Incluye: empanadas, vacío, chorizos, costillas, pollo y cerdo, ensaladas y postre (helado Grido).',
        price: 69000,
        isRecommended: true,
        serves: '3 personas',
        includes: ['Empanadas', 'Vacío', 'Chorizos', 'Costillas', 'Pollo', 'Cerdo', 'Ensaladas', 'Postre Helado Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },
    {
        id: 'parrilla-4',
        categoryId: 'parrillas',
        name: 'Parrilla Completa',
        shortDescription: 'Incluye: empanadas, vacío, chorizos, costillas, pollo y cerdo, ensaladas y postre (helado Grido).',
        price: 89000,
        isRecommended: true,
        serves: '4 personas',
        includes: ['Empanadas', 'Vacío', 'Chorizos', 'Costillas', 'Pollo', 'Cerdo', 'Ensaladas', 'Postre Helado Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },

    // ── Chivito a las Brasas ──────────────────────────────────────────────────
    {
        id: 'chivito-2',
        categoryId: 'chivito',
        name: 'Chivito a las Brasas',
        shortDescription: 'Incluye: empanadas, chivito, chanfaina, papas fritas, ensaladas y postre Grido.',
        price: 69000,
        isRecommended: true,
        serves: '2 personas',
        includes: ['Empanadas', 'Chivito', 'Chanfaina', 'Papas Fritas', 'Ensaladas', 'Postre Grido'],
        image: '/images/comida/cabrito-asado-brasas-san-luis.webp',
    },
    {
        id: 'chivito-1',
        categoryId: 'chivito',
        name: 'Chivito a las Brasas',
        shortDescription: 'Nuestro plato insignia. Chivito tierno cocinado lentamente sobre las brasas.',
        price: 39000,
        serves: '1 persona',
        image: '/images/comida/cabrito-asado-brasas-san-luis.webp',
    },

    // ── Platos Tradicionales ──────────────────────────────────────────────────
    // Todos los platos incluyen una empanada de carne o jamón y queso.
    {
        id: 'locro',
        categoryId: 'platos',
        name: 'Locro',
        shortDescription: 'Incluye una empanada de carne o jamón y queso. Locro casero tradicional argentino.',
        price: 19000,
        includes: ['Empanada de carne o jamón y queso'],
    },
    {
        id: 'carne-olla',
        categoryId: 'platos',
        name: 'Carne a la Olla',
        shortDescription: 'Incluye una empanada de carne o jamón y queso. Carne tierna cocida lentamente a la olla.',
        price: 19000,
        includes: ['Empanada de carne o jamón y queso'],
    },
    {
        id: 'canelones',
        categoryId: 'platos',
        name: 'Canelones Caseros',
        shortDescription: 'Incluye una empanada de carne o jamón y queso. Canelones caseros con salsa y queso gratinado.',
        price: 19000,
        includes: ['Empanada de carne o jamón y queso'],
    },
    {
        id: 'tallarines-peceto',
        categoryId: 'platos',
        name: 'Tallarines con Peceto',
        shortDescription: 'Incluye una empanada de carne o jamón y queso. Tallarines caseros acompañados de peceto.',
        price: 19000,
        includes: ['Empanada de carne o jamón y queso'],
    },
    {
        id: 'ravioles',
        categoryId: 'platos',
        name: 'Ravioles',
        shortDescription: 'Incluye una empanada de carne o jamón y queso. Ravioles caseros con salsa blanca o bolognesa.',
        price: 19000,
        includes: ['Empanada de carne o jamón y queso'],
    },
    {
        id: 'milanesas-napolitanas',
        categoryId: 'platos',
        name: 'Milanesas Napolitanas',
        shortDescription: 'Incluye una empanada de carne o jamón y queso. Milanesas napolitanas con papas fritas.',
        price: 24000,
        includes: ['Empanada de carne o jamón y queso', 'Papas fritas'],
    },

    // ── Pizzas Grandes ────────────────────────────────────────────────────────
    {
        id: 'pizza-muzzarella',
        categoryId: 'pizzas',
        name: 'Pizza Especial de Muzzarella',
        shortDescription: '8 porciones. Pizza grande especial de muzzarella.',
        price: 16000,
        serves: '8 porciones',
    },
    {
        id: 'pizza-jamon-queso',
        categoryId: 'pizzas',
        name: 'Pizza Especial de Jamón y Queso',
        shortDescription: '8 porciones. Pizza grande especial de jamón y queso.',
        price: 18000,
        serves: '8 porciones',
    },

    // ── Empanadas ─────────────────────────────────────────────────────────────
    {
        id: 'empanadas-docena',
        categoryId: 'empanadas',
        name: 'Empanadas (Docena para llevar)',
        shortDescription: 'Docena de empanadas de carne o jamón y queso para llevar.',
        price: 18000,
        serves: '12 unidades',
        image: '/images/comida/empanadas-carne.jpeg',
    },
    {
        id: 'empanada-unidad',
        categoryId: 'empanadas',
        name: 'Empanada (Unidad)',
        shortDescription: 'Empanada de carne o jamón y queso para consumir en el restaurante.',
        price: 2000,
        serves: '1 unidad',
        image: '/images/comida/empanadas-carne.jpeg',
    },

    // ── Bebidas ───────────────────────────────────────────────────────────────
    {
        id: 'bebida-linea-coca',
        categoryId: 'bebidas',
        name: 'Bebidas Línea Coca-Cola',
        shortDescription: 'Todas las bebidas son de 1,25 litros, en envase de vidrio, línea Coca-Cola.',
        price: 0,
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
