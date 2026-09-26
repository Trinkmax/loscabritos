// ─── Campaña: Alibikers Moto Ride 2026 ──────────────────────────────────────
//
// Promoción para motociclistas en adhesión al Encuentro Nacional de Moto
// Turismo "Alibikers Moto Ride 2026" (San Luis): descuento en todos los menús
// del 25 de septiembre al 25 de octubre. La sección se apaga sola cuando
// termina la promo, así no queda una promo vieja en la portada.
//
// Para extender o adelantar la campaña: ajustá `startISO` / `endISO` (y los
// textos `dateLabel` / `dateShort`).
// Para el próximo Alibikers: actualizá fechas, ciudad de salida y kilometraje.

export const motoRide = {
    eventName: 'Alibikers Moto Ride 2026',
    eventLabel: 'Encuentro Nacional de Moto Turismo',
    /** Vigencia de la promo */
    dateLabel: 'Del 25 de septiembre al 25 de octubre',
    dateShort: '25 SEP – 25 OCT',
    startCity: 'Juana Koslay',
    routeKm: 300,
    discountPercent: 15,

    /** Ventana en la que se muestra la sección (horario de Argentina) */
    startISO: '2026-08-01',
    endISO: '2026-10-25',

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
