import { useEffect, useRef, useState } from 'react';
import { FaAndroid, FaApple, FaChevronLeft, FaChevronRight, FaHandshake, FaLayerGroup, FaSeedling, FaWhatsapp } from 'react-icons/fa';
import { LuShare } from 'react-icons/lu';
import Header from './Header';
import Footer from './Footer';
import TrustedCompanies from './TrustedCompanies';
import Functionalities from './Functionalities';
import Reveal from './Reveal';
import LoteMap from './LoteMap';
import LotesMosaic from './LotesMosaic';
import { useRpTheme } from '../hooks/useRpTheme';
import { WHATSAPP_URL } from '../data/social';
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

const BENEFITS = [
  {
    title: 'Tu lote, no el promedio',
    copy: 'Decides con el clima, el suelo y la historia de tu lote, no con lo típico de la zona.',
    detail: 'Rinde Plus cruza el clima, el suelo, los ambientes y la historia productiva de cada lote. Dos lotes vecinos pueden pedir decisiones distintas, y lo ves antes de decidir.',
    photo: { src: pampaSat, srcSm: pampaSatSm, w: 960, pos: '35% 45%' },
  },
  {
    title: 'El análisis ya está hecho',
    copy: 'Dejas de cruzar clima, rindes y suelo a mano en planillas y dedicas el tiempo a decidir.',
    detail: 'Clima, suelo, ambientes e historia de cada lote llegan integrados en un mismo lugar. Cubres más lotes sin perder profundidad.',
    photo: { src: girasolTormenta, srcSm: girasolTormentaSm, w: 1100, pos: '50% 70%' },
  },
  {
    title: 'Qué hacer y cuándo',
    copy: 'No solo ves el lote en un mapa: sabes qué conviene hacer y en qué momento.',
    detail: 'Una recomendación para cada lote, en el momento justo, y alertas de estrés, enfermedades y margen antes de que se vean a campo, también por WhatsApp.',
    photo: { src: sojaAtardecer, srcSm: sojaAtardecerSm, w: 1100, pos: '50% 60%' },
  },
  {
    title: 'Independiente',
    copy: 'Rinde Plus no vende insumos: a veces la mejor decisión es no aplicar.',
    detail: 'Antes de aplicar ves la cuenta del lote: si la aplicación paga, conviene; si no, a veces lo mejor es no hacer nada.',
    photo: { src: cosechaSoja, srcSm: cosechaSojaSm, w: 1100, pos: '60% 55%' },
  },
];

// Principles shown under the "Para quién" cards.
const PRINCIPLES = [
  {
    Icon: FaHandshake,
    title: 'Llega por tu organización',
    copy:
      'Cooperativas, acopios, semilleras, empresas de insumos y asesorías dan acceso a su red.',
    accent: 'rp-acc-blue',
  },
  {
    Icon: FaLayerGroup,
    title: 'Un solo sistema',
    copy:
      'Clima, suelo, ambientes e historia de cada lote, en un mismo lugar.',
    accent: 'rp-acc-emerald',
  },
  {
    Icon: FaSeedling,
    title: 'Nuestra visión',
    copy:
      'Que cada lote se decida con criterio agronómico, no solo los de quien puede pagarse un equipo técnico.',
    accent: 'rp-acc-amber',
  },
];

const AUDIENCES = [
  {
    id: 'productor',
    q: 'Si eres productor',
    lead: 'Sabes cuánto puede rendir cada lote, por qué no llegó, qué conviene hacer, cuándo y si te paga.',
    items: [
      {
        t: 'Qué hacer y cuándo',
        d: 'Una recomendación para cada lote, en el momento justo.',
      },
      {
        t: 'Si la aplicación paga',
        d: 'Ves la cuenta del lote antes de aplicar; a veces conviene no hacer nada.',
      },
      {
        t: 'Avisos a tiempo',
        d: 'Alertas de estrés, enfermedades y margen, también por WhatsApp.',
      },
    ],
  },
  {
    id: 'agronomo',
    q: 'Si eres agrónomo',
    lead: 'Dejas de armar el análisis a mano y dedicas el tiempo a decidir.',
    items: [
      {
        t: 'El análisis ya integrado',
        d: 'Clima, suelo, ambientes e historia de cada lote en un solo lugar.',
      },
      {
        t: 'Más lotes, mismo rigor',
        d: 'Cubres más lotes sin perder profundidad.',
      },
      {
        t: 'Alertas antes que el problema',
        d: 'Te enteras antes de que se vea a campo.',
      },
    ],
  },
];

/* ---------------- Subcomponents ---------------- */

