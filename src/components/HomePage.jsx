import {
  FaArrowRight,
  FaWhatsapp,
} from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import TrustedCompanies from './TrustedCompanies';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import logoVigia from '../assets/botones/L-Vigia.png';
import logoPronosticos from '../assets/botones/L-Pronosticos.png';
import logoHuella from '../assets/botones/L-Huella.png';
import logoAapresid from '../assets/botones/L-Aapresid.png';
import logoConci from '../assets/botones/L-Conci.png';
import logoHalcon from '../assets/botones/l-Halcon.png';
import logoKimzza from '../assets/botones/L-Kimzza.png';
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

const OWN_PLATFORMS = [
  {
    id: 'vigia',
    name: 'Vig IA Biostress',
    tag: 'IA Predictiva',
    logo: logoVigia,
    copy:
      'Monitoreo predictivo de estrés hídrico y térmico con inteligencia artificial, antes de que el cultivo lo manifieste.',
    accent: 'rp-plat-emerald',
    internal: 'vigia',
  },
  {
    id: 'brechas',
    name: 'Análisis y brechas',
    tag: 'Núcleo  Agronómico',
    logo: logoPronosticos,
    copy:
      'Análisis de campaña y brechas de rendimiento por lote. Datos de clima, suelo e históricos unificados en un solo reporte.',
    accent: 'rp-plat-sky',
    logoBg: '#0067cb',
    internal: 'brechas',
  },
  {
    id: 'huella',
    name: 'Huella Hídrica',
    tag: 'Balance Hídrico',
    logo: logoHuella,
    copy:
      'Análisis del uso y la necesidad de agua de tus cultivos. Evapotranspiración y balance hídrico en tiempo real.',
    accent: 'rp-plat-indigo',
    logoBg: '#7870c4',
    href: 'https://rphuellahidrica.ddns.net/login/?next=/',
  },
];

