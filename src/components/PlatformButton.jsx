import React from 'react';
import './PlatformButton.css';

const PlatformButton = ({ name, href, onClick }) => {
  return (
    <button
      className="platform-button"
      onClick={() => onClick(href)}
      aria-label={`Acceder a ${name}`}
    >
      <span className="platform-button-text">{name}</span>
    </button>
  );
};

export default PlatformButton;

