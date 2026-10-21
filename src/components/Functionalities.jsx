import { useState, useRef, useEffect } from 'react';
import {
  LuLayoutDashboard,
  LuTarget,
  LuCloudSun,
  LuSprout,
  LuFlaskConical,
  LuArrowRight,
} from 'react-icons/lu';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { conIdioma, useI18n } from '../i18n/I18nContext';
import './Functionalities.css';

/* ── Mini chart SVGs ──
   Series colors live in CSS (fx-s1/fx-s2/fx-f2/fx-grid/fx-dot/fx-stop-*),
   resolved from the panel's --fx-c1/--fx-c2 palette slots so they follow
   light/dark automatically. `var()` doesn't work in SVG presentation
   attributes, hence classes instead of stroke/fill attributes. */

/* Curva de respuesta (Fertilizar): el rinde sube con la dosis y se aplana.
   El área sobre la línea punteada es lo que la dosis agrega al rinde base;
   el punto marca la dosis óptima económica, antes del techo, donde el
   último kilo todavía se paga. */
const ChartRespuestaDosis = () => {
  const t = useI18n().dict.fx.charts;
  return (
  <svg viewBox="0 0 200 130" fill="none" className="rp-fx__chart">
    <defs>
      <linearGradient id="fxDoseFill" x1="0" y1="0" x2="0" y2="1">
        <stop className="fx-stop-1" offset="0%" stopOpacity="0.28" />
        <stop className="fx-stop-1" offset="100%" stopOpacity="0.04" />
      </linearGradient>
    </defs>
    <path
      d="M20 96 C 60 52, 104 36, 150 33 C 162 32.5, 176 33.5, 186 35 L186 96 Z"
      fill="url(#fxDoseFill)"
    />
    <line className="fx-grid" x1="20" y1="96" x2="186" y2="96" strokeWidth="1" strokeDasharray="4 3" />
    <path className="fx-s1" d="M20 96 C 60 52, 104 36, 150 33 C 162 32.5, 176 33.5, 186 35" strokeWidth="2.5" strokeLinecap="round" />
    <line className="fx-s2" x1="118" y1="37.5" x2="118" y2="96" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle className="fx-dot fx-s2" cx="118" cy="37.5" r="3.5" strokeWidth="2" />
    <text className="fx-caption" x="100" y="125" textAnchor="middle">{t.doseCaption}</text>
  </svg>
  );
};

/* Los cuatro rindes del cierre (Cerrar y aprender). La brecha es el tramo
   del potencial que no se cosechó. Sin cifras: muestra la relación. */
const ChartCuatroRindes = () => {
  const t = useI18n().dict.fx.charts;
  const rows = [
    { w: 112, o: 0.3 },
    { w: 92, o: 0.55 },
    { w: 76, o: 1 },
    { w: 58, o: 0.55, neutral: true },
  ].map((r, i) => ({ ...r, label: t.fourYields[i] }));
  const x0 = 82;
  const cosechado = x0 + rows[2].w;
  return (
    <svg viewBox="0 0 200 130" fill="none" className="rp-fx__chart">
      {rows.map((r, i) => (
        <g key={r.w}>
          <text className="fx-label" x={x0 - 8} y={20 + i * 25} textAnchor="end">{r.label}</text>
          <rect
            className={r.neutral ? 'fx-f-neutral' : 'fx-f1'}
            x={x0}
            y={8 + i * 25}
            width={r.w}
            height="16"
            rx="3"
            opacity={r.o}
          />
        </g>
      ))}
      <rect className="fx-band-risk fx-band-risk--strong" x={cosechado} y="8" width={x0 + rows[0].w - cosechado} height="16" rx="3" />
      <line className="fx-s2" x1={cosechado} y1="4" x2={cosechado} y2="74" strokeWidth="1.5" strokeDasharray="3 3" />
      <text className="fx-caption" x="100" y="125" textAnchor="middle">{t.gapCaption}</text>
    </svg>
  );
};

const ChartAreaForecast = () => {
  const t = useI18n().dict.fx.charts;
  return (
  <svg viewBox="0 0 200 130" fill="none" className="rp-fx__chart">
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
    <path d="M12 80 L40 60 L68 65 L96 45 V100 H12 Z" fill="url(#fxPastFill)" />
    <line className="fx-grid" x1="96" y1="20" x2="96" y2="100" strokeWidth="1" strokeDasharray="4 3" />
    <path className="fx-s2" d="M96 45 L124 35 L152 50 L180 28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4" />
    <path d="M96 45 L124 35 L152 50 L180 28 V100 H96 Z" fill="url(#fxFutureFill)" />
    <text className="fx-label" x="100" y="14">{t.today}</text>
    <text className="fx-caption" x="100" y="125" textAnchor="middle">{t.forecastCaption}</text>
  </svg>
  );
};

