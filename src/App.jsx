import { useState, useRef, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import VigiaPage from './components/VigiaPage';
import BrechasPage from './components/BrechasPage';
import AapresidPage from './components/AapresidPage';
import PricingLandingPage from './components/PricingLandingPage';
import PricingProductoresPage from './components/PricingProductoresPage';
import PricingEmpresasPage from './components/PricingEmpresasPage';
import PricingAapresidPage from './components/PricingAapresidPage';
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import './App.css';

const KNOWN_ROUTES = [
  '/pricing/productores',
  '/pricing/empresas',
  '/pricing/aapresid',
  '/pricing',
  '/vigia',
  '/brechas',
  '/aapresid',
];

function resolvePath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (KNOWN_ROUTES.includes(clean)) return clean;
  return '/';
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
  const vigiaLoginUrl = "https://vigiabioestress.ddns.net/login/";

  const openVigiaLogin = () => {
    window.open(vigiaLoginUrl, '_blank', 'noopener,noreferrer');
  };

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
      case '/vigia':
        return (
          <>
            <Header
              onOpenWhatsApp={() => setShowWhatsappPopup(true)}
              onLogoClick={() => navigate('/')}
              menuItems={[
                { label: 'Inicio', id: 'top' },
                { label: '¿Qué es?', id: 'vigia-que-es' },
                { label: '¿Cómo funciona?', id: 'vigia-como-funciona' },
                { label: '¿Para quién?', id: 'vigia-para-quien' },
                { label: '¿Cómo empiezo?', id: 'vigia-empezar' },
                { label: 'Alianza', id: 'vigia-alianza' },
              ]}
            />
            <main className="vigia-main">
              <VigiaPage
                onOpenWhatsApp={() => setShowWhatsappPopup(true)}
                onGoToPlatform={openVigiaLogin}
              />
              <Footer onOpenWhatsApp={() => setShowWhatsappPopup(true)} />
            </main>
          </>
        );
      case '/brechas':
        return (
          <BrechasPage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToHome={() => navigate('/')}
            onGoToPricing={() => navigate('/pricing')}
          />
        );
      case '/aapresid':
        return (
          <AapresidPage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToHome={() => navigate('/')}
            onGoToPricing={() => navigate('/pricing/aapresid')}
          />
        );
      case '/pricing':
        return (
          <PricingLandingPage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToHome={() => navigate('/')}
            onGoToEmpresas={() => navigate('/pricing/empresas')}
            onGoToProductores={() => navigate('/pricing/productores')}
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
      case '/pricing/aapresid':
        return (
          <PricingAapresidPage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToHome={() => navigate('/')}
            onGoToPricing={() => navigate('/pricing')}
            onGoToAapresid={() => navigate('/aapresid')}
          />
        );
      default:
        return (
          <HomePage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToVigia={() => navigate('/vigia')}
            onGoToBrechas={() => navigate('/brechas')}
            onGoToAapresid={() => navigate('/aapresid')}
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
