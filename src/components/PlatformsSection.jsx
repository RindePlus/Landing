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

const platforms = [
  { name: 'Vig IA Biostress', href: 'https://vigiabioestress.ddns.net/login/', logo: logoVigia, internal: true },
  { name: 'Pronósticos', href: 'https://pronosticos.rindeplus.com/login?org=rindeplus', logo: logoPronosticos },
  { name: 'Huella Hídrica', href: 'https://rphuellahidrica.ddns.net/login/?next=/', logo: logoHuella },
  { name: 'Aapresid', href: 'https://pronosticos.rindeplus.com/login?org=aapresid', logo: logoAapresid },
  { name: 'Conci Riego', href: 'https://conciriegopredictivo.ddns.net/login/?next=/', logo: logoConci },
  { name: 'Halcón Monitoreo', href: 'https://halconmonitoreos.ddns.net/login/?next=/', logo: logoHalcon },
  { name: 'Kimzza', href: 'https://kimzza.ddns.net/login/?next=/', logo: logoKimzza },
];

const PlatformsSection = ({ onGoToVigia }) => {
  const handlePlatformClick = (platform) => {
    if (platform.internal && onGoToVigia) {
      onGoToVigia();
      return;
    }
    window.open(platform.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="platforms-section" id="plataformas">
      <div className="platforms-container">
        <h2 className="platforms-title">Nuestras Plataformas</h2>
        <div className="platforms-scroll-wrapper">
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
