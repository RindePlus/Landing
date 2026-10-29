import { useEffect, useRef, useState } from 'react';
import { FaAndroid, FaApple, FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { PiArrowDown } from 'react-icons/pi';
import Reveal from './Reveal';
import LoteMap from './LoteMap';
import { whatsappUrl } from '../data/social';
import { urlDe } from '../data/imagen';
import { conIdioma, useI18n } from '../i18n/I18nContext';
import pampaAvion from '../assets/campo/pampa-avion.webp';
import pampaAvionSm from '../assets/campo/pampa-avion-1100.webp';
import sojaAtardecer from '../assets/campo/soja-atardecer.webp';
import sojaAtardecerSm from '../assets/campo/soja-atardecer-1100.webp';
import girasolTormenta from '../assets/campo/girasol-tormenta.webp';
import girasolTormentaSm from '../assets/campo/girasol-tormenta-1100.webp';
import cosechaSoja from '../assets/campo/cosecha-soja.webp';
import cosechaSojaSm from '../assets/campo/cosecha-soja-1100.webp';
import './HomePage.css';

/* ---------------- Data ---------------- */

// Fotos del slider "Por qué Rinde Plus", en el orden de dict.benefits.items.
const BENEFIT_PHOTOS = [
  { id: 'lote', src: pampaAvion, srcSm: pampaAvionSm, w: 1100, pos: '50% 50%' },
  { id: 'detalle', src: sojaAtardecer, srcSm: sojaAtardecerSm, w: 1100, pos: '50% 60%' },
  { id: 'cuando', src: girasolTormenta, srcSm: girasolTormentaSm, w: 1100, pos: '50% 70%' },
  { id: 'independiente', src: cosechaSoja, srcSm: cosechaSojaSm, w: 1100, pos: '60% 55%' },
];

/* ---------------- Subcomponents ---------------- */

// Contenido del hero: título, bajada, botones y el lote resaltado. La
// sección (fondo y carrusel de clientes) la arma HomeView.astro.
const HeroSection = () => {
  const { dict } = useI18n();
  const t = dict.hero;
  return (
    <div className="rp-home__hero-inner">
      <div className="rp-home__hero-text">
        <h1 className="rp-home__hero-title rp-fade-in rp-d-1">
          {t.titleA}
          <span className="rp-home__hero-title-accent">{t.titleB}</span>
        </h1>

        <p className="rp-home__hero-subtitle rp-fade-in rp-d-3">{t.subtitle}</p>

        <div className="rp-home__hero-ctas rp-fade-in rp-d-4">
          <a
            href={whatsappUrl(dict.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rp-home__hero-btn rp-home__hero-btn--primary"
          >
            <FaWhatsapp aria-hidden="true" />
            {t.ctaTalk}
          </a>
          <a href="#funcionalidades" className="rp-home__hero-btn rp-home__hero-btn--ghost">
            {t.ctaCampaign}
            <PiArrowDown aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="rp-home__hero-visual rp-fade-in rp-d-3">
        <LoteMap aria={t.mapAria} avisos={t.avisos} />
      </div>
    </div>
  );
};

// "Por qué Rinde Plus": un punto por vez, cada uno sobre su foto de campo
// (Wikimedia Commons, CC BY-SA; créditos al pie del footer). Avanza solo
// con la sección en pantalla y la pestaña visible; con reduced-motion no
// avanza solo. Flechas, barras, teclado y deslizar para moverse.
const SLIDE_MS = 15000;

const BenefitsSection = () => {
  const t = useI18n().dict.benefits;
  const ref = useRef(null);
  const touchX = useRef(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const running = autoplay && visible;
  const n = BENEFIT_PHOTOS.length;
  const go = (i) => setActive((i + n) % n);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAutoplay(false);
    let inView = false;
    const sync = () => setVisible(inView && !document.hidden);
    const io = new IntersectionObserver(([e]) => { inView = e.isIntersecting; sync(); }, { threshold: 0.15 });
    io.observe(el);
    document.addEventListener('visibilitychange', sync);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  useEffect(() => {
    if (!running) return undefined;
    const id = setTimeout(() => setActive((a) => (a + 1) % n), SLIDE_MS);
    return () => clearTimeout(id);
  }, [running, active, n]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); }
  };
  const onTouchStart = (e) => { touchX.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current.x;
    const dy = e.changedTouches[0].clientY - touchX.current.y;
    touchX.current = null;
    // Sólo si el gesto es más horizontal que vertical: bajar por la página
    // con un poco de desvío no cambia de foto.
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) go(active + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      ref={ref}
      className="rp-home__section rp-home__section--field"
      id="beneficios"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="rp-fieldbg" aria-hidden="true">
        {BENEFIT_PHOTOS.map((photo, i) => (
          <img
            key={photo.id}
            className={`rp-fieldbg__img${i === active ? ' is-active' : ''}`}
            src={urlDe(photo.src)}
            srcSet={`${urlDe(photo.srcSm)} ${photo.w}w, ${urlDe(photo.src)} 1920w`}
            sizes="100vw"
            style={{ objectPosition: photo.pos }}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      <div
        className="rp-benefit-slider"
        role="region"
        aria-roledescription={t.roledesc}
        aria-label={t.aria}
        onKeyDown={onKeyDown}
      >
        {/* Rótulo de la sección: sin él, quien llega bajando no sabe qué es. */}
        <h2 className="rp-benefit-slider__rotulo">{t.aria}</h2>
        <ol className="rp-benefit-slider__stage">
          {t.items.map((b, i) => (
            <li
              key={BENEFIT_PHOTOS[i].id}
              className={`rp-benefit-slider__slide${i === active ? ' is-active' : ''}`}
              aria-hidden={i !== active}
              inert={i !== active}
              aria-roledescription={t.slideRoledesc}
              aria-label={t.slideLabel(i + 1, n)}
            >
              <h3 className="rp-benefit-slider__title">{b.title}</h3>
              <p className="rp-benefit-slider__lead">{b.copy}</p>
              <p className="rp-benefit-slider__detail">{b.detail}</p>
            </li>
          ))}
        </ol>

        <div className={`rp-fieldbg__nav${running ? ' is-running' : ''}`}>
          <button type="button" className="rp-fieldbg__arrow" aria-label={t.prev} onClick={() => go(active - 1)}>
            <FaChevronLeft aria-hidden="true" />
          </button>
          {t.items.map((b, i) => (
            <button
              key={BENEFIT_PHOTOS[i].id}
              type="button"
              className={`rp-fieldbg__dot${i === active ? ' is-active' : ''}`}
              aria-label={t.dotLabel(i + 1, b.title)}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => go(i)}
            >
              <span className="rp-fieldbg__bar" style={{ '--rp-slide-ms': `${SLIDE_MS}ms` }} />
            </button>
          ))}
          <button type="button" className="rp-fieldbg__arrow" aria-label={t.next} onClick={() => go(active + 1)}>
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

const FinalCta = () => {
  const { dict } = useI18n();
  const t = dict.cta;
  return (
    <section className="rp-home__cta" id="contacto">
      {/* Banda azul marino, centrada: el título, la visión y el botón.
          Cierra la página con el mismo peso que la banda de Impacto. */}
      <Reveal className="rp-home__cta-panel">
        <h2 className="rp-home__cta-title">{t.title}</h2>
        <p className="rp-home__cta-vision">{t.vision}</p>
        <a
          href={whatsappUrl(dict.whatsapp.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="rp-home__hero-btn rp-home__cta-btn"
        >
          <FaWhatsapp aria-hidden="true" />
          {t.button}
        </a>
        <p className="rp-home__cta-hint">{t.hint}</p>
      </Reveal>
    </section>
  );
};

// Guía para instalar la plataforma como app (PWA). No es otra puerta de
// ingreso: el único acceso sigue siendo el botón del header.
const INSTALL_GUIDES = [
  { id: 'ios', icon: <FaApple /> },
  { id: 'android', icon: <FaAndroid /> },
];

const InstallAppSection = () => {
  const t = useI18n().dict.install;
  return (
    <section className="rp-install" id="instalar">
      <div className="rp-install__inner">
        <Reveal className="rp-install__header">
          <h2 className="rp-install__title">
            {t.titleA}
            <span className="rp-install__title-accent">{t.titleB}</span>
          </h2>
          <p className="rp-install__subtitle">{t.subtitle}</p>
        </Reveal>

        <div className="rp-install__grid">
          {INSTALL_GUIDES.map(({ id, icon }, i) => (
            <Reveal key={id} delay={i + 1}>
              <article className={`rp-install__card rp-install__card--${id}`}>
                <div className="rp-install__top">
                  <span className="rp-install__icon">{icon}</span>
                  <h3 className="rp-install__name">{t[id].name}</h3>
                </div>
                <ol className="rp-install__steps">
                  {t[id].steps.map((step, n) => (
                    <li key={n}>
                      <span className="rp-install__num">{n + 1}</span>
                      <div className="rp-install__step-text">{step}</div>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Exports ----------------
   Cada sección se usa desde src/views/HomeView.astro con su `lang`. Las
   estáticas se renderizan a HTML al compilar; las que tienen estado
   (Beneficios, Clientes) se hidratan como islas. */

export const Hero = conIdioma(HeroSection);
export const Benefits = conIdioma(BenefitsSection);
export const CtaFinal = conIdioma(FinalCta);
export const InstallApp = conIdioma(InstallAppSection);
