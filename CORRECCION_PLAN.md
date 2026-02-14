# Plan Ejecutable: Correcciones SEO basadas en auditoría validada (Opus 4.6)

## Resumen
La auditoría de `/Users/ignaciobaldovino/loscabritos/SEO_AUDIT.md` es **mayormente coherente** con el código actual, pero requiere ajustes en precisión y prioridad antes de ejecutar cambios.
El foco correcto es: **indexación/renderizado + performance de media + señales técnicas básicas + medición**.

## Validación de la auditoría (ajustada al código real)
1. Correcto:
- SEO dinámico con Helmet en `/Users/ignaciobaldovino/loscabritos/src/components/SeoHead.tsx:13`.
- Schema JSON-LD en `/Users/ignaciobaldovino/loscabritos/src/seo/schema.ts:59`.
- `robots.txt` y `sitemap.xml` existen en `/Users/ignaciobaldovino/loscabritos/public/robots.txt` y `/Users/ignaciobaldovino/loscabritos/public/sitemap.xml`.
- Falta ruta catch-all (`404`) en `/Users/ignaciobaldovino/loscabritos/src/App.tsx:42`.
- Hero con iframe YouTube pesado above-the-fold en `/Users/ignaciobaldovino/loscabritos/src/components/Hero.tsx:26`.
- Eventos analytics existen pero sin cargador GTM/GA en `/Users/ignaciobaldovino/loscabritos/src/lib/analytics.ts:17`.
2. Parcialmente correcto:
- “Lazy loading implementado”: sí en galería/mapas (`/Users/ignaciobaldovino/loscabritos/src/components/Gallery.tsx:93`, `/Users/ignaciobaldovino/loscabritos/src/components/Contact.tsx:191`), pero no en todas las imágenes (ej. fundador en `/Users/ignaciobaldovino/loscabritos/src/components/About.tsx:81`).
- “Semántica/a11y excelente”: base buena, pero no completa (ej. navbar sin `aria-label` explícito en `/Users/ignaciobaldovino/loscabritos/src/components/Navbar.tsx:31`).
3. Incorrecto o sobreestimado:
- Longitudes: el title home no está `<60` y la description no está `<160` (`/Users/ignaciobaldovino/loscabritos/src/seo/pageMeta.ts:19`, `/Users/ignaciobaldovino/loscabritos/src/seo/pageMeta.ts:21`).
- PWA/manifest y GA/GTM impactan más en UX/medición que en ranking directo; no deben priorizarse por encima de indexación/render.

## Decisiones cerradas para implementación
1. Mantener stack actual React + Vite; no migrar a Astro/Next.
2. Resolver indexación con **pre-render en build-time** para rutas `/` y `/carta`.
3. Implementar GTM opcional con `VITE_GTM_ID`; si no hay ID, no romper ni bloquear deploy.
4. Optimizar imágenes con WebP como formato principal y JPEG como fallback.
5. Añadir 404 visual client-side y `noindex` en esa vista.

## Cambios en APIs/interfaces/tipos (públicos internos del proyecto)
1. Extender `PageMeta` en `/Users/ignaciobaldovino/loscabritos/src/seo/pageMeta.ts`:
- Agregar `robots?: string`
- Agregar `alternates?: { hreflang: string; href: string }[]`
2. Extender `SeoHead` en `/Users/ignaciobaldovino/loscabritos/src/components/SeoHead.tsx`:
- Render condicional de `meta robots`.
- Render de links `hreflang`.
3. Crear página 404:
- Nuevo `/Users/ignaciobaldovino/loscabritos/src/pages/NotFoundPage.tsx`
- Nuevo route key `notFound` en `pageMeta`.

## Plan de ejecución por fases (orden obligatorio)

1. Fase 1: Indexación y render de metadatos
- Implementar prerender build-time en `/Users/ignaciobaldovino/loscabritos/vite.config.ts` para `/` y `/carta`.
- Validar que `dist` entregue HTML con title/description/canonical/OG/Twitter y JSON-LD sin depender de ejecución JS.
- Añadir ruta `path="*"` en `/Users/ignaciobaldovino/loscabritos/src/App.tsx`.
- Crear `/Users/ignaciobaldovino/loscabritos/src/pages/NotFoundPage.tsx` con CTA al home y `robots=noindex,follow`.
- Agregar `<noscript>` en `/Users/ignaciobaldovino/loscabritos/index.html`.

