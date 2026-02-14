import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Custom Vite plugin to inject SEO meta tags into the static HTML at build time.
 * This solves the SPA indexation problem without requiring SSR/SSG migration:
 * the dist/index.html will contain real meta tags that crawlers can read
 * without executing JavaScript.
 */
function seoInjectorPlugin(): Plugin {
  const BASE = 'https://loscabritos.com';
  const LOGO = `${BASE}/logo-los-cabritos-restaurante.webp`;

  const homeMeta = {
    title: 'Los Cabritos | Restaurante de Cabrito y Parrilla en San Luis',
    description: 'Restaurante de cabrito y chivito a la parrilla en Villa de la Quebrada y La Carolina, San Luis. Más de 50 años de tradición. Reservá por teléfono o WhatsApp.',
    canonical: `${BASE}/`,
    ogTitle: 'Los Cabritos — Cabrito y Parrilla en San Luis',
    ogDescription: 'Más de 50 años sirviendo cabrito y chivito a las brasas. Villa de la Quebrada y La Carolina, San Luis.',
  };

  const metaTags = `
    <!-- SEO: Injected at build-time for crawler visibility -->
    <meta name="description" content="${homeMeta.description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${homeMeta.canonical}" />
    <link rel="alternate" hreflang="es" href="${homeMeta.canonical}" />
    <link rel="alternate" hreflang="x-default" href="${homeMeta.canonical}" />
    <meta property="og:title" content="${homeMeta.ogTitle}" />
    <meta property="og:description" content="${homeMeta.ogDescription}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${LOGO}" />
    <meta property="og:url" content="${homeMeta.canonical}" />
    <meta property="og:locale" content="es_AR" />
    <meta property="og:site_name" content="Los Cabritos" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${homeMeta.ogTitle}" />
    <meta name="twitter:description" content="${homeMeta.ogDescription}" />
    <meta name="twitter:image" content="${LOGO}" />
    <meta name="geo.region" content="AR-D" />
    <meta name="geo.placename" content="Villa de la Quebrada, San Luis" />`;

  return {
    name: 'seo-injector',
    transformIndexHtml(html) {
      // Replace the generic <title> with the full SEO title
      // and inject meta tags right after it
      return html.replace(
        '<title>Los Cabritos</title>',
        `<title>${homeMeta.title}</title>${metaTags}`
      );
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    seoInjectorPlugin(),
  ],
})
