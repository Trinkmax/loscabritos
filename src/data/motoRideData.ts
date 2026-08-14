// ─── Campaña: Alibikers Moto Ride 2026 ──────────────────────────────────────
//
// Promoción de adhesión al Encuentro Nacional de Moto Turismo "Alibikers Moto
// Ride 2026" (26 y 27 de septiembre, San Luis). La sección se apaga sola
// después del evento, así no queda una promo vieja en la portada.
//
// Para extender o adelantar la campaña: ajustá `startISO` / `endISO`.
// Para el próximo Alibikers: actualizá fecha, ciudad de salida y kilometraje.

export const motoRide = {
    eventName: 'Alibikers Moto Ride 2026',
    eventLabel: 'Encuentro Nacional de Moto Turismo',
    dateLabel: '26 y 27 de Septiembre',
    dateShort: '26–27 SEP',
    startCity: 'Juana Koslay',
    routeKm: 300,
    discountPercent: 10,

    /** Ventana en la que se muestra la sección (horario de Argentina) */
    startISO: '2026-08-01',
    endISO: '2026-09-27',

    /** Foto principal: moto/motociclista, protagonista de la sección */
    heroImage: '/images/moto/moto-ruta-companeros-bosque.webp',
    heroImageAlt: 'Dos motociclistas con camperas de cuero y casco integral tomando una curva en una ruta de bosque',

    /** Foto secundaria: detalle de abrigo y paisaje frío */
    detailImage: '/images/moto/moto-turismo-montana-invierno.webp',
    detailImageAlt: 'Motociclista con casco integral parado sobre los estribos de su moto, con una cordillera nevada de fondo',
} as const;

/** True mientras la campaña de Alibikers Moto Ride esté vigente. */
export function isMotoRideActive(now: Date = new Date()): boolean {
    const start = new Date(`${motoRide.startISO}T00:00:00-03:00`).getTime();
    const end = new Date(`${motoRide.endISO}T23:59:59-03:00`).getTime();
    const t = now.getTime();
    return t >= start && t <= end;
}
