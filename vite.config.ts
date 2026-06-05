import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

import fs from 'fs'
import path from 'path'

/**
 * Custom Vite plugin to generate multiple HTML entry points at build time.
 * Physically creates `dist/index.html`, `dist/carta/index.html`,
 * `dist/nosotros/index.html` and `dist/entretenimiento/index.html`,
 * injecting the correct SEO meta tags for each route so Googlebot and
 * social crawlers get fully-formed metadata without executing JS.
 *
 * NOTE: keep these meta in sync with src/seo/pageMeta.ts (runtime helmet).
 */
function prerenderMetaPlugin(): Plugin {
  const BASE = 'https://loscabritosdeoro.com';
  const LOGO = `${BASE}/images/branding/logo-los-cabritos-de-oro.png`;

  interface RouteMeta {
    /** output sub-path under dist ('' = home / dist/index.html) */
    dir: string;
    title: string;
    description: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogUrl: string;
  }

  const routes: RouteMeta[] = [
    {
      dir: '',
      title: 'Los Cabritos De Oro | Chivito a las Brasas y Mundial 2026 en San Luis',
      description: 'Chivito a las brasas con chanfaina en San Luis, con 3 sucursales: Villa de la Quebrada, La Carolina y Nogolí. Viví el Mundial 2026 en Smart TV de 85". Más de 50 años de tradición. Reservá por teléfono o WhatsApp.',
      canonical: `${BASE}/`,
      ogTitle: 'Los Cabritos De Oro — Chivito a las Brasas y el Mundial 2026 en San Luis',
      ogDescription: 'Viví el Mundial 2026 en pantalla gigante con el mejor chivito a las brasas. 3 sucursales en San Luis: Villa de la Quebrada, La Carolina y Nogolí.',
      ogUrl: `${BASE}/`,
    },
    {
      dir: 'carta',
      title: 'Carta y Menú | Los Cabritos De Oro — Chivito, Cabrito y Parrilla en San Luis',
      description: 'Carta completa: combos de parrilla, chivito a las brasas, empanadas criollas, pastas caseras y más. Precios actualizados. No cobramos cubiertos.',
      canonical: `${BASE}/carta`,
      ogTitle: 'Carta y Menú — Los Cabritos De Oro | Chivito, Cabrito y Parrilla',
      ogDescription: 'Parrilla completa, chivito a las brasas, empanadas, pastas caseras y más. Precios actualizados.',
      ogUrl: `${BASE}/carta`,
    },
    {
      dir: 'nosotros',
      title: 'Nuestra Historia | Los Cabritos De Oro — Tradición desde 1970 en San Luis',
      description: 'Conocé la historia de la familia Woronko y de Los Cabritos De Oro: más de 50 años de cabrito y chivito a las brasas en San Luis, transmitidos de generación en generación.',
      canonical: `${BASE}/nosotros`,
      ogTitle: 'Nuestra Historia — Los Cabritos De Oro | Tradición familiar desde 1970',
      ogDescription: 'La historia de la familia Woronko y más de 50 años de tradición en cabrito y chivito a las brasas en San Luis.',
      ogUrl: `${BASE}/nosotros`,
    },
    {
      dir: 'entretenimiento',
      title: 'Entretenimiento | Los Cabritos De Oro — Juegos, Bingo y Cena Show en San Luis',
      description: 'Diversión para toda la familia: cuadernillos para colorear y bingo gratis para los chicos, y nuestra Cena Show con ALCIDES el sábado 11 de julio en La Carolina.',
      canonical: `${BASE}/entretenimiento`,
      ogTitle: 'Entretenimiento — Los Cabritos De Oro | Juegos, Bingo y Cena Show',
      ogDescription: 'Cuadernillos para colorear, bingo gratis con premios y la Cena Show con ALCIDES el 11 de julio en La Carolina, San Luis.',
      ogUrl: `${BASE}/entretenimiento`,
    },
  ];

  // Escape for use inside HTML text / double-quoted attributes
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const getMetaTags = (route: RouteMeta) => `
    <!-- 🚀 SEO PRE-RENDERED META TAGS -->
    <meta name="description" content="${esc(route.description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${route.canonical}" />
    <link rel="alternate" hreflang="es" href="${route.canonical}" />
    <link rel="alternate" hreflang="x-default" href="${route.canonical}" />
    <meta property="og:title" content="${esc(route.ogTitle)}" />
    <meta property="og:description" content="${esc(route.ogDescription)}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${LOGO}" />
    <meta property="og:url" content="${route.ogUrl}" />
    <meta property="og:locale" content="es_AR" />
    <meta property="og:site_name" content="Los Cabritos De Oro" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(route.ogTitle)}" />
    <meta name="twitter:description" content="${esc(route.ogDescription)}" />
    <meta name="twitter:image" content="${LOGO}" />
    <meta name="geo.region" content="AR-D" />
    <meta name="geo.placename" content="Villa de la Quebrada, San Luis" />`;

  const buildHtml = (baseHtml: string, route: RouteMeta) =>
    baseHtml
      // Replace whatever title is present
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`)
      // Remove the base description meta to avoid duplicates (re-added in getMetaTags)
      .replace(/\s*<meta\s+name="description"[^>]*>/i, '')
      // Inject the full SEO block right before </head>
      .replace('</head>', `${getMetaTags(route)}\n</head>`);

  return {
    name: 'prerender-meta',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const distIndex = path.resolve(distDir, 'index.html');

      if (!fs.existsSync(distIndex)) return;
      const baseHtml = fs.readFileSync(distIndex, 'utf-8');

      for (const route of routes) {
        const html = buildHtml(baseHtml, route);
        const outDir = route.dir ? path.resolve(distDir, route.dir) : distDir;
        if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.resolve(outDir, 'index.html'), html);
        console.log(`✅ Generated static SEO for /${route.dir} (${route.canonical})`);
      }
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
