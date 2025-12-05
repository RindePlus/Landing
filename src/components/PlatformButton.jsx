import React, { useState } from 'react';
import './PlatformButton.css';

const PlatformButton = ({ platform, onClick, name, href, logo }) => {
  const item = platform || { name, href, logo };
  const displayName = item?.name || 'Plataforma';
  const [imageError, setImageError] = useState(false);

  const isVigia = displayName.toLowerCase().includes('vigia') || displayName.toLowerCase().includes('biostress');
  const isPronosticos = displayName.toLowerCase().includes('pronóstico') || displayName.toLowerCase().includes('pronosticos');

  return (
    <div className="platform-button-wrapper">
      <button
        className="platform-button"
        onClick={() => onClick(item)}
        aria-label={`Acceder a ${displayName}`}
        title={displayName}
      >
        {item?.logo && !imageError ? (
          <div className="platform-button-logo-container">
            <img
              src={item.logo}
              alt={`${displayName} logo`}
              className="platform-button-logo"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="platform-button-logo-container platform-button-logo-fallback">
            <span className="platform-button-initials">
              {displayName.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        <span className="platform-button-text">{displayName}</span>
        {isVigia && (
          <div className="platform-badge-novedades">
            Novedades
          </div>
        )}
        {isPronosticos && (
          <div className="platform-badge-cuotas">
            3 cuotas sin interés
          </div>
        )}
      </button>
    </div>
  );
};

export default PlatformButton;
