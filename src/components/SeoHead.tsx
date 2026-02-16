import { Helmet } from 'react-helmet-async';
import { pageMeta, type PageMeta } from '../seo/pageMeta';

interface SeoHeadProps {
    routeKey: keyof typeof pageMeta;
}

const SeoHead = ({ routeKey }: SeoHeadProps) => {
    const meta: PageMeta = pageMeta[routeKey];
    if (!meta) return null;

    return (
        <Helmet>
            {/* Basic */}
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <link rel="canonical" href={meta.canonical} />

            {/* Robots */}
            {meta.robots && <meta name="robots" content={meta.robots} />}

            {/* Open Graph */}
            <meta property="og:title" content={meta.ogTitle} />
            <meta property="og:description" content={meta.ogDescription} />
            <meta property="og:type" content={meta.ogType} />
            <meta property="og:image" content={meta.ogImage} />
            <meta property="og:url" content={meta.ogUrl} />
            <meta property="og:locale" content="es_AR" />
            <meta property="og:site_name" content="Los Cabritos De Oro" />

            {/* Twitter */}
            <meta name="twitter:card" content={meta.twitterCard} />
            <meta name="twitter:title" content={meta.ogTitle} />
            <meta name="twitter:description" content={meta.ogDescription} />
            <meta name="twitter:image" content={meta.ogImage} />

            {/* Geo */}
            <meta name="geo.region" content="AR-D" />
            <meta name="geo.placename" content="Villa de la Quebrada, San Luis" />

            {/* Hreflang alternates */}
            {meta.alternates?.map((alt) => (
                <link key={alt.hreflang} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
            ))}
        </Helmet>
    );
};

export default SeoHead;
