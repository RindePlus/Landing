import { useState, useRef, useEffect } from 'react';
import {
  LuLayoutDashboard,
  LuTarget,
  LuCloudSun,
  LuSprout,
  LuFlaskConical,
} from 'react-icons/lu';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { conIdioma, useI18n } from '../i18n/I18nContext';
import './Functionalities.css';

/* ── Mini chart SVGs ──
   Series colors live in CSS (fx-s1/fx-s2/fx-f2/fx-grid/fx-dot/fx-stop-*),
   resolved from the panel's --fx-c1/--fx-c2 palette slots so they follow
   light/dark automatically. `var()` doesn't work in SVG presentation
   attributes, hence classes instead of stroke/fill attributes. */

/* Animación al entrar a un momento (Functionalities.css, «Dibujo de los
   gráficos»): cada pieza dice cómo aparece (fx-a-trazo, fx-a-crece-y,
   fx-a-crece-x, fx-a-baja, fx-a-aparece, fx-a-punto) y cuándo (--d). Los
   trazos usan pathLength="1" para dibujarse con un solo valor de guiones. */
const d = (s) => ({ '--d': `${s}s` });

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
      className="fx-a-aparece"
      style={d(1.1)}
      d="M20 96 C 60 52, 104 36, 150 33 C 162 32.5, 176 33.5, 186 35 L186 96 Z"
      fill="url(#fxDoseFill)"
    />
    <line className="fx-grid fx-a-aparece" x1="20" y1="96" x2="186" y2="96" strokeWidth="1" strokeDasharray="4 3" />
    <path className="fx-s1 fx-a-trazo" style={d(0.2)} pathLength="1" d="M20 96 C 60 52, 104 36, 150 33 C 162 32.5, 176 33.5, 186 35" strokeWidth="2.5" strokeLinecap="round" />
    <line className="fx-s2 fx-a-baja" style={d(1.4)} x1="118" y1="37.5" x2="118" y2="96" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle className="fx-dot fx-s2 fx-a-punto" style={d(1.3)} cx="118" cy="37.5" r="3.5" strokeWidth="2" />
    <text className="fx-caption fx-a-aparece" style={d(0.4)} x="100" y="125" textAnchor="middle">{t.doseCaption}</text>
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
          <text className="fx-label fx-a-aparece" style={d(0.1 + i * 0.15)} x={x0 - 8} y={20 + i * 25} textAnchor="end">{r.label}</text>
          <rect
            className={`${r.neutral ? 'fx-f-neutral' : 'fx-f1'} fx-a-crece-x`}
            style={d(0.2 + i * 0.15)}
            x={x0}
            y={8 + i * 25}
            width={r.w}
            height="16"
            rx="3"
            opacity={r.o}
          />
        </g>
      ))}
      {/* La brecha: aparece después de las barras, marcada desde lo cosechado. */}
      <g className="fx-a-aparece" style={d(1.3)}>
        <rect className="fx-band-risk fx-band-risk--strong" x={cosechado} y="8" width={x0 + rows[0].w - cosechado} height="16" rx="3" />
      </g>
      <line className="fx-s2 fx-a-baja" style={d(1.1)} x1={cosechado} y1="4" x2={cosechado} y2="74" strokeWidth="1.5" strokeDasharray="3 3" />
      <text className="fx-caption fx-a-aparece" style={d(0.4)} x="100" y="125" textAnchor="middle">{t.gapCaption}</text>
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
    <path className="fx-s1 fx-a-trazo" style={d(0.2)} pathLength="1" d="M12 80 L40 60 L68 65 L96 45" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path className="fx-a-aparece" style={d(0.8)} d="M12 80 L40 60 L68 65 L96 45 V100 H12 Z" fill="url(#fxPastFill)" />
    <line className="fx-grid fx-a-baja" style={d(0.9)} x1="96" y1="20" x2="96" y2="100" strokeWidth="1" strokeDasharray="4 3" />
    {/* El pronóstico va punteado: aparece de a poco en vez de trazarse
        (el trazo pisaría los guiones, y estirarlo deforma el quiebre). */}
    <path className="fx-s2 fx-a-aparece fx-a-lento" style={d(1.1)} d="M96 45 L124 35 L152 50 L180 28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4" />
    <path className="fx-a-aparece" style={d(1.6)} d="M96 45 L124 35 L152 50 L180 28 V100 H96 Z" fill="url(#fxFutureFill)" />
    <text className="fx-label fx-a-aparece" style={d(0.9)} x="100" y="14">{t.today}</text>
    <text className="fx-caption fx-a-aparece" style={d(0.4)} x="100" y="125" textAnchor="middle">{t.forecastCaption}</text>
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
    {/* Las franjas de riesgo aparecen de a una, de alto a bajo. */}
    <g className="fx-a-aparece" style={d(0.1)}><rect className="fx-band-risk" x="16" y="16" width="62" height="86" /></g>
    <g className="fx-a-aparece" style={d(0.3)}><rect className="fx-band-warn" x="78" y="16" width="46" height="86" /></g>
    <g className="fx-a-aparece" style={d(0.5)}><rect className="fx-band-safe" x="124" y="16" width="62" height="86" /></g>
    <line className="fx-grid fx-a-aparece" style={d(0.2)} x1="16" y1="58" x2="186" y2="58" strokeWidth="1" strokeDasharray="4 3" />
    <line className="fx-grid" x1="16" y1="102" x2="186" y2="102" strokeWidth="0.8" />
    <path className="fx-s1 fx-a-trazo" style={d(0.4)} pathLength="1" d="M20 24 C 44 28, 62 40, 82 58 C 102 76, 130 90, 182 96" strokeWidth="2.5" strokeLinecap="round" />
    <line className="fx-s2 fx-a-baja" style={d(1.6)} x1="138" y1="24" x2="138" y2="102" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle className="fx-dot fx-s2 fx-a-punto" style={d(1.5)} cx="138" cy="90" r="3.5" strokeWidth="2" />
    <text className="fx-caption fx-a-aparece" style={d(0.4)} x="100" y="125" textAnchor="middle">{t.residueCaption}</text>
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
            <rect className="fx-f-neutral fx-a-crece-y" style={d(0.2 + i * 0.2)} x={x} y={floor - z.base} width="18" height={z.base} rx="3" opacity="0.55" />
            <rect className="fx-f1 fx-a-crece-y" style={d(0.35 + i * 0.2)} x={x + 22} y={floor - z.pot} width="18" height={z.pot} rx="3" />
            <text className="fx-label fx-a-aparece" style={d(0.1 + i * 0.2)} x={x + 20} y={floor + 11} textAnchor="middle">{t.zones[i]}</text>
          </g>
        );
      })}
      <text className="fx-caption fx-a-aparece" style={d(0.4)} x="100" y="125" textAnchor="middle">{t.potentialCaption}</text>
    </svg>
  );
};


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

