import React from 'react';
import rindeplusLogo from '../assets/rindeplus_logo.svg';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Header.css';

const Header = () => {
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
              <a href="#" className="social-icon">
                <FaFacebook />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
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