import React from 'react';
import fixedImage from '../assets/fixed1.jpg';
import './HeroWindow.css';

const HeroWindow = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#inicio');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero-window-section">
      <div className="hero-window-container">
        <div className="hero-window-content">
          <h1 className="hero-window-title">
            Llevá al máximo nivel la productividad<br />
            de tu campo con Rinde Plus.
          </h1>
          <button className="hero-window-button" onClick={scrollToContact}>
            CONSULTA AHORA
          </button>
        </div>
      </div>
      <div className="hero-window-background">
        <img src={fixedImage} alt="Campo agrícola" />
      </div>
    </section>
  );
};

export default HeroWindow; 