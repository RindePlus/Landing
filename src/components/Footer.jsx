import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ onOpenWhatsApp }) => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contacto-form');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openGoogleMaps = () => {
    const address = "Concejal Lorusso 762, Alta Gracia, Córdoba, Argentina";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-title">Contacto</h3>
            <div className="contact-info">
              <div className="contact-item" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
                <MdEmail className="contact-icon" />
                <span>info@rindeplus.com</span>
              </div>
              <div className="contact-item" onClick={onOpenWhatsApp} style={{ cursor: 'pointer' }}>
                <FaWhatsapp className="contact-icon" />
                <span>+54 9 3564 59-3446</span>
              </div>
              <div className="contact-item" onClick={openGoogleMaps} style={{ cursor: 'pointer' }}>
                <MdLocationOn className="contact-icon" />
                <span>Concejal Lorusso 762 1 piso, Alta Gracia</span>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              {/*  <a href="/terminos-y-condiciones" className="footer-link">
                Términos y Condiciones
              </a> */}  
              {/* <a href="/politica-de-privacidad" className="footer-link">
                Política de Privacidad
              </a> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Rinde Plus. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 