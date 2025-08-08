import React, { useEffect, useRef } from 'react';
import logo0 from '../assets/related companies/logo-0.png';
import logo1 from '../assets/related companies/logo-1.png';
import logo2 from '../assets/related companies/logo-2.png';
import logo3 from '../assets/related companies/logo-3.png';
import logo4 from '../assets/related companies/logo-4.png';
import logo5 from '../assets/related companies/logo-5.png';
import logo6 from '../assets/related companies/logo-6.png';
import conciLogo from '../assets/Conci.jpg';
import aapresidLogo from '../assets/aapresid.png';
import adjLogo from '../assets/adj.jpeg';
import './TrustedCompanies.css';

const TrustedCompanies = () => {
  const carouselRef = useRef(null);
  
  const companies = [
    { id: 0, logo: logo0, name: 'Empresa 1' },
    { id: 1, logo: logo1, name: 'Empresa 2' },
    { id: 2, logo: logo2, name: 'Empresa 3' },
    { id: 3, logo: logo3, name: 'Empresa 4' },
    { id: 4, logo: logo4, name: 'Empresa 5' },
    { id: 5, logo: logo5, name: 'Empresa 6' },
    { id: 6, logo: logo6, name: 'Empresa 7' },
    { id: 7, logo: conciLogo, name: 'Conci' },
    { id: 8, logo: aapresidLogo, name: 'Aapresid' },
    { id: 9, logo: adjLogo, name: 'Adj' },
  ];

  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let position = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      position -= speed;
      
      // Reset position when first set of logos is out of view
      if (position <= -carousel.scrollWidth / 2) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="trusted-companies-section">
      <div className="trusted-companies-container">
        <h2 className="trusted-companies-title">Confían en nosotros</h2>
        
        <div className="carousel-wrapper">
          <div className="carousel-track" ref={carouselRef}>
            {duplicatedCompanies.map((company, index) => (
              <div key={`${company.id}-${index}`} className="company-logo">
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies; 