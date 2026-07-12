// ─── Campaña: Vacaciones de Invierno ────────────────────────────────────────
//
// Invitación a las familias durante las vacaciones de invierno. La sección se
// apaga sola cuando pasa `endISO`, así no queda un anuncio viejo en la portada.
//
// Para extender la campaña: corré `endISO`.
// Para bajarla ya: poné `endISO` en una fecha pasada.
// Para el invierno que viene: actualizá ambas fechas.

export const invierno = {
    /** Ventana en la que se muestra la sección (horario de Argentina) */
    startISO: '2026-07-01',
    endISO: '2026-08-09',
};

/** True mientras la campaña de vacaciones de invierno esté vigente. */
export function isInviernoActive(now: Date = new Date()): boolean {
    const start = new Date(`${invierno.startISO}T00:00:00-03:00`).getTime();
    const end = new Date(`${invierno.endISO}T23:59:59-03:00`).getTime();
    const t = now.getTime();
    return t >= start && t <= end;
}
