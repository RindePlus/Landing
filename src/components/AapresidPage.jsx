import { useState } from 'react';
import {
  FaArrowRight,
  FaApple,
  FaAndroid,
  FaCheck,
  FaInfoCircle,
  FaTimes,
  FaBolt,
  FaFilePdf,
  FaLayerGroup,
  FaExternalLinkAlt,
  FaSeedling,
  FaUserTie,
} from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Header from './Header';
import Footer from './Footer';
import ModulesSection from './ModulesSection';
import sembradoraBg from '../assets/sembradora.webp';
import aapresidLogo from '../assets/aapresid-logo.png';
import './pricing.css';
import './HomePage.css';
import './BrechasPage.css';
import './AapresidPage.css';

const AAPRESID_LOGIN_URL = 'https://plataforma.rindeplus.com/login/aapresid';

/* ---------------- Data ---------------- */

const STEPS = [
  {
    num: '01',
    title: 'Integramos tus datos',
    copy: (
      <>
        Históricos de <strong>tu zona</strong> + clima esperado de la ventana
        de <strong>tu cultivo</strong> + análisis de suelo / ambientes de{' '}
        <strong>tu lote</strong>.
      </>
    ),
    accent: 'emerald',
  },
  {
    num: '02',
    title: 'Modelamos por ambiente',
    copy: (
      <>
        El modelo genera el rinde y las brechas de <strong>tu lote</strong>;
        identifica variables (DPV, agua, suelo) en <strong>tu campaña</strong>.
      </>
    ),
    accent: 'sky',
  },
  {
    num: '03',
    title: 'Recibís tu reporte',
    copy: (
      <>
        Resumen, escenarios, ventanas críticas y semáforo de variables para que{' '}
        <strong>priorices tus decisiones</strong>.
      </>
    ),
    accent: 'amber',
  },
];

const REPORT_ITEMS = [
  {
    num: '01',
    title: 'Comparación de fechas de siembra',
    copy: (
      <>
        Posibilidad de comparar distintas fechas de siembra,{' '}
        <strong>42 días en adelante</strong> y{' '}
        <strong>42 días para atrás</strong>. Visualizá cómo impacta la fecha de
        siembra en el rendimiento pronosticado de <strong>tu cultivo</strong>.
      </>
    ),
    accent: 'blue',
  },
  {
    num: '02',
    title: 'Modelo clima + suelo',
    copy: (
      <>
        Gráfico de barras comparando{' '}
        <strong>Potencial vs Pronosticado</strong> por ambiente (Alta, Media,
        Baja) en <strong>tn/ha</strong>. Te muestra la <strong>brecha</strong>{' '}
        en toneladas por hectárea y datos de agua útil, lluvia del ciclo y agua
        total.
      </>
    ),
    accent: 'emerald',
  },
  {
    num: '03',
    title: 'Distribución de rendimiento',
    copy: (
      <>
        Gráfico con la distribución esperada de rendimiento mostrando{' '}
        <strong>Media, P10, P90</strong> y escenarios climáticos
        (precipitaciones ±15%, temperatura ±3°C) para que entiendas el rango de{' '}
        <strong>tu rendimiento</strong>.
      </>
    ),
    accent: 'sky',
  },
  {
    num: '04',
    title: 'Déficit de presión de vapor (DPV)',
    copy: (
      <>
        Promedio de DPV de los días analizados con categorías (Muy bajo,
        Óptimo, Moderado, Alto), evolución diaria y tabla de días críticos con
        DPV &gt; 2.0 kPa en <strong>tu campaña</strong>.
      </>
    ),
    accent: 'amber',
  },
  {
    num: '05',
    title: 'Captura de carbono',
    copy: (
      <>
        Gráfico de barras mostrando las toneladas de CO₂ equivalente que fija{' '}
        <strong>tu cultivo</strong> por ambiente, basado en el rendimiento
        pronosticado. Incluye explicación de qué es y para qué sirve.
      </>
    ),
    accent: 'indigo',
  },
  {
    num: '06',
    title: 'Recomendación de nutrientes a fertilizar',
    copy: (
      <>
        Recomendaciones específicas de fertilización basadas en{' '}
        <strong>tu brecha de rendimiento</strong>, el análisis de{' '}
        <strong>tu suelo</strong> y los requerimientos de{' '}
        <strong>tu cultivo</strong>. Incluye dosis por nutriente y por
        ambiente para cerrar <strong>tu brecha</strong>.
      </>
    ),
    accent: 'rose',
  },
];

