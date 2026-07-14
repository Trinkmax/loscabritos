// ─── Mundial FIFA 2026 ──────────────────────────────────────────────────────
//
// Partidos que se pasan en los locales. Se muestran como grilla sólo si
// `fixtureVerified` es true; si no, se muestra la línea de tiempo del torneo.
// Esto evita publicar fechas erróneas.
//
// El modelo es genérico (equipo vs equipo), no sólo partidos de Argentina:
// marcá con `featured: true` el de la Selección para que se destaque.

export interface MundialTeam {
    name: string;
    flag: string;   // emoji de la bandera
}

export interface MundialMatch {
    id: string;
    /** Etapa del partido, ej. 'Semifinal' */
    stage: string;
    /** Fecha en formato YYYY-MM-DD. Vacío si todavía no está confirmada. */
    dateISO: string;
    /** Etiqueta legible, ej. 'Martes 14 de julio'. Vacío si no está confirmada. */
    dateLabel: string;
    home: MundialTeam;
    away: MundialTeam;
    city: string;
    venue: string;
    /** Hora de Argentina (UTC-3), ej. '16:00'. Vacío si se desconoce. */
    kickoffArg: string;
    /** true para el partido de la Selección: se destaca en la grilla */
    featured?: boolean;
}

export interface MundialMilestone {
    label: string;
    dateLabel: string;
}

export const mundial = {
    edition: 'Mundial FIFA 2026',
    hostsLabel: 'Estados Unidos · Canadá · México',
    startISO: '2026-06-11',
    endISO: '2026-07-19',
    startLabel: '11 de junio',
    endLabel: '19 de julio',
    defendingChampion: true,
    teamName: 'Selección Argentina',
    teamNickname: 'La Scaloneta',

    /** Etapa que se está jugando ahora (encabeza la grilla de partidos). */
    stageLabel: 'Semifinales',

    /** true SOLO si las fechas y horarios de `matches` están verificados.
     *  Semifinales confirmadas el 12/07/2026 con La Nación e Infobae (coinciden
     *  entre sí y con la hora local de cada sede). Horarios en hora Argentina. */
    fixtureVerified: true,
    /** Orden cronológico: el primero se lleva el badge "Próximo". */
    matches: [
        {
            id: 'sf-francia-espana',
            stage: 'Semifinal',
            dateISO: '2026-07-14',
            dateLabel: 'Martes 14 de julio',
            home: { name: 'Francia', flag: '🇫🇷' },
            away: { name: 'España', flag: '🇪🇸' },
            city: 'Dallas',
            venue: 'Dallas Stadium',
            kickoffArg: '16:00',
        },
        {
            id: 'sf-argentina-inglaterra',
            stage: 'Semifinal',
            dateISO: '2026-07-15',
            dateLabel: 'Miércoles 15 de julio',
            home: { name: 'Argentina', flag: '🇦🇷' },
            away: { name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
            city: 'Atlanta',
            venue: 'Mercedes-Benz Stadium',
            kickoffArg: '16:00',
            featured: true,
        },
    ] as MundialMatch[],

    /** Línea de tiempo del torneo (respaldo cuando no hay fixture verificado). */
    milestones: [
        { label: 'Partido inaugural', dateLabel: 'Jue 11 de junio' },
        { label: 'Fase de grupos', dateLabel: '11 al 27 de junio' },
        { label: 'Eliminación directa', dateLabel: 'desde el 28 de junio' },
        { label: 'Gran Final', dateLabel: 'Dom 19 de julio' },
    ] as MundialMilestone[],
};

/** True mientras el Mundial no haya terminado (para ocultar la sección luego). */
export function isMundialActive(now: Date = new Date()): boolean {
    const end = new Date(`${mundial.endISO}T23:59:59-03:00`);
    return now.getTime() <= end.getTime();
}

/** Índice del próximo partido aún no jugado (-1 si ya pasaron todos).
 *  Un partido sin fecha confirmada se considera pendiente. */
export function getNextMatchIndex(now: Date = new Date()): number {
    return mundial.matches.findIndex((m) => {
        if (!m.dateISO) return true;
        const kickoff = new Date(`${m.dateISO}T${m.kickoffArg || '00:00'}:00-03:00`);
        // se considera "próximo" hasta 3 horas después del inicio (mientras se juega)
        return now.getTime() <= kickoff.getTime() + 3 * 60 * 60 * 1000;
    });
}
