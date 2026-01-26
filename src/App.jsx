import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import FeatureCards from './components/FeatureCards';
import ServicesSection from './components/ServicesSection';
import PlatformsSection from './components/PlatformsSection';
import HeroWindow from './components/HeroWindow';
import TrustedCompanies from './components/TrustedCompanies';
import Footer from './components/Footer';
import VigiaPage from './components/VigiaPage';
import PronosticosPage from './components/PronosticosPage';
import inicioImage from './assets/inicio.jpg';
import trigoImage from './assets/Trigo.jpg';
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import './App.css';

function App() {
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [route, setRoute] = useState(() => {
    // Check for redirect from 404.html
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      const url = new URL(redirect, window.location.origin);
      if (url.pathname === '/vigia' || url.pathname === '/vigia/') {
        window.history.replaceState({}, '', '/vigia');
        return '/vigia';
      }
      if (url.pathname === '/pronosticos' || url.pathname === '/pronosticos/') {
        window.history.replaceState({}, '', '/pronosticos');
        return '/pronosticos';
      }
    }

    const pathname = window.location.pathname;
    if (pathname === '/vigia' || pathname === '/vigia/') return '/vigia';
    if (pathname === '/pronosticos' || pathname === '/pronosticos/') return '/pronosticos';
    return '/';
  });
  const popupRef = useRef(null);

  // Carga agresiva de la imagen principal
  useEffect(() => {
    // Técnica simple pero efectiva
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true);
    img.src = inicioImage;

    // Forzar la carga inmediata
    if (img.complete) {
      setImageLoaded(true);
    }

    // También intentar con fetch inmediato
    fetch(inicioImage)
      .then(() => setImageLoaded(true))
      .catch(() => { });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      if (pathname === '/vigia' || pathname === '/vigia/') {
        setRoute('/vigia');
      } else if (pathname === '/pronosticos' || pathname === '/pronosticos/') {
        setRoute('/pronosticos');
      } else {
        setRoute('/');
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Cerrar popup al hacer click fuera o scroll
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
  const isVigiaPage = route === '/vigia' || route === 'vigia';
  const isPronosticosPage = route === '/pronosticos' || route === 'pronosticos';

  const navigateHome = () => {
    window.history.pushState({}, '', '/');
    setRoute('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowWhatsappPopup(false);
  };

  const navigateToVigia = () => {
    window.history.pushState({}, '', '/vigia');
    setRoute('/vigia');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowWhatsappPopup(false);
  };

  const navigateToPronosticos = () => {
    window.history.pushState({}, '', '/pronosticos');
    setRoute('/pronosticos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowWhatsappPopup(false);
  };

  const openVigiaLogin = () => {
    window.open(vigiaLoginUrl, '_blank', 'noopener,noreferrer');
  };

  const whatsappElements = (
    <>
      <button
        className="whatsapp-float"
        onClick={() => setShowWhatsappPopup((v) => !v)}
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </button>
      {showWhatsappPopup && (
        <div className="whatsapp-popup-bg">
          <div className="whatsapp-popup" ref={popupRef}>
            <div className="whatsapp-popup-header">
              <FaWhatsapp className="whatsapp-popup-logo" />
              <span className="whatsapp-popup-title">WhatsApp</span>
              <button className="whatsapp-popup-close" onClick={() => setShowWhatsappPopup(false)} aria-label="Cerrar">
                <FaTimes />
              </button>
            </div>
            <div className="whatsapp-popup-body">
              <div className="whatsapp-popup-message">
                <span>Hola <span role="img" aria-label="saludo">👋</span></span><br />
                ¿En qué podemos ayudarte?
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-popup-send"
              >
                Enviar
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );

  if (isVigiaPage) {
    return (
      <div className="App">
        <Header
          onOpenWhatsApp={() => setShowWhatsappPopup(true)}
          onLogoClick={navigateHome}
          showMenu={false}
        />
        <main className="vigia-main">
          <VigiaPage
            onOpenWhatsApp={() => setShowWhatsappPopup(true)}
            onGoToPlatform={openVigiaLogin}
          />
          <Footer onOpenWhatsApp={() => setShowWhatsappPopup(true)} />
        </main>
        {whatsappElements}
      </div>
    );
  }

  if (isPronosticosPage) {
    return (
      <div className="App">
        <PronosticosPage
          onOpenWhatsApp={() => setShowWhatsappPopup(true)}
          onGoToHome={navigateHome}
        />
        {whatsappElements}
      </div>
    );
  }

  return (
    <div className="App">
      {/* Imagen oculta para precarga */}
      <img
        src={inicioImage}
        alt=""
        style={{ display: 'none' }}
        onLoad={() => setImageLoaded(true)}
      />
      <Header
        onOpenWhatsApp={() => setShowWhatsappPopup(true)}
        onLogoClick={navigateHome}
      />
      <main className="main-content">
        <div id="inicio">
          <HeroWindow />
        </div>
        <div id="caracteristicas">
          <FeatureCards backgroundColor="#f8f9fa" />
        </div>
        <div id="servicios">
          <ServicesSection backgroundImage={trigoImage} />
        </div>
        <div id="plataformas">
          <PlatformsSection
            onGoToVigia={navigateToVigia}
            onGoToPronosticos={navigateToPronosticos}
          />
        </div>
        <div
          className={`hero-section ${imageLoaded ? 'loaded' : ''}`}
          style={{ backgroundImage: `url(${inicioImage})` }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Aumenta el rendimiento de tu campo</h1>
              </div>
              <div className="hero-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div id="clientes">
          <TrustedCompanies />
        </div>
        <div id="contacto">
          <Footer onOpenWhatsApp={() => setShowWhatsappPopup(true)} />
        </div>
      </main>
      {whatsappElements}
    </div>
  );
}

export default App;
