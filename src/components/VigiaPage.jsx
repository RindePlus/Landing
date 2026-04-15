import {
  FaBell,
  FaCheckCircle,
  FaCloudSunRain,
  FaLeaf,
  FaSeedling,
  FaShieldAlt,
  FaThermometerHalf,
  FaArrowRight,
} from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { buildWhatsAppUrl } from '../data/pricing';
import vigiaLogo from '../assets/botones/L-Vigia.png';
import heroBackground from '../assets/VigIA/Slices01.png';
import mockPhone from '../assets/VigIA/Slices03 Celular.png';
import logoAgropago from '../assets/VigIA/LOGO Agopago.png';
import logoNera from '../assets/VigIA/nerajpg.webp';
import logoNave from '../assets/VigIA/Logo Nave.png';
import logoBiored from '../assets/VigIA/Logo Biored.png';
import logoRindePlus from '../assets/VigIA/Logo Rinde Plus sin fondo (1).png';
import logoAgroconsultor from '../assets/agroconsultor_logo.png';
import './pricing.css';
import './HomePage.css';
import './VigiaPage.css';

/* ---------------- Data ---------------- */

const FEATURES = [
  {
    Icon: FaThermometerHalf,
    title: 'Monitoreo de temperatura y humedad',
    copy: 'Relevamiento continuo del microclima del lote con IA.',
    accent: 'rp-acc-emerald',
  },
  {
    Icon: FaCloudSunRain,
    title: 'Proyección climática con IA',
    copy: 'Combina pronósticos y datos históricos para anticipar escenarios.',
    accent: 'rp-acc-sky',
  },
  {
    Icon: FaSeedling,
    title: 'Cálculo de DPV y balance hídrico',
    copy: 'Modelos que traducen datos atmosféricos en decisiones agronómicas.',
    accent: 'rp-acc-amber',
  },
  {
    Icon: FaBell,
    title: 'Alertas automáticas y personalizadas',
    copy: 'Notificaciones oportunas que indican cuándo actuar en cada lote.',
    accent: 'rp-acc-indigo',
  },
];

const BENEFITS = [
  {
    Icon: FaCheckCircle,
    title: 'Anticipación',
    copy: 'Detecta el riesgo varios días antes de que sea visible.',
    accent: 'rp-acc-emerald',
  },
  {
    Icon: FaCheckCircle,
    title: 'Decisiones precisas',
    copy: 'Ayuda a ajustar el manejo según la demanda real.',
    accent: 'rp-acc-blue',
  },
  {
    Icon: FaCheckCircle,
    title: 'Mayor estabilidad',
    copy: 'Predice pérdidas por golpes de calor o sequía.',
    accent: 'rp-acc-sky',
  },
  {
    Icon: FaCheckCircle,
    title: 'Protección del rendimiento',
    copy: 'Predice pérdidas en el rendimiento por estrés abiótico.',
    accent: 'rp-acc-emerald',
  },
  {
    Icon: FaCheckCircle,
    title: 'Alertas',
    copy: 'Señales automáticas que indican cuándo actuar.',
    accent: 'rp-acc-amber',
  },
  {
    Icon: FaCheckCircle,
    title: 'Mayor control',
    copy: 'Alarmas inteligentes con IA para priorizar lotes y momentos.',
    accent: 'rp-acc-indigo',
  },
];

const ALLIANCE = [
  {
    id: 'agroconsultor',
    name: 'Agroconsultor',
    logo: logoAgroconsultor,
    copy: 'PROFESIONALES EN INVESTIGACIÓN Y ASESORAMIENTO EN MITIGACIÓN DE ESTRÉS DE LOS CULTIVOS.',
    accent: 'emerald',
  },
  {
    id: 'rindeplus',
    name: 'RindePlus',
    logo: logoRindePlus,
    copy: 'EXPERTOS EN LA FUSIÓN DE AGRONOMÍA E INTELIGENCIA ARTIFICIAL APLICADA AL MANEJO.',
    accent: 'sky',
  },
  {
    id: 'biored',
    name: 'BioRed',
    logo: logoBiored,
    copy: 'REFERENTES EN SUSTENTABILIDAD DE AGRO SISTEMAS Y BIOINSUMOS.',
    accent: 'amber',
  },
];

/* ---------------- Helpers ---------------- */

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

const PrincipleCard = ({ Icon, title, copy, accent }) => (
  <article className={`rp-principle ${accent}`}>
    <div className="rp-principle__bar" />
    <div className="rp-principle__body">
      <div className="rp-principle__icon">
        <div className="rp-principle__icon-glow" />
        <div className="rp-principle__icon-inner">
          <Icon />
        </div>
      </div>
      <h3 className="rp-principle__title">{title}</h3>
      <p className="rp-principle__copy">{copy}</p>
    </div>
  </article>
);

