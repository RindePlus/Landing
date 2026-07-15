import { FaInfinity, FaChartLine, FaCalendarAlt, FaInstagram } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import TrustedCompanies from './TrustedCompanies';
import Functionalities from './Functionalities';
import Reveal from './Reveal';
import { useRpTheme } from '../hooks/useRpTheme';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_URL } from '../data/social';
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

// Pricing principles (moved here from /pricing) — shown under the
// "Conocé más" cards.
const PRINCIPLES = [
  {
    Icon: FaInfinity,
    title: 'Acceso ilimitado',
    copy:
      'Todos los lotes y hectáreas que necesites, en cada uno de los planes. Sin tope, sin asteriscos, sin letra chica.',
    accent: 'rp-acc-blue',
  },
  {
    Icon: FaChartLine,
    title: 'Sin costo por escala',
    copy:
      'El precio refleja lo que cuesta construir la herramienta, no el tamaño del campo del cliente.',
    accent: 'rp-acc-emerald',
  },
  {
    Icon: FaCalendarAlt,
    title: 'Un plan anual simple',
    copy:
      'Precio anual único. Abajo te mostramos el equivalente mensual, sin letra chica ni descuentos con asteriscos.',
    accent: 'rp-acc-amber',
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

const HeroSection = ({ onGoToPlatforms }) => (
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
          className="rp-home__hero-btn rp-home__hero-btn--ghost"
          onClick={onGoToPlatforms}
        >
          Ver Plataformas
        </button>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rp-home__hero-ig"
        >
          <FaInstagram aria-hidden="true" />
          Seguinos en {INSTAGRAM_HANDLE}
        </a>
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

const AntesDeEmpezarSection = ({ onGoToPricing }) => (
  <section className="rp-home__section" id="empezar">
    <Reveal className="rp-home__section-header">
      <div className="rp-num-eyebrow">Antes de empezar</div>
      <h2 className="rp-home__section-title">
        Conocé más{' '}
        <span className="rp-home__section-title-accent">sobre Rinde Plus</span>
      </h2>
      <p className="rp-home__section-subtitle">
        Todo lo que necesitás saber para dar el primer paso.
      </p>
    </Reveal>

    <div className="rp-home__empezar-grid">
      {[...ACCORDION].reverse().map((a, i) => (
        <Reveal key={a.id} delay={i + 1} className="rp-home__empezar-reveal">
          <div className="rp-home__empezar-card">
            <h3 className="rp-home__empezar-title">{a.q}</h3>
            <p className="rp-home__acc-lead">{a.lead}</p>
            <ul className="rp-home__empezar-list">
              {(a.steps || a.items).map((item) => (
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

    <Reveal delay={3} className="rp-home__empezar-footer">
      <button
        type="button"
        className="rp-home__empezar-cta"
        onClick={onGoToPricing}
      >
        Ver planes y precios
      </button>
    </Reveal>

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

const FinalCta = ({ onOpenWhatsApp }) => (
  <section className="rp-home__cta">
    <div className="rp-home__cta-grid" aria-hidden="true" />
    <Reveal>
      <div className="rp-home__cta-inner">
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
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rp-home__cta-btn"
        >
          Escribinos por WhatsApp
        </a>
        <div className="rp-home__cta-hint">Respuesta en menos de 24hs</div>
      </div>
    </Reveal>
  </section>
);

/* ---------------- Main component ---------------- */

const HomePage = ({ onOpenWhatsApp, onGoToPlatforms, onGoToPricing }) => {
  const { theme, toggleTheme } = useRpTheme();

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
        ]}
      />

      <main>
        <HeroSection onGoToPlatforms={onGoToPlatforms} />

        <TrustedSection />

        <Functionalities />

        <BenefitsSection />

        <AntesDeEmpezarSection onGoToPricing={onGoToPricing} />

        <FinalCta onOpenWhatsApp={onOpenWhatsApp} />
      </main>

      <Footer onOpenWhatsApp={onOpenWhatsApp} />
    </div>
  );
};

export default HomePage;