const ONBOARDING_STEPS = [
  {
    title: 'Solicita tu cuenta',
    copy: (
      <>
        Contactate con nuestro equipo y pasales los datos de{' '}
        <strong>tu empresa</strong>.
      </>
    ),
  },
  {
    title: 'Cargá tus lotes',
    copy: (
      <>
        Agregá <strong>tus lotes</strong> con ubicación (coordenadas o
        polígono), cultivo y fecha de siembra. Podés cargar múltiples lotes.
      </>
    ),
  },
  {
    title: 'Generá tu primer análisis',
    copy: (
      <>
        Seleccioná <strong>tu lote</strong> y generá{' '}
        <strong>tu primer análisis</strong>. Recibís el reporte completo en PDF
        listo para compartir.
      </>
    ),
  },
];

const ShareIosIcon = () => (
  <span className="rp-aapresid__pwa-inline-icon" aria-label="Ícono compartir iOS">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  </span>
);

const IOS_STEPS = [
  <>Abrí <strong>Safari</strong> e ingresá al sitio de la plataforma.</>,
  <>
    Tocá el botón <strong>Compartir</strong> <ShareIosIcon /> (el cuadrado con la flecha hacia arriba).
  </>,
  <>Seleccioná <strong>"Añadir a Pantalla de Inicio"</strong>.</>,
  <>Si querés, cambiá el nombre del acceso directo.</>,
  <>Pulsá <strong>Añadir</strong> y listo.</>,
];

const ANDROID_STEPS = [
  <>Abrí <strong>Chrome</strong> e ingresá al sitio de la plataforma.</>,
  <>
    Tocá el menú <span className="rp-aapresid__pwa-dots">⋮</span> (los tres puntos, arriba a la derecha).
  </>,
  <>Seleccioná <strong>"Instalar aplicación"</strong>.</>,
  <>Confirmá tocando <strong>Instalar</strong> y listo.</>,
];

const PROBLEMA_CARDS = [
  {
    id: 'brechas',
    accent: 'amber',
    num: '01',
    title: 'Brechas productivas',
    copy: (
      <>
        En Argentina, la brecha de rendimiento alcanza el{' '}
        <strong>41% en trigo y maíz</strong> y el{' '}
        <strong>31% en soja</strong>. Hay margen concreto para mejorar.
      </>
    ),
    hasSources: true,
  },
  {
    id: 'fragmentada',
    accent: 'blue',
    num: '02',
    title: 'Información fragmentada',
    copy: (
      <>
        Clima, suelo, ambientes e históricos viven en{' '}
        <strong>fuentes distintas, desordenadas y sin conexión con la decisión</strong>.
        Reportes manuales que consumen tiempo y no escalan.
      </>
    ),
  },
  {
    id: 'causas',
    accent: 'indigo',
    num: '03',
    title: 'Causas enterradas',
    copy: (
      <>
        Las causas de las brechas quedan{' '}
        <strong>enterradas bajo datos</strong>. Sin un análisis integrado,{' '}
        <strong>la brecha no se cuantifica</strong> y las recomendaciones
        pierden precisión.
      </>
    ),
  },
];

