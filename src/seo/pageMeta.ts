import { businessProfile } from '../data/businessProfile';

export interface PageMeta {
    title: string;
    description: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogType: string;
    ogImage: string;
    ogUrl: string;
    twitterCard: string;
    robots?: string;
    alternates?: { hreflang: string; href: string }[];
}

const BASE = businessProfile.canonicalUrl;

export const pageMeta: Record<string, PageMeta> = {
    home: {
        title: 'Los Cabritos | Restaurante de Cabrito y Parrilla en San Luis',
        description:
            'Restaurante de cabrito y chivito a la parrilla en Villa de la Quebrada y La Carolina, San Luis. Más de 50 años de tradición. Reservá por teléfono o WhatsApp.',
        canonical: `${BASE}/`,
        ogTitle: 'Los Cabritos — Cabrito y Parrilla en San Luis',
        ogDescription:
            'Más de 50 años sirviendo cabrito y chivito a las brasas. Villa de la Quebrada y La Carolina, San Luis.',
        ogType: 'website',
        ogImage: `${BASE}/logo-los-cabritos-restaurante.webp`,
        ogUrl: `${BASE}/`,
        twitterCard: 'summary_large_image',
        robots: 'index, follow',
        alternates: [
            { hreflang: 'es', href: `${BASE}/` },
            { hreflang: 'x-default', href: `${BASE}/` },
        ],
    },
    carta: {
        title: 'Carta y Menú | Los Cabritos — Parrilla en San Luis',
        description:
            'Carta completa: combos de parrilla, chivito a las brasas, empanadas criollas, pastas caseras y más. Precios actualizados. No cobramos cubiertos.',
        canonical: `${BASE}/carta`,
        ogTitle: 'Carta y Menú — Los Cabritos',
        ogDescription:
            'Parrilla completa, chivito a las brasas, empanadas, pastas caseras y más. Precios actualizados.',
        ogType: 'website',
        ogImage: `${BASE}/logo-los-cabritos-restaurante.webp`,
        ogUrl: `${BASE}/carta`,
        twitterCard: 'summary_large_image',
        robots: 'index, follow',
        alternates: [
            { hreflang: 'es', href: `${BASE}/carta` },
            { hreflang: 'x-default', href: `${BASE}/carta` },
        ],
    },
    notFound: {
        title: 'Página no encontrada | Los Cabritos',
        description: 'La página que buscás no existe. Volvé al inicio para encontrar lo que necesitás.',
        canonical: `${BASE}/`,
        ogTitle: 'Página no encontrada | Los Cabritos',
        ogDescription: 'La página que buscás no existe.',
        ogType: 'website',
        ogImage: `${BASE}/logo-los-cabritos-restaurante.webp`,
        ogUrl: `${BASE}/`,
        twitterCard: 'summary',
        robots: 'noindex, follow',
    },
};
