import { useEffect, useRef, useState } from 'react';
import { FaAndroid, FaApple, FaChevronLeft, FaChevronRight, FaHandshake, FaLayerGroup, FaSeedling, FaWhatsapp } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import TrustedCompanies from './TrustedCompanies';
import Functionalities from './Functionalities';
import Reveal from './Reveal';
import LoteMap from './LoteMap';
import LotesMosaic from './LotesMosaic';
import { useRpTheme } from '../hooks/useRpTheme';
import { whatsappUrl } from '../data/social';
import { useI18n } from '../i18n/I18nContext';
import pampaSat from '../assets/campo/pampa-satelital.webp';
import pampaSatSm from '../assets/campo/pampa-satelital-960.webp';
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
  { id: 'lote', src: pampaSat, srcSm: pampaSatSm, w: 960, pos: '35% 45%' },
  { id: 'analisis', src: girasolTormenta, srcSm: girasolTormentaSm, w: 1100, pos: '50% 70%' },
  { id: 'cuando', src: sojaAtardecer, srcSm: sojaAtardecerSm, w: 1100, pos: '50% 60%' },
  { id: 'independiente', src: cosechaSoja, srcSm: cosechaSojaSm, w: 1100, pos: '60% 55%' },
];

// Íconos y acentos de los principios, en el orden de dict.principles.
const PRINCIPLE_STYLES = [
  { Icon: FaHandshake, accent: 'rp-acc-blue' },
  { Icon: FaLayerGroup, accent: 'rp-acc-emerald' },
  { Icon: FaSeedling, accent: 'rp-acc-amber' },
];

/* ---------------- Subcomponents ---------------- */

const scrollToCampaign = () => {
  document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' });
};

const HeroSection = () => {
  const { dict } = useI18n();
  const t = dict.hero;
  return (
    <section className="rp-home__hero" id="top">
      <div className="rp-home__bg" aria-hidden="true"><LotesMosaic /></div>
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
            <button
              type="button"
              className="rp-home__hero-btn rp-home__hero-btn--ghost"
              onClick={scrollToCampaign}
            >
              {t.ctaCampaign}
            </button>
          </div>
        </div>

        <div className="rp-home__hero-visual rp-fade-in rp-d-3">
          <LoteMap aria={t.mapAria} />
        </div>
      </div>
    </section>
  );
};

// "Por qué Rinde Plus": un punto por vez, cada uno sobre su foto de campo
// (Wikimedia Commons, CC BY-SA; créditos en <PhotoCredits />). Avanza solo
// con la sección en pantalla y la pestaña visible; con reduced-motion no
// avanza solo. Flechas, barras, teclado y deslizar para moverse.
const SLIDE_MS = 7000;

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
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
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
            src={photo.src}
            srcSet={`${photo.srcSm} ${photo.w}w, ${photo.src} 1920w`}
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

const AntesDeEmpezarSection = () => {
  const { dict } = useI18n();
  const t = dict.audiences;
  return (
    <section className="rp-home__section" id="empezar">
      <Reveal className="rp-home__section-header">
        <h2 className="rp-home__section-title">{t.title}</h2>
        <p className="rp-home__section-subtitle">{t.subtitle}</p>
      </Reveal>

      <div className="rp-home__empezar-grid">
        {t.groups.map((a, i) => (
          <Reveal key={a.id} delay={i + 1} className="rp-home__empezar-reveal">
            <div className="rp-home__empezar-card">
              <h3 className="rp-home__empezar-title">{a.title}</h3>
              <p className="rp-home__acc-lead">{a.lead}</p>
              <ul className="rp-home__empezar-list">
                {a.items.map((item) => (
                  <li key={item.t}>
                    <span className="rp-home__empezar-dot" aria-hidden="true" />
                    <div className="rp-home__acc-item-text">
                      <strong>{item.t}</strong>
                      <span>{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={3}>
        <div className="rp-home__principles">
          {dict.principles.map((p, i) => {
            const { Icon: IconComp, accent } = PRINCIPLE_STYLES[i];
            return (
              <article key={accent} className={`rp-principle ${accent}`}>
                <div className="rp-principle__body">
                  <div className="rp-principle__icon">
                    <IconComp />
                  </div>
                  <h3 className="rp-principle__title">{p.title}</h3>
                  <p className="rp-principle__copy">{p.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};

const TrustedSection = () => (
  <section className="rp-home__trusted" id="clientes">
    <Reveal className="rp-home__trusted-carousel">
      <TrustedCompanies />
    </Reveal>
  </section>
);

const FinalCta = () => {
  const { dict } = useI18n();
  const t = dict.cta;
  return (
    <section className="rp-home__cta">
      <div className="rp-home__bg" aria-hidden="true"><LotesMosaic /></div>
      <Reveal>
        <div className="rp-home__cta-inner">
          <h2 className="rp-home__cta-title">{t.title}</h2>
          <p className="rp-home__cta-copy">{t.copy}</p>
          <a
            href={whatsappUrl(dict.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rp-home__cta-btn"
          >
            <FaWhatsapp aria-hidden="true" />
            {t.button}
          </a>
          <p className="rp-home__cta-hint">{t.hint}</p>
        </div>
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
      <Reveal className="rp-install__header">
        <h2 className="rp-install__title">{t.title}</h2>
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
    </section>
  );
};

// Licencias de las fotos, en el orden de dict.credits.photos.
const PHOTO_LICENSES = [
  { license: 'CC BY-SA 2.0', href: 'https://commons.wikimedia.org/wiki/File:Argentina%C2%B4s_Wet_Pampa.jpg' },
  { license: 'CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:Sembrado_de_soja_en_argentina.jpg' },
  { license: 'CC BY-SA 2.0', href: 'https://commons.wikimedia.org/wiki/File:Girasol_pampeano_(44521869145).jpg' },
  { license: 'CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:CosechaSoja.jpg' },
];

const PhotoCredits = () => {
  const t = useI18n().dict.credits;
  return (
    <p className="rp-home__credits">
      {t.lead}:{' '}
      {t.photos.map((name, i) => (
        <span key={PHOTO_LICENSES[i].href}>
          {i > 0 && ' · '}
          {name} (
          <a href={PHOTO_LICENSES[i].href} target="_blank" rel="noopener noreferrer">
            {PHOTO_LICENSES[i].license}
          </a>
          )
        </span>
      ))}
      , {t.via}.
    </p>
  );
};

/* ---------------- Main component ---------------- */

const HomePage = ({ onOpenWhatsApp }) => {
  const { theme, toggleTheme } = useRpTheme();
  const nav = useI18n().dict.header.nav;

  return (
    <div className="rp-home">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        menuItems={[
          { label: nav.home, id: 'top' },
          { label: nav.campaign, id: 'funcionalidades' },
          { label: nav.why, id: 'beneficios' },
        ]}
      />

      <main>
        <HeroSection />

        <TrustedSection />

        <Functionalities />

        <BenefitsSection />

        <AntesDeEmpezarSection />

        <FinalCta />

        <InstallAppSection />

        <PhotoCredits />
      </main>

      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default HomePage;
