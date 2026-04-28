import { FaChartBar, FaBookOpen, FaBrain, FaCloudSun, FaEye, FaCheck } from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './pricing.css';
import './ModulesSection.css';

/* ── Mini chart SVGs ── */

const ChartDashboard = ({ color1, color2 }) => (
  <svg viewBox="0 0 200 120" fill="none" className="rp-module__chart">
    <defs>
      <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color1} stopOpacity="0.25" />
        <stop offset="100%" stopColor={color1} stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Grid lines */}
    <line x1="20" y1="24" x2="190" y2="24" stroke="#e2e8f0" strokeWidth="0.8" />
    <line x1="20" y1="48" x2="190" y2="48" stroke="#e2e8f0" strokeWidth="0.8" />
    <line x1="20" y1="72" x2="190" y2="72" stroke="#e2e8f0" strokeWidth="0.8" />
    <line x1="20" y1="96" x2="190" y2="96" stroke="#e2e8f0" strokeWidth="0.8" />
    {/* Area + line */}
    <path d="M20 82 L54 60 L88 68 L122 38 L156 44 L190 22" stroke={color1} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 82 L54 60 L88 68 L122 38 L156 44 L190 22 V96 H20 Z" fill="url(#dashArea)" />
    {/* Bars behind */}
    <rect x="46" y="70" width="16" height="26" rx="3" fill={color2} opacity="0.18" />
    <rect x="80" y="58" width="16" height="38" rx="3" fill={color2} opacity="0.18" />
    <rect x="114" y="50" width="16" height="46" rx="3" fill={color2} opacity="0.18" />
    <rect x="148" y="42" width="16" height="54" rx="3" fill={color2} opacity="0.18" />
    {/* Dots */}
    <circle cx="54" cy="60" r="3.5" fill="#fff" stroke={color1} strokeWidth="2" />
    <circle cx="122" cy="38" r="3.5" fill="#fff" stroke={color1} strokeWidth="2" />
    <circle cx="190" cy="22" r="3.5" fill="#fff" stroke={color2} strokeWidth="2" />
  </svg>
);

const ChartGapBars = ({ color1, color2 }) => (
  <svg viewBox="0 0 200 120" fill="none" className="rp-module__chart">
    <rect x="10" y="14" width="140" height="18" rx="4" fill={color1} opacity="0.2" />
    <rect x="10" y="14" width="100" height="18" rx="4" fill={color1} />
    <rect x="10" y="44" width="140" height="18" rx="4" fill={color2} opacity="0.2" />
    <rect x="10" y="44" width="85" height="18" rx="4" fill={color2} />
    <rect x="10" y="74" width="140" height="18" rx="4" fill={color1} opacity="0.2" />
    <rect x="10" y="74" width="120" height="18" rx="4" fill={color1} opacity="0.7" />
  </svg>
);

const ChartGroupedBars = () => (
  <svg viewBox="0 0 200 120" fill="none" className="rp-module__chart">
    {/* Grupo 1 */}
    <rect x="18" y="62" width="22" height="46" rx="4" fill="#ef4444" opacity="0.45" />
    <rect x="44" y="28" width="22" height="80" rx="4" fill="#10b981" />
    {/* Grupo 2 */}
    <rect x="82" y="72" width="22" height="36" rx="4" fill="#ef4444" opacity="0.45" />
    <rect x="108" y="22" width="22" height="86" rx="4" fill="#10b981" />
    {/* Grupo 3 */}
    <rect x="146" y="56" width="22" height="52" rx="4" fill="#ef4444" opacity="0.45" />
    <rect x="172" y="32" width="22" height="76" rx="4" fill="#10b981" />
    <line x1="12" y1="112" x2="200" y2="112" stroke="#cbd5e1" strokeWidth="1.5" />
  </svg>
);

