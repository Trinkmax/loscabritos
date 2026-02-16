/**
 * Analytics helper — pushes events to dataLayer if available.
 * Initializes GTM if VITE_GTM_ID env var is set.
 */

interface AnalyticsEvent {
    event: string;
    [key: string]: string | number | boolean | undefined;
}

declare global {
    interface Window {
        dataLayer?: AnalyticsEvent[];
    }
}

/**
 * Bootstrap GTM if `VITE_GTM_ID` is defined.
 * Safe to call multiple times — only injects once.
 */
let gtmInjected = false;

export function initGTM(): void {
    const gtmId = import.meta.env.VITE_GTM_ID as string | undefined;
    if (!gtmId || gtmInjected || typeof document === 'undefined') return;

    gtmInjected = true;

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime() as unknown as string, event: 'gtm.js' });

    // Inject GTM script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    // Inject noscript iframe in body
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
}

export function trackEvent(event: string, params?: Record<string, string | number | boolean>) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({ event, ...params });
    }
}

// ─── Pre-built event functions ────────────────────────────────────────────────

export function trackReserveCallClick(location?: string) {
    trackEvent('reserve_call_click', { location: location ?? 'unknown' });
}

export function trackReserveWhatsAppClick(location?: string) {
    trackEvent('reserve_whatsapp_click', { location: location ?? 'unknown' });
}

export function trackDirectionsClick(location: string) {
    trackEvent('directions_click', { location });
}

// ─── QR Menu analytics ───────────────────────────────────────────────────────

export function trackQrMenuOpen() {
    trackEvent('qr_menu_open');
}

export function trackMenuCategorySelect(category: string) {
    trackEvent('menu_category_select', { category });
}

export function trackMenuSearch(query: string) {
    trackEvent('menu_search', { query });
}

export function trackMenuNoResults(query: string) {
    trackEvent('menu_no_results', { query });
}

export function trackMenuItemView(itemId: string, itemName: string) {
    trackEvent('menu_item_view', { item_id: itemId, item_name: itemName });
}
