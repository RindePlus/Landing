import { useState, useRef, useEffect } from 'react';
import {
  LuLayoutDashboard,
  LuTarget,
  LuCloudSun,
  LuEye,
  LuCheck,
  LuPlus,
  LuArrowLeft,
  LuArrowRight,
} from 'react-icons/lu';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Functionalities.css';

/* ── Mini chart SVGs ──
   Series colors live in CSS (fx-s1/fx-s2/fx-f2/fx-grid/fx-dot/fx-stop-*),
   resolved from the panel's --fx-c1/--fx-c2 palette slots so they follow
   light/dark automatically. `var()` doesn't work in SVG presentation
   attributes, hence classes instead of stroke/fill attributes. */

const ChartDashboard = () => (
  <svg viewBox="0 0 200 120" fill="none" className="rp-fx__chart">
    <defs>
      <linearGradient id="fxDashArea" x1="0" y1="0" x2="0" y2="1">
        <stop className="fx-stop-1" offset="0%" stopOpacity="0.25" />
        <stop className="fx-stop-1" offset="100%" stopOpacity="0" />
      </linearGradient>
    </defs>
    <line className="fx-grid" x1="20" y1="24" x2="190" y2="24" strokeWidth="0.8" />
    <line className="fx-grid" x1="20" y1="48" x2="190" y2="48" strokeWidth="0.8" />
    <line className="fx-grid" x1="20" y1="72" x2="190" y2="72" strokeWidth="0.8" />
    <line className="fx-grid" x1="20" y1="96" x2="190" y2="96" strokeWidth="0.8" />
    <path className="fx-s1" d="M20 82 L54 60 L88 68 L122 38 L156 44 L190 22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 82 L54 60 L88 68 L122 38 L156 44 L190 22 V96 H20 Z" fill="url(#fxDashArea)" />
    <rect className="fx-f2" x="46" y="70" width="16" height="26" rx="3" opacity="0.18" />
    <rect className="fx-f2" x="80" y="58" width="16" height="38" rx="3" opacity="0.18" />
    <rect className="fx-f2" x="114" y="50" width="16" height="46" rx="3" opacity="0.18" />
    <rect className="fx-f2" x="148" y="42" width="16" height="54" rx="3" opacity="0.18" />
    <circle className="fx-dot fx-s1" cx="54" cy="60" r="3.5" strokeWidth="2" />
    <circle className="fx-dot fx-s1" cx="122" cy="38" r="3.5" strokeWidth="2" />
    <circle className="fx-dot fx-s2" cx="190" cy="22" r="3.5" strokeWidth="2" />
  </svg>
);

