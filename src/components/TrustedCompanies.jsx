import React, { useEffect, useRef } from 'react';
import altinaLogo from '../assets/related companies/altina.png';
import chiaraviglioLogo from '../assets/related companies/chiaraviglio.png';
import promeLogo from '../assets/related companies/prome.png';
import muniraLogo from '../assets/related companies/munira.png';
import chiaratechLogo from '../assets/related companies/chiaratech.png';
import aaasLogo from '../assets/related companies/aaas.png';
import kimzzaLogo from '../assets/related companies/kimzza.png';
import conciLogo from '../assets/related companies/conci.png';
import aapresidLogo from '../assets/related companies/aapresid.png';
import adjLogo from '../assets/related companies/adj.png';
import halconLogo from '../assets/related companies/halcon.png';
import bioredLogo from '../assets/related companies/biored.png';
import agroconsultorLogo from '../assets/related companies/agroconsultor.png';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './TrustedCompanies.css';

const TrustedCompanies = () => {
  const carouselRef = useRef(null);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  // `mono: true` → single-color artwork with no brand-color version; on
  // hover it goes to full black (light mode) / full white (dark mode)
  // instead of revealing colors.
  // `h` → rendered height in px. Assets are trimmed to their artwork, so
  // these values equalise the *visual area* of each logo (taller for
  // stacked/square marks, shorter for wide wordmarks).
  const companies = [
    { id: 0, logo: altinaLogo, name: 'Altina', h: 41 },
    { id: 1, logo: chiaraviglioLogo, name: 'Chiaraviglio Hnos', h: 46 },
    { id: 2, logo: promeLogo, name: 'Prome AgroNegocios', h: 54 },
    { id: 3, logo: muniraLogo, name: 'Munira Foods', mono: true, h: 64 },
    { id: 4, logo: chiaratechLogo, name: 'Chiara Tech', h: 57 },
    { id: 5, logo: aaasLogo, name: 'Agro Assistance Service', h: 47 },
    { id: 6, logo: kimzzaLogo, name: 'Kimzza', h: 42 },
    { id: 7, logo: conciLogo, name: 'Conci Riego', mono: true, h: 45 },
    { id: 8, logo: aapresidLogo, name: 'Aapresid', h: 40 },
    { id: 9, logo: adjLogo, name: 'ADJ', h: 50 },
    { id: 10, logo: halconLogo, name: 'Halcón', h: 50 },
    { id: 11, logo: bioredLogo, name: 'BioRed', h: 66 },
    { id: 12, logo: agroconsultorLogo, name: 'Agroconsultor', h: 40 },
  ];

  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let position = 0;
    const speed = 60;
    let isDragging = false;
    let startX = 0;
    let dragOffset = 0;
    let lastTime = performance.now();

    const clampPosition = () => {
      const half = carousel.scrollWidth / 2;
      if (position <= -half) position += half;
      if (position > 0) position -= half;
    };

    const animate = (now) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      if (!isDragging) {
        position -= speed * dt;
        clampPosition();
        carousel.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

    const onStart = (e) => {
      isDragging = true;
      startX = getX(e);
      dragOffset = position;
      carousel.style.cursor = 'grabbing';
    };

    const onMove = (e) => {
      if (!isDragging) return;
      const delta = getX(e) - startX;
      position = dragOffset + delta;
      clampPosition();
      carousel.style.transform = `translateX(${position}px)`;
    };

    const onEnd = () => {
      isDragging = false;
      carousel.style.cursor = 'grab';
    };

    carousel.style.cursor = 'grab';

    carousel.addEventListener('mousedown', onStart);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    carousel.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener('mousedown', onStart);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      carousel.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, []);

  return (
    <section className="trusted-companies-section" ref={ref}>
      <div className={`trusted-companies-container fade-in-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="trusted-companies-title">Confían en nosotros</h2>

        <div className="carousel-wrapper">
          <div className="carousel-track" ref={carouselRef}>
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className={`company-logo ${company.mono ? 'company-logo--mono' : ''}`}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  style={company.h ? { height: `${company.h}px` } : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies; 