// Cuánto queda cada momento en pantalla cuando avanza solo. El avance lo
// marca la barra del botón activo: al terminar su animación pasa al
// siguiente (animationend), así barra y cambio nunca se desfasan.
const AUTO_MS = 30000;
// Si la persona eligió un momento, el avance automático se frena; vuelve
// después de este tiempo sin que toque otro botón de la sección.
const REANUDAR_MS = 60000;

const num = (i) => String(i + 1).padStart(2, '0');

/* ── Panel: el contenido del momento elegido ── */

const FunctionalityPanel = ({ item, index, activo }) => {
  const { Chart, palette } = item;
  const text = useI18n().dict.fx.panels[item.id];

  return (
    <article
      id={`rp-fx-panel-${item.id}`}
      role="tabpanel"
      aria-labelledby={`rp-fx-tab-${item.id}`}
      className={`rp-fx__panel rp-fx__panel--${palette}${activo ? ' is-active' : ''}`}
      inert={!activo}
    >
      {/* El nombre ya está en el botón; acá se ve sólo en celular, donde
          los botones muestran nada más que el momento. */}
      <p className="rp-fx__moment">
        <span className="rp-fx__moment-num">{num(index)}</span>
        {text.tag}
      </p>
      <h3 className="rp-fx__name">{text.name}</h3>
      {/* Texto a la izquierda (descripción y viñetas) y el gráfico a la
          derecha, de todo el alto: así el texto llena lo que mide el
          gráfico y no quedan huecos en los momentos con menos texto. */}
      <div className="rp-fx__body">
        <div className="rp-fx__texto">
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

/* ── Section: botones a la izquierda (arriba en celular), contenido a la
   derecha. Avanza solo mientras la sección está en pantalla; si la persona
   elige un momento, se frena y vuelve tras REANUDAR_MS sin otro toque. ── */

const Functionalities = () => {
  const t = useI18n().dict.fx;
  const [headRef, headVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
  const tabsRef = useRef([]);
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [enVista, setEnVista] = useState(false);
  // Ya se vio una vez: recién ahí se dibuja el gráfico del primer momento.
  const [visto, setVisto] = useState(false);
  const cajaRef = useRef(null);
  const reducido = useRef(false);
  const reanudar = useRef(0);

  // Sin avance automático con reduced-motion.
  useEffect(() => {
    reducido.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducido.current) setAuto(false);
    return () => window.clearTimeout(reanudar.current);
  }, []);

  // La barra sólo corre con la sección en pantalla.
  useEffect(() => {
    const caja = cajaRef.current;
    if (!caja || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => {
      setEnVista(e.isIntersecting);
      if (e.isIntersecting) setVisto(true);
    }, { threshold: 0.35 });
    io.observe(caja);
    return () => io.disconnect();
  }, []);

  const elegir = (i, foco = false) => {
    setAuto(false);
    window.clearTimeout(reanudar.current);
    if (!reducido.current) reanudar.current = window.setTimeout(() => setAuto(true), REANUDAR_MS);
    setActive(i);
    if (foco) tabsRef.current[i]?.focus();
  };

  // Flechas, Inicio y Fin entre los botones (patrón de pestañas).
  const onKeyDown = (e) => {
    const paso = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    let i = null;
    if (paso) i = (active + paso + COUNT) % COUNT;
    else if (e.key === 'Home') i = 0;
    else if (e.key === 'End') i = COUNT - 1;
    if (i === null) return;
    e.preventDefault();
    elegir(i, true);
  };

  // En celular los botones van en una fila que se desliza: el activo
  // siempre a la vista (sólo mueve la fila, no la página).
  useEffect(() => {
    const tab = tabsRef.current[active];
    const fila = tab?.parentElement;
    if (!tab || !fila || fila.scrollWidth <= fila.clientWidth) return;
    fila.scrollTo({ left: tab.offsetLeft - (fila.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' });
  }, [active]);

  return (
    <section id="funcionalidades" className="rp-fx-section">
      <div ref={headRef} className={`rp-fx__head ${headVisible ? 'is-visible' : ''}`}>
        <h2 className="rp-fx__title">{t.title}</h2>
        <p className="rp-fx__subtitle">{t.subtitle}</p>
      </div>

      <div
        ref={cajaRef}
        className={`rp-fx${visto ? ' is-visto' : ''}${auto ? ' is-auto' : ''}${auto && enVista ? ' is-corriendo' : ''}`}
        style={{ '--fx-auto': `${AUTO_MS}ms` }}
      >
        <div className="rp-fx__tabs" role="tablist" aria-label={t.momentos} aria-orientation="vertical">
          {FUNCTIONALITIES.map((it, i) => {
            const text = t.panels[it.id];
            const activo = i === active;
            return (
              <button
                key={it.id}
                ref={(el) => { tabsRef.current[i] = el; }}
                id={`rp-fx-tab-${it.id}`}
                type="button"
                role="tab"
                aria-selected={activo}
                aria-controls={`rp-fx-panel-${it.id}`}
                tabIndex={activo ? 0 : -1}
                className={`rp-fx__tab rp-fx__panel--${it.palette}${activo ? ' is-active' : ''}`}
                onClick={() => elegir(i)}
                onKeyDown={onKeyDown}
              >
                <span className="rp-fx__tab-num">{num(i)}</span>
                <span className="rp-fx__tab-text">
                  <span className="rp-fx__tab-tag">{text.tag}</span>
                  <span className="rp-fx__tab-name">{text.name}</span>
                </span>
                {activo && auto && (
                  <span
                    key={active}
                    className="rp-fx__tab-barra"
                    aria-hidden="true"
                    onAnimationEnd={() => setActive((a) => (a + 1) % COUNT)}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Los cinco paneles en la misma celda: la caja toma el alto del más
            largo y al cambiar de momento no salta nada. */}
        <div className="rp-fx__panels">
          {FUNCTIONALITIES.map((it, i) => (
            <FunctionalityPanel key={it.id} item={it} index={i} activo={i === active} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default conIdioma(Functionalities);
