import React from 'react';
import './PlatformButton.css';

const PlatformButton = ({ name, href, logo, onClick }) => {
  return (
    <button
      className="platform-button"
      onClick={() => onClick(href)}
      aria-label={`Acceder a ${name}`}
    >
      {logo && (
        <div className="platform-button-logo-container">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="platform-button-logo"
          />
        </div>
      )}
      <span className="platform-button-text">{name}</span>
    </button>
  );
};

export default PlatformButton;

