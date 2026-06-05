import { businessProfile } from '../data/businessProfile';
import type { SpecialEvent } from '../data/eventsData';

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

export function generateBreadcrumbSchema(
    items: { name: string; path: string }[],
): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: item.name,
            item: `${businessProfile.canonicalUrl}${item.path}`,
        })),
    };
}

export function generateEventSchema(event: SpecialEvent): object {
    const loc = businessProfile.locations.find((l) => l.shortName === event.locationShortName);
    const startDate = `${event.dateISO}T22:00:00-03:00`;
    const endDate = new Date(new Date(startDate).getTime() + 4 * 60 * 60 * 1000).toISOString();
    return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: `${event.title} — ${businessProfile.brandName}`,
        startDate,
        endDate,
        image: `${businessProfile.canonicalUrl}${businessProfile.logo}`,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        description: event.description,
        ...(event.artist
            ? { performer: { '@type': 'PerformingGroup', name: event.artist } }
            : {}),
        organizer: {
            '@type': 'Organization',
            name: businessProfile.brandName,
            url: businessProfile.canonicalUrl,
        },
        location: loc
            ? {
                '@type': 'Place',
                name: loc.name,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: loc.locality,
                    addressRegion: loc.region,
                    addressCountry: loc.country,
                },
            }
            : event.locationLabel,
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
