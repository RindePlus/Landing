import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import FeatureCards from './components/FeatureCards';
import ServicesSection from './components/ServicesSection';
import HeroWindow from './components/HeroWindow';
import TrustedCompanies from './components/TrustedCompanies';
import Footer from './components/Footer';
import inicioImage from './assets/inicio.jpg';
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import './App.css';

function App() {
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);
  const popupRef = useRef(null);

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

  return (
    <div className="App">
      <Header onOpenWhatsApp={() => setShowWhatsappPopup(true)} />
      <main className="main-content">
        <div id="inicio" className="hero-section">
          <div 
            className="hero-background" 
            style={{ backgroundImage: `url(${inicioImage})` }}
          ></div>
          <div className="hero-overlay">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Aumenta el rendimiento de tu campo</h1>
                <p className="hero-subtitle">
                  Inteligencia Artificial aplicada a tu producción
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="caracteristicas">
          <FeatureCards />
        </div>
        <div id="contacto-form" className="contact-form-section">
          <ContactForm />
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
      {/* Botón flotante de WhatsApp */}
      <button
        className="whatsapp-float"
        onClick={() => setShowWhatsappPopup((v) => !v)}
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={60} />
      </button>
      {/* Popup personalizado WhatsApp */}
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
    </div>
  );
}

export default App;
