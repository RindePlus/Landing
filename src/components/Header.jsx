import React, { useState, useRef, useEffect } from 'react';
import { LuSun, LuMoon, LuLogIn } from 'react-icons/lu';
import rindeplusLogo from '../assets/rindeplus-logo-light.png';
import rindeplusLogoDark from '../assets/rindeplus-logo-dark.png';
import { LOGIN_URL } from '../data/links';
import { useI18n } from '../i18n/I18nContext';
import { LOCALES, LOCALE_LABELS } from '../i18n/config';
import './Header.css';

const Header = ({
  onLogoClick,
  menuItems = [],
  theme,
  onToggleTheme,
}) => {
  const { locale, setLocale, dict } = useI18n();
  const t = dict.header;
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

  // ES / EN / PT — same control in the header (desktop) and the drawer (mobile).
  const languageSwitch = (extraClass) => (
    <div className={`rp-lang ${extraClass}`} role="group" aria-label={t.language}>
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          className="rp-lang__btn"
          lang={code}
          aria-pressed={code === locale}
          aria-label={LOCALE_LABELS[code]}
          title={LOCALE_LABELS[code]}
          onClick={() => setLocale(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );

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
            aria-label={t.openMenu}
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
                  {theme === 'dark' ? t.themeDark : t.themeLight}
                </span>
                <button
                  type="button"
                  className="rp-theme-switch"
                  role="switch"
                  aria-checked={theme === 'dark'}
                  aria-label={t.themeSwitchAria}
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

            <div className="header-nav__lang">
              <span className="header-nav__theme-label">{t.language}</span>
              {languageSwitch('rp-lang--drawer')}
            </div>

            {/* Login inside the drawer too (mobile only): on narrow screens the
                header button collapses to its icon. */}
            <a className="header-nav__login" href={LOGIN_URL}>
              <span>{t.loginLong}</span>
              <LuLogIn />
            </a>
          </nav>
        </div>

        {/* CENTER — logo */}
        <img
          src={theme === 'dark' ? rindeplusLogoDark : rindeplusLogo}
          alt={t.logoAlt}
          className="logo-image"
          onClick={onLogoClick}
          style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
        />

        {/* RIGHT — actions */}
        <div className="header-actions">
          {languageSwitch('rp-lang--header')}

          {onToggleTheme && (
            <button
              type="button"
              className="header-theme-toggle"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? t.toLight : t.toDark}
              title={theme === 'dark' ? t.themeLight : t.themeDark}
            >
              {theme === 'dark' ? <LuSun /> : <LuMoon />}
            </button>
          )}

          <a className="header-platform-btn" href={LOGIN_URL} aria-label={t.loginLong}>
            <span>{t.login}</span>
            <LuLogIn />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