2. Fase 2: Higiene SEO técnica mínima
- En `/Users/ignaciobaldovino/loscabritos/index.html`, agregar:
  - `<link rel="manifest" href="/manifest.json">`
  - `<meta name="theme-color" ...>`
- Crear `/Users/ignaciobaldovino/loscabritos/public/manifest.json`.
- Agregar iconos (`16/32/apple-touch`) en `/Users/ignaciobaldovino/loscabritos/public`.
- Añadir `meta robots` explícito y `hreflang` desde `SeoHead`.

3. Fase 3: Performance de media
- Convertir imágenes en `/Users/ignaciobaldovino/loscabritos/public` a WebP.
- Renombrar assets con slugs SEO-friendly y actualizar referencias en:
  - `/Users/ignaciobaldovino/loscabritos/src/components/Gallery.tsx`
  - `/Users/ignaciobaldovino/loscabritos/src/components/About.tsx`
  - `/Users/ignaciobaldovino/loscabritos/src/components/Navbar.tsx`
  - `/Users/ignaciobaldovino/loscabritos/src/components/Footer.tsx`
  - `/Users/ignaciobaldovino/loscabritos/src/seo/pageMeta.ts`
  - `/Users/ignaciobaldovino/loscabritos/src/data/businessProfile.ts`
- Reemplazar iframe de YouTube eager por lazy embed (thumbnail + click/observer) en `/Users/ignaciobaldovino/loscabritos/src/components/Hero.tsx`.

4. Fase 4: Medición y confianza local
- Implementar bootstrap GTM opcional (`VITE_GTM_ID`) en app shell.
- Mantener `/Users/ignaciobaldovino/loscabritos/src/lib/analytics.ts` como capa de eventos.
- Completar redes reales en `/Users/ignaciobaldovino/loscabritos/src/data/businessProfile.ts` o mantener ocultación condicional.
- Agregar breadcrumb visible en `/Users/ignaciobaldovino/loscabritos/src/pages/CartaPage.tsx` para alinear UX con `BreadcrumbList`.

5. Fase 5: Corrección documental
- Actualizar `/Users/ignaciobaldovino/loscabritos/SEO_AUDIT.md` con:
  - longitudes reales de title/description,
  - prioridad realista (indexación/performance arriba; PWA/analytics abajo),
  - aclaración de 404 client-side vs HTTP 404 server-side.

## Pruebas y escenarios de aceptación

1. Build/lint
- `npm run lint` sin errores nuevos.
- `npm run build` exitoso.

2. Indexación/meta
- En `dist/index.html` y `dist/carta/index.html` existen: title, description, canonical, OG, Twitter, robots, hreflang.
- JSON-LD presente y válido para Home y Carta.

3. Ruteo/404
- Navegar a `/ruta-invalida` muestra NotFoundPage.
- NotFoundPage expone `noindex,follow`.

4. Media/performance
- No quedan referencias a nombres viejos con espacios/mayúsculas.
- Hero no carga iframe YouTube hasta interacción/condición de lazy.
- Peso total de imágenes servidas iniciales reducido significativamente respecto a baseline.

5. Tracking
- Con `VITE_GTM_ID` definido, `window.dataLayer` existe y recibe eventos `reserve_call_click`, `reserve_whatsapp_click`, `directions_click`.
- Sin `VITE_GTM_ID`, no hay errores en consola ni ruptura funcional.

6. Regresión funcional
- Home y Carta mantienen contenido actual y CTAs operativos.
- `robots.txt`, `sitemap.xml`, `llms.txt` siguen accesibles en build final.

## Supuestos y defaults explícitos
1. Dominio canónico sigue siendo `https://loscabritos.com`.
2. No se migra framework; se corrige sobre Vite actual.
3. No se implementa service worker en esta iteración.
4. Si faltan IDs de tracking/redes sociales, se deja feature desactivada sin romper UX.
5. Se prioriza shipping incremental en 2 PRs:
- PR1: indexación/render/404/head.
- PR2: media/tracking/documentación.