/* ---------------- Sections ---------------- */

const openVigiaWhatsApp = () => {
  const msg =
    'Hola, quiero más información sobre Vig IA BioEstrés. ' +
    '¿Me pueden contar cómo funciona la plataforma, cómo empezar a usarla y los paquetes disponibles?';
  window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
};

const HeroSection = ({ onGoToPlatform }) => (
  <section className="rp-vigia__hero" id="top">
    <div className="rp-vigia__hero-grid" />
    <div className="rp-vigia__hero-inner">
      <div className="rp-vigia__hero-copy">
        <span className="rp-vigia__hero-eyebrow rp-fade-in rp-d-0">
          <span className="rp-vigia__hero-eyebrow-dot" />
          Inteligencia Predictiva
        </span>

        <h1 className="rp-vigia__hero-title rp-fade-in rp-d-1">
          Inteligencia predictiva para vigilar el{' '}
          <em>estrés de los cultivos.</em>
        </h1>

        <p className="rp-vigia__hero-subtitle rp-fade-in rp-d-3">
          Anticipá lo invisible.
        </p>

        <div className="rp-vigia__hero-ctas rp-fade-in rp-d-4">
          <button
            type="button"
            className="rp-vigia__hero-btn rp-vigia__hero-btn--primary"
            onClick={onGoToPlatform}
          >
            Ir a la plataforma
            <FaArrowRight />
          </button>
          <button
            type="button"
            className="rp-vigia__hero-btn rp-vigia__hero-btn--ghost"
            onClick={openVigiaWhatsApp}
          >
            Contactanos
          </button>
        </div>
      </div>

      <div className="rp-vigia__hero-visual rp-fade-in rp-d-2">
        <div className="rp-vigia__hero-visual-glow" />
        <div className="rp-vigia__hero-card">
          <div className="rp-vigia__hero-card-bar" />
          <img
            className="rp-vigia__hero-card-logo"
            src={vigiaLogo}
            alt="Vig IA BioEstrés"
          />
          <img
            className="rp-vigia__hero-card-img"
            src={heroBackground}
            alt="VigIA BioEstrés"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
);

