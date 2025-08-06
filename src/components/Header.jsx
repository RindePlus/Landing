import React, { useState } from 'react';
import rindeplusLogo from '../assets/rindeplus_logo.svg';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (href) => {
    // Si es un enlace externo (no empieza con #), abrir en nueva pestaña
    if (!href.startsWith('#')) {
      window.open(href, '_blank');
      setIsMenuOpen(false);
      return;
    }
    
    // Si es un enlace interno, hacer scroll suave
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Huella Hídrica', href: 'https://rphuellahidrica.ddns.net/login/?next=/' },
    { name: 'CONCI RIEGO', href: 'https://conciriegopredictivo.ddns.net/login/?next=/' },
    { name: 'Aapresid', href: 'http://82.180.136.56' },
  ];

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon">
            <img src={rindeplusLogo} alt="RindePlus Logo" className="logo-image" />
          </div>
        </div>

        {/* Contact and Navigation Section */}
        <div className="right-section">
          {/* Contact Info Box */}
          <div className="contact-box">
            <div className="contact-info">
              <span className="email">inforindeplus@gmail.com</span>
            </div>
            <div className="contact-info">  
              <span className="phone">+54 9 3564 59-3446</span>
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

          {/* Dropdown Menu */}
          <div className="dropdown-container">
            <button className="dropdown-toggle" onClick={toggleMenu}>
              <span className="dropdown-text">Plataformas</span>
              <FaChevronDown className={`dropdown-arrow ${isMenuOpen ? 'rotated' : ''}`} />
            </button>
            
            <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
              {menuItems.map((item, index) => (
                <button 
                  key={index} 
                  className="dropdown-item"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 