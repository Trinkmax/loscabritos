import { businessProfile } from '../data/businessProfile';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildOpeningHoursSpecs() {
    return businessProfile.openingHours.map((spec) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: spec.dayOfWeek,
        opens: spec.opens,
        closes: spec.closes,
    }));
}

function buildAddress(loc: (typeof businessProfile.locations)[number]) {
    return {
        '@type': 'PostalAddress',
        streetAddress: loc.address,
        addressLocality: loc.locality,
        addressRegion: loc.region,
        postalCode: loc.postalCode,
        addressCountry: loc.country,
    };
}

function buildGeo(loc: (typeof businessProfile.locations)[number]) {
    return {
        '@type': 'GeoCoordinates',
        latitude: loc.latitude,
        longitude: loc.longitude,
    };
}

// ─── Restaurant nodes ─────────────────────────────────────────────────────────

function buildRestaurantNodes() {
    const phone = businessProfile.contacts.find((c) => c.type === 'phone');
    return businessProfile.locations.map((loc, idx) => ({
        '@type': 'Restaurant',
        '@id': `${businessProfile.canonicalUrl}/#restaurant-${idx}`,
        name: loc.name,
        image: `${businessProfile.canonicalUrl}${businessProfile.logo}`,
        url: businessProfile.canonicalUrl,
        telephone: phone?.value,
        servesCuisine: businessProfile.servesCuisine,
        priceRange: businessProfile.priceRange,
        address: buildAddress(loc),
        geo: buildGeo(loc),
        hasMap: loc.googleMapsUrl,
        openingHoursSpecification: buildOpeningHoursSpecs(),
        parentOrganization: {
            '@id': `${businessProfile.canonicalUrl}/#organization`,
        },
        ...(loc.since ? { foundingDate: loc.since } : {}),
    }));
}

// ─── Public generators ────────────────────────────────────────────────────────

export function generateHomeSchema(): object {
    const phone = businessProfile.contacts.find((c) => c.type === 'phone');
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${businessProfile.canonicalUrl}/#website`,
                name: businessProfile.brandName,
                url: businessProfile.canonicalUrl,
                description: businessProfile.description,
                inLanguage: 'es',
            },
            {
                '@type': 'Organization',
                '@id': `${businessProfile.canonicalUrl}/#organization`,
                name: businessProfile.brandName,
                url: businessProfile.canonicalUrl,
                logo: `${businessProfile.canonicalUrl}${businessProfile.logo}`,
                telephone: phone?.value,
                email: businessProfile.contacts.find((c) => c.type === 'email')?.value,
                foundingDate: String(businessProfile.foundedYear),
                description: businessProfile.description,
            },
            ...buildRestaurantNodes(),
        ],
    };
}

export function generateCartaSchema(): object {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Inicio',
                        item: `${businessProfile.canonicalUrl}/`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Carta',
                        item: `${businessProfile.canonicalUrl}/carta`,
                    },
                ],
            },
            ...buildRestaurantNodes(),
        ],
    };
}

export function generateFAQSchema(
    faqs: { question: string; answer: string }[],
): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}
