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
        title: 'Los Cabritos De Oro | Chivito a las Brasas y Mundial 2026 en San Luis',
        description:
            'Chivito a las brasas con chanfaina en San Luis, con 3 sucursales. Vacaciones de invierno en familia: ambientes climatizados, todos los partidos del Mundial en Smart TV con Disney+ y DGO, y postres artesanales y helados GRIDO gratis con el menú.',
        canonical: `${BASE}/`,
        ogTitle: 'Los Cabritos De Oro — Chivito a las Brasas y el Mundial 2026 en San Luis',
        ogDescription:
            'Vacaciones de invierno en familia: ambientes climatizados, el Mundial en Smart TV con Disney+ y DGO, y el postre de regalo. 3 sucursales en San Luis.',
        ogType: 'website',
        ogImage: `${BASE}/images/branding/logo-los-cabritos-de-oro.png`,
        ogUrl: `${BASE}/`,
        twitterCard: 'summary_large_image',
        robots: 'index, follow',
        alternates: [
            { hreflang: 'es', href: `${BASE}/` },
            { hreflang: 'x-default', href: `${BASE}/` },
        ],
    },
    nosotros: {
        title: 'Nuestra Historia | Los Cabritos De Oro — Tradición desde 1970 en San Luis',
        description:
            'Conocé la historia de la familia Woronko y de Los Cabritos De Oro: más de 50 años de cabrito y chivito a las brasas en San Luis, transmitidos de generación en generación.',
        canonical: `${BASE}/nosotros`,
        ogTitle: 'Nuestra Historia — Los Cabritos De Oro | Tradición familiar desde 1970',
        ogDescription:
            'La historia de la familia Woronko y más de 50 años de tradición en cabrito y chivito a las brasas en San Luis.',
        ogType: 'website',
        ogImage: `${BASE}/images/branding/logo-los-cabritos-de-oro.png`,
        ogUrl: `${BASE}/nosotros`,
        twitterCard: 'summary_large_image',
        robots: 'index, follow',
        alternates: [
            { hreflang: 'es', href: `${BASE}/nosotros` },
            { hreflang: 'x-default', href: `${BASE}/nosotros` },
        ],
    },
    entretenimiento: {
        title: 'Entretenimiento | Los Cabritos De Oro — Juegos, Bingo y el Mundial en San Luis',
        description:
            'Diversión para toda la familia: cuadernillos para colorear y bingo gratis con premios, el Mundial en Smart TV con Disney+ y DGO, y ambientes climatizados en nuestros 3 locales.',
        canonical: `${BASE}/entretenimiento`,
        ogTitle: 'Entretenimiento — Los Cabritos De Oro | Juegos, Bingo y el Mundial en pantalla gigante',
        ogDescription:
            'Cuadernillos para colorear, bingo gratis con premios y todos los partidos del Mundial en Smart TV. Ambientes climatizados en San Luis.',
        ogType: 'website',
        ogImage: `${BASE}/images/branding/logo-los-cabritos-de-oro.png`,
        ogUrl: `${BASE}/entretenimiento`,
        twitterCard: 'summary_large_image',
        robots: 'index, follow',
        alternates: [
            { hreflang: 'es', href: `${BASE}/entretenimiento` },
            { hreflang: 'x-default', href: `${BASE}/entretenimiento` },
        ],
    },
    carta: {
        title: 'Carta y Menú | Los Cabritos De Oro — Chivito, Cabrito y Parrilla en San Luis',
        description:
            'Carta completa: combos de parrilla, chivito a las brasas, empanadas criollas, pastas caseras y más. Precios actualizados. No cobramos cubiertos.',
        canonical: `${BASE}/carta`,
        ogTitle: 'Carta y Menú — Los Cabritos De Oro | Chivito, Cabrito y Parrilla',
        ogDescription:
            'Parrilla completa, chivito a las brasas, empanadas, pastas caseras y más. Precios actualizados.',
        ogType: 'website',
        ogImage: `${BASE}/images/branding/logo-los-cabritos-de-oro.png`,
        ogUrl: `${BASE}/carta`,
        twitterCard: 'summary_large_image',
        robots: 'index, follow',
        alternates: [
            { hreflang: 'es', href: `${BASE}/carta` },
            { hreflang: 'x-default', href: `${BASE}/carta` },
        ],
    },
    notFound: {
        title: 'Página no encontrada | Los Cabritos De Oro',
        description: 'La página que buscás no existe. Volvé al inicio para encontrar lo que necesitás.',
        canonical: `${BASE}/`,
        ogTitle: 'Página no encontrada | Los Cabritos De Oro',
        ogDescription: 'La página que buscás no existe.',
        ogType: 'website',
        ogImage: `${BASE}/images/branding/logo-los-cabritos-de-oro.png`,
        ogUrl: `${BASE}/`,
        twitterCard: 'summary',
        robots: 'noindex, follow',
    },
};
