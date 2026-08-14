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
    /** Marca un plato recién incorporado a la carta (muestra el badge "Nuevo") */
    isNew?: boolean;
}

// ─── Categories ───────────────────────────────────────────────────────────────

export const menuCategories: MenuCategory[] = [
    { id: 'parrillas', label: 'Parrillas', icon: '🔥', order: 0, color: '#E25822' },
    { id: 'chivito', label: 'Chivito', icon: '🐐', order: 1, color: '#D4A574' },
    { id: 'platos', label: 'Platos Tradicionales', icon: '🍽️', order: 2, color: '#8B4513' },
    { id: 'pizzas', label: 'Pizzas', icon: '🍕', order: 3, color: '#FF6B35' },
    { id: 'empanadas', label: 'Empanadas y Porciones', icon: '🥟', order: 4, color: '#A0522D' },
    { id: 'takeaway', label: 'Para Llevar', icon: '🥡', order: 5, color: '#4A7C59' },
    { id: 'bebidas', label: 'Bebidas', icon: '🍷', order: 6, color: '#722F37' },
];

// ─── Menu Items ───────────────────────────────────────────────────────────────

export const menuItems: MenuItem[] = [
    // ── Parrillas ─────────────────────────────────────────────────────────────
    /*
    {
        id: 'parrilla-1',
        categoryId: 'parrillas',
        name: 'Parrilla para 1 Persona',
        shortDescription: 'Empanada, ensalada mixta, excelente parrilla, pan casero; de postre: helado Grido o postre artesanal.',
        price: 29000,
        serves: '1 persona',
        includes: ['Empanada', 'Ensalada Mixta', 'Parrilla', 'Pan Casero', 'Postre artesanal o helado Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },
    */
    {
        id: 'parrilla-2',
        categoryId: 'parrillas',
        name: 'Parrilla para 2 Personas',
        shortDescription: 'Empanada, ensalada mixta, excelente parrilla, pan casero; de postre: helado Grido o postre artesanal.',
        price: 74000,
        serves: '2 personas',
        includes: ['Empanada', 'Ensalada Mixta', 'Parrilla', 'Pan Casero', 'Postre artesanal o helado Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },
    {
        id: 'parrilla-3',
        categoryId: 'parrillas',
        name: 'Parrilla para 3 Personas',
        shortDescription: 'Empanadas, ensalada mixta, excelente parrilla, pan casero; de postre: helado Grido o postre artesanal.',
        price: 112000,
        isRecommended: true,
        serves: '3 personas',
        includes: ['Empanadas', 'Ensalada Mixta', 'Parrilla', 'Pan Casero', 'Postre artesanal o helado Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },
    {
        id: 'parrilla-4',
        categoryId: 'parrillas',
        name: 'Parrilla para 4 Personas',
        shortDescription: 'Empanadas, ensalada mixta, excelente parrilla, pan casero; de postre: helado Grido o postre artesanal.',
        price: 134000,
        isRecommended: true,
        serves: '4 personas',
        includes: ['Empanadas', 'Ensalada Mixta', 'Parrilla', 'Pan Casero', 'Postre artesanal o helado Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },

    // ── Chivito a las Brasas ──────────────────────────────────────────────────
    {
        id: 'chivito-2',
        categoryId: 'chivito',
        name: 'Chivito para 2 Personas',
        shortDescription: 'Con empanadas, chanfaina, papas fritas, ensaladas varias, pan casero; de postre: helado Grido o postre artesanal.',
        price: 89000,
        isRecommended: true,
        serves: '2 personas',
        includes: ['Empanadas', 'Chanfaina', 'Papas Fritas', 'Ensaladas Varias', 'Pan Casero', 'Postre artesanal o helado Grido'],
        image: '/images/comida/chivito-para-dos.webp',
    },
    {
        id: 'chivito-1',
        categoryId: 'chivito',
        name: 'Chivito para 1 Persona',
        shortDescription: 'Con empanada, chanfaina, papas fritas, ensaladas varias, pan casero; de postre: helado Grido o postre artesanal.',
        price: 47000,
        serves: '1 persona',
        includes: ['Empanada', 'Chanfaina', 'Papas Fritas', 'Ensaladas Varias', 'Pan Casero', 'Postre artesanal o helado Grido'],
        image: '/images/comida/chivito-individual.webp',
    },

    // ── Platos Tradicionales ──────────────────────────────────────────────────
    {
        id: 'guiso-arroz-pollo',
        categoryId: 'platos',
        name: 'Guiso de Arroz con Pollo',
        shortDescription: 'Guiso de arroz con pollo, bien caliente y de olla; entrada: empanada.',
        price: 17000,
        isNew: true,
        includes: ['Empanada'],
        image: '/images/comida/guiso-arroz-con-pollo.webp',
    },
    {
        id: 'polenta-bolognesa',
        categoryId: 'platos',
        name: 'Polenta con Salsa Bolognesa y Queso Cremoso',
        shortDescription: 'Polenta cremosa con salsa bolognesa y queso cremoso; incluye entrada.',
        price: 18000,
        isNew: true,
        includes: ['Entrada'],
        image: '/images/comida/polenta-salsa-bolognesa.webp',
    },
    {
        id: 'tallarines-estofado',
        categoryId: 'platos',
        name: 'Tallarines con Estofado de Carne',
        shortDescription: 'Estofado de carne, pan casero; entrada: empanada.',
        price: 24000,
        includes: ['Empanada', 'Pan Casero'],
        image: '/images/comida/tallarines-estofado-carne.webp',
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
        id: 'noquis-estofado',
        categoryId: 'platos',
        name: 'Ñoquis con Estofado de Carne',
        shortDescription: 'Estofado de carne, pan casero; entrada: empanada.',
        price: 20000,
        includes: ['Empanada', 'Pan Casero'],
        image: '/images/comida/noquis-peceto.webp',
    },
    */
    {
        id: 'ravioles-clasicos',
        categoryId: 'platos',
        name: 'Ravioles Clásicos',
        shortDescription: 'A elección: de verdura, pollo con verduras, 4 quesos o salsa blanca; entrada: empanada.',
        price: 24000,
        includes: ['Empanada'],
        image: '/images/comida/ravioles-verdura.webp',
    },
    {
        id: 'ravioles-carne',
        categoryId: 'platos',
        name: 'Ravioles con Carne',
        shortDescription: 'Rellenos con estofado de carne; entrada: empanada.',
        price: 28000,
        includes: ['Empanada'],
    },
    {
        id: 'milanesa-ternera',
        categoryId: 'platos',
        name: 'Milanesa de Ternera',
        shortDescription: 'Con papas fritas o ensaladas; entrada: empanada; de postre: helado Grido o postre artesanal.',
        price: 24000,
        isNew: true,
        includes: ['Empanada', 'Papas Fritas o Ensaladas', 'Postre artesanal o helado Grido'],
        image: '/images/comida/milanesa-ternera.webp',
    },
    {
        id: 'milanesa-napolitana',
        categoryId: 'platos',
        name: 'Milanesa Napolitana',
        shortDescription: 'Con ensaladas o papa frita, pan casero; de postre: helado Grido o postre artesanal.',
        price: 29000,
        includes: ['Ensaladas o Papas Fritas', 'Pan Casero', 'Postre artesanal o helado Grido'],
        image: '/images/comida/milanesa-napolitana.webp',
    },
    {
        id: 'pollo-grillado',
        categoryId: 'platos',
        name: 'Pollo Grillado con Fritas',
        shortDescription: 'Con fritas o ensalada, pan casero; entrada: empanada.',
        price: 24000,
        includes: ['Empanada', 'Fritas o Ensalada', 'Pan Casero'],
        image: '/images/comida/pollo-grillado.webp',
    },
    {
        id: 'pollo-horno',
        categoryId: 'platos',
        name: 'Pollo al Horno con Fritas',
        shortDescription: 'Pollo al horno con porción de fritas, pan casero; entrada: empanada.',
        price: 24000,
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
        id: 'vacio',
        categoryId: 'platos',
        name: 'Vacío de Ternera',
        shortDescription: 'Con empanada, ensalada o papas fritas; de postre: helado Grido o postre artesanal.',
        price: 32000,
        includes: ['Empanada', 'Ensalada o Papas Fritas', 'Postre artesanal o helado Grido'],
        image: '/images/comida/vacio-costilla.png',
    },
    {
        id: 'carne-olla',
        categoryId: 'platos',
        name: 'Carne a la Olla',
        shortDescription: 'Con entrada: empanada; ensaladas varias, pan casero.',
        price: 26000,
        includes: ['Empanada', 'Ensaladas Varias', 'Pan Casero'],
        image: '/images/comida/carne-olla.webp',
    },
    {
        id: 'locro',
        categoryId: 'platos',
        name: 'Locro Campero',
        shortDescription: 'Empanada, locro con cebollitas fritas, pan casero; de postre: helado Grido o postre artesanal.',
        price: 25000,
        includes: ['Empanada', 'Cebollitas Fritas', 'Pan Casero', 'Postre artesanal o helado Grido'],
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

    // ── Empanadas y Porciones ─────────────────────────────────────────────────
    {
        id: 'empanada-unidad',
        categoryId: 'empanadas',
        name: 'Empanada (Unidad)',
        shortDescription: 'Empanada criolla de carne o de jamón y queso, por unidad.',
        price: 3000,
        serves: '1 unidad',
        image: '/images/comida/empanadas.png',
    },
    {
        id: 'papas-grande',
        categoryId: 'empanadas',
        name: 'Porción de Papas Grande',
        shortDescription: 'Porción grande de papas fritas, para compartir en la mesa.',
        price: 9000,
        isNew: true,
        serves: 'Porción grande',
        image: '/images/comida/papas-fritas-porcion-grande.webp',
    },

    // ── Para Llevar ───────────────────────────────────────────────────────────
    {
        id: 'empanadas-docena',
        categoryId: 'takeaway',
        name: 'Docena de Empanadas',
        shortDescription: 'Docena de empanadas de carne o de jamón y queso, para llevar.',
        price: 19000,
        serves: '12 unidades',
        image: '/images/comida/empanadas.png',
    },
    {
        id: 'sandwich-milanesa',
        categoryId: 'takeaway',
        name: 'Sándwich de Milanesa',
        shortDescription: 'Milanesa en pan casero, con lechuga y tomate.',
        price: 19000,
        isNew: true,
        image: '/images/comida/sandwich-milanesa-pan-casero.webp',
    },
    {
        id: 'choripan',
        categoryId: 'takeaway',
        name: 'Choripán',
        shortDescription: 'Chorizo a la parrilla en pan casero, recién salido de las brasas.',
        price: 15000,
        isNew: true,
        image: '/images/comida/choripan.webp',
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
