import { useState, useRef, useEffect, useMemo } from 'react';
import { PiSun, PiMoon, PiUser, PiCaretDown, PiCheck, PiWhatsappLogo } from 'react-icons/pi';
import rindeplusLogo from '../assets/rindeplus-logo-light.png';
import rindeplusLogoDark from '../assets/rindeplus-logo-dark.png';
import { LOGIN_URL } from '../data/links';
import { whatsappUrl } from '../data/social';
import { urlDe } from '../data/imagen';
import { useRpTheme } from '../hooks/useRpTheme';
import { conIdioma, useI18n } from '../i18n/I18nContext';
import { HOME_PATH, LOCALES, LOCALE_LABELS } from '../i18n/config';
import './Header.css';

// Header con la estética de la landing de VigIA: menú a la izquierda, logo
// al centro y acciones a la derecha. Arriba de todo es transparente; al
// bajar toma un fondo translúcido con una línea fina, se oculta al seguir
// bajando y vuelve al subir un tramo sostenido (no con un toque sin querer).
const HIDE_DISTANCE = 120;
const SHOW_DISTANCE = 120;
const TOP_ZONE = 160;

// Selector de idioma: cada opción es un enlace a la home en el otro idioma.
// Antes de salir guarda la sección visible y cuánto se había leído de ella;
// BaseLayout la recupera en la página nueva, así el cambio no lleva arriba
// de todo.
const guardarPosicion = (destino) => {
  const secciones = [...document.querySelectorAll('section[id], footer[id]')];
  let actual = null;
  for (const el of secciones) {
    if (el.getBoundingClientRect().top <= 0) actual = el;
  }
  try {
    if (!actual) {
      sessionStorage.removeItem('rp-idioma-scroll');
      return;
    }
    const r = actual.getBoundingClientRect();
    const proporcion = r.height ? Math.min(1, -r.top / r.height) : 0;
    sessionStorage.setItem('rp-idioma-scroll', JSON.stringify({ destino, id: actual.id, proporcion }));
  } catch {
    // Sin sessionStorage (modo privado estricto): se cambia igual, arriba.
  }
};

