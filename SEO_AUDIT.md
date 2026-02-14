# 🔍 Auditoría SEO Completa — loscabritos.com

> **Fecha de auditoría:** 14 de febrero de 2026  
> **Sitio analizado:** [https://loscabritos.com](https://loscabritos.com)  
> **Stack tecnológico:** Vite + React 19 + TypeScript + react-helmet-async  
> **Páginas analizadas:** `/` (Home) y `/carta` (Menú)

---

## 📋 Índice

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Fortalezas Detectadas](#-fortalezas-detectadas)
3. [Problemas Críticos](#-problemas-críticos-a-corregir)
4. [Problemas Menores](#-problemas-menores)
5. [Puntuación por Categoría](#-puntuación-por-categoría)
6. [Plan de Acción Priorizado](#-plan-de-acción-priorizado)
7. [Archivos Analizados](#-archivos-analizados)

---

## Resumen Ejecutivo

La página de **Los Cabritos** tiene una **base SEO sólida**: cuenta con Schema.org estructurado (JSON-LD), meta tags dinámicos por ruta, sitemap, robots.txt, contenido relevante con keywords locales y un sistema de datos de negocio centralizado (`businessProfile.ts`). Sin embargo, existen **problemas técnicos importantes** — principalmente el hecho de ser una SPA sin prerendering, imágenes sin optimizar y la ausencia de Google Analytics — que pueden afectar negativamente su posicionamiento en Google.

**Puntuación general estimada: 7.3 / 10**

---

## ✅ Fortalezas Detectadas

### 1. Idioma correctamente declarado

```html
<html lang="es">
```

El atributo `lang` está presente y configurado en español, lo que ayuda a Google a entender a qué audiencia va dirigida la página.

---

### 2. Title tag descriptivo y optimizado

```
Los Cabritos | Restaurante de Cabrito y Parrilla en San Luis desde 1970
```

- ✅ Incluye el nombre del negocio
- ✅ Incluye las keywords principales: "Cabrito", "Parrilla", "San Luis"
- ✅ Incluye el año de fundación (señal de autoridad)
- ✅ Longitud adecuada (< 60 caracteres)

---

### 3. Meta description bien redactada

```
Restaurante tradicional de cabrito y chivito a la parrilla en Villa de la Quebrada y La Carolina,
San Luis. Dos sucursales con más de 50 años de tradición gastronómica argentina.
Reservá por teléfono o WhatsApp.
```

- ✅ Describe el negocio con precisión
- ✅ Incluye ubicaciones específicas (SEO local)
- ✅ Incluye un CTA ("Reservá por teléfono o WhatsApp")
- ✅ Longitud adecuada (< 160 caracteres)

---

### 4. Open Graph completo

Las siguientes meta tags están configuradas por página vía `react-helmet-async`:

| Tag | Valor |
|---|---|
| `og:title` | `Los Cabritos — Cabrito y Parrilla en San Luis` |
| `og:description` | Descripción resumida del negocio |
| `og:type` | `website` |
| `og:image` | `https://loscabritos.com/logo.jpeg` |
| `og:url` | URL canónica de la página |
| `og:locale` | `es_AR` |
| `og:site_name` | `Los Cabritos` |

**Impacto:** Cuando se comparte en Facebook, WhatsApp, Telegram, etc., el enlace se muestra con imagen, título y descripción correctos.

---

### 5. Twitter Cards configuradas

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />
```

Asegura una buena presentación al compartir en X (Twitter).

---

### 6. Schema.org / JSON-LD — Excelente implementación

Se generan múltiples schemas de datos estructurados:

#### En la página Home (`/`):

| Schema | Datos incluidos |
|---|---|
| `WebSite` | Nombre, URL, descripción, idioma |
| `Organization` | Nombre, logo, teléfono, email, año fundación |
| `Restaurant` × 2 | Nombre, dirección (PostalAddress), geo (GeoCoordinates), horarios (OpeningHoursSpecification), cocina, rango de precios, mapa, parentOrganization |
| `FAQPage` | 10 preguntas frecuentes con respuestas completas |

#### En la página Carta (`/carta`):

| Schema | Datos incluidos |
|---|---|
| `BreadcrumbList` | Inicio → Carta |
| `Restaurant` × 2 | Mismos datos que Home |

**Impacto:** Google puede mostrar Rich Snippets (FAQ expandido, horarios, dirección con mapa, etc.) directamente en los resultados de búsqueda.

---

### 7. robots.txt correctamente configurado

```
User-agent: *
Allow: /

Sitemap: https://loscabritos.com/sitemap.xml
```

- ✅ Permite el acceso a todos los crawlers
- ✅ Referencia al sitemap

---

### 8. sitemap.xml presente y actualizado

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://loscabritos.com/</loc>
    <lastmod>2026-02-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://loscabritos.com/carta</loc>
    <lastmod>2026-02-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

- ✅ Incluye ambas páginas del sitio
- ✅ `lastmod` con fecha reciente
- ✅ Prioridades correctas (home = 1.0, carta = 0.9)

---

### 9. Jerarquía de headings correcta

**Página Home:**

| Tag | Contenido |
|---|---|
| `<h1>` | "Los Cabritos" (Hero) — **Único h1** ✅ |
| `<h2>` | "Nuestra Historia", "Nuestra Galería", "Visitanos", "Preguntas Frecuentes" |
| `<h3>` | "El Legado de Juan Carlos Woronko", "Información", "Horarios", "Nuestras Ubicaciones" |
| `<h4>` | Features (Más de 50 años, Negocio Familiar, etc.), nombres de sucursales en Contact |

**Página Carta:**

| Tag | Contenido |
|---|---|
| `<h1>` | "Los Cabritos" (Header) — **Único h1** ✅ |
| `<h2>` | Nombre de la categoría activa (ej: "Combos") |
| `<h3>` | Nombre de cada plato |

---

### 10. Alt text descriptivo en imágenes

| Imagen | Alt text |
|---|---|
| `Frente.jpeg` | "Frente del restaurante Los Cabritos - Villa de la Quebrada" |
| `Parrilla.jpeg` | "Parrilla tradicional con cartel 'El Mejor Chivito de San Luis'" |
| `Cabrito.jpeg` | "Cabrito asándose a las brasas" |
| `Parrillada.jpeg` | "Parrillada completa servida en la mesa" |
| `CAVA.jpeg` | "Cava de vinos del restaurante" |
| `Costado.jpeg` | "Vista lateral del restaurante Los Cabritos" |
| `Cartel.jpeg` | "Cartel del restaurante Los Cabritos de Oro Parrilla" |
| `Foto Carlos...JPG` | "Juan Carlos Woronko - Fundador de Los Cabritos" |

---

### 11. Lazy loading implementado

```html
<!-- Imágenes de la galería -->
<img loading="lazy" ... />

<!-- Iframes de Google Maps -->
<iframe loading="lazy" ... />
```

Mejora el rendimiento y el Core Web Vitals (LCP).

---

### 12. HTML semántico

Se usan correctamente los elementos semánticos de HTML5:

- `<main>` para el contenido principal
- `<section>` con IDs para cada sección (`#inicio`, `#nosotros`, `#galeria`, `#contacto`, `#faq`)
- `<nav>` con `role="navigation"` y `aria-label`
- `<footer>` para el pie de página
- `<article>` para cada plato en la carta
- `<blockquote>` para la cita del fundador

---

### 13. Atributos de accesibilidad (a11y)

- `aria-label` en botones de redes sociales y lightbox
- `aria-expanded` en acordeón de FAQs
- `aria-pressed` en categorías de la carta
- `role="region"` con `aria-labelledby` en respuestas de FAQ
- `title` en iframes de YouTube y Google Maps

---

### 14. Datos de negocio centralizados

El archivo `src/data/businessProfile.ts` actúa como **single source of truth** para toda la información del negocio:

- Nombre, slogan, descripción
- Contactos (teléfono, WhatsApp, email)
- Horarios de atención
- Dos ubicaciones con coordenadas geo
- URL canónica
- Tipo de cocina y rango de precios

**Impacto:** Garantiza consistencia en toda la web y facilita actualizaciones.

---

### 15. Meta tags de geolocalización

```html
<meta name="geo.region" content="AR-D" />
<meta name="geo.placename" content="Villa de la Quebrada, San Luis" />
```

Ayuda a los buscadores a entender la ubicación geográfica del negocio.

---

### 16. URLs canónicas por página

```html
<link rel="canonical" href="https://loscabritos.com/" />
<link rel="canonical" href="https://loscabritos.com/carta" />
```

Evita problemas de contenido duplicado.

---

### 17. Rendimiento de fuentes

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

`preconnect` reduce el tiempo de conexión inicial a Google Fonts.

---

### 18. Archivo `llms.txt`

Archivo innovador en `/public/llms.txt` que proporciona información estructurada del negocio para que IAs generativas (ChatGPT, Gemini, Perplexity, etc.) puedan citar datos correctos. Incluye resumen, contacto, horarios, ubicaciones y rutas canónicas.

---

### 19. Sistema de eventos analíticos

El archivo `src/lib/analytics.ts` emite eventos al `window.dataLayer`:

- `reserve_call_click` — cuando hacen click en "Llamar"
- `reserve_whatsapp_click` — cuando hacen click en "WhatsApp"
- `directions_click` — cuando hacen click en "Ver en Google Maps"

**Nota:** Estos eventos solo se registran si hay un script de tracking cargado (GA4/GTM). Ver problema #6.

---

## ❌ Problemas Críticos a Corregir

### Problema 1 — SPA sin Server-Side Rendering (SSR) / Pre-rendering

**Gravedad: 🔴 ALTA**

#### Descripción

El sitio es una **SPA (Single Page Application)** construida con Vite + React. Esto significa que el HTML que recibe Googlebot inicialmente es:

```html
<head>
  <title>Los Cabritos</title>
  <!-- Sin meta description, sin OG tags, sin canonical -->
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

Las meta tags inyectadas por `react-helmet-async` **solo existen después de que el JavaScript se ejecuta** en el navegador. Googlebot tiene un sistema de renderizado de JS, pero:

- Funciona como una "segunda ola" de indexación
- Puede tardar **días o semanas** en procesar el JS
- No es 100% confiable para todas las meta tags
- Otros buscadores (Bing, DuckDuckGo) tienen capacidades de renderizado JS más limitadas

#### Impacto

- Las meta descriptions, Open Graph tags y canonical URLs **podrían no ser indexadas** correctamente
- El `<title>` genérico "Los Cabritos" hardcodeado es lo que Google puede mostrar en lugar del título descriptivo completo
- Otros servicios que leen meta tags sin ejecutar JS (Facebook, WhatsApp preview, etc.) pueden no mostrar la información correcta

#### Solución recomendada

**Opción A (Recomendada):** Migrar a un framework con SSG/SSR:
- **Astro** — Ideal para sitios estáticos como este. Genera HTML puro sin JS innecesario
- **Next.js** — Si necesitás más interactividad

**Opción B (Rápida):** Prerendering en build-time:
- Usar `vite-plugin-prerender` para generar HTML estático de `/` y `/carta`

**Opción C (Sin cambios de código):** Servicio de prerendering:
- **Prerender.io** o **rendora** como middleware que sirve HTML prerenderizado a los crawlers

---

### Problema 2 — No hay página 404 personalizada

**Gravedad: 🔴 MEDIA-ALTA**

#### Descripción

En `App.tsx`, las rutas definidas son:

```tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/carta" element={<CartaPage />} />
  {/* No hay ruta catch-all */}
</Routes>
```

No existe una ruta `path="*"` que capture URLs inválidas.

#### Impacto

- Cualquier URL incorrecta (ej: `/menu`, `/nosotros`, `/contactoo`) muestra una página en blanco
- Los crawlers de Google encuentran "soft 404s" (páginas que deberían ser 404 pero no devuelven código de error)
- Mala experiencia de usuario
- Afecta el "crawl budget" de Google

#### Solución

Agregar una ruta catch-all con una página 404 personalizada:

```tsx
<Route path="*" element={<NotFoundPage />} />
```

Crear un componente `NotFoundPage` con:
- Título claro: "Página no encontrada"
- Enlace de vuelta al inicio
- Diseño consistente con el resto del sitio

---

### Problema 3 — Falta `manifest.json` (PWA)

**Gravedad: 🟡 MEDIA**

#### Descripción

No existe un archivo `manifest.json` en la carpeta `/public`.

#### Impacto

- El sitio no es "instalable" como Progressive Web App en móviles
- Falta información que Google usa para Mobile-First Indexing:
  - Nombre corto de la app
  - Colores de tema
  - Iconos en múltiples tamaños
  - Descripción
- Pierde puntos en Lighthouse (auditoría de PWA)

#### Solución

Crear `/public/manifest.json`:

```json
{
  "name": "Los Cabritos — Restaurante de Parrilla",
  "short_name": "Los Cabritos",
  "description": "Restaurante de cabrito y parrilla en San Luis desde 1970",
  "lang": "es",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1a1a1a",
  "theme_color": "#E25822",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

Y agregar en `index.html`:

```html
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#E25822" />
```

---

### Problema 4 — Imágenes en formato JPEG sin WebP/AVIF

**Gravedad: 🟡 MEDIA-ALTA**

#### Descripción

Todas las imágenes del sitio son archivos `.jpeg` sin optimización moderna:

| Archivo | Tamaño |
|---|---|
| `Costado.jpeg` | 298 KB |
| `Cartel.jpeg` | 284 KB |
| `Frente.jpeg` | 163 KB |
| `Cabrito.jpeg` | 136 KB |
| `Parrilla.jpeg` | 132 KB |
| `Foto Carlos para noti paple.JPG` | 124 KB |
| `CAVA.jpeg` | 106 KB |
| `Parrillada.jpeg` | 84 KB |
| **Total** | **~1.33 MB** |

#### Impacto

- Google penaliza sitios lentos en móviles (Core Web Vitals)
- El formato WebP puede reducir el tamaño un 30-50%
- AVIF puede reducir hasta un 60-70%
- Afecta directamente el **Largest Contentful Paint (LCP)**

#### Solución

1. Convertir todas las imágenes a **WebP** (con fallback JPEG):

```bash
# Usando cwebp (Google)
cwebp -q 80 Cabrito.jpeg -o cabrito-brasas.webp
```

2. Usar el elemento `<picture>` para servir el formato óptimo:

```html
<picture>
  <source srcset="/cabrito-brasas.webp" type="image/webp" />
  <img src="/cabrito-brasas.jpeg" alt="..." loading="lazy" />
</picture>
```

3. Considerar usar `vite-plugin-image-optimizer` para automatizar en build-time.

---

### Problema 5 — Nombres de archivos de imagen NO son SEO-friendly

**Gravedad: 🟡 MEDIA**

#### Descripción

Los nombres de archivo actuales no siguen buenas prácticas SEO:

| Nombre actual | Problema |
|---|---|
| `Foto Carlos para noti paple.JPG` | Espacios en el nombre, extensión en mayúsculas, sin keywords |
| `CAVA.jpeg` | Todo en mayúsculas, sin contexto descriptivo |
| `Costado.jpeg` | Genérico, sin relación con el negocio |
| `Frente.jpeg` | Genérico |

#### Impacto

- Google usa el nombre del archivo como señal de contenido
- Los espacios en URLs causan problemas de encoding (`%20`)
- Oportunidad perdida de rankear en Google Imágenes

#### Solución

Renombrar los archivos siguiendo el patrón `keyword-descriptivo.webp`:

| Actual | Propuesto |
|---|---|
| `Foto Carlos para noti paple.JPG` | `fundador-juan-carlos-woronko-los-cabritos.webp` |
| `CAVA.jpeg` | `cava-vinos-restaurante-san-luis.webp` |
| `Frente.jpeg` | `frente-restaurante-los-cabritos-villa-quebrada.webp` |
| `Costado.jpeg` | `vista-lateral-los-cabritos-san-luis.webp` |
| `Cabrito.jpeg` | `cabrito-asado-brasas-san-luis.webp` |
| `Parrilla.jpeg` | `parrilla-tradicional-mejor-chivito-san-luis.webp` |
| `Parrillada.jpeg` | `parrillada-completa-mesa-los-cabritos.webp` |
| `Cartel.jpeg` | `cartel-los-cabritos-de-oro-parrilla.webp` |
| `logo.jpeg` | `logo-los-cabritos-restaurante.webp` |

---

### Problema 6 — Falta Google Analytics 4 / Google Tag Manager

**Gravedad: 🟡 MEDIA**

#### Descripción

El archivo `src/lib/analytics.ts` implementa un sistema de tracking que emite eventos al `window.dataLayer`:

```typescript
export function trackEvent(event: string, params?: Record<string, string | number | boolean>) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({ event, ...params });
    }
}
```

Sin embargo, **no hay ningún script de Google Analytics 4 (GA4) ni Google Tag Manager (GTM)** cargado en `index.html`. Los eventos se pierden porque `window.dataLayer` nunca se inicializa.

#### Impacto

- No hay datos de tráfico, comportamiento de usuarios, ni conversiones
- Los eventos de tracking predefinidos (`reserve_call_click`, `reserve_whatsapp_click`, `directions_click`) no se registran
- Sin datos, no se pueden tomar decisiones informadas sobre SEO
- Google Search Console por sí solo no muestra comportamiento on-site

#### Solución

Agregar el snippet de **GTM** en `index.html`:

```html
<!-- Google Tag Manager -->
<script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');
</script>
```

O **GA4** directamente:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### Problema 7 — Favicon en JPEG y falta de iconos

**Gravedad: 🟢 BAJA-MEDIA**

#### Descripción

```html
<link rel="icon" type="image/jpeg" href="/logo.jpeg" />
```

El favicon está en formato JPEG, que no es ideal. Además faltan:

- `apple-touch-icon` para iOS
- Iconos en múltiples tamaños
- `<meta name="theme-color">`

#### Impacto

- En iOS, la bookmark muestra una captura genérica en vez del logo
- Algunos navegadores no soportan JPEG como favicon
- Falta la barra de color en Chrome mobile

#### Solución

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="theme-color" content="#E25822" />
```

---

## ⚠️ Problemas Menores

### 8. Falta `<noscript>` tag

Si JavaScript falla o está deshabilitado, el usuario ve una página completamente en blanco. Agregar:

```html
<noscript>
  <p>Este sitio requiere JavaScript para funcionar. Por favor habilitalo en tu navegador.</p>
</noscript>
```

---

### 9. No hay `hreflang`

Aunque el sitio es solo en español, declarar `hreflang` puede ayudar a Google a servir la página al público correcto:

```html
<link rel="alternate" hreflang="es" href="https://loscabritos.com/" />
<link rel="alternate" hreflang="x-default" href="https://loscabritos.com/" />
```

---

### 10. Video de YouTube en el Hero puede ralentizar el LCP

El Hero carga un `<iframe>` de YouTube inmediatamente:

```html
<iframe src="https://www.youtube.com/embed/DN0fqBdFxQg?autoplay=1&mute=1&loop=1..." />
```

Este iframe es extremadamente pesado y está en "above-the-fold", afectando directamente el **Largest Contentful Paint (LCP)**, una de las métricas clave de Core Web Vitals.

**Solución:** Usar una técnica de lazy-load para el iframe:
- Mostrar el thumbnail del video como imagen estática inicialmente
- Cargar el iframe solo cuando el usuario scrollea o hace click
- Alternativa: usar la librería `lite-youtube-embed`

---

### 11. Redes sociales vacías

En `businessProfile.ts`:

```typescript
socialMedia: {
    // TODO: Reemplazar con URLs reales cuando estén disponibles
    // instagram: 'https://www.instagram.com/loscabritos_oficial',
    // facebook: 'https://www.facebook.com/loscabritos',
},
```

Google usa los perfiles de redes sociales como señal de legitimidad del negocio. Un **Google Business Profile** verificado es particularmente importante para SEO local.

---

### 12. No hay meta tag `robots` explícito

Aunque no es obligatorio (el comportamiento por defecto es `index, follow`), es buena práctica declararlo explícitamente:

```html
<meta name="robots" content="index, follow" />
```

---

### 13. Breadcrumb visible en la página Carta

El schema `BreadcrumbList` está configurado en `/carta` (solo en JSON-LD), pero no hay un breadcrumb visual en la página. Agregar un breadcrumb visible (`Inicio > Carta`) mejora la UX y refuerza la señal de estructura al crawler.

---

## 📊 Puntuación por Categoría

| Categoría | Puntuación | Comentarios |
|---|---|---|
| **Meta Tags & Títulos** | ⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10 | Títulos descriptivos, meta descriptions bien redactadas, canonicals configurados. Solo falta que estén en el HTML estático |
| **Datos Estructurados (Schema.org)** | ⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10 | Implementación muy completa con WebSite, Organization, Restaurant × 2, FAQPage y BreadcrumbList |
| **Contenido & Keywords** | ⭐⭐⭐⭐⭐⭐⭐⭐ 8/10 | Contenido rico y relevante, FAQs excelentes con keywords naturales. El menú incluye descripciones de cada plato |
| **Rendimiento Técnico** | ⭐⭐⭐⭐⭐ 5/10 | Imágenes sin optimizar (~1.3 MB en JPEG), iframe YouTube pesado en above-the-fold, sin service worker |
| **Indexación** | ⭐⭐⭐⭐⭐⭐ 6/10 | Sitemap y robots.txt OK, pero la SPA sin prerender es un riesgo para indexación confiable |
| **Mobile & PWA** | ⭐⭐⭐⭐⭐⭐ 6/10 | Sin manifest.json, sin apple-touch-icon, sin service worker, iframe YouTube pesa mucho en mobile |
| **SEO Local** | ⭐⭐⭐⭐⭐⭐⭐⭐ 8/10 | Schema con geo, direcciones, teléfonos, meta geo tags. Falta Google Business Profile verificado |
| **Accesibilidad (a11y)** | ⭐⭐⭐⭐⭐⭐⭐ 7/10 | Buenos aria attributes, semántica HTML correcta. Falta noscript y algunos alt mejorados |
| **Redes Sociales** | ⭐⭐⭐⭐⭐⭐⭐ 7/10 | OG y Twitter Cards completos, pero sin perfiles reales de Instagram/Facebook activos |
| **Tracking & Analytics** | ⭐⭐⭐ 3/10 | Sistema de eventos preparado pero sin GA4/GTM cargado. Sin datos reales |
| | | |
| **TOTAL GENERAL** | **7.3 / 10** | **Buena base, problemas técnicos importantes por resolver** |

---

## 🎯 Plan de Acción Priorizado

### 🔴 Prioridad ALTA (Impacto directo en indexación)

| # | Acción | Esfuerzo | Impacto |
|---|---|---|---|
| 1 | **Implementar prerendering/SSG** — Asegurar que el HTML servido contenga todas las meta tags y contenido sin depender de JS | Alto | Crítico |
| 2 | **Convertir imágenes a WebP** y renombrarlas con slugs descriptivos | Medio | Alto |
| 3 | **Agregar Google Analytics 4 o GTM** — Sin tracking no hay medición de resultados | Bajo | Alto |

### 🟡 Prioridad MEDIA (Mejoran la experiencia y credibilidad)

| # | Acción | Esfuerzo | Impacto |
|---|---|---|---|
| 4 | **Crear página 404 personalizada** con enlace de vuelta | Bajo | Medio |
| 5 | **Agregar `manifest.json`** + apple-touch-icon + theme-color | Bajo | Medio |
| 6 | **Optimizar carga del video de YouTube** (lazy-load o lite-youtube-embed) | Medio | Medio |
| 7 | **Crear o vincular Google Business Profile** (fundamental para SEO local) | Bajo | Alto |
| 8 | **Agregar redes sociales reales** (Instagram, Facebook) | Bajo | Medio |

### 🟢 Prioridad BAJA (Nice-to-have)

| # | Acción | Esfuerzo | Impacto |
|---|---|---|---|
| 9 | Agregar `<noscript>` tag | Mínimo | Bajo |
| 10 | Agregar `hreflang` | Mínimo | Bajo |
| 11 | Agregar `<meta name="robots" content="index, follow">` | Mínimo | Bajo |
| 12 | Agregar breadcrumb visible en `/carta` | Bajo | Bajo |
| 13 | Mejorar favicon con múltiples tamaños (32px, 16px, apple-touch-icon) | Bajo | Bajo |

---

## 📂 Archivos Analizados

| Archivo | Propósito SEO |
|---|---|
| `index.html` | Head estático, favicon, fonts |
| `public/robots.txt` | Directivas para crawlers |
| `public/sitemap.xml` | Mapa del sitio para buscadores |
| `public/llms.txt` | Datos para IAs generativas |
| `src/main.tsx` | Entry point con HelmetProvider |
| `src/App.tsx` | Rutas y estructura de páginas |
| `src/seo/pageMeta.ts` | Meta tags por ruta |
| `src/seo/schema.ts` | Schemas JSON-LD |
| `src/components/SeoHead.tsx` | Componente react-helmet |
| `src/components/StructuredData.tsx` | Inyección de JSON-LD |
| `src/data/businessProfile.ts` | Datos centralizados del negocio |
| `src/data/faqData.ts` | Preguntas frecuentes |
| `src/lib/analytics.ts` | Sistema de tracking de eventos |
| `src/components/Hero.tsx` | Hero section con h1 |
| `src/components/About.tsx` | Contenido institucional |
| `src/components/Gallery.tsx` | Galería con alt texts e imágenes lazy |
| `src/components/Contact.tsx` | Info de contacto y mapas |
| `src/components/FAQ.tsx` | Acordeón de FAQs accesible |
| `src/components/Footer.tsx` | Footer con datos de contacto |
| `src/components/Navbar.tsx` | Navegación principal |
| `src/pages/CartaPage.tsx` | Página de menú/carta |
| `vite.config.ts` | Configuración de Vite |
| `package.json` | Dependencias del proyecto |

---

> **Nota:** Esta auditoría se realizó analizando el código fuente directamente. Para un análisis completo de rendimiento, se recomienda también ejecutar **Google PageSpeed Insights** y **Google Search Console** una vez que el sitio esté desplegado en producción.
