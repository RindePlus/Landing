import { useState, useRef, useEffect, useCallback } from 'react';
import HomePage from './components/HomePage';
import PlatformSelectorPage from './components/PlatformSelectorPage';
import PricingLandingPage from './components/PricingLandingPage';
import PricingProductoresPage from './components/PricingProductoresPage';
import PricingEmpresasPage from './components/PricingEmpresasPage';
import PricingAapresidPage from './components/PricingAapresidPage';
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import './App.css';

const KNOWN_ROUTES = [
  '/pricing/productores',
  '/pricing/empresas',
  '/pricing/Aapresid',
  '/pricing',
  '/plataformas',
];

function resolvePath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  // Case-insensitive match so older shared links (e.g. /pricing/aapresid)
  // keep resolving to the canonical route.
  const match = KNOWN_ROUTES.find(
    (route) => route.toLowerCase() === clean.toLowerCase(),
  );
  return match || '/';
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
    return resolvePath(window.location.pathname);
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
      setRoute(resolvePath(window.location.pathname));
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

  const whatsappUrl = "https://wa.me/5493564593446?text=Hola,%20quiero%20más%20información%20sobre%20Rinde%20Plus";

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
          <PricingLandingPage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToHome={() => navigate('/')}
            onGoToEmpresas={() => navigate('/pricing/empresas')}
            onGoToProductores={() => navigate('/pricing/productores')}
            onGoToAapresid={() => navigate('/pricing/Aapresid')}
            onGoToPlatforms={() => navigate('/plataformas')}
          />
        );
      case '/pricing/productores':
        return (
          <PricingProductoresPage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToHome={() => navigate('/')}
            onGoToPricing={() => navigate('/pricing')}
            onGoToEmpresas={() => navigate('/pricing/empresas')}
          />
        );
      case '/pricing/empresas':
        return (
          <PricingEmpresasPage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToHome={() => navigate('/')}
            onGoToPricing={() => navigate('/pricing')}
            onGoToProductores={() => navigate('/pricing/productores')}
          />
        );
      case '/pricing/Aapresid':
        return (
          <PricingAapresidPage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToHome={() => navigate('/')}
            onGoToPricing={() => navigate('/pricing')}
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
