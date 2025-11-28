import React from 'react';
import PlatformButton from './PlatformButton';
import './PlatformsSection.css';

const platforms = [
  { name: 'Aapresid', href: 'https://pronosticos.rindeplus.com/login?org=aapresid' },
  { name: 'Conci Riego', href: 'https://conciriegopredictivo.ddns.net/login/?next=/' },
  { name: 'Huella Hídrica', href: 'https://rphuellahidrica.ddns.net/login/?next=/' },
  { name: 'Halcón Monitoreo', href: 'https://halconmonitoreos.ddns.net/login/?next=/' },
  { name: 'Kimzza', href: 'https://kimzza.ddns.net/login/?next=/' },
  { name: 'Pronósticos', href: 'https://pronosticos.rindeplus.com/login?org=rindeplus' },
  { name: 'VigIA Biostress', href: 'https://vigiabioestress.ddns.net/login/' },
];

const PlatformsSection = () => {
  const handlePlatformClick = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer');
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
                  name={platform.name}
                  href={platform.href}
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

