import React from 'react';
import PlatformButton from './PlatformButton';
import './PlatformsSection.css';
import logoAapresid from '../assets/botones/L-Aapresid.png';
import logoConci from '../assets/botones/L-Conci.png';
import logoHuella from '../assets/botones/L-Huella.png';
import logoHalcon from '../assets/botones/l-Halcon.png';
import logoKimzza from '../assets/botones/L-Kimzza.png';
import logoPronosticos from '../assets/botones/L-Pronosticos.png';
import logoVigia from '../assets/botones/L-Vigia.png';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const platforms = [
  { name: 'Vig IA Biostress', href: 'https://vigiabioestress.ddns.net/login/', logo: logoVigia, internal: true, internalType: 'vigia' },
  { name: 'Análisis y brechas', href: 'https://pronosticos.rindeplus.com/login/rindeplus', logo: logoPronosticos, internal: true, internalType: 'pronosticos' },
  { name: 'Huella Hídrica', href: 'https://rphuellahidrica.ddns.net/login/?next=/', logo: logoHuella },
  { name: 'Aapresid', href: 'https://pronosticos.rindeplus.com/login/aapresid', logo: logoAapresid },
  { name: 'Conci Riego', href: 'https://conciriegopredictivo.ddns.net/login/?next=/', logo: logoConci },
  { name: 'Halcón Monitoreo', href: 'https://halconmonitoreos.ddns.net/login/?next=/', logo: logoHalcon },
  { name: 'Kimzza', href: 'https://kimzza.ddns.net/login/?next=/', logo: logoKimzza },
];

const PlatformsSection = ({ onGoToVigia, onGoToPronosticos, backgroundImage }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const handlePlatformClick = (platform) => {
    if (platform.internal) {
      if (platform.internalType === 'vigia' && onGoToVigia) {
        onGoToVigia();
        return;
      }
      if (platform.internalType === 'pronosticos' && onGoToPronosticos) {
        onGoToPronosticos();
        return;
      }
    }
    window.open(platform.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      className={`platforms-section${backgroundImage ? ' platforms-section--with-bg' : ''}`}
      id="plataformas"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
      }}
    >
      <div className="platforms-container" ref={ref}>
        <h2 className={`platforms-title fade-in-up ${isVisible ? 'visible' : ''}`}>Nuestras Plataformas</h2>
        <div className={`platforms-scroll-wrapper fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          <div className="platforms-scroll-container">
            <div className="platforms-scroll">
              {platforms.map((platform, index) => (
                <PlatformButton
                  key={index}
                  platform={platform}
                  onClick={handlePlatformClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
