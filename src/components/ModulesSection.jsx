import { FaChartBar, FaBookOpen, FaBrain, FaCloudSun, FaEye, FaCheck } from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './pricing.css';
import './ModulesSection.css';

const MODULES = [
  {
    id: 'analisis',
    Icon: FaChartBar,
    EyebrowIcon: FaChartBar,
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
    Icon: FaBookOpen,
    EyebrowIcon: FaBookOpen,
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
    Icon: FaBrain,
    EyebrowIcon: FaBrain,
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
    Icon: FaCloudSun,
    EyebrowIcon: FaCloudSun,
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
    Icon: FaEye,
    EyebrowIcon: FaEye,
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

const ModulesSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} className={`rp-modules ${isVisible ? 'rp-modules--visible' : ''}`}>
      <div className="rp-modules__header">
        <h2 className="rp-modules__title">Qué hace la plataforma</h2>
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
  const { Icon, EyebrowIcon } = mod;

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
        <div className={`rp-module__card ${mod.accentClass}`}>
          <div className="rp-module__bar" />
          <div className="rp-module__soft-bg" />
          <div className="rp-module__dots" />
          <div className="rp-module__icon-wrap">
            <div className="rp-module__icon-glow" />
            <div className="rp-module__icon">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesSection;
