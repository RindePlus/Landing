import React, { useState } from 'react';
import rindeplusLogo from '../assets/Logo.png';
import './Header.css';

const Header = ({ onOpenWhatsApp, onLogoClick, showMenu = true, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contacto-form');
    if (!contactSection) return;
    setIsMenuOpen(false);
    setTimeout(() => {
      const header = document.querySelector('.header');
      const headerOffset = header ? header.offsetHeight : 0;
      const elementTop = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementTop - headerOffset + 250),
        behavior: 'smooth'
      });
    }, 50);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(`#${id}`);
    if (!section) return;
    setIsMenuOpen(false);
    setTimeout(() => {
      const header = document.querySelector('.header');
      const headerOffset = header ? header.offsetHeight : 0;
      const elementTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementTop - headerOffset + 250),
        behavior: 'smooth'
      });
    }, 50);
  };

  return (
    <header className={`header ${isMenuOpen ? 'header--menu-open' : ''}`}>
      <div className="header-content">
        <img
          src={rindeplusLogo}
          alt="RindePlus Logo"
          className="logo-image"
          onClick={onLogoClick}
          style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
        />

        {showMenu && (
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
        )}
      </div>

      {showMenu && (
        <nav className={`header-nav ${isMenuOpen ? 'header-nav--open' : ''}`} id="header-menu">
          {(menuItems || [
            { label: 'Inicio', id: 'inicio' },
            { label: 'Características', id: 'caracteristicas' },
            { label: 'Servicios', id: 'servicios' },
            { label: 'Plataformas', id: 'plataformas' },
            { label: 'Contacto', id: 'contacto-form', action: scrollToContact },
            { label: 'Clientes', id: 'clientes' },
          ]).map((item) => (
            <button
              key={item.id}
              type="button"
              className="menu-item"
              onClick={() => item.action ? item.action() : scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header; 