const ChartAreaForecast = () => (
  <svg viewBox="0 0 200 120" fill="none" className="rp-fx__chart">
    <defs>
      <linearGradient id="fxPastFill" x1="0" y1="0" x2="0" y2="1">
        <stop className="fx-stop-1" offset="0%" stopOpacity="0.3" />
        <stop className="fx-stop-1" offset="100%" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="fxFutureFill" x1="0" y1="0" x2="0" y2="1">
        <stop className="fx-stop-2" offset="0%" stopOpacity="0.15" />
        <stop className="fx-stop-2" offset="100%" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path className="fx-s1" d="M12 80 L40 60 L68 65 L96 45" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 80 L40 60 L68 65 L96 45 V110 H12 Z" fill="url(#fxPastFill)" />
    <line className="fx-grid" x1="96" y1="8" x2="96" y2="110" strokeWidth="1" strokeDasharray="4 3" />
    <path className="fx-s2" d="M96 45 L124 35 L152 50 L180 28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4" />
    <path d="M96 45 L124 35 L152 50 L180 28 V110 H96 Z" fill="url(#fxFutureFill)" />
  </svg>
);

const ChartGauge = () => (
  <svg viewBox="0 0 200 130" fill="none" className="rp-fx__chart">
    <path className="fx-grid" d="M30 100 A70 70 0 0 1 170 100" strokeWidth="12" strokeLinecap="round" fill="none" />
    <path className="fx-s1" d="M30 100 A70 70 0 0 1 130 34" strokeWidth="12" strokeLinecap="round" fill="none" />
    <circle className="fx-f2" cx="100" cy="100" r="6" />
    <line className="fx-s2" x1="100" y1="100" x2="122" y2="44" strokeWidth="2.5" strokeLinecap="round" />
    <text x="100" y="125" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" fontFamily="var(--font-heading)">Riesgo medio</text>
  </svg>
);

/* ── Campo continuo — paisaje de lomas que abarca el ancho COMPLETO del
   track (los 4 paneles), anclado abajo. Como vive adentro de .rp-fx__track,
   viaja 1:1 con el translate del scroll-jack (y con el swipe nativo del
   fallback) sin tocar el JS: el campo "pasa" de una funcionalidad a la otra
   sin cortes. Verde calmo vía --gh-detail-green (flipea solo en dark).
   viewBox 2240 = 4 × 560 y preserveAspectRatio="none" para estirar de punta
   a punta; los trazos usan non-scaling-stroke para no engrosarse. ── */

const FxField = () => (
  // --fx-count dimensiona el campo al ancho de contenido del track
  // (COUNT × 100vw): con left/right:0 quedaría en el ancho de layout (100vw)
  // y el paisaje se cortaría al pasar al segundo panel.
  <div className="rp-fx__field" aria-hidden="true" style={{ '--fx-count': COUNT }}>
    <svg viewBox="0 0 2240 300" fill="none" preserveAspectRatio="none" focusable="false">
      {/* El color termina EXACTO en la tercera línea (cresta frontal):
          fxFieldClip recorta los rellenos en esa cresta, así ni el degradé
          ni ningún fondo pasan por debajo. La loma frontal queda solo como
          línea (su relleno viviría entero bajo la cresta → se eliminó). */}
      <defs>
        <linearGradient id="fxFieldBack" x1="0" y1="0" x2="0" y2="1">
          <stop className="fx-field-stop" offset="0%" stopOpacity="0.1" />
          <stop className="fx-field-stop" offset="60%" stopOpacity="0.05" />
          <stop className="fx-field-stop" offset="100%" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fxFieldMid" x1="0" y1="0" x2="0" y2="1">
          <stop className="fx-field-stop" offset="0%" stopOpacity="0.16" />
          <stop className="fx-field-stop" offset="60%" stopOpacity="0.08" />
          <stop className="fx-field-stop" offset="100%" stopOpacity="0" />
        </linearGradient>
        <clipPath id="fxFieldClip">
          {/* región por encima de la cresta frontal (la cresta, recorrida al revés) */}
          <path d="M0 0 H2240 V222 C 2160 226, 2060 218, 1920 234 C 1760 256, 1600 218, 1440 238 C 1280 260, 1120 214, 960 236 C 800 258, 640 216, 480 238 C 320 262, 160 214, 0 240 Z" />
        </clipPath>
      </defs>

      {/* rellenos, recortados en la tercera línea */}
      <g clipPath="url(#fxFieldClip)">
        <path
          d="M0 96 C 140 64, 280 128, 420 100 C 560 74, 700 118, 840 92 C 980 66, 1120 122, 1260 96 C 1400 72, 1540 116, 1680 88 C 1820 62, 1960 112, 2100 92 C 2150 85, 2200 83, 2240 86 V300 H0 Z"
          fill="url(#fxFieldBack)"
        />
        <path
          d="M0 172 C 150 140, 300 196, 450 168 C 600 142, 750 190, 900 164 C 1050 140, 1200 194, 1350 168 C 1500 144, 1650 188, 1800 162 C 1950 138, 2100 182, 2240 158 V300 H0 Z"
          fill="url(#fxFieldMid)"
        />
      </g>

      {/* crestas — fuera del clip para que la 3ª línea conserve su trazo completo */}
      <path
        className="fx-field-line"
        d="M0 96 C 140 64, 280 128, 420 100 C 560 74, 700 118, 840 92 C 980 66, 1120 122, 1260 96 C 1400 72, 1540 116, 1680 88 C 1820 62, 1960 112, 2100 92 C 2150 85, 2200 83, 2240 86"
        strokeWidth="1.25"
        strokeOpacity="0.25"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="fx-field-line"
        d="M0 172 C 150 140, 300 196, 450 168 C 600 142, 750 190, 900 164 C 1050 140, 1200 194, 1350 168 C 1500 144, 1650 188, 1800 162 C 1950 138, 2100 182, 2240 158"
        strokeWidth="1.5"
        strokeOpacity="0.35"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="fx-field-line"
        d="M0 240 C 160 214, 320 262, 480 238 C 640 216, 800 258, 960 236 C 1120 214, 1280 260, 1440 238 C 1600 218, 1760 256, 1920 234 C 2060 218, 2160 226, 2240 222"
        strokeWidth="1.75"
        strokeOpacity="0.45"
        vectorEffect="non-scaling-stroke"
      />

      {/* curvas de nivel salpicadas en la franja entre la 2ª y la 3ª línea
          (debajo de la 3ª ya no hay nada que las acompañe) */}
      <path className="fx-field-line" d="M470 214 C 510 192, 590 192, 630 214" strokeWidth="1.25" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
      <path className="fx-field-line" d="M495 221 C 525 205, 575 205, 605 221" strokeWidth="1.25" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
      <path className="fx-field-line" d="M1210 210 C 1250 188, 1330 188, 1370 210" strokeWidth="1.25" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
      <path className="fx-field-line" d="M1235 217 C 1265 201, 1315 201, 1345 217" strokeWidth="1.25" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
      <path className="fx-field-line" d="M1880 216 C 1920 194, 2000 194, 2040 216" strokeWidth="1.25" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
      <path className="fx-field-line" d="M1905 223 C 1935 207, 1985 207, 2015 223" strokeWidth="1.25" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
    </svg>
  </div>
);

/* ── Data ── */

const FUNCTIONALITIES = [
  {
    id: 'analisis',
    Icon: LuLayoutDashboard,
    Chart: ChartDashboard,
    palette: 'blue',
    tag: 'Dashboard',
    name: 'Análisis de Campaña',
    description:
      'Todo tu historial productivo, todos tus lotes y todas tus variables en un solo lugar. Compará campañas, cruzá variables y entendé qué pasó en cada ambiente y por qué — sin planillas sueltas ni fuentes desconectadas.',
    bullets: [
      'Análisis de datos históricos de tu campo',
      'Monitoreo de clima y variables de tu zona',
      'Visualización de rendimientos y tendencias',
      'Comparación entre lotes, campos y campañas',
    ],
    problem:
      'Los datos de clima, suelo, ambientes e históricos viven en fuentes distintas y desconectadas de la decisión, y ordenarlos a mano te consume horas cada campaña.',
    gain:
      'Dejás de armar planillas: todo queda integrado y comparable en minutos, no en días, con la historia completa de cada lote siempre a mano.',
  },
  {
    id: 'brechas',
    Icon: LuTarget,
    tag: 'Diagnóstico',
    name: 'Brechas de rendimiento',
    dual: true,
    sections: [
      {
        id: 'estandar',
        tab: 'Estándar',
        subtag: 'Bibliografía',
        subname: 'Brechas Estándar',
        description:
          'El rendimiento potencial de tu zona y cultivo según bibliografía científica, ensayos regionales y referencias técnicas. El punto de partida para diagnosticar cada lote.',
        bullets: [
          'Basado en referencias científicas y ensayos regionales',
          'Ajustado a tu cultivo y zona agroecológica',
          'Diagnóstico inmediato desde la primera campaña',
        ],
        problem:
          'Sabés que hay una brecha, pero no cuánta ni por qué: a nivel país es del 41% en trigo y maíz, y del 31% en soja, y sin un número concreto no hay plan.',
        gain:
          'Un diagnóstico inmediato desde la primera campaña, sin mover una sola variable, y una meta clara hacia dónde apuntar cada lote.',
      },
      {
        id: 'inteligentes',
        tab: 'Inteligentes',
        subtag: 'Machine Learning',
        subname: 'Brechas Inteligentes',
        description:
          'Brechas calculadas con modelos de Machine Learning entrenados con datos históricos de tu zona. Se ajustan campaña a campaña y capturan lo que la bibliografía no ve.',
        bullets: [
          'Modelos entrenados con datos reales de tu zona',
          'Se ajustan campaña a campaña automáticamente',
          'Capturan sinergismos clima × suelo × manejo',
        ],
        problem:
          'La bibliografía tradicional no captura los sinergismos entre clima, suelo y manejo de TU lote, y por eso subestima o infla la brecha real.',
        gain:
          'Precisión que mejora con el tiempo: entendés la brecha real de cada ambiente y afinás las decisiones campaña tras campaña.',
      },
    ],
  },
  {
    id: 'pronostico',
    Icon: LuCloudSun,
    Chart: ChartAreaForecast,
    palette: 'teal',
    tag: 'Clima',
    name: 'Pronóstico Climático',
    description:
      'Pronóstico de alta precisión por lote — 15 días hacia atrás y 15 hacia adelante — que conjuga estaciones meteorológicas y satélites. Visibilidad real de lo que pasó y de lo que viene, por lote y no por región.',
    bullets: [
      '15 días hacia atrás y 15 hacia adelante, por lote',
      'Integra estaciones meteorológicas y satélites',
      'Análisis de estrés integrado a la previsión',
      'Datos por lote, no promedios de región',
    ],
    problem:
      'Los pronósticos por región no alcanzan para decidir a nivel de lote: llegan tarde o no representan lo que realmente pasa en tu campo.',
    gain:
      'Anticipás ventanas críticas y planificás labores con datos de TU lote, no de la región, para no perder los días que marcan la diferencia.',
  },
  {
    id: 'vigia',
    Icon: LuEye,
    Chart: ChartGauge,
    palette: 'amber',
    tag: 'Inteligencia predictiva',
    name: 'Vig IA BioEstrés',
    description:
      'Monitoreá, diagnosticá y anticipá el estrés hídrico y térmico antes de que se manifieste. Combina Inteligencia Artificial e Inteligencia Agronómica para generar alertas tempranas y decisiones preventivas sobre el manejo con bioinsumos.',
    bullets: [
      'Monitoreo de temperatura, humedad y DPV',
      'Proyección climática con IA y balance hídrico',
      'Alertas automáticas sobre estrés hídrico y térmico',
      'Acción preventiva antes de que el cultivo lo muestre',
    ],
    problem:
      'El cultivo muestra el estrés cuando ya perdiste rinde: para cuando lo ves a campo, reaccionás tarde y el daño ya está hecho.',
    gain:
      'Recibís alertas tempranas para actuar de forma preventiva, proteger el rendimiento y aplicar los bioinsumos en el momento justo.',
  },
];

const COUNT = FUNCTIONALITIES.length;

/* ── Reusable flip block (only the paragraph flips) ── */

const FlipBlock = ({ description, bullets, problem, gain }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`rp-fx__flip ${flipped ? 'is-flipped' : ''}`}>
      <div className="rp-fx__flip-inner">
        {/* FRONT — description + bullets */}
        <div className="rp-fx__flip-face rp-fx__flip-face--front" aria-hidden={flipped}>
          <p className="rp-fx__desc">{description}</p>
          <ul className="rp-fx__bullets">
            {bullets.map((b) => (
              <li key={b}>
                <span className="rp-fx__check"><LuCheck /></span>
                {b}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="rp-fx__more"
            aria-expanded={flipped}
            tabIndex={flipped ? -1 : 0}
            onClick={() => setFlipped(true)}
          >
            <LuPlus />
            Más información
          </button>
        </div>

        {/* BACK — problema + mejora */}
        <div className="rp-fx__flip-face rp-fx__flip-face--back" aria-hidden={!flipped}>
          <div className="rp-fx__detail rp-fx__detail--problem">
            <span className="rp-fx__detail-label">El problema que resuelve</span>
            <p className="rp-fx__detail-text">{problem}</p>
          </div>
          <div className="rp-fx__detail rp-fx__detail--gain">
            <span className="rp-fx__detail-label">La mejora real</span>
            <p className="rp-fx__detail-text">{gain}</p>
          </div>
          <button
            type="button"
            className="rp-fx__back-btn"
            tabIndex={flipped ? 0 : -1}
            onClick={() => setFlipped(false)}
          >
            <LuArrowLeft />
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Dual panel (Brechas) — two sections side by side on desktop,
   a segmented switch (one at a time) on mobile ── */

const DualPanel = ({ item }) => {
  const [activeSec, setActiveSec] = useState(0);

  return (
    <article className="rp-fx__panel rp-fx__panel--dual">
      <div className="rp-fx__panel-inner rp-fx__panel-inner--dual">
        <div className="rp-fx__dual-head">
          <h3 className="rp-fx__name">{item.name}</h3>
          {/* mobile-only switch between the two brechas */}
          <div className="rp-fx__seg" role="tablist" aria-label="Tipo de brecha">
            {item.sections.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === activeSec}
                className={`rp-fx__seg-btn ${i === activeSec ? 'is-active' : ''}`}
                onClick={() => setActiveSec(i)}
              >
                {s.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="rp-fx__dual-grid">
          {item.sections.map((s, i) => (
            <div
              key={s.id}
              className={`rp-fx__dual-section ${i === activeSec ? 'is-active' : ''}`}
            >
              <span className="rp-fx__subtag">{s.subtag}</span>
              <h4 className="rp-fx__subname">{s.subname}</h4>
              <FlipBlock
                description={s.description}
                bullets={s.bullets}
                problem={s.problem}
                gain={s.gain}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

/* ── Panel ── */

const FunctionalityPanel = ({ item }) => {
  const { Chart, palette } = item;

  // Merged "Brechas de rendimiento"
  if (item.dual) return <DualPanel item={item} />;

  // Standard — text column + chart
  return (
    <article className={`rp-fx__panel${palette ? ` rp-fx__panel--${palette}` : ''}`}>
      <div className="rp-fx__panel-inner">
        <div className="rp-fx__text">
          <h3 className="rp-fx__name">{item.name}</h3>
          <FlipBlock
            description={item.description}
            bullets={item.bullets}
            problem={item.problem}
            gain={item.gain}
          />
        </div>

        <div className="rp-fx__visual">
          <Chart />
        </div>
      </div>
    </article>
  );
};

/* ── Section (pinned horizontal scroll) ── */

const Functionalities = () => {
  const [headRef, headVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const isJack = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(min-width: 768px)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let raf = 0;

    const setSize = () => {
      if (isJack()) {
        const extra = Math.max(0, track.scrollWidth - window.innerWidth);
        wrapper.style.height = `${window.innerHeight + extra}px`;
        // The pinned stage fills the viewport but its content is top-aligned,
        // so tall screens leave dead space under the panels. Pull the next
        // section up over that dead zone (keeping 80px of breathing room) so
        // the hand-off out of the scroll-jack reads like a normal section gap.
        const sticky = track.parentElement;
        const stickyTop = sticky.getBoundingClientRect().top;
        let contentBottom = 0;
        track.querySelectorAll('.rp-fx__text > *, .rp-fx__visual > *').forEach((el) => {
          contentBottom = Math.max(contentBottom, el.getBoundingClientRect().bottom - stickyTop);
        });
        const dead = contentBottom > 0 ? sticky.offsetHeight - contentBottom : 0;
        wrapper.style.marginBottom = `-${Math.max(0, Math.round(dead - 80))}px`;
      } else {
        wrapper.style.height = '';
        wrapper.style.marginBottom = '';
        track.style.transform = '';
      }
    };

    const update = () => {
      if (!isJack()) return;
      const total = wrapper.offsetHeight - window.innerHeight;
      const progress = total > 0
        ? Math.min(1, Math.max(0, -wrapper.getBoundingClientRect().top / total))
        : 0;
      const maxX = track.scrollWidth - window.innerWidth;
      track.style.transform = `translate3d(${-progress * maxX}px,0,0)`;
      setActive(Math.round(progress * (COUNT - 1)));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      setSize();
      update();
    };
    const onTrackScroll = () => {
      if (isJack()) return;
      const w = track.children[0]?.offsetWidth || 1;
      setActive(Math.min(COUNT - 1, Math.round(track.scrollLeft / w)));
    };

    setSize();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    track.addEventListener('scroll', onTrackScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      track.removeEventListener('scroll', onTrackScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (i) => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;
    if (isJack()) {
      const total = wrapper.offsetHeight - window.innerHeight;
      const y = wrapper.offsetTop + (i / (COUNT - 1)) * total;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      const panel = track.children[i];
      if (panel) track.scrollTo({ left: panel.offsetLeft, behavior: 'smooth' });
    }
  };

  return (
    <section id="funcionalidades" className="rp-fx-section">
      <div ref={headRef} className={`rp-fx__head ${headVisible ? 'is-visible' : ''}`}>
        <div className="rp-num-eyebrow rp-fx__eyebrow">Funcionalidades</div>
        <h2 className="rp-fx__title">
          Funcionalidades que{' '}
          <span className="rp-fx__title-accent">trabajan por tu campaña</span>
        </h2>
        <p className="rp-fx__subtitle">
          Deslizá para recorrerlas. En cada una, tocá{' '}
          <strong>“Más información”</strong> para ver qué problema resuelve y la
          mejora que genera.
        </p>
      </div>

      <div className="rp-fx" ref={wrapperRef}>
        <div className="rp-fx__sticky">
          <div className="rp-fx__topbar">
            <span className="rp-fx__count">
              <strong>{String(active + 1).padStart(2, '0')}</strong>
              <span className="rp-fx__count-sep">/</span>
              {String(COUNT).padStart(2, '0')}
            </span>
            <div className="rp-fx__dots">
              {FUNCTIONALITIES.map((it, i) => (
                <button
                  key={it.id}
                  type="button"
                  className={`rp-fx__dot ${i === active ? 'is-active' : ''}`}
                  aria-label={`Ir a ${it.name}`}
                  aria-current={i === active}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="rp-fx__hint"
              onClick={() => goTo((active + 1) % COUNT)}
              aria-label="Ver la siguiente funcionalidad"
            >
              Deslizá <LuArrowRight />
            </button>
          </div>

          {/* FxField va al final: goTo/onTrackScroll indexan track.children,
              así los paneles conservan los índices 0..COUNT-1 */}
          <div className="rp-fx__track" ref={trackRef}>
            {FUNCTIONALITIES.map((it) => (
              <FunctionalityPanel key={it.id} item={it} />
            ))}
            <FxField />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functionalities;
