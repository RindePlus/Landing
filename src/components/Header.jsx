import React, { useState, useRef, useEffect } from 'react';
import { LuSun, LuMoon, LuLogIn } from 'react-icons/lu';
import rindeplusLogo from '../assets/rindeplus-logo-light.png';
import rindeplusLogoDark from '../assets/rindeplus-logo-dark.png';
import { LOGIN_URL } from '../data/links';
import './Header.css';

const Header = ({
  onLogoClick,
  menuItems = [],
  theme,
  onToggleTheme,
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

  return (
    <header
      ref={headerRef}
      className={`header ${isMenuOpen ? 'header--menu-open' : ''}`}
    >
      <div className="header-content">
        {/* LEFT — quick access (inline nav on desktop / hamburger + drawer on mobile) */}
        <div className="header-left">
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

          <nav className={`header-nav ${isMenuOpen ? 'header-nav--open' : ''}`} id="header-menu">
            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="menu-item"
                onClick={() => scrollToSection(item.id)}
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

            {/* Login inside the drawer too (mobile only): on narrow screens the
                header button collapses to its icon. */}
            <a className="header-nav__login" href={LOGIN_URL}>
              <span>Ingresar a la plataforma</span>
              <LuLogIn />
            </a>
          </nav>
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

          <a className="header-platform-btn" href={LOGIN_URL} aria-label="Ingresar a la plataforma">
            <span>Ingresar</span>
            <LuLogIn />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
