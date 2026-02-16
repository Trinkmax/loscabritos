// ─── Types ────────────────────────────────────────────────────────────────────

export interface OpeningHoursSpec {
    dayOfWeek: string[];
    opens: string;
    closes: string;
}

export interface ContactChannel {
    type: 'phone' | 'whatsapp' | 'email';
    label: string;
    value: string;       // display value
    href: string;        // clickable link
}

export interface BusinessLocation {
    name: string;
    shortName: string;
    address: string;
    locality: string;
    region: string;
    country: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    googleMapsEmbed: string;
    googleMapsUrl: string;
    directionsNote: string;
    since?: string;
    subtitle?: string;
}

export interface BusinessProfile {
    brandName: string;
    legalName: string;
    slogan: string;
    description: string;
    foundedYear: number;
    canonicalUrl: string;
    servesCuisine: string[];
    priceRange: string;
    contacts: ContactChannel[];
    openingHours: OpeningHoursSpec[];
    openingHoursDisplay: { day: string; hours: string; isSpecial?: boolean }[];
    locations: BusinessLocation[];
    socialMedia: {
        instagram?: string;
        facebook?: string;
        tiktok?: string;
    };
    logo: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const businessProfile: BusinessProfile = {
    brandName: 'Los Cabritos',
    legalName: 'Los Cabritos',
    slogan: 'Tradición y sabor desde 1970',
    description:
        'Restaurante tradicional de parrilla argentina en San Luis. Especialistas en cabrito y chivito a las brasas, con dos sucursales: Villa de la Quebrada (casa matriz desde 1970) y La Carolina (Los Cabritos de Oro). Cocina con técnicas que pasaron de generación en generación.',
    foundedYear: 1970,
    canonicalUrl: 'https://loscabritos.com',
    servesCuisine: ['Parrilla argentina', 'Cabrito', 'Chivito', 'Asado', 'Cocina regional'],
    priceRange: '$$',

    contacts: [
        {
            type: 'phone',
            label: 'Teléfono',
            value: '+54 266 426-9673',
            href: 'tel:+542664269673',
        },
        {
            type: 'whatsapp',
            label: 'WhatsApp',
            value: '+54 266 426-9673',
            href: 'https://wa.me/542664269673',
        },
        {
            type: 'email',
            label: 'Email',
            value: 'loscabritosv.q@gmail.com',
            href: 'mailto:loscabritosv.q@gmail.com',
        },
    ],

    openingHours: [
        { dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '11:00', closes: '20:00' },
        { dayOfWeek: ['Saturday'], opens: '10:00', closes: '22:00' },
    ],

    openingHoursDisplay: [
        { day: 'Domingo', hours: '11:00 - 20:00' },
        { day: 'Lunes', hours: '11:00 - 20:00' },
        { day: 'Martes', hours: '11:00 - 20:00' },
        { day: 'Miércoles', hours: '11:00 - 20:00' },
        { day: 'Jueves', hours: '11:00 - 20:00' },
        { day: 'Viernes', hours: '11:00 - 20:00' },
        { day: 'Sábado', hours: '10:00 - 22:00', isSpecial: true },
    ],

    locations: [
        {
            name: 'Parrilla Los Cabritos',
            shortName: 'Villa de la Quebrada',
            address: 'Villa de la Quebrada',
            locality: 'Villa de la Quebrada',
            region: 'San Luis',
            country: 'AR',
            postalCode: '5701',
            latitude: -33.01554177796149,
            longitude: -66.29088292329097,
            googleMapsEmbed:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4662.560073095738!2d-66.29088292329097!3d-33.01554177796149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d45ce17b363973%3A0x52d2d40efa406ca4!2sParrilla%20Los%20Cabritos!5e1!3m2!1ses-419!2sar!4v1770142577891!5m2!1ses-419!2sar',
            googleMapsUrl: 'https://maps.google.com/?q=Parrilla+Los+Cabritos+Villa+de+la+Quebrada',
            directionsNote: 'A 90 km de la ciudad de San Luis por la Ruta Provincial 9. En el corazón de Villa de la Quebrada, la Tierra de la Fe.',
            since: '1970',
            subtitle: 'La casa matriz desde 1970',
        },
        {
            name: 'Los Cabritos de Oro',
            shortName: 'La Carolina',
            address: 'La Carolina',
            locality: 'La Carolina',
            region: 'San Luis',
            country: 'AR',
            postalCode: '5701',
            latitude: -32.811894972344845,
            longitude: -66.09676510480989,
            googleMapsEmbed:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.063752974187!2d-66.09676510480989!3d-32.811894972344845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d489000c2468ef%3A0xac9f970e8d6239b5!2sLos%20cabritos%20de%20oro!5e1!3m2!1ses-419!2sar!4v1770142691204!5m2!1ses-419!2sar',
            googleMapsUrl: 'https://maps.google.com/?q=Los+Cabritos+de+Oro+La+Carolina',
            directionsNote: 'En el pintoresco pueblo de La Carolina, conocido por su historia minera y sus paisajes serranos únicos.',
            subtitle: 'Los Cabritos de Oro',
        },
    ],

    socialMedia: {
        // TODO: Reemplazar con URLs reales cuando estén disponibles
        // instagram: 'https://www.instagram.com/loscabritos_oficial',
        // facebook: 'https://www.facebook.com/loscabritos',
    },

    logo: '/images/branding/logo-los-cabritos-restaurante.webp',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Get the main phone contact */
export const getPhone = () => businessProfile.contacts.find((c) => c.type === 'phone')!;

/** Get the WhatsApp contact */
export const getWhatsApp = () => businessProfile.contacts.find((c) => c.type === 'whatsapp')!;

/** Get the email contact */
export const getEmail = () => businessProfile.contacts.find((c) => c.type === 'email')!;

/** Check if the restaurant is currently open */
export const isCurrentlyOpen = (): boolean => {
    const now = new Date();
    const day = now.getDay(); // 0=Sun … 6=Sat
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour * 60 + minutes;

    if (day === 6) {
        // Sábado: 10:00–22:00
        return currentTime >= 600 && currentTime < 1320;
    }
    // Domingo–Viernes: 11:00–20:00
    return currentTime >= 660 && currentTime < 1200;
};
