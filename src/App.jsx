import { useState, useRef, useEffect, useCallback } from 'react';
import HomePage from './components/HomePage';
import PlatformSelectorPage from './components/PlatformSelectorPage';
import PricingPage from './components/PricingPage';
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { WHATSAPP_URL } from './data/social';
import './App.css';

const KNOWN_ROUTES = ['/pricing', '/plataformas'];

// Rutas retiradas al unificar el pricing en un solo modelo B2B. Los links
// viejos que sigan circulando aterrizan en el pricing actual.
const LEGACY_REDIRECTS = {
  '/pricing/empresas': '/pricing',
  '/pricing/productores': '/pricing',
  '/pricing/aapresid': '/pricing',
};

function resolvePath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const legacy = LEGACY_REDIRECTS[clean.toLowerCase()];
  if (legacy) return legacy;
  // Case-insensitive match so older shared links keep resolving to the
  // canonical route.
  const match = KNOWN_ROUTES.find(
    (route) => route.toLowerCase() === clean.toLowerCase(),
  );
  return match || '/';
}

// Deja la barra de direcciones en la ruta canónica cuando el pathname
// entrante era un alias, una ruta legacy o algo inexistente.
function normalizeUrl(resolved) {
  if (window.location.pathname !== resolved) {
    window.history.replaceState({}, '', resolved);
  }
  return resolved;
}

function App() {
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);
  const [route, setRoute] = useState(() => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      const url = new URL(redirect, window.location.origin);
      const resolved = resolvePath(url.pathname);
      if (resolved !== '/') {
        window.history.replaceState({}, '', resolved);
        return resolved;
      }
    }
    return normalizeUrl(resolvePath(window.location.pathname));
  });
  const popupRef = useRef(null);

  const navigate = useCallback((path) => {
    window.history.pushState({}, '', path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowWhatsappPopup(false);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(normalizeUrl(resolvePath(window.location.pathname)));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (!showWhatsappPopup) return;
    const handleClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowWhatsappPopup(false);
      }
    };
    const handleScroll = () => setShowWhatsappPopup(false);
    document.addEventListener('mousedown', handleClick);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showWhatsappPopup]);

  const whatsappUrl = WHATSAPP_URL;

  const whatsappElements = (
    <>
      {showWhatsappPopup && (
        <div className="wa-overlay" onClick={() => setShowWhatsappPopup(false)} />
      )}
      <div
        ref={popupRef}
        className={`wa-widget ${showWhatsappPopup ? 'wa-widget--open' : ''}`}
      >
        <button
          className="wa-widget__fab"
          onClick={() => setShowWhatsappPopup((v) => !v)}
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="wa-widget__fab-icon wa-widget__fab-icon--wa" />
          <FaTimes className="wa-widget__fab-icon wa-widget__fab-icon--close" />
        </button>

        <div className="wa-widget__panel">
          <p className="wa-widget__greeting">
            Hola <span role="img" aria-label="saludo">👋</span>
            <br />
            ¿En qué podemos ayudarte?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-widget__send"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </>
  );

  const renderPage = () => {
    switch (route) {
      case '/plataformas':
        return (
          <PlatformSelectorPage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToHome={() => navigate('/')}
          />
        );
      case '/pricing':
        return (
          <PricingPage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToHome={() => navigate('/')}
            onGoToPlatforms={() => navigate('/plataformas')}
          />
        );
      default:
        return (
          <HomePage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToPlatforms={() => navigate('/plataformas')}
            onGoToPricing={() => navigate('/pricing')}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
      {whatsappElements}
    </div>
  );
}

export default App;