const scrollToCampaign = () => {
  document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' });
};

const HeroSection = () => (
  <section className="rp-home__hero" id="top">
    <div className="rp-home__bg" aria-hidden="true"><LotesMosaic /></div>
    <div className="rp-home__hero-inner">
      <div className="rp-home__hero-text">
        <h1 className="rp-home__hero-title rp-fade-in rp-d-1">
          Criterio agronómico
          <span className="rp-home__hero-title-accent">para cada lote.</span>
        </h1>

        <p className="rp-home__hero-subtitle rp-fade-in rp-d-3">
          Rinde Plus es <strong>inteligencia agronómica</strong>: integra el
          clima, el suelo, los ambientes y la historia de cada lote y lo
          convierte en <strong>decisiones</strong> sobre qué hacer, cuándo y si
          conviene. Para productores y agrónomos.
        </p>

        <div className="rp-home__hero-ctas rp-fade-in rp-d-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rp-home__hero-btn rp-home__hero-btn--primary"
          >
            <FaWhatsapp aria-hidden="true" />
            Hablemos de tus lotes
          </a>
          <button
            type="button"
            className="rp-home__hero-btn rp-home__hero-btn--ghost"
            onClick={scrollToCampaign}
          >
            Ver la campaña
          </button>
        </div>
      </div>

      <div className="rp-home__hero-visual rp-fade-in rp-d-3">
        <LoteMap aria="Lote dibujado con tres ambientes, surcos de siembra y curvas de nivel" />
      </div>
    </div>
  </section>
);

// "Por qué Rinde Plus": un punto por vez, cada uno sobre su foto de campo
// (Wikimedia Commons, CC BY-SA; créditos en <PhotoCredits />). Avanza solo
// con la sección en pantalla y la pestaña visible; con reduced-motion no
// avanza solo. Flechas, barras, teclado y deslizar para moverse.
const SLIDE_MS = 7000;

