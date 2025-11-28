import React from 'react';
import rindeplusLogo from '../assets/rindeplus_logo.svg';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Header.css';

const Header = ({ onOpenWhatsApp }) => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contacto-form');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon">
            <img src={rindeplusLogo} alt="RindePlus Logo" className="logo-image" />
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
        </div>
      </div>
    </header>
  );
};

export default Header; 