const SOURCES = [
  {
    id: 'merlos',
    tag: 'Fuente principal',
    title: 'Merlos, Monzon et al. (2015)',
    citation: '"Potential for crop production increase in Argentina through closure of existing yield gaps."',
    publication: 'Field Crops Research, 184, 145-154.',
    detail: (
      <>
        Trigo: Yw 5.2 t/ha vs Ya 3.0 t/ha — <b>brecha 41%</b>
        <br />
        Maíz: Yw 11.6 t/ha vs Ya 6.9 t/ha — <b>brecha 41%</b>
        <br />
        Soja: Yw 3.9 t/ha vs Ya 2.7 t/ha — <b>brecha 31%</b>
      </>
    ),
    linkLabel: 'Ver en ScienceDirect',
    href: 'https://www.sciencedirect.com/science/article/pii/S0378429015300599',
  },
  {
    id: 'yieldgap',
    title: 'Global Yield Gap Atlas — Argentina (2023)',
    copy: 'Datos actualizados de rendimientos promedio (2016-2021) con simulaciones DSSAT v4.7. Cubre +70% del área cosechada.',
    linkLabel: 'Ver en yieldgap.org',
    href: 'https://www.yieldgap.org/argentina',
  },
  {
    id: 'andrade',
    title: 'Andrade, F.H. — Fertilizar (2023)',
    citation: '"Evaluación de la productividad agrícola en Argentina: brechas de rendimiento en maíz, soja, trigo y girasol."',
    copy: 'Brechas del 30% al 50% según cultivo y región.',
    linkLabel: 'Ver PDF en fertilizar.org.ar',
    href: 'https://fertilizar.org.ar/wp-content/uploads/2023/06/2_Evaluacion-de-la-productividad-agricola-en-Argentina-Brechas-de-rendimiento-en-maiz-soja-trigo-y-girasol.pdf',
  },
  {
    id: 'aapresid',
    title: 'AAPRESID — Soja centro de Santa Fe (2024)',
    copy: 'Brecha del 33% en soja en centro de Santa Fe. Rinde real ~3.2 t/ha vs potencial ~4.9 t/ha.',
    linkLabel: 'Ver en aapresid.org.ar',
    href: 'https://www.aapresid.org.ar/blog/soja-centro-santa-fe-achicar-33-brecha-rinde-actual',
  },
];

const AHORRO_CARDS = [
  {
    id: 'manual',
    accent: 'emerald',
    Icon: FaBolt,
    title: 'Sin procesamiento manual',
    copy: (
      <>
        Olvidate de cruzar planillas, limpiar datos y armar gráficos. La
        plataforma <strong>integra y procesa todo automáticamente</strong>.
      </>
    ),
  },
  {
    id: 'pdf',
    accent: 'sky',
    Icon: FaFilePdf,
    title: 'Reportes listos para compartir',
    copy: (
      <>
        Generá reportes completos en PDF que podés{' '}
        <strong>compartir directamente</strong> con productores, equipos
        técnicos o tu red de asesores.
      </>
    ),
  },
  {
    id: 'escala',
    accent: 'amber',
    Icon: FaLayerGroup,
    title: 'Escalá sin esfuerzo',
    copy: (
      <>
        Pasá de analizar un lote a{' '}
        <strong>gestionar todos tus campos</strong> sin multiplicar las horas
        de trabajo.
      </>
    ),
  },
];

const AUDIENCE_CARDS = [
  {
    id: 'socios',
    accent: 'emerald',
    Icon: FaSeedling,
    title: 'Socios de Regionales',
    bullets: [
      (
        <>
          Entendé las <strong>causas de tu brecha</strong> de rendimiento, no
          solo los números
        </>
      ),
      (
        <>
          Recibí <strong>recomendaciones claras</strong> y accionables para tu
          lote
        </>
      ),
      (
        <>
          Compará tu rendimiento con el <strong>potencial real</strong> de tu
          ambiente
        </>
      ),
    ],
  },
  {
    id: 'atr',
    accent: 'sky',
    Icon: FaUserTie,
    title: 'ATR · Asesores Técnicos Regionales',
    bullets: [
      (
        <>
          Gestioná <strong>todos los datos de la regional</strong> desde una
          sola plataforma
        </>
      ),
      (
        <>
          Generá <strong>reportes para toda tu regional</strong> sin
          procesamiento manual
        </>
      ),
      (
        <>
          Focalizá tu tiempo en <strong>lo técnico</strong>, no en armar
          informes
        </>
      ),
    ],
  },
];

/* ---------------- Helpers ---------------- */

