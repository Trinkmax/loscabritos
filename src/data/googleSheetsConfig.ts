// ─── Google Sheets Configuration ──────────────────────────────────────────────
//
// INSTRUCCIONES:
// 1. Crear la Google Sheet con los datos del menú (ver google_sheets_setup.md)
// 2. Publicar como CSV: Archivo → Compartir → Publicar en la web → CSV
// 3. Pegar la URL acá abajo

/**
 * URL pública de la Google Sheet publicada como CSV.
 * Reemplazar con la URL real después de publicar.
 * 
 * Ejemplo: 'https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?gid=0&single=true&output=csv'
 */
export const GOOGLE_SHEET_CSV_URL = '';

/**
 * Tiempo de cache en milisegundos (5 minutos).
 * Los datos se re-descargan solo si el cache expiró.
 */
export const CACHE_DURATION_MS = 5 * 60 * 1000;

/**
 * Clave para guardar el cache en localStorage.
 */
export const CACHE_KEY = 'loscabritos_menu_cache';
export const CACHE_TIMESTAMP_KEY = 'loscabritos_menu_cache_ts';