const QueEsSection = () => (
  <section className="rp-vigia__section" id="vigia-que-es">
    <Reveal className="rp-vigia__section-header">
      <div className="rp-vigia__eyebrow">La inteligencia</div>
      <h2 className="rp-vigia__section-title">
        La inteligencia que anticipa el estrés{' '}
        <span className="rp-vigia__section-title-accent">antes de que se vea</span>
      </h2>
    </Reveal>

    <Reveal>
      <div className="rp-vigia__que-grid">
        <div>
          <p className="rp-vigia__text">
            VigIA BioEstrés es una{' '}
            <strong>herramienta de inteligencia predictiva</strong> que permite
            monitorear, diagnosticar y anticipar escenarios de estrés en los
            cultivos extensivos antes de que se manifiesten.
          </p>
          <p className="rp-vigia__text">
            Combina <strong>Inteligencia Artificial</strong> e{' '}
            <strong>Inteligencia Agronómica</strong> para generar alertas
            tempranas y facilitar decisiones preventivas que optimizan el
            manejo con bioinsumos.
          </p>
        </div>

        <div className="rp-vigia__quote-card">
          <div className="rp-vigia__quote-mark">&ldquo;</div>
          <p className="rp-vigia__quote-text">
            Cuando la agronomía y la inteligencia artificial se unen,{' '}
            <em>la prevención se vuelve posible</em>.
          </p>
          <p className="rp-vigia__quote-note">
            Agronomía potenciada con tecnología.
          </p>
          <div className="rp-vigia__venn">
            <div className="rp-vigia__venn-circle" />
            <div className="rp-vigia__venn-circle" />
            <div className="rp-vigia__venn-circle" />
            <span className="rp-vigia__venn-label">
              Agronomía × IA × Bioinsumos
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

const ComoFuncionaSection = () => (
  <section className="rp-vigia__section" id="vigia-como-funciona">
    <Reveal className="rp-vigia__section-header">
      <div className="rp-vigia__eyebrow">Así funciona</div>
      <h2 className="rp-vigia__section-title">
        Una sola plataforma,{' '}
        <span className="rp-vigia__section-title-accent">todas las variables</span>
      </h2>
    </Reveal>

    <Reveal>
      <div className="rp-vigia__how-zig">
        <div className="rp-vigia__how-text">
          <p className="rp-vigia__text">
            A partir de la geoposición del lote y del contenido inicial de agua
            en el suelo, <strong>Vig iA BioEstrés</strong> integra pronósticos
            climáticos y los combina con los requerimientos hídricos específicos
            del cultivo según su estadio fenológico.
          </p>
          <p className="rp-vigia__how-highlight">
            El cultivo no te muestra el estrés,{' '}
            <strong>te lo muestra Vig iA.</strong>
          </p>
          <p className="rp-vigia__text">
            <strong>Proyecta la demanda atmosférica (ETP)</strong> y anticipa
            períodos críticos de estrés hídrico o térmico, emitiendo alertas
            preventivas que permiten actuar antes de que los síntomas sean
            visibles.
          </p>
        </div>
        <div className="rp-vigia__phone">
          <img src={mockPhone} alt="App móvil VigIA" loading="lazy" />
        </div>
      </div>
    </Reveal>

    <Reveal>
      <div className="rp-vigia__features-grid">
        {FEATURES.map((f) => (
          <PrincipleCard
            key={f.title}
            Icon={f.Icon}
            title={f.title}
            copy={f.copy}
            accent={f.accent}
          />
        ))}
      </div>
    </Reveal>

    <Reveal>
      <div className="rp-vigia__benefits-header">
        <div className="rp-vigia__benefits-eyebrow">Lo que ganás con usarlo</div>
        <h3 className="rp-vigia__benefits-title">
          Seis razones para dormir más tranquilo
        </h3>
      </div>
      <ol className="rp-vigia__reasons">
        {BENEFITS.map((b, i) => (
          <li key={b.title} className="rp-vigia__reason">
            <span className="rp-vigia__reason-num">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="rp-vigia__reason-bar" />
            <div className="rp-vigia__reason-content">
              <h4>{b.title}</h4>
              <p>{b.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>

    <Reveal>
      <div className="rp-vigia__inline-banner">
        <p>
          Agronomía potenciada <span>por inteligencia artificial.</span>
        </p>
      </div>
    </Reveal>
  </section>
);

const ParaQuienSection = () => (
  <section className="rp-vigia__section" id="vigia-para-quien">
    <Reveal className="rp-vigia__section-header">
      <div className="rp-vigia__eyebrow">Para quién</div>
      <h2 className="rp-vigia__section-title">
        Es para quienes asesoran y{' '}
        <span className="rp-vigia__section-title-accent">toman decisiones en el campo</span>
      </h2>
      <p className="rp-vigia__section-subtitle">
        De la observación al control: la prevención inteligente ahora está en
        tus manos.
      </p>
    </Reveal>

    <Reveal>
      <div className="rp-vigia__audience-text">
        <p className="rp-vigia__text">
          Es una herramienta pensada{' '}
          <strong>especialmente para productores, asesores y técnicos</strong>{' '}
          que buscan gestionar los bioinsumos orientados al segmento de la
          mitigación del estrés abiótico en cultivos extensivos de manera
          anticipada.
        </p>
        <p className="rp-vigia__text">
          También es una plataforma aliada para{' '}
          <strong>empresas de biosoluciones</strong> que necesitan decisiones
          respaldadas en datos y alertas tempranas que reduzcan el riesgo.
        </p>
      </div>
    </Reveal>

    <Reveal>
      <div className="rp-vigia__strip">Menos estrés, más rendimiento</div>
    </Reveal>
  </section>
);

const EmpezarSection = () => (
  <section className="rp-vigia__section" id="vigia-empezar">
    <Reveal className="rp-vigia__section-header">
      <div className="rp-vigia__eyebrow">Cómo empiezo</div>
      <h2 className="rp-vigia__section-title">
        Necesitás muy poco para{' '}
        <span className="rp-vigia__section-title-accent">empezar a usarlo</span>
      </h2>
      <p className="rp-vigia__section-subtitle">
        Fácil de implementar, pensado para vos.
      </p>
    </Reveal>

    <Reveal>
      <div className="rp-vigia__easy-grid">
        <div className="rp-vigia__easy-card rp-vigia__easy-card--a">
          <div className="rp-vigia__easy-eyebrow">Onboarding simple</div>
          <h3 className="rp-vigia__easy-title">Necesitás muy poco para usarlo</h3>
          <p className="rp-vigia__easy-sub">
            Fácil de implementar, pensado para vos.
          </p>
          <ul className="rp-vigia__list">
            <li>
              <span className="rp-vigia__list-icon"><FaShieldAlt /></span>
              Solo necesitás las coordenadas del lote (KMZ) y contactarte con
              nuestro equipo para conocer los paquetes.
            </li>
            <li>
              <span className="rp-vigia__list-icon"><FaLeaf /></span>
              Te acompañamos en todo el proceso: desde la carga de datos
              iniciales hasta los primeros reportes.
            </li>
          </ul>
          <div className="rp-vigia__quote-box">
            Vos cargás los datos,{' '}
            <strong>VigIA BioEstrés</strong> se encarga del resto.
          </div>
        </div>

        <div className="rp-vigia__easy-card rp-vigia__easy-card--b">
          <div className="rp-vigia__easy-eyebrow">Es accesible</div>
          <h3 className="rp-vigia__easy-title">
            La estabilidad de rendimientos a tu alcance.
          </h3>
          <p className="rp-vigia__easy-sub">
            Funciona por suscripción de paquete de lotes: cada paquete incluye 5
            lotes por establecimiento. Ofrecemos medios de pago adaptados al
            sector agropecuario.
          </p>
          <div className="rp-vigia__payment">
            <img
              src={logoAgropago}
              alt="Agropago"
              loading="lazy"
              className="rp-vigia__payment-logo rp-vigia__payment-logo--agropago"
            />
            <img
              src={logoNera}
              alt="Nera"
              loading="lazy"
              className="rp-vigia__payment-logo rp-vigia__payment-logo--nera"
            />
            <img
              src={logoNave}
              alt="Nave"
              loading="lazy"
              className="rp-vigia__payment-logo rp-vigia__payment-logo--nave"
            />
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

const AlianzaSection = () => (
  <section className="rp-vigia__section" id="vigia-alianza">
    <Reveal className="rp-vigia__section-header">
      <div className="rp-vigia__eyebrow">Nuestra alianza</div>
      <h2 className="rp-vigia__section-title">
        Una innovación{' '}
        <span className="rp-vigia__section-title-accent">en alianza</span>
      </h2>
      <p className="rp-vigia__section-subtitle">
        Tres equipos, un mismo objetivo: ayudar a anticipar el estrés abiótico
        en cultivos extensivos.
      </p>
    </Reveal>

    <Reveal>
      <p className="rp-vigia__alliance-intro">
        <strong>Vig IA BioEstrés</strong> es el resultado de una alianza entre{' '}
        <strong>Agroconsultor</strong>, <strong>BioRed</strong> y{' '}
        <strong>RindePlus</strong>.
      </p>
    </Reveal>

    <Reveal>
      <div className="rp-vigia__alliance-grid">
        {ALLIANCE.map((ally) => (
          <article
            key={ally.id}
            data-ally-id={ally.id}
            className={`rp-vigia__ally rp-vigia__ally--${ally.accent}`}
          >
            <div className="rp-vigia__ally-bar" />
            <div className="rp-vigia__ally-logo">
              <div className="rp-vigia__ally-logo-glow" />
              <img src={ally.logo} alt={ally.name} loading="lazy" />
            </div>
            <p className="rp-vigia__ally-body">{ally.copy}</p>
          </article>
        ))}
      </div>
    </Reveal>

    <Reveal>
      <p className="rp-vigia__alliance-outro">
        Una misma misión: unir agronomía, inteligencia artificial y bioinsumos
        potenciando datos para anticipar comportamientos del cultivo.
      </p>
    </Reveal>
  </section>
);

const FinalCta = ({ onGoToPlatform }) => (
  <section className="rp-vigia__final">
    <Reveal>
      <div className="rp-vigia__final-card">
        <div className="rp-vigia__final-inner">
          <span className="rp-vigia__final-eyebrow">Comenzá ahora</span>
          <h2 className="rp-vigia__final-title">Comenzá a usarlo</h2>
          <p className="rp-vigia__final-copy">
            Probalo ahora — ingresá directo a la plataforma o contactanos.
          </p>
          <div className="rp-vigia__final-ctas">
            <button
              type="button"
              className="rp-vigia__final-btn rp-vigia__final-btn--primary"
              onClick={onGoToPlatform}
            >
              Ir a la plataforma
              <FaArrowRight />
            </button>
            <button
              type="button"
              className="rp-vigia__final-btn rp-vigia__final-btn--ghost"
              onClick={openVigiaWhatsApp}
            >
              Contactanos
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ---------------- Main component ---------------- */

const VigiaPage = ({ onGoToPlatform }) => {
  return (
    <div className="rp-vigia">
      <HeroSection onGoToPlatform={onGoToPlatform} />
      <QueEsSection />
      <ComoFuncionaSection />
      <ParaQuienSection />
      <EmpezarSection />
      <AlianzaSection />
      <FinalCta onGoToPlatform={onGoToPlatform} />
    </div>
  );
};

export default VigiaPage;
