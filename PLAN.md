## Plan De Implementación Para Agente IA (Opus 4.6): SEO + GEO (Local + Generativo)

### Resumen
Implementar en 1 sprint técnico una base SEO/GEO completa para que `/` y `/carta` sean indexables, consistentes como entidad local (2 sucursales), y optimizadas para conversión a reservas.  
Este plan está escrito para ejecución directa por otro agente, sin decisiones abiertas.

### Alcance Cerrado
1. Stack: React + Vite + TypeScript.
2. Rutas objetivo: `https://loscabritos.com/` y `https://loscabritos.com/carta`.
3. Estrategia local: una sola web con ambas sucursales en misma página.
4. Prioridad negocio: reservas (teléfono + WhatsApp + cómo llegar).
5. GEO: SEO local clásico + señales para motores generativos (llms + FAQ factual + schema consistente).

### Supuestos Fijados (si no hay datos mejores)
1. Dominio canónico: `https://loscabritos.com`.
2. Teléfono oficial temporal: `+54 266 426-9673`.
3. WhatsApp oficial temporal: `542664269673`.
4. Horario oficial temporal: domingo-viernes `11:00-20:00`, sábado `10:00-22:00`.
5. Estos datos deben quedar centralizados y editables en un solo archivo.

### Cambios De API/Interfaces
1. Crear `/Users/ignaciobaldovino/loscabritos/src/data/businessProfile.ts`.
2. Exportar tipos: `BusinessProfile`, `BusinessLocation`, `OpeningHoursSpec`, `ContactChannel`.
3. Exportar objeto único `businessProfile` con marca, contacto, horarios, sucursales, mapas, redes.
4. Ningún componente puede hardcodear teléfono, horarios, email, nombre de sucursal ni links sociales luego de esta refactor.

### Backlog Ejecutable (orden obligatorio)

### Fase 1: Base SEO técnica
1. Instalar dependencia: `react-helmet-async`.
2. Editar `/Users/ignaciobaldovino/loscabritos/src/main.tsx` y envolver app con `HelmetProvider`.
3. Crear `/Users/ignaciobaldovino/loscabritos/src/seo/pageMeta.ts` con metadatos por ruta (`/`, `/carta`).
4. Crear `/Users/ignaciobaldovino/loscabritos/src/components/SeoHead.tsx` que reciba `routeKey` y renderice `title`, `description`, canonical, OG, Twitter tags.
5. Usar `SeoHead` en home y carta.
6. Limpiar metadatos fijos de `/Users/ignaciobaldovino/loscabritos/index.html` para dejar solo base mínima y evitar duplicidad dinámica.
7. Crear `/Users/ignaciobaldovino/loscabritos/public/robots.txt` con `Allow: /` y referencia a sitemap canónico.
8. Crear `/Users/ignaciobaldovino/loscabritos/public/sitemap.xml` con URLs `/` y `/carta` y `lastmod` del día de implementación.

### Fase 2: Consistencia de entidad (NAP)
1. Crear `/Users/ignaciobaldovino/loscabritos/src/data/businessProfile.ts` con todos los datos de contacto y sucursales.
2. Refactorizar `/Users/ignaciobaldovino/loscabritos/src/components/Contact.tsx` para consumir `businessProfile`.
3. Refactorizar `/Users/ignaciobaldovino/loscabritos/src/components/Footer.tsx` para consumir `businessProfile`.
4. Refactorizar `/Users/ignaciobaldovino/loscabritos/src/pages/CartaPage.tsx` para consumir `businessProfile` en CTA y horarios.
5. Corregir enlace de carta en footer de `#carta` a `/carta` en `/Users/ignaciobaldovino/loscabritos/src/components/Footer.tsx`.
6. Reemplazar redes placeholder (`instagram.com`, `facebook.com`) por URLs reales desde `businessProfile`; si faltan, ocultar icono en render.