/* Carry-over de herbicidas (Preparar el lote): el residuo decae con lluvias
   y riego y cruza las franjas de riesgo de fitotoxicidad alto/medio/bajo; la
   línea punteada marca cuándo el riesgo pasa a bajo para el cultivo que
   viene. Las franjas usan los tokens --gh-danger / --gh-detail-yellow-strong
   / --gh-detail-green (fx-band-*). */
const ChartResiduoHerbicida = () => {
  const t = useI18n().dict.fx.charts;
  return (
  <svg viewBox="0 0 200 130" fill="none" className="rp-fx__chart">
    <rect className="fx-band-risk" x="16" y="16" width="62" height="86" />
    <rect className="fx-band-warn" x="78" y="16" width="46" height="86" />
    <rect className="fx-band-safe" x="124" y="16" width="62" height="86" />
    <line className="fx-grid" x1="16" y1="58" x2="186" y2="58" strokeWidth="1" strokeDasharray="4 3" />
    <line className="fx-grid" x1="16" y1="102" x2="186" y2="102" strokeWidth="0.8" />
    <path className="fx-s1" d="M20 24 C 44 28, 62 40, 82 58 C 102 76, 130 90, 182 96" strokeWidth="2.5" strokeLinecap="round" />
    <line className="fx-s2" x1="138" y1="24" x2="138" y2="102" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle className="fx-dot fx-s2" cx="138" cy="90" r="3.5" strokeWidth="2" />
    <text className="fx-caption" x="100" y="125" textAnchor="middle">{t.residueCaption}</text>
  </svg>
  );
};

/* Rinde base y potencial por ambiente (Planificar): tres ambientes del lote,
   cada uno con su base (neutra) y su potencial. Sin cifras: muestra que el
   techo cambia de un ambiente a otro. */
const ChartPotencialAmbientes = () => {
  const t = useI18n().dict.fx.charts;
  const zones = [
    { base: 44, pot: 74 },
    { base: 38, pot: 58 },
    { base: 28, pot: 40 },
  ];
  const floor = 100;
  return (
    <svg viewBox="0 0 200 130" fill="none" className="rp-fx__chart">
      <line className="fx-grid" x1="16" y1={floor} x2="186" y2={floor} strokeWidth="0.8" />
      {zones.map((z, i) => {
        const x = 26 + i * 56;
        return (
          <g key={x}>
            <rect className="fx-f-neutral" x={x} y={floor - z.base} width="18" height={z.base} rx="3" opacity="0.55" />
            <rect className="fx-f1" x={x + 22} y={floor - z.pot} width="18" height={z.pot} rx="3" />
            <text className="fx-label" x={x + 20} y={floor + 11} textAnchor="middle">{t.zones[i]}</text>
          </g>
        );
      })}
      <text className="fx-caption" x="100" y="125" textAnchor="middle">{t.potentialCaption}</text>
    </svg>
  );
};

/* ── Campo continuo — paisaje de lomas que abarca el ancho COMPLETO del
   track (los 5 paneles), anclado abajo. Como vive adentro de .rp-fx__track,
   viaja 1:1 con el translate del scroll-jack (y con el swipe nativo del
   fallback) sin tocar el JS: el campo "pasa" de una funcionalidad a la otra
   sin cortes. Verde calmo vía --gh-detail-green (flipea solo en dark).
   viewBox 2800 = 5 × 560 y preserveAspectRatio="none" para estirar de punta
   a punta; los trazos usan non-scaling-stroke para no engrosarse. ── */

