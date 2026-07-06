import React, { useState, useRef, useEffect } from 'react';
import { LuSun, LuMoon, LuLogIn } from 'react-icons/lu';
import rindeplusLogo from '../assets/rindeplus-logo-light.png';
import rindeplusLogoDark from '../assets/rindeplus-logo-dark.png';
import './Header.css';

const Header = ({
  onOpenWhatsApp,
  onLogoClick,
  showMenu = true,
  menuItems,
  theme,
  onToggleTheme,
  onGoToPlatforms,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Close the mobile drawer when tapping/clicking outside the header.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isMenuOpen]);

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
        top: Math.max(0, elementTop - headerOffset - 8),
        behavior: 'smooth'
      });
    }, 50);
  };

  const items = menuItems || [
    { label: 'Volver a inicio', id: 'inicio' },
    { label: 'Características', id: 'caracteristicas' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Plataformas', id: 'plataformas' },
    { label: 'Contacto', id: 'contacto-form', action: scrollToContact },
    { label: 'Clientes', id: 'clientes' },
  ];

  return (
    <header ref={headerRef} className={`header ${isMenuOpen ? 'header--menu-open' : ''}`}>
      <div className="header-content">
        {/* LEFT — quick access (inline nav on desktop / hamburger + drawer on mobile) */}
        <div className="header-left">
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

          {showMenu && (
            <nav className={`header-nav ${isMenuOpen ? 'header-nav--open' : ''}`} id="header-menu">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="menu-item"
                  onClick={() => item.action ? item.action() : scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}

              {/* Theme switch — lives in the drawer on mobile; the header keeps
                  the icon toggle on desktop. */}
              {onToggleTheme && (
                <div className="header-nav__theme">
                  <span className="header-nav__theme-label">
                    {theme === 'dark' ? 'Modo oscuro' : 'Modo claro'}
                  </span>
                  <button
                    type="button"
                    className="rp-theme-switch"
                    role="switch"
                    aria-checked={theme === 'dark'}
                    aria-label="Cambiar entre modo claro y oscuro"
                    onClick={onToggleTheme}
                  >
                    <span className="rp-theme-switch__icon rp-theme-switch__icon--sun">
                      <LuSun />
                    </span>
                    <span className="rp-theme-switch__icon rp-theme-switch__icon--moon">
                      <LuMoon />
                    </span>
                    <span className="rp-theme-switch__knob" />
                  </button>
                </div>
              )}
            </nav>
          )}
        </div>

        {/* CENTER — logo */}
        <img
          src={theme === 'dark' ? rindeplusLogoDark : rindeplusLogo}
          alt="RindePlus Logo"
          className="logo-image"
          onClick={onLogoClick}
          style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
        />

        {/* RIGHT — actions */}
        <div className="header-actions">
          {onToggleTheme && (
            <button
              type="button"
              className="header-theme-toggle"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
              title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            >
              {theme === 'dark' ? <LuSun /> : <LuMoon />}
            </button>
          )}

          {onGoToPlatforms && (
            <button
              type="button"
              className="header-platform-btn"
              onClick={onGoToPlatforms}
            >
              <span>Ingresar</span>
              <LuLogIn />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
