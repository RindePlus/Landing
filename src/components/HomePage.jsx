import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { LuArrowRight, LuChevronDown, LuCheck } from 'react-icons/lu';
import Header from './Header';
import Footer from './Footer';
import TrustedCompanies from './TrustedCompanies';
import Functionalities from './Functionalities';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './pricing.css';
import './HomePage.css';

/* ---------------- Data ---------------- */

const BENEFITS = [
  {
    title: 'Decisiones informadas',
    copy: 'Conocé el momento óptimo para sembrar, fertilizar y cosechar con datos de tu lote.',
  },
  {
    title: 'Optimización de recursos',
    copy: 'Ajustá insumos y manejo para reducir costos sin resignar rendimiento.',
  },
  {
    title: 'Planificación a largo plazo',
    copy: 'Anticipá riesgos y armá estrategias de campaña con visibilidad real.',
  },
  {
    title: 'Mejora en la rentabilidad',
    copy: 'Cada decisión vale plata. Nosotros te ayudamos a que valga más.',
  },
];

const ACCORDION = [
  {
    id: 'empezar',
    q: 'Cómo empezás a usarla',
    lead: 'Simple, trazable y pensada para escalar a todos tus lotes.',
    steps: [
      {
        t: 'Solicitá tu cuenta',
        d: 'Escribinos con los datos de tu empresa y te damos de alta.',
      },
      {
        t: 'Cargá tus lotes',
        d: 'Ubicación por coordenadas o polígono, cultivo y fecha de siembra.',
      },
      {
        t: 'Generá tu primer análisis',
        d: 'Recibís tu primer análisis completo, listo para decidir.',
      },
    ],
  },
  {
    id: 'para-quien',
    q: 'Para quién es',
    lead: 'Para quienes asesoran y toman decisiones en el campo.',
    items: [
      {
        t: 'Productores',
        d: 'Que quieren entender y cerrar la brecha de rendimiento de sus lotes.',
      },
      {
        t: 'Asesores y técnicos',
        d: 'Que necesitan datos integrados para recomendar con respaldo.',
      },
      {
        t: 'Empresas y regionales',
        d: 'Que gestionan múltiples campos y necesitan escalar el análisis.',
      },
    ],
  },
];

/* ---------------- Subcomponents ---------------- */

