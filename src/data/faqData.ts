import { businessProfile, getPhone } from '../data/businessProfile';

const phone = getPhone();
const loc0 = businessProfile.locations[0];
const loc1 = businessProfile.locations[1];
const loc2 = businessProfile.locations[2];

export const faqData = [
    {
        question: '¿Dónde están ubicados Los Cabritos De Oro?',
        answer: `Tenemos tres sucursales en la provincia de San Luis: "${loc0.name}" en ${loc0.shortName} (casa matriz desde ${loc0.since}), "${loc1.name}" en ${loc1.shortName} y nuestro nuevo local en ${loc2.shortName}, sobre calle 9 de Julio, camino al dique.`,
    },
    {
        question: '¿Puedo ver los partidos del Mundial 2026 en el restaurante?',
        answer: 'Sí. Tenemos Disney+ y DGO en televisores Smart TV de 85 pulgadas en nuestras 3 sucursales, así que pasamos todos los partidos del Mundial 2026, con especial dedicación a la Selección Argentina. Te recomendamos reservar tu mesa con anticipación para los partidos de Argentina.',
    },
    {
        question: '¿Los locales están climatizados?',
        answer: 'Sí. Nuestras tres sucursales (Villa de la Quebrada, La Carolina y Nogolí) tienen ambientes climatizados, así que podés venir con la familia y disfrutar cómodo aunque afuera haga frío.',
    },
    {
        question: '¿El postre está incluido en el menú?',
        answer: 'Sí. Los postres artesanales y los helados GRIDO van de regalo con el menú, sin cargo adicional.',
    },
    {
        question: '¿Tienen comida para llevar?',
        answer: 'Sí. Podés llevarte docena de empanadas de carne o de jamón y queso, sándwich de milanesa en pan casero con lechuga y tomate, y choripán. Consultá por teléfono o WhatsApp para encargar tu pedido.',
    },
    {
        question: '¿Tienen actividades para los chicos?',
        answer: 'Sí. Para que los más chicos se diviertan mientras disfrutan su estadía, entregamos cuadernillos de dibujos para colorear y cartones de bingo gratis para chicos y grandes, con diversos premios para los ganadores. Ideal para las vacaciones de invierno.',
    },
    {
        question: '¿Cuál es el horario de atención?',
        answer: 'Abrimos todos los días de 09:00 hs, con horario extendido los fines de semana (los sábados hasta las 23:30 hs). En fechas especiales, fiestas religiosas y durante el Mundial extendemos nuestros horarios.',
    },
    {
        question: '¿Se puede reservar mesa?',
        answer: `Sí. Podés reservar llamando al ${phone.value} o por WhatsApp al mismo número. Recomendamos reservar con anticipación los fines de semana, feriados y para los partidos del Mundial.`,
    },
    {
        question: '¿Cuál es la especialidad de Los Cabritos De Oro?',
        answer: 'Nuestra especialidad es el chivito a las brasas con chanfaina, cocinado lentamente con técnicas que pasaron de generación en generación desde 1970. También se destacan nuestra Parrilla de Oro (con todos los cortes), el cabrito, las empanadas criollas y las pastas caseras.',
    },
    {
        question: '¿Qué es el chivito a las brasas y cómo lo preparan?',
        answer: 'El chivito a las brasas es nuestra especialidad más reconocida. Se trata de carne de cabrito joven, cocinada lentamente sobre brasas de leña, logrando una cocción pareja y un sabor ahumado inigualable. Lo servimos con su chanfaina casera. En Los Cabritos De Oro preparamos el chivito con la misma técnica artesanal que se usa desde 1970, respetando los tiempos de cocción para que quede tierno y jugoso.',
    },
    {
        question: '¿Qué incluye la Parrilla de Oro?',
        answer: 'La Parrilla de Oro es nuestra parrillada insignia, con todas las carnes: costillas, vacío, cortes de cerdo, pollo, chorizo, morcilla y chinchulines. Ideal para compartir en familia o con amigos.',
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
        question: '¿Cómo llego a la sucursal de Nogolí?',
        answer: `${loc2.directionsNote}`,
    },
    {
        question: '¿Aceptan tarjetas de débito o crédito?',
        answer: 'Para conocer los medios de pago disponibles, te recomendamos consultar directamente al momento de tu visita o comunicarte por teléfono o WhatsApp.',
    },
];
