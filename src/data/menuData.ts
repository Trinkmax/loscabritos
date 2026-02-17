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
    { id: 'combos', label: 'Combos', icon: '🍖', order: 0, color: '#E25822' },
    { id: 'especialidades', label: 'Chivito', icon: '🐐', order: 1, color: '#D4A574' },
    { id: 'individuales', label: 'Individuales', icon: '🍽️', order: 2, color: '#8B4513' },
    { id: 'entradas', label: 'Entradas', icon: '🥟', order: 3, color: '#A0522D' },
    { id: 'parrilla', label: 'Parrilla', icon: '🔥', order: 4, color: '#FF6B35' },
    { id: 'pastas', label: 'Pastas', icon: '🍝', order: 5, color: '#DEB887' },
    { id: 'milanesas', label: 'Milanesas', icon: '🥩', order: 6, color: '#B8860B' },
    { id: 'guarniciones', label: 'Extras', icon: '🥗', order: 7, color: '#4A7C59' },
    { id: 'bebidas', label: 'Bebidas', icon: '🍷', order: 8, color: '#722F37' },
    { id: 'postres', label: 'Postres', icon: '🍨', order: 9, color: '#E8A87C' },
];

// ─── Menu Items ───────────────────────────────────────────────────────────────

export const menuItems: MenuItem[] = [
    // Combos Parrillada
    {
        id: 'parrilla-2',
        categoryId: 'combos',
        name: 'Parrilla Completa para 2',
        shortDescription: 'La experiencia completa de nuestra parrilla para compartir en pareja.',
        price: 53000,
        serves: '2 personas',
        includes: ['Empanadas', 'Vacío', 'Chorizos', 'Costillas', 'Ensaladas', 'Pollo/Cerdo'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },
    {
        id: 'parrilla-3',
        categoryId: 'combos',
        name: 'Parrilla Completa para 3',
        shortDescription: 'Todo el sabor de la parrilla argentina con postre incluido. No cobramos cubiertos.',
        price: 69000,
        isRecommended: true,
        serves: '3 personas',
        includes: ['Empanadas', 'Vacío', 'Chorizos', 'Costillas', 'Ensaladas', 'Pollo/Cerdo', 'Postre Helado Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },
    {
        id: 'parrilla-4',
        categoryId: 'combos',
        name: 'Parrilla Completa para 4',
        shortDescription: 'El combo ideal para familias y grupos. Abundante y completo con postre incluido.',
        price: 89000,
        isRecommended: true,
        serves: '4 personas',
        includes: ['Empanadas', 'Vacío', 'Chorizos', 'Costillas', 'Ensaladas', 'Pollo/Cerdo', 'Postre Helado Grido'],
        image: '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    },
    // Especialidad: Chivito
    {
        id: 'chivito-1',
        categoryId: 'especialidades',
        name: 'Chivito a las Brasas',
        shortDescription: 'Nuestro plato insignia. Chivito tierno cocinado lentamente sobre las brasas.',
        price: 39000,
        serves: '1 persona',
        image: '/images/comida/cabrito-asado-brasas-san-luis.webp',
    },
    {
        id: 'chivito-2',
        categoryId: 'especialidades',
        name: 'Chivito a las Brasas',
        shortDescription: 'Chivito para compartir con todo lo necesario para una experiencia completa.',
        price: 69000,
        isRecommended: true,
        serves: '2 personas',
        includes: ['Empanadas', 'Chivito', 'Chanfaina', 'Papas Fritas', 'Ensaladas', 'Postre Grido'],
        image: '/images/comida/cabrito-asado-brasas-san-luis.webp',
    },
    // Platos Individuales
    {
        id: 'combo-individual',
        categoryId: 'individuales',
        name: 'Combo Individual',
        shortDescription: 'Empanada + Tallarines/Ravioles con salsa o Milanesa de Ternera con Fritas.',
        price: 20000,
        serves: '1 persona',
    },
    // Entradas
    {
        id: 'empanadas-carne',
        categoryId: 'entradas',
        name: 'Empanadas de Carne',
        shortDescription: 'Empanadas criollas hechas al horno con carne cortada a cuchillo.',
        price: 6500,
        serves: 'x3 unidades',
        image: '/images/comida/empanadas-carne.jpeg',
    },
    {
        id: 'empanadas-jq',
        categoryId: 'entradas',
        name: 'Empanadas Jamón y Queso',
        shortDescription: 'Empanadas crujientes rellenas de jamón y queso derretido.',
        price: 6500,
        serves: 'x3 unidades',
    },
    {
        id: 'provoleta',
        categoryId: 'entradas',
        name: 'Provoleta a la Parrilla',
        shortDescription: 'Queso provolone fundido en la parrilla con orégano y tomate.',
        price: 9500,
    },
    // Parrilla Individual
    {
        id: 'asado-costilla',
        categoryId: 'parrilla',
        name: 'Asado / Costilla',
        shortDescription: 'Corte tradicional argentino cocido lentamente a las brasas.',
        price: 18000,
    },
    {
        id: 'vacio',
        categoryId: 'parrilla',
        name: 'Vacío',
        shortDescription: 'Corte jugoso y tierno, preferido de los amantes de la parrilla.',
        price: 19000,
    },
    {
        id: 'matambre',
        categoryId: 'parrilla',
        name: 'Matambre a la Parrilla',
        shortDescription: 'Matambre tierno y sabroso, cocinado al punto perfecto.',
        price: 17000,
    },
    {
        id: 'pollo-parrilla',
        categoryId: 'parrilla',
        name: 'Pollo a la Parrilla',
        shortDescription: 'Medio pollo dorado y jugoso, cocido sobre las brasas.',
        price: 13000,
        image: '/images/comida/pollo-parrilla-vegetales.jpeg',
    },
    {
        id: 'chorizo-morcilla',
        categoryId: 'parrilla',
        name: 'Chorizo y Morcilla',
        shortDescription: 'Clásico de la parrilla argentina para acompañar o picar.',
        price: 7000,
    },
    // Pastas
    {
        id: 'ravioles',
        categoryId: 'pastas',
        name: 'Ravioles Caseros',
        shortDescription: 'Ravioles artesanales con salsa bolognesa o salsa blanca.',
        price: 14000,
    },
    {
        id: 'tallarines',
        categoryId: 'pastas',
        name: 'Tallarines Caseros',
        shortDescription: 'Tallarines frescos con salsa bolognesa, fileto o crema.',
        price: 13000,
    },
    {
        id: 'noquis',
        categoryId: 'pastas',
        name: 'Ñoquis de Papa',
        shortDescription: 'Ñoquis caseros de papa con la salsa de tu preferencia.',
        price: 13000,
    },
    // Milanesas
    {
        id: 'milanesa-ternera',
        categoryId: 'milanesas',
        name: 'Milanesa de Ternera',
        shortDescription: 'Milanesa crocante por fuera y jugosa por dentro.',
        price: 15000,
    },
    {
        id: 'milanesa-pollo',
        categoryId: 'milanesas',
        name: 'Milanesa de Pollo',
        shortDescription: 'Suprema de pollo empanada y dorada a la perfección.',
        price: 13000,
    },
    {
        id: 'milanesa-napolitana',
        categoryId: 'milanesas',
        name: 'Milanesa Napolitana',
        shortDescription: 'Milanesa con jamón, queso, tomate y orégano gratinada.',
        price: 17000,
    },
    // Guarniciones
    {
        id: 'papas-fritas',
        categoryId: 'guarniciones',
        name: 'Papas Fritas',
        shortDescription: 'Papas cortadas y fritas al momento.',
        price: 5000,
    },
    {
        id: 'ensalada-mixta',
        categoryId: 'guarniciones',
        name: 'Ensalada Mixta',
        shortDescription: 'Lechuga, tomate, cebolla y zanahoria.',
        price: 5000,
    },
    {
        id: 'pure',
        categoryId: 'guarniciones',
        name: 'Puré de Papa',
        shortDescription: 'Puré cremoso de papa casero.',
        price: 5000,
    },
    // Bebidas
    {
        id: 'gaseosa',
        categoryId: 'bebidas',
        name: 'Gaseosa 1.5L',
        shortDescription: 'Coca-Cola, Sprite, Fanta o Paso de los Toros.',
        price: 4500,
    },
    {
        id: 'agua',
        categoryId: 'bebidas',
        name: 'Agua Mineral',
        shortDescription: 'Con o sin gas.',
        price: 3000,
    },
    {
        id: 'vino-tinto',
        categoryId: 'bebidas',
        name: 'Vino Tinto de la Casa',
        shortDescription: 'Jarra de vino tinto de la región.',
        price: 8000,
    },
    // Postres
    {
        id: 'helado',
        categoryId: 'postres',
        name: 'Helado Grido',
        shortDescription: 'Pote individual de helado con sabores a elección.',
        price: 5500,
    },
    {
        id: 'flan',
        categoryId: 'postres',
        name: 'Flan Casero',
        shortDescription: 'Flan con dulce de leche y crema.',
        price: 5000,
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
