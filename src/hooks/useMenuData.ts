// ─── useMenuData Hook ─────────────────────────────────────────────────────────
//
// Hook de React que intenta cargar el menú desde Google Sheets
// y usa los datos hardcodeados como fallback.

import { useState, useEffect } from 'react';
import type { MenuItem } from '../data/menuData';
import { menuItems as fallbackMenuItems } from '../data/menuData';
import { fetchMenuFromGoogleSheets } from '../data/googleSheetsService';

interface UseMenuDataResult {
    /** Los items del menú (de Google Sheets o fallback) */
    menuItems: MenuItem[];
    /** Si está cargando datos de Google Sheets */
    isLoading: boolean;
    /** Si los datos vienen de Google Sheets (true) o son fallback (false) */
    isFromSheet: boolean;
}

/**
 * Hook que carga automáticamente el menú desde Google Sheets.
 * Si no está configurado o falla, retorna los datos hardcodeados.
 * 
 * Uso:
 * ```tsx
 * const { menuItems, isLoading } = useMenuData();
 * ```
 */
export function useMenuData(): UseMenuDataResult {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(fallbackMenuItems);
    const [isLoading, setIsLoading] = useState(true);
    const [isFromSheet, setIsFromSheet] = useState(false);

    useEffect(() => {
        let cancelled = false;

        async function loadMenu() {
            try {
                const sheetItems = await fetchMenuFromGoogleSheets();
                if (!cancelled && sheetItems && sheetItems.length > 0) {
                    setMenuItems(sheetItems);
                    setIsFromSheet(true);
                }
            } catch {
                // Fallback silencioso: se mantienen los datos hardcodeados
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        }

        loadMenu();

        return () => {
            cancelled = true;
        };
    }, []);

    return { menuItems, isLoading, isFromSheet };
}
