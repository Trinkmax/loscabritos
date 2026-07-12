import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Entretenimiento from '../components/Entretenimiento';
import Invierno from '../components/Invierno';
import CenaShow from '../components/CenaShow';
import SeoHead from '../components/SeoHead';
import StructuredData from '../components/StructuredData';
import { generateBreadcrumbSchema, generateEventSchema } from '../seo/schema';
import { getUpcomingEvent } from '../data/eventsData';

const EntretenimientoPage = () => {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Inicio', path: '/' },
        { name: 'Entretenimiento', path: '/entretenimiento' },
    ]);
    const upcomingEvent = getUpcomingEvent();

    return (
        <div className="app">
            <SeoHead routeKey="entretenimiento" />
            <StructuredData schema={breadcrumb} />
            {upcomingEvent && <StructuredData schema={generateEventSchema(upcomingEvent)} />}
            <Navbar />
            <main>
                <PageHero
                    eyebrow="Para toda la familia"
                    title="Entretenimiento"
                    subtitle="Buena comida, juegos para los más chicos y ambientes climatizados. En Los Cabritos De Oro la pasamos bien de verdad."
                    current="Entretenimiento"
                />
                <Entretenimiento />
                <Invierno />
                <CenaShow />
            </main>
            <Footer />
        </div>
    );
};

export default EntretenimientoPage;
