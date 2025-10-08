import React, { useState, useEffect, useRef } from 'react';
import rindeplusLogo from '../assets/rindeplus_logo.svg';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './Header.css';

const Header = ({ onOpenWhatsApp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú al hacer click fuera o scroll
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      setIsMenuOpen(false);
    };
    
    document.addEventListener('mousedown', handleClick);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('mousedown', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contacto-form');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
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
    { name: 'Aapresid', href: 'https://aapresid.rindeplus.com/login?org=aapresid' },
    { name: 'Conci Riego', href: 'https://conciriegopredictivo.ddns.net/login/?next=/' },
    { name: 'Huella Hídrica', href: 'https://rphuellahidrica.ddns.net/login/?next=/' },
    { name: 'Halcón Monitoreo', href: 'https://halconmonitoreos.ddns.net/login/?next=/' },
    { name: 'Pronósticos', href: 'https://aapresid.rindeplus.com/login?org=rindeplus' },
    { name: 'Kimzza', href: 'https://kimzza.ddns.net/login/?next=/' },
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

        {/* Right Section: Contact Box + Plataformas */}
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
          <div className="dropdown-container" ref={dropdownRef}>
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
                  • {item.name}
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