const Header = () => {
  const { locale, dict } = useI18n();
  const t = dict.header;
  const { theme, toggleTheme } = useRpTheme();
  const menuItems = useMemo(
    () => [
      { label: t.nav.home, id: 'top' },
      { label: t.nav.impact, id: 'impacto' },
      { label: t.nav.campaign, id: 'funcionalidades' },
      { label: t.nav.why, id: 'beneficios' },
    ],
    [t],
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Sobre las bandas oscuras ([data-fondo-oscuro], el footer) el fondo
  // translúcido pasa a casi opaco, para que se lean logo y menú.
  const [sobreOscuro, setSobreOscuro] = useState(false);
  // Sección en la que está parado el usuario: se marca debajo del enlace.
  const [activeId, setActiveId] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const headerRef = useRef(null);
  const langRef = useRef(null);

  // Cierra el drawer de celular al tocar fuera del header.
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

  // Cierra el selector de idioma al tocar fuera o con Escape.
  useEffect(() => {
    if (!isLangOpen) return undefined;
    const handlePointerDown = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) setIsLangOpen(false);
    };
    const handleKey = (event) => {
      if (event.key === 'Escape') setIsLangOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isLangOpen]);

  // Ocultar al bajar / mostrar al subir, fondo al bajar, sección activa y
  // alto del header (--alto-header, para scroll-margin-top en index.css).
  // Tanto para ocultarse como para volver exige un recorrido sostenido en
  // esa dirección: un scroll corto sin querer no lo mueve.
  useEffect(() => {
    let lastY = window.scrollY;
    let anchorY = lastY; // donde empezó el tramo actual en una misma dirección
    let direction = 0;
    let ticking = false;

    const secciones = menuItems
      .map((item) => ({ id: item.id, el: document.getElementById(item.id) }))
      .filter((s) => s.el);

    // Activa: la sección del menú que cruza el 35 % de la ventana (si se
    // superponen, la de más abajo, que es la que va entrando). En las que no
    // están en el menú (contacto, app, footer) no se marca ninguna.
    const seccionActiva = () => {
      const linea = window.innerHeight * 0.35;
      const activa = secciones.findLast((s) => {
        const r = s.el.getBoundingClientRect();
        return r.top <= linea && r.bottom > linea;
      });
      return activa ? activa.id : null;
    };

    const update = () => {
      const y = window.scrollY;
      setIsScrolled(y > 8);
      const alto = headerRef.current?.offsetHeight ?? 80;
      document.documentElement.style.setProperty('--alto-header', `${alto}px`);
      setSobreOscuro(
        [...document.querySelectorAll('[data-fondo-oscuro]')].some((el) => {
          const r = el.getBoundingClientRect();
          return r.top < alto && r.bottom > 0;
        }),
      );
      setActiveId(seccionActiva());

      // Scroll que hace la página sola (data-scroll-quieto en <html>, por
      // ejemplo Impacto al plegar el título): el header no se muestra ni se
      // oculta; el tramo se mide de nuevo desde donde termina.
      if (document.documentElement.hasAttribute('data-scroll-quieto')) {
        direction = 0;
        anchorY = y;
        lastY = y;
        ticking = false;
        return;
      }

      const nextDirection = Math.sign(y - lastY);
      if (nextDirection !== 0 && nextDirection !== direction) {
        direction = nextDirection;
        anchorY = lastY;
      }
      const travelled = Math.abs(y - anchorY);
      if (y < TOP_ZONE) {
        setIsHidden(false);
      } else if (direction > 0 && travelled >= HIDE_DISTANCE) {
        setIsHidden(true);
      } else if (direction < 0 && travelled >= SHOW_DISTANCE) {
        setIsHidden(false);
      }
      lastY = y;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    update(); // estado correcto si la página carga ya scrolleada
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [menuItems]);

  return (
    <header
      ref={headerRef}
      className={`header ${isMenuOpen ? 'header--menu-open' : ''} ${isHidden && !isMenuOpen ? 'header--hidden' : ''} ${isScrolled ? 'header--scrolled' : ''} ${sobreOscuro ? 'header--sobre-oscuro' : ''}`}
    >
      <div className="header-content">
        <a href="#top" className="header-logo" aria-label={t.logoAlt} onClick={() => setIsMenuOpen(false)}>
          {/* Las dos versiones del logo: el CSS muestra la del tema activo
              (data-rp-theme), así no parpadea antes de hidratar. */}
          <img src={urlDe(rindeplusLogo)} alt={t.logoAlt} className="logo-image logo-image--light" />
          <img src={urlDe(rindeplusLogoDark)} alt="" aria-hidden="true" className="logo-image logo-image--dark" />
        </a>

        <nav className={`header-nav ${isMenuOpen ? 'header-nav--open' : ''}`} id="header-menu">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`menu-item ${item.id === activeId ? 'menu-item--active' : ''}`}
              aria-current={item.id === activeId ? 'location' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* En celular el tema va en el drawer, como switch. */}
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
              onClick={toggleTheme}
            >
              <span className="rp-theme-switch__icon rp-theme-switch__icon--sun">
                <PiSun />
              </span>
              <span className="rp-theme-switch__icon rp-theme-switch__icon--moon">
                <PiMoon />
              </span>
              <span className="rp-theme-switch__knob" />
            </button>
          </div>

          {/* En celular, Ingresar y WhatsApp van al pie del menú, con su
              palabra (el botón flotante de WhatsApp se oculta en celular). */}
          <a className="header-nav__login" href={LOGIN_URL} onClick={() => setIsMenuOpen(false)}>
            <PiUser aria-hidden="true" />
            <span>{t.loginLong}</span>
          </a>
          <a
            className="header-nav__whatsapp"
            href={whatsappUrl(dict.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <PiWhatsappLogo aria-hidden="true" />
            <span>{dict.whatsapp.cta}</span>
          </a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="header-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.toLight : t.toDark}
            title={theme === 'dark' ? t.themeLight : t.themeDark}
          >
            {theme === 'dark' ? <PiSun /> : <PiMoon />}
          </button>

          {/* Selector de idioma: "ES" con una flecha chica; abre un menú
              debajo. Lleva a la home en el otro idioma. */}
          <div className="header-lang" ref={langRef}>
            <button
              type="button"
              className="header-lang__btn"
              aria-haspopup="menu"
              aria-expanded={isLangOpen}
              aria-label={t.language}
              onClick={() => setIsLangOpen((open) => !open)}
            >
              <span>{locale.toUpperCase()}</span>
              <PiCaretDown className="header-lang__caret" aria-hidden="true" />
            </button>
            <ul className={`header-lang__menu ${isLangOpen ? 'header-lang__menu--open' : ''}`} role="menu">
              {LOCALES.map((code) => (
                <li key={code} role="none">
                  <a
                    href={HOME_PATH[code]}
                    hrefLang={code}
                    lang={code}
                    role="menuitemradio"
                    aria-checked={locale === code}
                    className="header-lang__option"
                    tabIndex={isLangOpen ? 0 : -1}
                    onClick={(event) => {
                      setIsLangOpen(false);
                      if (code === locale) {
                        event.preventDefault();
                        return;
                      }
                      guardarPosicion(HOME_PATH[code]);
                    }}
                  >
                    <span className="header-lang__code">{code.toUpperCase()}</span>
                    <span>{LOCALE_LABELS[code]}</span>
                    {locale === code && <PiCheck className="header-lang__check" aria-hidden="true" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ingresar: sólo el ícono de una persona, como en VigIA. */}
          <a className="header-icon-btn" href={LOGIN_URL} aria-label={t.loginLong} title={t.login}>
            <PiUser aria-hidden="true" />
          </a>
        </div>

        {/* Fuera de .header-actions: en celular va a la izquierda del logo
            centrado (ver Header.css). */}
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
      </div>
    </header>
  );
};

export default conIdioma(Header);