const BenefitsSection = () => {
  const ref = useRef(null);
  const touchX = useRef(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const running = autoplay && visible;
  const n = BENEFITS.length;
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
        {BENEFITS.map((b, i) => (
          <img
            key={b.title}
            className={`rp-fieldbg__img${i === active ? ' is-active' : ''}`}
            src={b.photo.src}
            srcSet={`${b.photo.srcSm} ${b.photo.w}w, ${b.photo.src} 1920w`}
            sizes="100vw"
            style={{ objectPosition: b.photo.pos }}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      <div
        className="rp-benefit-slider"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Por qué Rinde Plus"
        onKeyDown={onKeyDown}
      >
        <ol className="rp-benefit-slider__stage">
          {BENEFITS.map((b, i) => (
            <li
              key={b.title}
              className={`rp-benefit-slider__slide${i === active ? ' is-active' : ''}`}
              aria-hidden={i !== active}
              inert={i !== active ? '' : undefined}
              aria-roledescription="punto"
              aria-label={`${i + 1} de ${n}`}
            >
              <h3 className="rp-benefit-slider__title">{b.title}</h3>
              <p className="rp-benefit-slider__lead">{b.copy}</p>
              <p className="rp-benefit-slider__detail">{b.detail}</p>
            </li>
          ))}
        </ol>

        <div className={`rp-fieldbg__nav${running ? ' is-running' : ''}`}>
          <button type="button" className="rp-fieldbg__arrow" aria-label="Punto anterior" onClick={() => go(active - 1)}>
            <FaChevronLeft aria-hidden="true" />
          </button>
          {BENEFITS.map((b, i) => (
            <button
              key={b.title}
              type="button"
              className={`rp-fieldbg__dot${i === active ? ' is-active' : ''}`}
              aria-label={`Punto ${i + 1}: ${b.title}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => go(i)}
            >
              <span className="rp-fieldbg__bar" style={{ '--rp-slide-ms': `${SLIDE_MS}ms` }} />
            </button>
          ))}
          <button type="button" className="rp-fieldbg__arrow" aria-label="Punto siguiente" onClick={() => go(active + 1)}>
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

const AntesDeEmpezarSection = () => (
  <section className="rp-home__section" id="empezar">
    <Reveal className="rp-home__section-header">
      <h2 className="rp-home__section-title">
        Para productores y agrónomos
      </h2>
      <p className="rp-home__section-subtitle">
        Un mismo sistema, en el mismo idioma, para decidir sobre cada lote.
      </p>
    </Reveal>

    <div className="rp-home__empezar-grid">
      {AUDIENCES.map((a, i) => (
        <Reveal key={a.id} delay={i + 1} className="rp-home__empezar-reveal">
          <div className="rp-home__empezar-card">
            <h3 className="rp-home__empezar-title">{a.q}</h3>
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

    <Reveal delay={4}>
      <div className="rp-home__principles">
        {PRINCIPLES.map((p) => {
          const IconComp = p.Icon;
          return (
            <article key={p.title} className={`rp-principle ${p.accent}`}>
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

const TrustedSection = () => (
  <section className="rp-home__trusted" id="clientes">
    <Reveal className="rp-home__trusted-carousel">
      <TrustedCompanies />
    </Reveal>
  </section>
);

const FinalCta = () => (
  <section className="rp-home__cta">
    <div className="rp-home__bg" aria-hidden="true"><LotesMosaic /></div>
    <Reveal>
      <div className="rp-home__cta-inner">
        <h2 className="rp-home__cta-title">
          Hablemos de tus lotes.
        </h2>
        <p className="rp-home__cta-copy">
          Cuéntanos un poco de tu operación y coordinamos una llamada. Sin
          formularios largos: te responde directo el equipo de Rinde Plus.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rp-home__cta-btn"
        >
          <FaWhatsapp aria-hidden="true" />
          Escríbenos por WhatsApp
        </a>
        <p className="rp-home__cta-hint">Respuesta en menos de 24 h</p>
      </div>
    </Reveal>
  </section>
);

// Guía para instalar la plataforma como app (PWA). No es otra puerta de
// ingreso: el único acceso sigue siendo el botón del header.
const INSTALL_GUIDES = [
  {
    id: 'ios',
    name: 'iPhone',
    icon: <FaApple />,
    steps: [
      <>Abrir <strong>app.rindeplus.com</strong> en <strong>Safari</strong>.</>,
      (
        <>
          Tocar <strong>Compartir</strong>{' '}
          <LuShare className="rp-install__inline-icon" aria-hidden="true" />{' '}
          (el cuadrado con la flecha hacia arriba).
        </>
      ),
      <>Elegir <strong>Agregar a pantalla de inicio</strong> y confirmar con <strong>Agregar</strong>.</>,
    ],
  },
  {
    id: 'android',
    name: 'Android',
    icon: <FaAndroid />,
    steps: [
      <>Abrir <strong>app.rindeplus.com</strong> en <strong>Chrome</strong>.</>,
      <>Tocar el menú <strong>⋮</strong> (arriba a la derecha).</>,
      (
        <>
          Elegir <strong>Instalar app</strong> (o <strong>Agregar a la pantalla
          principal</strong>, según la versión) y confirmar.
        </>
      ),
    ],
  },
];

const InstallAppSection = () => (
  <section className="rp-install" id="instalar">
    <Reveal className="rp-install__header">
      <h2 className="rp-install__title">La plataforma, como app en el celular</h2>
      <p className="rp-install__subtitle">
        Se agrega a la pantalla de inicio en tres pasos, sin pasar por ninguna tienda.
      </p>
    </Reveal>

    <div className="rp-install__grid">
      {INSTALL_GUIDES.map(({ id, name, icon, steps }, i) => (
        <Reveal key={id} delay={i + 1}>
          <article className={`rp-install__card rp-install__card--${id}`}>
            <div className="rp-install__top">
              <span className="rp-install__icon">{icon}</span>
              <h3 className="rp-install__name">{name}</h3>
            </div>
            <ol className="rp-install__steps">
              {steps.map((step, n) => (
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

const PhotoCredits = () => (
  <p className="rp-home__credits">
    Imágenes: Pampa húmeda vista por satélite, INPE (
    <a href="https://commons.wikimedia.org/wiki/File:Argentina%C2%B4s_Wet_Pampa.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>
    ) · Sembrado de soja en Argentina, Alfonso (
    <a href="https://commons.wikimedia.org/wiki/File:Sembrado_de_soja_en_argentina.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
    ) · Girasol pampeano, Emilio Küffer (
    <a href="https://commons.wikimedia.org/wiki/File:Girasol_pampeano_(44521869145).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>
    ) · Cosecha de soja, Clasonsf (
    <a href="https://commons.wikimedia.org/wiki/File:CosechaSoja.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
    ), vía Wikimedia Commons.
  </p>
);

/* ---------------- Main component ---------------- */

const HomePage = ({ onOpenWhatsApp }) => {
  const { theme, toggleTheme } = useRpTheme();

  return (
    <div className="rp-home">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        menuItems={[
          { label: 'Inicio', id: 'top' },
          { label: 'La campaña', id: 'funcionalidades' },
          { label: 'Por qué Rinde Plus', id: 'beneficios' },
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
