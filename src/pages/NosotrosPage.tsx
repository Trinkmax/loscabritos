import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import About from '../components/About';
import SeoHead from '../components/SeoHead';
import StructuredData from '../components/StructuredData';
import { generateBreadcrumbSchema } from '../seo/schema';

const NosotrosPage = () => {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Inicio', path: '/' },
        { name: 'Nuestra Historia', path: '/nosotros' },
    ]);

    return (
        <div className="app">
            <SeoHead routeKey="nosotros" />
            <StructuredData schema={breadcrumb} />
            <Navbar />
            <main>
                <PageHero
                    eyebrow="Desde 1970"
                    title="Nuestra"
                    titleAccent="Historia"
                    subtitle="Más de 50 años de tradición familiar detrás de cada chivito a las brasas."
                    current="Nuestra Historia"
                />
                <About showHeader={false} />
            </main>
            <Footer />
        </div>
    );
};

export default NosotrosPage;
