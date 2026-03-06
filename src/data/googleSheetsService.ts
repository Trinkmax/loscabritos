// ─── Google Sheets CSV Parser ─────────────────────────────────────────────────
//
// Descarga y parsea la Google Sheet publicada como CSV,
// mapeando cada fila a un MenuItem. Usa localStorage como cache.

import type { MenuItem } from './menuData';
import {
    GOOGLE_SHEET_CSV_URL,
    CACHE_DURATION_MS,
    CACHE_KEY,
    CACHE_TIMESTAMP_KEY,
} from './googleSheetsConfig';

// ─── Mapping de imágenes por id ───────────────────────────────────────────────
// Las imágenes se mantienen en el código (no en la sheet) para mayor control

const imageMap: Record<string, string> = {
    'parrilla-2': '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    'parrilla-3': '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    'parrilla-4': '/images/comida/parrillada-completa-mesa-los-cabritos.webp',
    'chivito-2': '/images/comida/chivito-para-dos.webp',
    'chivito-1': '/images/comida/chivito-individual.webp',
    'tallarines-peceto': '/images/comida/tallarines-con-peceto.webp',
    'tallarines-salsa-blanca': '/images/comida/tallarines-salsa-blanca.webp',
    'ravioles': '/images/comida/ravioles-verdura.webp',
    'milanesa-napolitana': '/images/comida/milanesa-napolitana.webp',
    'pollo-grillado': '/images/comida/pollo-grillado.webp',
    'pollo-horno': '/images/comida/pollo-horno.webp',
    'vacio': '/images/comida/vacio-costilla.png',
    'carne-olla': '/images/comida/carne-olla.webp',
    'locro': '/images/comida/locro.webp',
    'humita': '/images/comida/humita.webp',
    'merluza': '/images/comida/merluza.webp',
    'pizza-jamon-queso': '/images/comida/pizzaespecial.png',
    'pizza-muzzarella': '/images/comida/pizza.webp',
    'empanadas-docena': '/images/comida/empanadas.png',
    'empanada-unidad': '/images/comida/empanadas.png',
    'bebida-linea-coca': '/images/comida/bebida-linea-coca.png',
};

// ─── CSV Parser ───────────────────────────────────────────────────────────────

/**
 * Parsea un string CSV respetando campos entre comillas (que pueden contener
 * comas y saltos de línea internos).
 */
function parseCSV(csvText: string): string[][] {
    const rows: string[][] = [];
    let current = '';
    let inQuotes = false;
    let row: string[] = [];

    for (let i = 0; i < csvText.length; i++) {
        const char = csvText[i];
        const next = csvText[i + 1];

        if (inQuotes) {
            if (char === '"' && next === '"') {
                current += '"';
                i++; // skip escaped quote
            } else if (char === '"') {
                inQuotes = false;
            } else {
                current += char;
            }
        } else {
            if (char === '"') {
                inQuotes = true;
            } else if (char === ',') {
                row.push(current.trim());
                current = '';
            } else if (char === '\n' || (char === '\r' && next === '\n')) {
                row.push(current.trim());
                if (row.some((cell) => cell !== '')) {
                    rows.push(row);
                }
                row = [];
                current = '';
                if (char === '\r') i++; // skip \n after \r
            } else {
                current += char;
            }
        }
    }

    // Push last row
    if (current || row.length > 0) {
        row.push(current.trim());
        if (row.some((cell) => cell !== '')) {
            rows.push(row);
        }
    }

    return rows;
}

/**
 * Convierte las filas CSV en MenuItem[].
 * Espera que la primera fila sea el encabezado:
 * id, categoryId, name, price, shortDescription, serves, includes, isRecommended
 */
function csvToMenuItems(rows: string[][]): MenuItem[] {
    if (rows.length < 2) return [];

    const headers = rows[0].map((h) => h.toLowerCase().trim());

    // Encontrar índices de cada columna
    const idx = {
        id: headers.indexOf('id'),
        categoryId: headers.indexOf('categoryid'),
        name: headers.indexOf('name'),
        price: headers.indexOf('price'),
        shortDescription: headers.indexOf('shortdescription'),
        serves: headers.indexOf('serves'),
        includes: headers.indexOf('includes'),
        isRecommended: headers.indexOf('isrecommended'),
    };

    // Validar que las columnas esenciales existan
    if (idx.id === -1 || idx.categoryId === -1 || idx.name === -1 || idx.price === -1) {
        console.warn('[GoogleSheets] Columnas esenciales faltantes en la sheet');
        return [];
    }

    const items: MenuItem[] = [];

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];

        const id = row[idx.id] || '';
        const categoryId = row[idx.categoryId] || '';
        const name = row[idx.name] || '';
        const priceStr = row[idx.price] || '0';
        const price = parseInt(priceStr.replace(/[^0-9-]/g, ''), 10) || 0;

        // Saltar filas sin id o con precio -1 (ocultas)
        if (!id || !categoryId || !name || price === -1) continue;

        const shortDescription = idx.shortDescription !== -1 ? (row[idx.shortDescription] || '') : '';
        const serves = idx.serves !== -1 ? (row[idx.serves] || undefined) : undefined;

        // includes: separar por comas
        let includes: string[] | undefined;
        if (idx.includes !== -1 && row[idx.includes]) {
            includes = row[idx.includes]
                .split(',')
                .map((s) => s.trim())
                .filter(Boolean);
        }

        // isRecommended
        const isRecommended =
            idx.isRecommended !== -1 &&
            ['true', 'si', 'sí', '1', 'yes'].includes((row[idx.isRecommended] || '').toLowerCase());

        // Imagen del mapa local
        const image = imageMap[id];

        items.push({
            id,
            categoryId,
            name,
            price,
            shortDescription,
            ...(serves && { serves }),
            ...(includes && includes.length > 0 && { includes }),
            ...(isRecommended && { isRecommended }),
            ...(image && { image }),
        });
    }

    return items;
}

// ─── Cache ────────────────────────────────────────────────────────────────────

function getCachedData(): MenuItem[] | null {
    try {
        const ts = localStorage.getItem(CACHE_TIMESTAMP_KEY);
        const data = localStorage.getItem(CACHE_KEY);
        if (!ts || !data) return null;

        const elapsed = Date.now() - parseInt(ts, 10);
        if (elapsed > CACHE_DURATION_MS) return null;

        return JSON.parse(data) as MenuItem[];
    } catch {
        return null;
    }
}

function setCachedData(items: MenuItem[]): void {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(items));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, String(Date.now()));
    } catch {
        // localStorage lleno, no pasa nada
    }
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Descarga el menú de Google Sheets.
 * - Si no hay URL configurada, retorna null (se usará el fallback).
 * - Si hay cache válida, la retorna.
 * - Si la descarga falla, retorna null.
 */
export async function fetchMenuFromGoogleSheets(): Promise<MenuItem[] | null> {
    // Si no hay URL configurada, no intentar
    if (!GOOGLE_SHEET_CSV_URL) {
        return null;
    }

    // Verificar cache primero
    const cached = getCachedData();
    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL);
        if (!response.ok) {
            console.warn(`[GoogleSheets] Error ${response.status} al descargar`);
            return null;
        }

        const csvText = await response.text();
        const rows = parseCSV(csvText);
        const items = csvToMenuItems(rows);

        if (items.length === 0) {
            console.warn('[GoogleSheets] No se encontraron items válidos');
            return null;
        }

        // Guardar en cache
        setCachedData(items);
        return items;
    } catch (err) {
        console.warn('[GoogleSheets] Error al descargar:', err);
        return null;
    }
}