const ChartAreaForecast = ({ color1, color2 }) => (
  <svg viewBox="0 0 200 120" fill="none" className="rp-module__chart">
    <defs>
      <linearGradient id="pastFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color1} stopOpacity="0.3" />
        <stop offset="100%" stopColor={color1} stopOpacity="0" />
      </linearGradient>
      <linearGradient id="futureFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color2} stopOpacity="0.15" />
        <stop offset="100%" stopColor={color2} stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M12 80 L40 60 L68 65 L96 45" stroke={color1} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 80 L40 60 L68 65 L96 45 V110 H12 Z" fill="url(#pastFill)" />
    <line x1="96" y1="8" x2="96" y2="110" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 3" />
    <path d="M96 45 L124 35 L152 50 L180 28" stroke={color2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4" />
    <path d="M96 45 L124 35 L152 50 L180 28 V110 H96 Z" fill="url(#futureFill)" />
  </svg>
);

const ChartGauge = ({ color1, color2 }) => (
  <svg viewBox="0 0 200 130" fill="none" className="rp-module__chart">
    <path d="M30 100 A70 70 0 0 1 170 100" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round" fill="none" />
    <path d="M30 100 A70 70 0 0 1 130 34" stroke={color1} strokeWidth="12" strokeLinecap="round" fill="none" />
    <circle cx="100" cy="100" r="6" fill={color2} />
    <line x1="100" y1="100" x2="122" y2="44" stroke={color2} strokeWidth="2.5" strokeLinecap="round" />
    <text x="100" y="125" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155" fontFamily="var(--font-heading)">Riesgo medio</text>
  </svg>
);

/* ── Module data ── */

const MODULES = [
  {
    id: 'analisis',
    EyebrowIcon: FaChartBar,
    Chart: ChartDashboard,
    chartColors: ['#3b82f6', '#1d4ed8'],
    eyebrow: 'Dashboard',
    eyebrowClass: 'rp-eyebrow--blue',
    accentClass: 'rp-mod-blue',
    title: 'Análisis de Campaña',
    lead: 'Un análisis detallado de tu campaña con datos de suelo, clima y rendimiento.',
    description:
      'Todo tu historial productivo, todos tus lotes y todas tus variables, en un solo lugar donde podés comparar, cruzar y entender qué pasó y por qué.',
    bullets: [
      'Análisis de datos históricos de tu campo',
      'Monitoreo de clima y variables de tu zona',
      'Visualización de rendimientos y tendencias',
    ],
  },
  {
    id: 'brechas-estandar',
    EyebrowIcon: FaBookOpen,
    Chart: ChartGapBars,
    chartColors: ['#f59e0b', '#d97706'],
    eyebrow: 'Bibliografía',
    eyebrowClass: 'rp-eyebrow--amber',
    accentClass: 'rp-mod-amber',
    title: 'Brechas Estándar',
    lead:
      'Calculadas a partir de bibliografía científica, ensayos regionales y referencias técnicas.',
    description:
      'Representan el rendimiento potencial según el conocimiento agronómico validado para tu zona y cultivo — el punto de partida para diagnosticar lotes sin mover una sola variable.',
    bullets: [
      'Basado en referencias científicas y ensayos regionales',
      'Ajustado a cultivo y zona agroecológica',
      'Diagnóstico inmediato desde la primera campaña',
    ],
  },
  {
    id: 'brechas-inteligentes',
    EyebrowIcon: FaBrain,
    Chart: ChartGroupedBars,
    chartColors: [],
    eyebrow: 'Machine Learning',
    eyebrowClass: 'rp-eyebrow--emerald',
    accentClass: 'rp-mod-emerald',
    title: 'Brechas Inteligentes',
    lead:
      'Calculadas con modelos de Machine Learning entrenados con datos históricos de tu zona.',
    description:
      'Se ajustan dinámicamente campaña a campaña, capturando patrones y sinergismos entre clima, suelo y manejo que la bibliografía tradicional no alcanza a ver.',
    bullets: [
      'Modelos entrenados con datos reales de tu zona',
      'Se ajustan campaña a campaña automáticamente',
      'Capturan sinergismos clima × suelo × manejo',
    ],
  },
  {
    id: 'pronostico',
    EyebrowIcon: FaCloudSun,
    Chart: ChartAreaForecast,
    chartColors: ['#0ea5e9', '#6366f1'],
    eyebrow: 'Clima',
    eyebrowClass: 'rp-eyebrow--sky',
    accentClass: 'rp-mod-sky',
    title: 'Pronóstico Climático',
    lead:
      'Pronóstico de alta precisión para tu lote con análisis de estrés integrado.',
    description:
      'Conjuga múltiples fuentes de datos — estaciones meteorológicas y satélites — para darte visibilidad sobre lo que pasó y lo que viene, por lote, no por región.',
    bullets: [
      '15 días hacia atrás y 15 días hacia adelante, por lote',
      'Integra estaciones meteorológicas y satélites',
      'Módulo Vig IA integrado para análisis de estrés',
    ],
  },
  {
    id: 'vigia',
    EyebrowIcon: FaEye,
    Chart: ChartGauge,
    chartColors: ['#6366f1', '#4f46e5'],
    eyebrow: 'Inteligencia predictiva',
    eyebrowClass: 'rp-eyebrow--indigo',
    accentClass: 'rp-mod-indigo',
    title: 'Vig IA BioEstrés',
    lead: 'Anticipá lo invisible.',
    leadItalic: true,
    description:
      'Monitoreá, diagnosticá y anticipá escenarios de estrés en cultivos extensivos antes de que se manifiesten. Combina Inteligencia Artificial e Inteligencia Agronómica para alertas tempranas y decisiones preventivas sobre el manejo con bioinsumos.',
    bullets: [
      'Monitoreo de temperatura, humedad y DPV',
      'Proyección climática con IA y balance hídrico',
      'Alertas automáticas sobre estrés hídrico y térmico',
      'Acción preventiva antes de que el cultivo lo muestre',
    ],
  },
];

const ModulesSection = ({ eyebrow }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} className={`rp-modules ${isVisible ? 'rp-modules--visible' : ''}`}>
      <div className="rp-modules__header">
        {eyebrow && <div className="rp-modules__eyebrow">{eyebrow}</div>}
        <h2 className="rp-modules__title">Los módulos que <span className="rp-modules__title-accent">potencian tu campaña</span></h2>
        <p className="rp-modules__subtitle">
          Cinco módulos integrados que trabajan juntos para que cada decisión
          sobre tu campaña esté respaldada por datos.
        </p>
      </div>

      <div className="rp-modules__list">
        {MODULES.map((mod, i) => (
          <ModuleRow key={mod.id} mod={mod} reversed={i % 2 === 1} />
        ))}
      </div>
    </div>
  );
};

const ModuleRow = ({ mod, reversed }) => {
  const { EyebrowIcon, Chart, chartColors } = mod;

  return (
    <div className={`rp-module ${reversed ? 'rp-module--reversed' : ''}`}>
      <div className="rp-module__text">
        <span className={`rp-eyebrow ${mod.eyebrowClass}`}>
          <EyebrowIcon />
          {mod.eyebrow}
        </span>
        <h3 className="rp-module__heading">{mod.title}</h3>
        <p className="rp-module__lead">
          {mod.leadItalic ? <em>{mod.lead}</em> : mod.lead}
          {mod.description ? <>{' '}{mod.description}</> : null}
        </p>
        <ul className="rp-module__list">
          {mod.bullets.map((b) => (
            <li key={b}>
              <span className="rp-check"><FaCheck /></span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="rp-module__visual">
        <Chart color1={chartColors[0]} color2={chartColors[1]} />
      </div>
    </div>
  );
};

export default ModulesSection;
