import React, { useState } from 'react';
import rindeplusLogo from '../assets/Mesa de trabajo 2 copia.png';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Header.css';

const Header = ({ onOpenWhatsApp, onLogoClick, showMenu = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contacto-form');
    if (!contactSection) return;
    const header = document.querySelector('.header');
    const headerOffset = header ? header.offsetHeight : 0;
    const extraOffset = 290;
    const elementTop = contactSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: Math.max(0, elementTop - headerOffset - extraOffset),
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(`#${id}`);
    if (!section) return;
    const header = document.querySelector('.header');
    const headerOffset = header ? header.offsetHeight : 0;
    const elementTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: Math.max(0, elementTop - headerOffset - 10),
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon">
            <img 
              src={rindeplusLogo} 
              alt="RindePlus Logo" 
              className="logo-image"
              onClick={onLogoClick}
              style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
            />
          </div>
        </div>

        {/* Right Section: Contact Box */}
        <div className="right-group">
          <div className="contact-box">
            <div className="contact-info">
              <span className="email" onClick={scrollToContact} style={{ cursor: 'pointer' }}>inforindeplus@gmail.com</span>
            </div>
            <div className="contact-info">  
              <span className="phone" onClick={onOpenWhatsApp} style={{ cursor: 'pointer' }}>+54 9 3564 59-3446</span>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61556286195562" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/rindeplus?igsh=MXUycWFiNXplcDN5bw==" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/rinde-plus/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
          </div>
          {showMenu && (
            <div className="menu-group">
              <button
                type="button"
                className={`hamburger-button ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-label="Abrir menú"
                aria-expanded={isMenuOpen}
                aria-controls="header-menu"
              >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </button>
              {isMenuOpen && (
                <div className="hamburger-menu" id="header-menu">
                  <button type="button" className="menu-item" onClick={() => scrollToSection('inicio')}>
                    Inicio
                  </button>
                  <button type="button" className="menu-item" onClick={() => scrollToSection('caracteristicas')}>
                    Características
                  </button>
                  <button type="button" className="menu-item" onClick={() => scrollToSection('servicios')}>
                    Servicios
                  </button>
                  <button type="button" className="menu-item" onClick={() => scrollToSection('plataformas')}>
                    Plataformas
                  </button>
                  <button type="button" className="menu-item" onClick={scrollToContact}>
                    Contacto
                  </button>
                  <button type="button" className="menu-item" onClick={() => scrollToSection('clientes')}>
                    Clientes
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 
