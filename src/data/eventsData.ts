// ─── Eventos especiales ─────────────────────────────────────────────────────
//
// Eventos puntuales (cena show, fechas patrias, etc.) que se anuncian en la
// portada y en la solapa de Entretenimiento.
//
// Para anunciar el próximo show: agregá un objeto a `specialEvents` (abajo hay
// un ejemplo listo para completar). La portada y /entretenimiento lo muestran
// solos y lo esconden cuando pasa la fecha. Con la lista vacía, la sección
// directamente no aparece.

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
    /** Foto del artista o del evento, servida desde /public */
    image: string;
}

/** Eventos anunciados. Lista vacía = no hay ninguno programado. */
export const specialEvents: SpecialEvent[] = [
    // {
    //     id: 'cena-show-2026-09-12',
    //     kind: 'cena-show',
    //     title: 'Cena Show con FULANO',
    //     artist: 'FULANO',
    //     dateISO: '2026-09-12',
    //     dateLabel: 'Sábado 12 de Septiembre',
    //     dayNumber: '12',
    //     monthLabel: 'Septiembre',
    //     timeLabel: 'A partir de las 22:00 hs',
    //     locationShortName: 'La Carolina',
    //     locationLabel: 'Sucursal La Carolina, San Luis',
    //     description: 'Una noche de música y sabor en el pueblo más lindo del mundo...',
    //     tagline: 'Música en vivo + la mejor parrilla de San Luis',
    //     image: '/images/eventos/fulano.webp',
    // },
];

/** True si el evento todavía no ocurrió (se compara contra el final del día del evento). */
export function isEventUpcoming(event: SpecialEvent, now: Date = new Date()): boolean {
    const end = new Date(`${event.dateISO}T23:59:59-03:00`);
    return now.getTime() <= end.getTime();
}

/** El próximo evento anunciado que todavía no pasó, o null si no hay ninguno. */
export function getUpcomingEvent(now: Date = new Date()): SpecialEvent | null {
    return specialEvents.find((event) => isEventUpcoming(event, now)) ?? null;
}