const CUSTOM_PLATFORMS = [
  {
    id: 'aapresid',
    name: 'Aapresid',
    tag: 'Regional a medida',
    logo: logoAapresid,
    copy:
      'Versión a medida para socios y ATR de AAPRESID. Análisis regional con acompañamiento agronómico del equipo.',
    accent: 'rp-plat-emerald',
    logoBg: '#008c35',
    internal: 'aapresid',
  },
  {
    id: 'conci',
    name: 'Conci Riego',
    tag: 'Riego predictivo',
    logo: logoConci,
    copy:
      'Plataforma de riego predictivo desarrollada con Conci. Optimización del uso del agua por ambiente.',
    accent: 'rp-plat-blue',
    logoBg: '#000000',
    href: 'https://conciriegopredictivo.ddns.net/login/?next=/',
  },
  {
    id: 'halcon',
    name: 'Halcón Monitoreo',
    tag: 'Alertas a campo',
    logo: logoHalcon,
    copy:
      'Sistema de monitoreo hecho a medida para Halcón. Alertas tempranas y control de operaciones a campo.',
    accent: 'rp-plat-amber',
    logoBg: '#1d7b3f',
    href: 'https://halconmonitoreos.ddns.net/login/?next=/',
  },
  {
    id: 'kimzza',
    name: 'Kimzza',
    tag: 'Gestión integral',
    logo: logoKimzza,
    copy:
      'Solución a medida para Kimzza. Análisis y gestión integral de datos productivos de tu operación.',
    accent: 'rp-plat-violet',
    href: 'https://kimzza.ddns.net/login/?next=/',
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

const HeroSection = ({ onScrollToPlatforms }) => (
  <section className="rp-home__hero" id="top">
    <div className="rp-home__hero-grid" />
    <div className="rp-home__hero-inner">
      <span className="rp-home__hero-eyebrow rp-fade-in rp-d-0">
        <span className="rp-home__hero-eyebrow-dot" />
        Inteligencia Agronómica
      </span>

      <h1 className="rp-home__hero-title rp-fade-in rp-d-1">
        Convertimos datos de campo en
        <span className="rp-home__hero-title-accent">decisiones que rinden.</span>
      </h1>

      <p className="rp-home__hero-subtitle rp-fade-in rp-d-3">
        Somos una empresa de Inteligencia Agronómica.{' '}
        <strong>Analizamos datos</strong> de clima, suelo, ambientes e historia
        productiva y los traducimos en <strong>soluciones accionables</strong>
        {' '}para cada lote y cada campaña.
      </p>

      <div className="rp-home__hero-ctas rp-fade-in rp-d-4">
        <button
          type="button"
          className="rp-home__hero-btn rp-home__hero-btn--primary"
          onClick={onScrollToPlatforms}
        >
          Ver plataformas
          <FaArrowRight />
        </button>
      </div>

      <div className="rp-home__hero-marquee rp-fade-in rp-d-5">
        <span>Clima</span><em /> <span>Suelo</span><em /> <span>Ambientes</span>
        <em /> <span>Brechas</span><em /> <span>IA Agronómica</span>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="rp-home__section" id="beneficios">
    <Reveal className="rp-home__section-header">
      <div className="rp-num-eyebrow">Qué ganás</div>
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

const PlatformCard = ({ platform, onInternalNav }) => {
  const handleClick = () => {
    if (platform.internal && onInternalNav) {
      onInternalNav(platform.internal);
    } else if (platform.href) {
      window.open(platform.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rp-platcard ${platform.accent}`}
      data-plat-id={platform.id}
    >
      <div className="rp-platcard__bar" />
      <div className="rp-platcard__top">
        <div className="rp-platcard__logo">
          <div className="rp-platcard__logo-glow" />
          <div
            className="rp-platcard__logo-inner"
            style={platform.logoBg ? { background: platform.logoBg } : undefined}
          >
            <img src={platform.logo} alt={platform.name} loading="lazy" />
          </div>
        </div>
        <span className="rp-platcard__tag">{platform.tag}</span>
      </div>
      <div className="rp-platcard__body">
        <h3 className="rp-platcard__title">{platform.name}</h3>
        <p className="rp-platcard__copy">{platform.copy}</p>
        <span className="rp-platcard__cta">
          Ir a la plataforma
          <FaArrowRight />
        </span>
      </div>
    </button>
  );
};

const PlatformsBlock = ({
  id,
  eyebrowText,
  title,
  titleAccent,
  subtitle,
  platforms,
  gridVariant,
  onInternalNav,
}) => (
  <section className="rp-home__section" id={id}>
    <Reveal className="rp-home__section-header">
      <div className="rp-num-eyebrow">{eyebrowText}</div>
      <h2 className="rp-home__section-title">
        {title}{' '}
        <span className="rp-home__section-title-accent">{titleAccent}</span>
      </h2>
      <p className="rp-home__section-subtitle">{subtitle}</p>
    </Reveal>

    <Reveal>
      <div className={`rp-home__plat-grid ${gridVariant}`}>
        {platforms.map((p) => (
          <PlatformCard key={p.id} platform={p} onInternalNav={onInternalNav} />
        ))}
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

const HomePage = ({
  onOpenWhatsApp,
  onGoToVigia,
  onGoToBrechas,
  onGoToAapresid,
}) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector('.header');
    const offset = header ? header.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset + 8;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleScrollToPlatforms = () => scrollToSection('plataformas-propias');

  const handleInternalNav = (internalType) => {
    if (internalType === 'vigia' && onGoToVigia) return onGoToVigia();
    if (internalType === 'brechas' && onGoToBrechas) return onGoToBrechas();
    if (internalType === 'aapresid' && onGoToAapresid) return onGoToAapresid();
  };

  return (
    <div className="rp-home">
      <Header
        onOpenWhatsApp={onOpenWhatsApp}
        menuItems={[
          { label: 'Inicio', id: 'top' },
          { label: 'Beneficios', id: 'beneficios' },
          { label: 'Plataformas', id: 'plataformas-propias' },
          { label: 'Clientes', id: 'clientes' },
          { label: 'Contacto', id: 'top', action: onOpenWhatsApp },
        ]}
      />

      <main>
        <HeroSection onScrollToPlatforms={handleScrollToPlatforms} />

        <TrustedSection />

        <BenefitsSection />

        <PlatformsBlock
          id="plataformas-propias"
          eyebrowText="Plataformas propias"
          title="Nuestras plataformas,"
          titleAccent="construidas por Rinde Plus"
          subtitle="Tres soluciones propias: agronómicas, de agua y de inteligencia predictiva. Todas desarrolladas y mantenidas por nuestro equipo."
          platforms={OWN_PLATFORMS}
          gridVariant="rp-home__plat-grid--three"
          onInternalNav={handleInternalNav}
        />

        <PlatformsBlock
          id="plataformas-personalizadas"
          eyebrowText="Soluciones a medida"
          title="Plataformas personalizadas,"
          titleAccent="hechas con socios estratégicos"
          subtitle="Versiones personalizadas que desarrollamos con y para empresas aliadas. Cada una, adaptada a su realidad."
          platforms={CUSTOM_PLATFORMS}
          gridVariant="rp-home__plat-grid--four"
          onInternalNav={handleInternalNav}
        />

        <FinalCta onOpenWhatsApp={onOpenWhatsApp} />
      </main>

      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default HomePage;
