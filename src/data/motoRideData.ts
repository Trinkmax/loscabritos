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

    /** Foto de la sección: moto/motociclistas, protagonistas de la promo */
    heroImage: '/images/moto/motos-duo-ruta-montana.webp',
    heroImageAlt: 'Dos motos de gran cilindrada con baúles, con sus conductores en equipo de touring completo, recorriendo una ruta de montaña',
} as const;

/** True mientras la campaña de Alibikers Moto Ride esté vigente. */
export function isMotoRideActive(now: Date = new Date()): boolean {
    const start = new Date(`${motoRide.startISO}T00:00:00-03:00`).getTime();
    const end = new Date(`${motoRide.endISO}T23:59:59-03:00`).getTime();
    const t = now.getTime();
    return t >= start && t <= end;
}