const Reveal = ({ children, className = '', id, delay }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });
  const delayClass = delay ? `rp-reveal--delay-${delay}` : '';
  return (
    <div
      id={id}
      ref={ref}
      className={`rp-reveal ${delayClass} ${isVisible ? 'rp-is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

const HeroSection = ({ onGoToPlatforms, onScrollToFuncionalidades }) => (
  <section className="rp-home__hero" id="top">
    <div className="rp-home__hero-grid" />
    <div className="rp-home__hero-inner">
      <h1 className="rp-home__hero-title rp-fade-in rp-d-1">
        Convertimos datos de campo en
        <span className="rp-home__hero-title-accent">decisiones que rinden.</span>
      </h1>

      <p className="rp-home__hero-subtitle rp-fade-in rp-d-3">
        Una sola plataforma que analiza <strong>clima, suelo, ambientes e
        historia productiva</strong> y los traduce en{' '}
        <strong>soluciones accionables</strong> para cada lote y cada campaña.
      </p>

      <div className="rp-home__hero-ctas rp-fade-in rp-d-4">
        <button
          type="button"
          className="rp-home__hero-btn rp-home__hero-btn--primary"
          onClick={onGoToPlatforms}
        >
          Ir a la plataforma
          <LuArrowRight />
        </button>
        <button
          type="button"
          className="rp-home__hero-btn rp-home__hero-btn--ghost"
          onClick={onScrollToFuncionalidades}
        >
          Ver funcionalidades
        </button>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="rp-home__section" id="beneficios">
    <Reveal className="rp-home__section-header">
      <div className="rp-num-eyebrow">Beneficios</div>
      <h2 className="rp-home__section-title">
        Datos aplicados a{' '}
        <span className="rp-home__section-title-accent">tu producción</span>
      </h2>
      <p className="rp-home__section-subtitle">
        Cuatro formas concretas en que Rinde Plus mueve la aguja en tu campaña.
      </p>
    </Reveal>

    <Reveal>
      <ol className="rp-home__benefits-list">
        {BENEFITS.map((b, i) => (
          <li key={b.title} className="rp-home__benefit-item">
            <span className="rp-home__benefit-num">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="rp-home__benefit-text">
              <h3 className="rp-home__benefit-title">{b.title}</h3>
              <p className="rp-home__benefit-copy">{b.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  </section>
);

const AntesDeEmpezarSection = () => (
  <section className="rp-home__section" id="empezar">
    <Reveal className="rp-home__section-header">
      <div className="rp-num-eyebrow">Antes de empezar</div>
      <h2 className="rp-home__section-title">
        Cómo arrancás y{' '}
        <span className="rp-home__section-title-accent">para quién es</span>
      </h2>
      <p className="rp-home__section-subtitle">
        Desplegá cada tema para dar el primer paso con toda la info.
      </p>
    </Reveal>

    <Reveal>
      <div className="rp-home__accordion">
        {ACCORDION.map((a) => (
          <details key={a.id} className="rp-home__acc" name="conocer">
            <summary className="rp-home__acc-summary">
              <span>{a.q}</span>
              <LuChevronDown className="rp-home__acc-chevron" />
            </summary>
            <div className="rp-home__acc-body">
              <p className="rp-home__acc-lead">{a.lead}</p>
              {a.steps ? (
                <ol className="rp-home__acc-steps">
                  {a.steps.map((s, i) => (
                    <li key={s.t}>
                      <span className="rp-home__acc-step-num">{i + 1}</span>
                      <div className="rp-home__acc-item-text">
                        <strong>{s.t}</strong>
                        <span>{s.d}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className="rp-home__acc-list">
                  {a.items.map((it) => (
                    <li key={it.t}>
                      <span className="rp-home__acc-check">
                        <LuCheck />
                      </span>
                      <div className="rp-home__acc-item-text">
                        <strong>{it.t}</strong>
                        <span>{it.d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </details>
        ))}
      </div>
    </Reveal>
  </section>
);

const AapresidBanner = ({ onGoToAapresidPricing }) => (
  <section className="rp-home__section rp-home__aapresid-section">
    <Reveal>
      <div className="rp-home__aapresid">
        <div className="rp-home__aapresid-text">
          <span className="rp-home__aapresid-eyebrow">Programa AAPRESID</span>
          <h2 className="rp-home__aapresid-title">
            ¿Sos socio de una Regional de AAPRESID?
          </h2>
          <p className="rp-home__aapresid-copy">
            Tenemos un programa y precios especiales para socios y ATR de la red.
          </p>
        </div>
        <button
          type="button"
          className="rp-home__aapresid-btn"
          onClick={onGoToAapresidPricing}
        >
          Ver planes AAPRESID
          <LuArrowRight />
        </button>
      </div>
    </Reveal>
  </section>
);

const TrustedSection = () => (
  <section className="rp-home__trusted" id="clientes">
    <div className="rp-home__trusted-header">
      <Reveal>
        <div className="rp-num-eyebrow">Confían en nosotros</div>
      </Reveal>
    </div>
    <Reveal className="rp-home__trusted-carousel">
      <TrustedCompanies />
    </Reveal>
  </section>
);

const FinalCta = ({ onOpenWhatsApp }) => (
  <section className="rp-home__cta">
    <Reveal>
      <div className="rp-home__cta-card">
        <div className="rp-home__cta-inner">
          <span className="rp-home__cta-eyebrow">Hablemos</span>
          <h2 className="rp-home__cta-title">
            ¿Querés saber más sobre{' '}
            <em>cómo podemos ayudarte?</em>
          </h2>
          <p className="rp-home__cta-copy">
            Contanos un poco de tu operación y coordinamos una llamada. Sin
            formularios largos, sin vendedores: el equipo de Rinde Plus te
            responde directo.
          </p>
          <a
            href="https://wa.me/5493564593446?text=Hola,%20quiero%20más%20información%20sobre%20Rinde%20Plus"
            target="_blank"
            rel="noopener noreferrer"
            className="rp-home__cta-btn"
          >
            <FaWhatsapp />
            Escribinos por WhatsApp
          </a>
          <div className="rp-home__cta-hint">Respuesta en menos de 24hs</div>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ---------------- Main component ---------------- */

const HomePage = ({ onOpenWhatsApp, onGoToPlatforms, onGoToPricing, onGoToAapresidPricing }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('rp-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-rp-theme', theme);
    try {
      localStorage.setItem('rp-theme', theme);
    } catch (e) {
      /* localStorage unavailable — ignore */
    }
    // Remove the attribute when leaving the home so other routes stay unthemed.
    return () => root.removeAttribute('data-rp-theme');
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector('.header');
    const offset = header ? header.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset + 8;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleScrollToFuncionalidades = () => scrollToSection('funcionalidades');

  return (
    <div className="rp-home">
      <Header
        onOpenWhatsApp={onOpenWhatsApp}
        theme={theme}
        onToggleTheme={toggleTheme}
        onGoToPlatforms={onGoToPlatforms}
        menuItems={[
          { label: 'Inicio', id: 'top' },
          { label: 'Funcionalidades', id: 'funcionalidades' },
          { label: 'Beneficios', id: 'beneficios' },
          { label: 'Precios', id: 'precios', action: onGoToPricing },
          { label: 'Contacto', id: 'top', action: onOpenWhatsApp },
        ]}
      />

      <main>
        <HeroSection
          onGoToPlatforms={onGoToPlatforms}
          onScrollToFuncionalidades={handleScrollToFuncionalidades}
        />

        <TrustedSection />

        <Functionalities />

        <BenefitsSection />

        <AntesDeEmpezarSection />

        <AapresidBanner onGoToAapresidPricing={onGoToAapresidPricing} />

        <FinalCta onOpenWhatsApp={onOpenWhatsApp} />
      </main>

      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default HomePage;