### Fase 3: Structured data local + GEO generativo
1. Crear `/Users/ignaciobaldovino/loscabritos/src/seo/schema.ts` que genere JSON-LD `@graph`.
2. Incluir nodos: `WebSite`, `Organization`, `Restaurant` (uno por sucursal), `BreadcrumbList` para `/carta`.
3. Añadir `hasMap`, `geo`, `address`, `telephone`, `openingHoursSpecification`, `servesCuisine`.
4. Crear `/Users/ignaciobaldovino/loscabritos/src/components/StructuredData.tsx` para inyectar `<script type="application/ld+json">`.
5. Renderizar `StructuredData` en home y carta.
6. Crear `/Users/ignaciobaldovino/loscabritos/public/llms.txt` con:
- resumen factual del negocio,
- rutas canónicas,
- datos de contacto oficiales,
- política de actualización (fecha de última actualización).

### Fase 4: Contenido SEO/GEO orientado a reservas
1. Añadir bloque FAQ visible en home (8-12 preguntas) en nuevo archivo `/Users/ignaciobaldovino/loscabritos/src/components/FAQ.tsx`.
2. Integrar FAQ en `/Users/ignaciobaldovino/loscabritos/src/App.tsx` (home).
3. Marcar FAQ también en JSON-LD con `FAQPage`.
4. Ajustar copys clave en hero/contacto para intención local:
- restaurante en Villa de la Quebrada,
- parrilla en La Carolina,
- cabrito/chivito en San Luis.
5. Mantener tono factual, sin claims no verificables.

### Fase 5: Medición de conversión
1. Crear helper `/Users/ignaciobaldovino/loscabritos/src/lib/analytics.ts` que haga `window.dataLayer?.push(...)`.
2. Instrumentar eventos en clics de `tel:`, `wa.me` y enlaces de mapas.
3. Eventos mínimos: `reserve_call_click`, `reserve_whatsapp_click`, `directions_click`.
4. No depender de GA instalado; solo emitir eventos si existe `dataLayer`.

### Definición De Hecho (DoD)
1. `npm run build` pasa sin errores.
2. `npm run lint` pasa sin errores nuevos.
3. No hay hardcodes de teléfono/horario fuera de `businessProfile.ts`.
4. `/robots.txt`, `/sitemap.xml` y `/llms.txt` existen en `public`.
5. Home y carta tienen `title`, `description`, canonical y OG válidos.
6. JSON-LD válido en ambas páginas.
7. Enlace a carta en footer funciona.
8. CTA de contacto muestran el mismo teléfono/horario en toda la web.

### Plan De Verificación (manual + comandos)
1. Ejecutar `npm run build`.
2. Ejecutar `npm run preview` y validar:
- `http://localhost:4173/`
- `http://localhost:4173/carta`
3. Ver código fuente renderizado y confirmar meta tags por ruta.
4. Validar JSON-LD con Rich Results Test (manual externo).
5. Correr búsqueda de consistencia:
- `rg "tel:|wa.me|11:00 - 20:00|10:00 - 22:00|Lunes cerrado" /Users/ignaciobaldovino/loscabritos/src`
6. Confirmar que `Lunes cerrado` no aparece si horario oficial es el unificado temporal.

### Riesgos y mitigación
1. Riesgo: datos NAP reales no confirmados.
Mitigación: mantener todos los datos en `businessProfile.ts` para ajuste en 1 archivo.
2. Riesgo: metadata dinámica en SPA no SSR.
Mitigación: tags renderizados con Helmet + sitemap + schema; como mejora futura, migrar a prerender.
3. Riesgo: confusión de marca entre “Los Cabritos” y “Los Cabritos de Oro”.
Mitigación: declarar relación explícita en texto y schema como sucursales de la misma organización.

### Entregables esperados del agente Opus 4.6
1. Diff completo en los archivos listados.
2. Resumen de cambios por fase.
3. Resultado de `build` y `lint`.
4. Checklist DoD marcado punto por punto.
5. Lista de datos pendientes de validación comercial (si aplica).
