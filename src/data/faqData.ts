import { businessProfile, getPhone } from '../data/businessProfile';

const phone = getPhone();
const loc0 = businessProfile.locations[0];
const loc1 = businessProfile.locations[1];

export const faqData = [
    {
        question: '¿Dónde están ubicados Los Cabritos De Oro?',
        answer: `Tenemos dos sucursales en la provincia de San Luis: "${loc0.name}" en ${loc0.shortName} (casa matriz desde ${loc0.since}) y "${loc1.name}" en ${loc1.shortName}.`,
    },
    {
        question: '¿Cuál es el horario de atención?',
        answer: 'Abrimos de domingo a viernes de 11:00 a 20:00 hs y los sábados de 10:00 a 22:00 hs. En fechas especiales y fiestas religiosas extendemos nuestros horarios.',
    },
    {
        question: '¿Se puede reservar mesa?',
        answer: `Sí. Podés reservar llamando al ${phone.value} o por WhatsApp al mismo número. Recomendamos reservar con anticipación los fines de semana y feriados.`,
    },
    {
        question: '¿Cuál es la especialidad de Los Cabritos De Oro?',
        answer: 'Nuestra especialidad es el cabrito y chivito a las brasas, cocinado lentamente con técnicas que pasaron de generación en generación desde 1970. También ofrecemos parrilla completa, empanadas criollas y pastas caseras.',
    },
    {
        question: '¿Tienen opciones para grupos grandes?',
        answer: 'Sí. Ofrecemos combos de parrilla completa para 2, 3 y 4 personas con postre incluido. Para grupos más grandes, contactanos para armar un menú especial.',
    },
    {
        question: '¿Cobran cubiertos?',
        answer: 'No, no cobramos cubiertos. Las porciones son abundantes, estilo casero.',
    },
    {
        question: '¿Cómo llego a la sucursal de Villa de la Quebrada?',
        answer: `${loc0.directionsNote}`,
    },
    {
        question: '¿Cómo llego a la sucursal de La Carolina?',
        answer: `${loc1.directionsNote}`,
    },
    {
        question: '¿Cuál es la diferencia entre Los Cabritos y Los Cabritos de Oro?',
        answer: 'Ambos son sucursales de la misma familia y organización. "Parrilla Los Cabritos" es la casa matriz en Villa de la Quebrada (desde 1970) y "Los Cabritos de Oro" es la sucursal en La Carolina. Misma calidad, misma tradición.',
    },
    {
        question: '¿Aceptan tarjetas de débito o crédito?',
        answer: 'Para conocer los medios de pago disponibles, te recomendamos consultar directamente al momento de tu visita o comunicarte por teléfono o WhatsApp.',
    },
];
