import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Entretenimiento from '../components/Entretenimiento';
import CenaShow from '../components/CenaShow';
import SeoHead from '../components/SeoHead';
import StructuredData from '../components/StructuredData';
import { generateBreadcrumbSchema, generateEventSchema } from '../seo/schema';
import { cenaShow, isEventUpcoming } from '../data/eventsData';

const EntretenimientoPage = () => {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Inicio', path: '/' },
        { name: 'Entretenimiento', path: '/entretenimiento' },
    ]);
    const showUpcoming = isEventUpcoming(cenaShow);

    return (
        <div className="app">
            <SeoHead routeKey="entretenimiento" />
            <StructuredData schema={breadcrumb} />
            {showUpcoming && <StructuredData schema={generateEventSchema(cenaShow)} />}
            <Navbar />
            <main>
                <PageHero
                    eyebrow="Para toda la familia"
                    title="Entretenimiento"
                    subtitle="Buena comida, juegos para los más chicos y música en vivo. En Los Cabritos De Oro la pasamos bien de verdad."
                    current="Entretenimiento"
                />
                <Entretenimiento />
                <CenaShow />
            </main>
            <Footer />
        </div>
    );
};

export default EntretenimientoPage;
