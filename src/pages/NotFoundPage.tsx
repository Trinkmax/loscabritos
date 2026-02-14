import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <Helmet>
                <title>Página no encontrada | Los Cabritos</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <div className="not-found__content">
                <div className="not-found__icon">
                    <svg width="120" height="120" viewBox="0 0 64 64" fill="currentColor" opacity="0.3">
                        <path d="M52 20c-2-4-6-8-12-8-2 0-4 1-6 2-2-1-4-2-6-2-6 0-10 4-12 8-4 8-2 18 4 24 2 2 6 4 10 4h8c4 0 8-2 10-4 6-6 8-16 4-24z" />
                    </svg>
                </div>

                <h1 className="not-found__code">404</h1>
                <h2 className="not-found__title">Página no encontrada</h2>
                <p className="not-found__description">
                    Parece que esta página no existe o fue movida.
                    Pero no te preocupes, podés volver al inicio y seguir disfrutando.
                </p>

                <div className="not-found__actions">
                    <Link to="/" className="btn btn--primary not-found__btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Volver al inicio
                    </Link>
                    <Link to="/carta" className="btn btn--secondary not-found__btn">
                        Ver nuestra carta
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
