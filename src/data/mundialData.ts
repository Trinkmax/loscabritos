// ─── Mundial FIFA 2026 ──────────────────────────────────────────────────────
//
// Datos del Mundial para la portada. El fixture de la Selección Argentina sólo
// se muestra como "fixture" si `fixtureVerified` es true; de lo contrario se
// muestra la línea de tiempo del torneo. Esto evita publicar fechas erróneas.
//
// Para cargar el fixture: completar `group` + `matches` y poner
// `fixtureVerified: true`.

export interface MundialMatch {
    matchday: number;       // 1 | 2 | 3 (fase de grupos)
    dateISO: string;        // '2026-06-16'
    dateLabel: string;      // 'Martes 16 de junio'
    opponent: string;       // rival
    opponentFlag: string;   // emoji bandera del rival
    city: string;           // sede
    venue: string;          // estadio
    kickoffArg: string;     // hora de Argentina, ej. '22:00' ('' si se desconoce)
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

    /** true SOLO si el fixture de Argentina está verificado.
     *  Fixture confirmado por AFA / FIFA (sorteo del 5/12/2025). Horarios en hora Argentina (UTC-3). */
    fixtureVerified: true,
    group: 'J' as string | null,
    matches: [
        {
            matchday: 1,
            dateISO: '2026-06-16',
            dateLabel: 'Martes 16 de junio',
            opponent: 'Argelia',
            opponentFlag: '🇩🇿',
            city: 'Kansas City',
            venue: 'Kansas City Stadium',
            kickoffArg: '22:00',
        },
        {
            matchday: 2,
            dateISO: '2026-06-22',
            dateLabel: 'Lunes 22 de junio',
            opponent: 'Austria',
            opponentFlag: '🇦🇹',
            city: 'Dallas',
            venue: 'Dallas Stadium',
            kickoffArg: '14:00',
        },
        {
            matchday: 3,
            dateISO: '2026-06-27',
            dateLabel: 'Sábado 27 de junio',
            opponent: 'Jordania',
            opponentFlag: '🇯🇴',
            city: 'Dallas',
            venue: 'Dallas Stadium',
            kickoffArg: '23:00',
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

/** Índice del próximo partido de Argentina aún no jugado (-1 si ya pasaron todos). */
export function getNextMatchIndex(now: Date = new Date()): number {
    return mundial.matches.findIndex((m) => {
        const kickoff = new Date(`${m.dateISO}T${m.kickoffArg || '00:00'}:00-03:00`);
        // se considera "próximo" hasta 3 horas después del inicio (mientras se juega)
        return now.getTime() <= kickoff.getTime() + 3 * 60 * 60 * 1000;
    });
}
