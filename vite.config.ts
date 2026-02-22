import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

import fs from 'fs'
import path from 'path'

/**
 * Custom Vite plugin to generate multiple HTML entry points at build time.
 * This physically creates `dist/index.html` and `dist/carta/index.html`,
 * injecting the correct SEO meta tags for each specific route.
 * This completely solves the "SPA Indexation Problem" for Googlebot.
 */
function prerenderMetaPlugin(): Plugin {
  const BASE = 'https://loscabritosdeoro.com';
  const LOGO = `${BASE}/images/branding/logo-los-cabritos-de-oro.png`;

  const routes = {
    home: {
      title: 'Los Cabritos De Oro | Restaurante de Cabrito y Parrilla en San Luis',
      description: 'Restaurante de cabrito y chivito a la parrilla en Villa de la Quebrada y La Carolina, San Luis. Más de 50 años de tradición. Reservá por teléfono o WhatsApp.',
      canonical: `${BASE}/`,
      ogTitle: 'Los Cabritos De Oro — Cabrito y Parrilla en San Luis',
      ogDescription: 'Más de 50 años sirviendo cabrito y chivito a las brasas. Villa de la Quebrada y La Carolina, San Luis.',
      ogUrl: `${BASE}/`,
    },
    carta: {
      title: 'Carta y Menú | Los Cabritos De Oro — Parrilla en San Luis',
      description: 'Carta completa: combos de parrilla, chivito a las brasas, empanadas criollas, pastas caseras y más. Precios actualizados. No cobramos cubiertos.',
      canonical: `${BASE}/carta`,
      ogTitle: 'Carta y Menú — Los Cabritos De Oro',
      ogDescription: 'Parrilla completa, chivito a las brasas, empanadas, pastas caseras y más. Precios actualizados.',
      ogUrl: `${BASE}/carta`,
    }
  };

  const getMetaTags = (route: typeof routes.home) => `
    <!-- 🚀 SEO PRE-RENDERED META TAGS -->
    <meta name="description" content="${route.description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${route.canonical}" />
    <link rel="alternate" hreflang="es" href="${route.canonical}" />
    <link rel="alternate" hreflang="x-default" href="${route.canonical}" />
    <meta property="og:title" content="${route.ogTitle}" />
    <meta property="og:description" content="${route.ogDescription}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${LOGO}" />
    <meta property="og:url" content="${route.ogUrl}" />
    <meta property="og:locale" content="es_AR" />
    <meta property="og:site_name" content="Los Cabritos De Oro" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.ogTitle}" />
    <meta name="twitter:description" content="${route.ogDescription}" />
    <meta name="twitter:image" content="${LOGO}" />
    <meta name="geo.region" content="AR-D" />
    <meta name="geo.placename" content="Villa de la Quebrada, San Luis" />`;

  return {
    name: 'prerender-meta',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const distIndex = path.resolve(distDir, 'index.html');

      if (!fs.existsSync(distIndex)) return;
      const baseHtml = fs.readFileSync(distIndex, 'utf-8');

      // 1. Process Home Page (dist/index.html)
      const homeHtml = baseHtml.replace(
        '<title>Los Cabritos De Oro</title>',
        `<title>${routes.home.title}</title>\n${getMetaTags(routes.home)}`
      );
      fs.writeFileSync(distIndex, homeHtml);
      console.log('✅ Generated static SEO for / (Home)');

      // 2. Process Carta Page (dist/carta/index.html)
      const cartaDir = path.resolve(distDir, 'carta');
      if (!fs.existsSync(cartaDir)) fs.mkdirSync(cartaDir, { recursive: true });

      const cartaHtml = baseHtml.replace(
        '<title>Los Cabritos De Oro</title>',
        `<title>${routes.carta.title}</title>\n${getMetaTags(routes.carta)}`
      );
      fs.writeFileSync(path.resolve(cartaDir, 'index.html'), cartaHtml);
      console.log('✅ Generated static SEO for /carta (Menu)');
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerenderMetaPlugin(),
  ],
})