const Reveal = ({ children, className = '', id }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });
  return (
    <div
      id={id}
      ref={ref}
      className={`rp-reveal ${isVisible ? 'rp-is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

/* ---------------- Sections ---------------- */

const HeroSection = ({ onGoToPricing }) => (
  <section className="rp-aapresid__hero" id="top">
    <div className="rp-aapresid__hero-grid" />
    <div className="rp-aapresid__hero-inner">
      <div className="rp-aapresid__hero-copy">
        <span className="rp-aapresid__hero-eyebrow rp-fade-in rp-d-0">
          <span className="rp-aapresid__hero-eyebrow-dot" />
          Análisis agronómico
        </span>

        <h1 className="rp-aapresid__hero-title rp-fade-in rp-d-1">
          Análisis de Campaña y{' '}
          <em>Brechas de Rendimiento</em>
        </h1>

        <p className="rp-aapresid__hero-subtitle rp-fade-in rp-d-3">
          Dejá de procesar datos. Empezá a tomar decisiones.
        </p>

        <div className="rp-aapresid__hero-ctas rp-fade-in rp-d-4">
          <a
            className="rp-aapresid__hero-btn rp-aapresid__hero-btn--primary"
            href={AAPRESID_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir a la plataforma
            <FaArrowRight />
          </a>
          <button
            type="button"
            className="rp-aapresid__hero-btn rp-aapresid__hero-btn--ghost"
            onClick={onGoToPricing}
          >
            Ver Planes y Precios
          </button>
        </div>
      </div>

      <div className="rp-aapresid__hero-visual rp-fade-in rp-d-2">
        <div className="rp-aapresid__hero-visual-glow" />
        <div className="rp-aapresid__hero-card">
          <div className="rp-aapresid__hero-card-bar" />
          <img
            className="rp-aapresid__hero-card-logo"
            src={aapresidLogo}
            alt="AAPRESID"
          />
          <img
            className="rp-aapresid__hero-card-img"
            src={sembradoraBg}
            alt="Análisis de campaña y brechas de rendimiento"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
);

const LaPlataformaSection = () => (
  <section className="rp-aapresid__section" id="que-es">
    <Reveal className="rp-aapresid__section-header">
      <div className="rp-aapresid__eyebrow">La plataforma</div>
      <h2 className="rp-aapresid__section-title">
        Una herramienta de{' '}
        <span className="rp-aapresid__section-title-accent">análisis y decisión</span>
      </h2>
      <p className="rp-aapresid__section-subtitle">
        Centraliza los datos del lote y los traduce en{' '}
        <strong>indicadores claros</strong> para decidir.
      </p>
    </Reveal>

    <Reveal>
      <div className="rp-aapresid__que-grid rp-aapresid__que-grid--single">
        <article className="rp-aapresid__que-card rp-aapresid__que-card--a">
          <ul className="rp-aapresid__que-list">
            <li>
              <span className="rp-aapresid__que-check"><FaCheck /></span>
              <span className="rp-aapresid__que-text">
                Integra <strong>clima, suelo, ambientes e históricos</strong> productivos
              </span>
            </li>
            <li>
              <span className="rp-aapresid__que-check"><FaCheck /></span>
              <span className="rp-aapresid__que-text">
                Construye <strong>escenarios de rendimiento</strong> antes y durante la campaña
              </span>
            </li>
            <li>
              <span className="rp-aapresid__que-check"><FaCheck /></span>
              <span className="rp-aapresid__que-text">
                Centraliza todos los datos del lote en <strong>un solo lugar</strong>
              </span>
            </li>
            <li>
              <span className="rp-aapresid__que-check"><FaCheck /></span>
              <span className="rp-aapresid__que-text">
                Traduce la información en <strong>indicadores claros</strong> para decidir
              </span>
            </li>
          </ul>
        </article>
      </div>
    </Reveal>
  </section>
);

const ComoFunciona = () => (
  <section className="rp-aapresid__section" id="como-funciona">
    <Reveal className="rp-aapresid__section-header">
      <div className="rp-aapresid__eyebrow">Tres pasos</div>
      <h2 className="rp-aapresid__section-title">
        Cómo{' '}
        <span className="rp-aapresid__section-title-accent">funciona</span>
      </h2>
      <p className="rp-aapresid__section-subtitle">
        Simple, trazable y pensado para que <strong>escalés</strong> a
        múltiples lotes y campos.
      </p>
    </Reveal>

    <Reveal>
      <div className="rp-aapresid__steps-grid">
        {STEPS.map((step) => (
          <article
            key={step.num}
            className={`rp-aapresid__step rp-aapresid__step--${step.accent}`}
          >
            <div className="rp-aapresid__step-bar" />
            <div className="rp-aapresid__step-body">
              <div className="rp-aapresid__step-num">{step.num}</div>
              <h3 className="rp-aapresid__step-title">{step.title}</h3>
              <p className="rp-aapresid__step-copy">{step.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  </section>
);

const ModulosSection = () => (
  <section className="rp-aapresid__section" id="modulos">
    <ModulesSection />
  </section>
);

const ReporteSection = () => (
  <section className="rp-aapresid__section" id="reporte">
    <Reveal className="rp-aapresid__section-header">
      <div className="rp-aapresid__eyebrow">El reporte</div>
      <h2 className="rp-aapresid__section-title">
        Lo que te muestra{' '}
        <span className="rp-aapresid__section-title-accent">tu reporte</span>
      </h2>
      <p className="rp-aapresid__section-subtitle">
        Al abrir <strong>tu reporte</strong>, esto es lo que encontrás.
      </p>
    </Reveal>

    <Reveal>
      <table className="rp-brechas__report-table">
        <tbody>
          {[0, 1, 2].map((row) => (
            <tr key={row}>
              {[0, 1].map((col) => {
                const item = REPORT_ITEMS[row * 2 + col];
                return (
                  <td key={item.num} className="rp-brechas__report-cell">
                    <div className="rp-brechas__report-head">
                      <span className="rp-brechas__report-num">{item.num}</span>
                      <h3 className="rp-brechas__report-title">{item.title}</h3>
                    </div>
                    <p className="rp-brechas__report-copy">{item.copy}</p>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  </section>
);

const ParaQuienSection = () => (
  <section className="rp-aapresid__section" id="para-quien">
    <Reveal className="rp-aapresid__section-header">
      <div className="rp-aapresid__eyebrow">La audiencia</div>
      <h2 className="rp-aapresid__section-title">
        ¿Para{' '}
        <span className="rp-aapresid__section-title-accent">quién es?</span>
      </h2>
      <p className="rp-aapresid__section-subtitle">
        Diseñado para <strong>dos perfiles clave</strong> dentro de la red
        AAPRESID.
      </p>
    </Reveal>

    <Reveal>
      <div className="rp-aapresid__audience-clean">
        {AUDIENCE_CARDS.map((card) => (
          <div key={card.id} className="rp-aapresid__audience-col">
            <h3 className="rp-aapresid__audience-heading">{card.title}</h3>
            <ul className="rp-aapresid__audience-list">
              {card.bullets.map((bullet, i) => (
                <li key={i}>
                  <span className="rp-check"><FaCheck /></span>
                  <span className="rp-aapresid__audience-text">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

const ComoEmpezar = () => (
  <section className="rp-aapresid__section" id="como-empezar">
    <Reveal className="rp-aapresid__section-header">
      <div className="rp-aapresid__eyebrow">Onboarding</div>
      <h2 className="rp-aapresid__section-title">
        Cómo{' '}
        <span className="rp-aapresid__section-title-accent">empezás a usarla</span>
      </h2>
      <p className="rp-aapresid__section-subtitle">
        Empezar a usar la plataforma es simple. Te guiamos paso a paso para que{' '}
        <strong>obtengas resultados rápidos</strong>.
      </p>
    </Reveal>

    <Reveal>
      <ol className="rp-aapresid__reasons">
        {ONBOARDING_STEPS.map((step, i) => (
          <li key={step.title} className="rp-aapresid__reason">
            <span className="rp-aapresid__reason-num">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="rp-aapresid__reason-bar" />
            <div className="rp-aapresid__reason-content">
              <h4>{step.title}</h4>
              <p>{step.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>

    <Reveal>
      <div className="rp-aapresid__support">
        <h4>¿Necesitás ayuda?</h4>
        <p>
          Nuestro equipo te acompaña en todo el proceso. Si tenés dudas sobre
          cómo cargar <strong>tus datos</strong> o interpretar{' '}
          <strong>tu reporte</strong>, contactanos y te ayudamos a sacarle el
          máximo provecho a la plataforma.
        </p>
      </div>
    </Reveal>
  </section>
);

const InstalarApp = () => (
  <section className="rp-aapresid__section" id="instalar-app">
    <Reveal className="rp-aapresid__section-header">
      <div className="rp-aapresid__eyebrow">PWA</div>
      <h2 className="rp-aapresid__section-title">
        Instalá la plataforma{' '}
        <span className="rp-aapresid__section-title-accent">en tu celular</span>
      </h2>
      <p className="rp-aapresid__section-subtitle">
        Podés agregar la plataforma como una app en la pantalla de inicio de{' '}
        <strong>tu teléfono</strong>. No necesitás descargar nada de una tienda
        — seguí estos pasos según tu dispositivo.
      </p>
    </Reveal>

    <Reveal>
      <div className="rp-aapresid__pwa-grid">
        <article className="rp-aapresid__pwa-card rp-aapresid__pwa-card--ios">
          <div className="rp-aapresid__pwa-bar" />
          <div className="rp-aapresid__pwa-body">
            <div className="rp-aapresid__pwa-header">
              <div className="rp-aapresid__pwa-badge" aria-hidden="true">
                <FaApple />
              </div>
              <h3 className="rp-aapresid__pwa-platform">iOS (iPhone)</h3>
            </div>
            <ol className="rp-aapresid__pwa-steps">
              {IOS_STEPS.map((stepText, i) => (
                <li key={i} className="rp-aapresid__pwa-step">
                  <span className="rp-aapresid__pwa-step-num">{i + 1}</span>
                  <span className="rp-aapresid__pwa-step-text">{stepText}</span>
                </li>
              ))}
            </ol>
          </div>
        </article>

        <article className="rp-aapresid__pwa-card rp-aapresid__pwa-card--android">
          <div className="rp-aapresid__pwa-bar" />
          <div className="rp-aapresid__pwa-body">
            <div className="rp-aapresid__pwa-header">
              <div className="rp-aapresid__pwa-badge" aria-hidden="true">
                <FaAndroid />
              </div>
              <h3 className="rp-aapresid__pwa-platform">Android</h3>
            </div>
            <ol className="rp-aapresid__pwa-steps">
              {ANDROID_STEPS.map((stepText, i) => (
                <li key={i} className="rp-aapresid__pwa-step">
                  <span className="rp-aapresid__pwa-step-num">{i + 1}</span>
                  <span className="rp-aapresid__pwa-step-text">{stepText}</span>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </div>
    </Reveal>
  </section>
);

const ElProblemaSection = ({ onOpenSources }) => (
  <section className="rp-aapresid__section" id="el-problema">
    <Reveal className="rp-aapresid__section-header">
      <div className="rp-aapresid__eyebrow">El contexto</div>
      <h2 className="rp-aapresid__section-title">
        El{' '}
        <span className="rp-aapresid__section-title-accent">problema</span>
      </h2>
      <p className="rp-aapresid__section-subtitle">
        Argentina tiene brechas de productividad significativas. La información
        para cerrarlas existe, pero está <strong>fragmentada</strong>.
      </p>
    </Reveal>

    <Reveal>
      <div className="rp-aapresid__problema-grid">
        {PROBLEMA_CARDS.map((card) => (
          <article
            key={card.id}
            className={`rp-aapresid__problema rp-aapresid__problema--${card.accent}`}
          >
            <div className="rp-aapresid__problema-bar" />
            <div className="rp-aapresid__problema-body">
              <div className="rp-aapresid__problema-num">{card.num}</div>
              <h3 className="rp-aapresid__problema-title">{card.title}</h3>
              <p className="rp-aapresid__problema-copy">{card.copy}</p>
              {card.hasSources && (
                <button
                  type="button"
                  className="rp-aapresid__sources-btn"
                  onClick={onOpenSources}
                  aria-label="Ver fuentes bibliográficas"
                >
                  <FaInfoCircle />
                  Ver fuentes
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  </section>
);

const SourcesModal = ({ onClose }) => (
  <div
    className="rp-aapresid__modal-overlay"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
    aria-labelledby="rp-aapresid-sources-title"
  >
    <div
      className="rp-aapresid__modal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="rp-aapresid__modal-header">
        <h3 id="rp-aapresid-sources-title">Fuentes bibliográficas</h3>
        <button
          type="button"
          className="rp-aapresid__modal-close"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <FaTimes />
        </button>
      </div>
      <div className="rp-aapresid__modal-body">
        {SOURCES.map((source) => (
          <div key={source.id} className="rp-aapresid__source">
            {source.tag && (
              <span className="rp-aapresid__source-tag">{source.tag}</span>
            )}
            <h4>{source.title}</h4>
            {source.citation && (
              <p>
                <em>{source.citation}</em>
                {source.publication && (
                  <>
                    <br />
                    {source.publication}
                  </>
                )}
              </p>
            )}
            {source.copy && !source.citation && <p>{source.copy}</p>}
            {source.citation && source.copy && <p>{source.copy}</p>}
            {source.detail && (
              <p className="rp-aapresid__source-detail">{source.detail}</p>
            )}
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rp-aapresid__source-link"
            >
              <FaExternalLinkAlt />
              {source.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AhorroTiempoSection = () => (
  <section className="rp-aapresid__section" id="ahorro">
    <Reveal className="rp-aapresid__section-header">
      <div className="rp-aapresid__eyebrow">El valor</div>
      <h2 className="rp-aapresid__section-title">
        Tu tiempo vale más que{' '}
        <span className="rp-aapresid__section-title-accent">un reporte</span>
      </h2>
      <p className="rp-aapresid__section-subtitle">
        Automatizamos el procesamiento para que te enfoques en{' '}
        <strong>lo que realmente importa</strong>: las recomendaciones
        agronómicas.
      </p>
    </Reveal>

    <Reveal>
      <div className="rp-aapresid__ahorro-grid">
        {AHORRO_CARDS.map((card) => {
          const IconComp = card.Icon;
          return (
            <article
              key={card.id}
              className={`rp-aapresid__ahorro rp-aapresid__ahorro--${card.accent}`}
            >
              <div className="rp-aapresid__ahorro-bar" />
              <div className="rp-aapresid__ahorro-body">
                <div className="rp-aapresid__ahorro-icon">
                  <IconComp />
                </div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Reveal>
  </section>
);

const FinalCta = ({ onGoToPricing }) => (
  <section className="rp-aapresid__final">
    <Reveal>
      <div className="rp-aapresid__final-card">
        <div className="rp-aapresid__final-inner">
          <span className="rp-aapresid__final-eyebrow">Comenzá ahora</span>
          <h2 className="rp-aapresid__final-title">Comenzá a usarlo</h2>
          <p className="rp-aapresid__final-copy">
            Probalo ahora — ingresá directo a la plataforma o conocé nuestros
            planes.
          </p>
          <div className="rp-aapresid__final-ctas">
            <a
              className="rp-aapresid__final-btn rp-aapresid__final-btn--primary"
              href={AAPRESID_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a la plataforma
              <FaArrowRight />
            </a>
            <button
              type="button"
              className="rp-aapresid__final-btn rp-aapresid__final-btn--ghost"
              onClick={onGoToPricing}
            >
              Ver Planes y Precios
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ---------------- Main component ---------------- */

const AapresidPage = ({ onOpenWhatsApp, onGoToHome, onGoToPricing }) => {
  const [showSourcesModal, setShowSourcesModal] = useState(false);

  const openSources = () => setShowSourcesModal(true);
  const closeSources = () => setShowSourcesModal(false);

  return (
    <div className="rp-aapresid">
      <Header
        onOpenWhatsApp={onOpenWhatsApp}
        onLogoClick={onGoToHome}
        menuItems={[
          { label: 'Volver a inicio', id: 'top', action: onGoToHome },
          { label: 'El problema', id: 'el-problema' },
          { label: 'La plataforma', id: 'que-es' },
          { label: 'Cómo funciona', id: 'como-funciona' },
          { label: 'Módulos', id: 'modulos' },
          { label: 'El reporte', id: 'reporte' },
          { label: 'Para quién', id: 'para-quien' },
          { label: 'Cómo empiezo', id: 'como-empezar' },
          { label: 'Instalar app', id: 'instalar-app' },
        ]}
      />
      <main>
        <HeroSection onGoToPricing={onGoToPricing} />
        <ElProblemaSection onOpenSources={openSources} />
        <LaPlataformaSection />
        <ModulosSection />
        <ReporteSection />
        <AhorroTiempoSection />
        <ParaQuienSection />
        <ComoEmpezar />
        <InstalarApp />
        <FinalCta onGoToPricing={onGoToPricing} />
      </main>
      <Footer onOpenWhatsApp={onOpenWhatsApp} />
      {showSourcesModal && <SourcesModal onClose={closeSources} />}
    </div>
  );
};

export default AapresidPage;
