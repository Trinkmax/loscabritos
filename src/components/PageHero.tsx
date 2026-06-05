import { Link } from 'react-router-dom';
import './PageHero.css';

interface PageHeroProps {
    eyebrow?: string;
    title: string;
    titleAccent?: string;
    subtitle?: string;
    /** Etiqueta de la página actual en el breadcrumb */
    current: string;
}

const PageHero = ({ eyebrow, title, titleAccent, subtitle, current }: PageHeroProps) => (
    <header className="page-hero">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="container page-hero__inner">
            <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
                <ol>
                    <li>
                        <Link to="/" className="page-hero__crumb-link">Inicio</Link>
                        <span className="page-hero__crumb-sep" aria-hidden="true">›</span>
                    </li>
                    <li className="page-hero__crumb-current" aria-current="page">{current}</li>
                </ol>
            </nav>

            {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}

            <h1 className="page-hero__title">
                {title}
                {titleAccent && <span className="page-hero__title-accent"> {titleAccent}</span>}
            </h1>

            <div className="page-hero__divider" aria-hidden="true">
                <span /><span />
            </div>

            {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        </div>
    </header>
);

export default PageHero;