const FxField = () => (
  // --fx-count dimensiona el campo al ancho de contenido del track
  // (COUNT × 100vw): con left/right:0 quedaría en el ancho de layout (100vw)
  // y el paisaje se cortaría al pasar al segundo panel.
  <div className="rp-fx__field" aria-hidden="true" style={{ '--fx-count': COUNT }}>
    <svg viewBox="0 0 2800 300" fill="none" preserveAspectRatio="none" focusable="false">
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
          <path d="M0 0 H2800 V220 C 2660 224, 2540 218, 2400 236 C 2240 258, 2080 214, 1920 234 C 1760 256, 1600 218, 1440 238 C 1280 260, 1120 214, 960 236 C 800 258, 640 216, 480 238 C 320 262, 160 214, 0 240 Z" />
        </clipPath>
      </defs>

      {/* rellenos, recortados en la tercera línea */}
      <g clipPath="url(#fxFieldClip)">
        <path
          d="M0 96 C 140 64, 280 128, 420 100 C 560 74, 700 118, 840 92 C 980 66, 1120 122, 1260 96 C 1400 72, 1540 116, 1680 88 C 1820 62, 1960 112, 2100 92 C 2240 66, 2380 116, 2520 94 C 2610 80, 2710 78, 2800 82 V300 H0 Z"
          fill="url(#fxFieldBack)"
        />
        <path
          d="M0 172 C 150 140, 300 196, 450 168 C 600 142, 750 190, 900 164 C 1050 140, 1200 194, 1350 168 C 1500 144, 1650 188, 1800 162 C 1950 138, 2100 182, 2240 158 C 2380 134, 2520 180, 2660 156 C 2707 148, 2755 146, 2800 150 V300 H0 Z"
          fill="url(#fxFieldMid)"
        />
      </g>

      {/* crestas — fuera del clip para que la 3ª línea conserve su trazo completo */}
      <path
        className="fx-field-line"
        d="M0 96 C 140 64, 280 128, 420 100 C 560 74, 700 118, 840 92 C 980 66, 1120 122, 1260 96 C 1400 72, 1540 116, 1680 88 C 1820 62, 1960 112, 2100 92 C 2240 66, 2380 116, 2520 94 C 2610 80, 2710 78, 2800 82"
        strokeWidth="1.25"
        strokeOpacity="0.25"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="fx-field-line"
        d="M0 172 C 150 140, 300 196, 450 168 C 600 142, 750 190, 900 164 C 1050 140, 1200 194, 1350 168 C 1500 144, 1650 188, 1800 162 C 1950 138, 2100 182, 2240 158 C 2380 134, 2520 180, 2660 156 C 2707 148, 2755 146, 2800 150"
        strokeWidth="1.5"
        strokeOpacity="0.35"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="fx-field-line"
        d="M0 240 C 160 214, 320 262, 480 238 C 640 216, 800 258, 960 236 C 1120 214, 1280 260, 1440 238 C 1600 218, 1760 256, 1920 234 C 2080 214, 2240 258, 2400 236 C 2540 218, 2660 224, 2800 220"
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
      <path className="fx-field-line" d="M2500 210 C 2540 188, 2620 188, 2660 210" strokeWidth="1.25" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
      <path className="fx-field-line" d="M2525 217 C 2555 201, 2605 201, 2635 217" strokeWidth="1.25" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
    </svg>
  </div>
);

/* ── Data ── */

// Íconos, gráficos y paletas de los cinco momentos; los textos salen de
// dict.fx.panels[id].
const FUNCTIONALITIES = [
  { id: 'planificar', Icon: LuTarget, Chart: ChartPotencialAmbientes, palette: 'blue' },
  { id: 'preparar', Icon: LuFlaskConical, Chart: ChartResiduoHerbicida, palette: 'green' },
  { id: 'fertilizar', Icon: LuSprout, Chart: ChartRespuestaDosis, palette: 'amber' },
  { id: 'acompanar', Icon: LuCloudSun, Chart: ChartAreaForecast, palette: 'teal' },
  { id: 'cerrar', Icon: LuLayoutDashboard, Chart: ChartCuatroRindes, palette: 'blue' },
];

const COUNT = FUNCTIONALITIES.length;

/* ── Panel title — número y nombre del momento sobre la pregunta ── */

const PanelTitle = ({ item, index }) => (
  <>
    <p className="rp-fx__moment">
      <span className="rp-fx__moment-num">{String(index + 1).padStart(2, '0')}</span>
      {item.tag}
    </p>
    <h3 className="rp-fx__name">{item.name}</h3>
  </>
);

/* ── Panel ── */

const FunctionalityPanel = ({ item, index }) => {
  const { Chart, palette } = item;
  const text = useI18n().dict.fx.panels[item.id];

  // Text column + chart
  return (
    <article className={`rp-fx__panel${palette ? ` rp-fx__panel--${palette}` : ''}`}>
      <div className="rp-fx__panel-inner">
        <div className="rp-fx__text">
          <PanelTitle item={text} index={index} />
          <p className="rp-fx__desc">{text.description}</p>
          <ul className="rp-fx__bullets">
            {text.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
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
  const t = useI18n().dict.fx;
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
        <h2 className="rp-fx__title">{t.title}</h2>
        <p className="rp-fx__subtitle">{t.subtitle}</p>
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
                  aria-label={t.goTo(t.panels[it.id].name)}
                  aria-current={i === active}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="rp-fx__hint"
              onClick={() => goTo((active + 1) % COUNT)}
              aria-label={t.nextAria}
            >
              {t.next} <LuArrowRight />
            </button>
          </div>

          {/* FxField va al final: goTo/onTrackScroll indexan track.children,
              así los paneles conservan los índices 0..COUNT-1 */}
          <div className="rp-fx__track" ref={trackRef}>
            {FUNCTIONALITIES.map((it, i) => (
              <FunctionalityPanel key={it.id} item={it} index={i} />
            ))}
            <FxField />
          </div>
        </div>
      </div>
    </section>
  );
};

export default conIdioma(Functionalities);
