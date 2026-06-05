// ─── Eventos especiales ─────────────────────────────────────────────────────
//
// Eventos puntuales (cena show, fechas patrias, etc.) que se anuncian en la
// portada y en la solapa de Entretenimiento. Mantener las fechas en formato ISO
// para poder ocultar el anuncio automáticamente una vez pasado el evento.

export interface SpecialEvent {
    id: string;
    kind: 'cena-show' | 'especial';
    title: string;
    artist?: string;
    /** Fecha del evento en formato YYYY-MM-DD (zona horaria Argentina) */
    dateISO: string;
    /** Etiqueta legible, ej. "Sábado 11 de Julio" */
    dateLabel: string;
    dayNumber: string;      // "11"
    monthLabel: string;     // "Julio"
    timeLabel: string;      // "Desde las 22:00 hs"
    /** shortName de la sucursal donde se realiza (matchea businessProfile.locations) */
    locationShortName: string;
    locationLabel: string;  // "Sucursal La Carolina, San Luis"
    description: string;
    tagline: string;
}

export const cenaShow: SpecialEvent = {
    id: 'cena-show-alcides-2026-07-11',
    kind: 'cena-show',
    title: 'Cena Show con ALCIDES',
    artist: 'ALCIDES',
    dateISO: '2026-07-11',
    dateLabel: 'Sábado 11 de Julio',
    dayNumber: '11',
    monthLabel: 'Julio',
    timeLabel: 'A partir de las 22:00 hs',
    locationShortName: 'La Carolina',
    locationLabel: 'Sucursal La Carolina, San Luis',
    description:
        'Una noche única de música y sabor en el pueblo más lindo del mundo. Disfrutá nuestra parrilla y nuestro chivito a las brasas mientras el gran ALCIDES pone música en vivo. Cupos limitados: reservá tu mesa con anticipación.',
    tagline: 'Música en vivo + la mejor parrilla de San Luis',
};

/** True si el evento todavía no ocurrió (se compara contra el final del día del evento). */
export function isEventUpcoming(event: SpecialEvent, now: Date = new Date()): boolean {
    const end = new Date(`${event.dateISO}T23:59:59-03:00`);
    return now.getTime() <= end.getTime();
}
