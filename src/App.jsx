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
import inicioImage from './assets/inicio.jpg';
import div3Image from './assets/div3.jpg';
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
    }
    
    const pathname = window.location.pathname;
    if (pathname === '/vigia' || pathname === '/vigia/') return '/vigia';
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
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      if (pathname === '/vigia' || pathname === '/vigia/') {
        setRoute('/vigia');
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
        <FaWhatsapp size={60} />
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
        <div 
          id="inicio" 
          className={`hero-section ${imageLoaded ? 'loaded' : ''}`}
          style={{ backgroundImage: `url(${inicioImage})` }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Aumenta el rendimiento de tu campo</h1>
                <h2
                  className="hero-gradient-title"
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    background: 'rgb(98, 216, 248)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    margin: 0
                  }}
                >
                  Inteligencia Artificial aplicada a tu producción
                </h2>
              </div>
              <div className="hero-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <PlatformsSection onGoToVigia={navigateToVigia} />
        <div id="caracteristicas">
          <FeatureCards backgroundImage={div3Image} />
        </div>
        <div id="servicios">
          <ServicesSection />
        </div>
        <HeroWindow />
        <TrustedCompanies />
        <div id="contacto">
          <Footer onOpenWhatsApp={() => setShowWhatsappPopup(true)} />
        </div>
      </main>
      {whatsappElements}
    </div>
  );
}

export default App;
