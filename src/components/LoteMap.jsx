import { LOTE_HERO } from './LotesMosaic';
import { AMB_ALTO, AMB_BAJO, AMB_MEDIO, BORDES, MAPA, NIVELES, nivelEn } from '../data/loteMapa';
import './LoteMap.css';

/* Lote de ejemplo del hero: un potrero con su mapa de ambientes (manchas de
   rojo a verde, en src/data/loteMapa.js), surcos de siembra y curvas de
   nivel.
   Es uno de los potreros del fondo (LOTE_HERO, en LotesMosaic.jsx): se
   dibuja en sus mismas coordenadas, así el script de HomeView.astro puede
   correr el fondo para que coincidan.

   Escenas: cada tanto pasa en el lote un momento de la campaña (planificar,
   preparar, fertilizar, acompañar, cerrar) y Rinde Plus responde con una
   notificación; entre escena y escena, a veces, cruza una ráfaga de viento.
   Acá están todas las capas, ocultas; src/scripts/escenasLote.js elige
   cuál corre (data-escena / data-clima en la figura) y LoteMap.css la
   anima. Qué representa cada una: doc/ANIMACION_LOTE.md.

   Colores en HomePage.css y LoteMap.css (tokens --rp-mapa-* y demás) para
   que flipeen en dark; `var()` no funciona en atributos de presentación
   SVG. */

const { d: LOTE, bbox } = LOTE_HERO;
// Margen para que el trazo del borde no se corte.
const PAD = 4;
const VIEWBOX = `${bbox.x - PAD} ${bbox.y - PAD} ${bbox.w + PAD * 2} ${bbox.h + PAD * 2}`;
// Los ambientes, las curvas y las escenas están dibujados en un lienzo de
// 520 × 430: se estiran sobre la caja del lote.
const LIENZO = `translate(${bbox.x} ${bbox.y}) scale(${bbox.w / 520} ${bbox.h / 430})`;

// Puntos de muestreo de suelo (Preparar): una grilla de 3 × 3.
const MUESTRAS = [110, 260, 410].flatMap((x, c) =>
  [92, 212, 332].map((y, r) => ({ x, y, i: c * 3 + r })),
);

// PRNG determinístico (mulberry32): la lluvia se dibuja siempre igual.
const rng = (seed) => () => {
  let t = (seed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const azar = rng(431);
const GOTAS = Array.from({ length: 28 }, (_, i) => ({
  x: Math.round(azar() * 560 - 20),
  y: Math.round(azar() * 430),
  d: Math.round(azar() * 5) / 10, // desfase de la caída, en s
  i,
}));

// Fertilizar: mapa de prescripción en celdas, como las de dosis variable
// que se cargan en la fertilizadora. Más dosis donde el ambiente rinde más
// (la dosis óptima económica sube con el rinde esperado). Las celdas se
// cargan de a columnas, como pasadas.
const CELDA = 40;
const DOSIS = { low2: 1, low: 1, mid: 1, high: 2, high2: 3 };
const CELDAS = Array.from({ length: 11 }, (_, f) =>
  Array.from({ length: 13 }, (_, c) => ({
    x: c * CELDA,
    y: f * CELDA,
    c,
    dosis: DOSIS[nivelEn(c * CELDA + CELDA / 2, f * CELDA + CELDA / 2)],
  })),
).flat();

// Pasadas de la cosechadora (Cerrar): diez franjas, una dirección cada una.
const PASADA_ALTO = 43;
const PASADAS = Array.from({ length: 10 }, (_, i) => ({ y: i * PASADA_ALTO, i }));
// El mapa de rinde que deja la cosecha: bloques por pasada, como los datos
// del monitor de rinde. Sigue al mapa de ambientes, con algo de ruido (un
// bloque cada tanto rinde un nivel más o menos), como en uno de verdad.
const BLOQUE = 26;
const azarRinde = rng(97);
const BLOQUES = PASADAS.flatMap(({ y }) =>
  Array.from({ length: 20 }, (_, c) => {
    const base = NIVELES.indexOf(nivelEn(c * BLOQUE + BLOQUE / 2, y + PASADA_ALTO / 2));
    const r = azarRinde();
    const salto = r < 0.1 ? 1 : r > 0.92 ? -1 : 0;
    const nivel = NIVELES[Math.min(NIVELES.length - 1, Math.max(0, base + salto))];
    return { x: c * BLOQUE, y, nivel };
  }),
);

// Ráfagas de viento: trazos que cruzan el lote.
const RAFAGAS = [
  'M-60 120 C 60 96, 140 146, 260 118 S 430 92, 580 116',
  'M-60 210 C 40 190, 160 236, 280 206 S 450 186, 580 204',
  'M-60 300 C 80 282, 170 322, 300 296 S 460 276, 580 292',
];

// Qué notificación corresponde a cada escena (Acompañar tiene una por clima).
const AVISOS = ['planificar', 'preparar', 'fertilizar', 'sequia', 'calor', 'lluvia', 'cerrar'];

const LoteMap = ({ aria, avisos }) => (
  <figure className="rp-lote">
    <svg
      className="rp-lote__map"
      viewBox={VIEWBOX}
      role="img"
      aria-label={aria}
    >
      <defs>
        <clipPath id="rpLoteClip">
          <path d={LOTE} />
        </clipPath>
        {/* surcos de siembra, levemente en diagonal */}
        <pattern
          id="rpLoteRows"
          width="9"
          height="9"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-6)"
        >
          <line className="rp-lote__row" x1="0" y1="0" x2="0" y2="9" />
        </pattern>
        {/* Barrido del análisis */}
        <linearGradient id="rpLoteBarrido" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" className="rp-lote__barrido-borde" />
          <stop offset="0.7" className="rp-lote__barrido-centro" />
          <stop offset="1" className="rp-lote__barrido-borde" />
        </linearGradient>
        {/* Suaviza apenas los bordes de las franjas del mapa de ambientes */}
        <filter id="rpMapaFundido" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        {/* Entrada: el mapa NDVI se revela detrás del barrido, con un borde
            suave. La máscara es una franja blanca→negra que se corre de
            izquierda a derecha (LoteMap.css, rp-lote-revelar), al mismo paso
            que el barrido de entrada. */}
        <linearGradient id="rpNdviBorde" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.44" stopColor="#ffffff" />
          <stop offset="0.56" stopColor="#000000" />
        </linearGradient>
        <mask id="rpNdviMascara" maskUnits="userSpaceOnUse" x="-40" y="-40" width="600" height="510">
          <rect className="rp-lote__revelado" x="-665" y="-40" width="1240" height="510" fill="url(#rpNdviBorde)" />
        </mask>
        {/* Cerrar: el mapa de rinde que deja la cosecha; cada pasada lo
            descubre en su franja. */}
        <pattern id="rpRindeMapa" x="0" y="0" width="520" height="430" patternUnits="userSpaceOnUse">
          {BLOQUES.map((b) => (
            <rect
              key={`${b.x}-${b.y}`}
              className={`rp-lote__rinde--${b.nivel}`}
              x={b.x}
              y={b.y}
              width={BLOQUE - 1}
              height={PASADA_ALTO - 1}
            />
          ))}
        </pattern>
      </defs>

      <g clipPath="url(#rpLoteClip)">
        <g transform={LIENZO}>
          {/* suelo pelado: lo que se ve antes de que el barrido revele el NDVI */}
          <rect className="rp-lote__suelo" x="-40" y="-40" width="600" height="510" />
          {/* mapa de ambientes (NDVI): alto de base y las franjas encima */}
          <g mask="url(#rpNdviMascara)">
            <g className="rp-lote__mapa" filter="url(#rpMapaFundido)">
              <rect className="rp-lote__mapa--high" x="-40" y="-40" width="600" height="510" />
              {MAPA.map(([nivel, d], i) => (
                <path key={i} className={`rp-lote__mapa--${nivel}`} d={d} />
              ))}
            </g>
          </g>
        </g>
        <rect x={bbox.x} y={bbox.y} width={bbox.w} height={bbox.h} fill="url(#rpLoteRows)" />

        <g transform={LIENZO}>
          {/* curvas de nivel */}
          <path className="rp-lote__contour" d="M20 210 C 120 180, 220 230, 330 200 C 410 178, 470 206, 520 190" />
          <path className="rp-lote__contour" d="M20 290 C 110 262, 200 318, 300 300 C 380 286, 450 312, 520 300" />
          <path className="rp-lote__contour" d="M60 120 C 160 104, 250 150, 360 124 C 420 110, 470 124, 520 116" />

          {/* Entrada: el barrido que revela el NDVI, una sola vez */}
          <rect className="rp-lote__escaneo" x="-90" y="-20" width="90" height="470" fill="url(#rpLoteBarrido)" />

          {/* ---- Escenas (ocultas hasta que el script las active) ---- */}

          {/* Planificar: los ambientes se marcan uno por uno */}
          <g className="rp-esc rp-esc--planificar">
            <path className="rp-esc__ambiente rp-esc__ambiente--1" d={AMB_ALTO} />
            <path className="rp-esc__ambiente rp-esc__ambiente--2" d={AMB_MEDIO} fillRule="evenodd" />
            <path className="rp-esc__ambiente rp-esc__ambiente--3" d={AMB_BAJO} />
            {BORDES.map((d, i) => (
              <path key={i} className={`rp-esc__borde rp-esc__borde--${i + 1}`} d={d} pathLength="1" />
            ))}
          </g>

          {/* Preparar el lote: puntos de muestreo de suelo */}
          <g className="rp-esc rp-esc--preparar">
            {MUESTRAS.map((m) => (
              <g key={m.i} className="rp-esc__muestra" style={{ '--i': m.i }} transform={`translate(${m.x} ${m.y})`}>
                <circle className="rp-esc__muestra-anillo" r="16" />
                <circle className="rp-esc__muestra-punto" r="5" />
              </g>
            ))}
          </g>

          {/* Fertilizar: mapa de prescripción en celdas (más oscuro, más
              dosis), que se carga de a columnas */}
          <g className="rp-esc rp-esc--fertilizar">
            {/* fondo claro para la grilla: entre celda y celda una línea
                neutra, no los colores del mapa */}
            <rect className="rp-esc__celdas-fondo" x="-20" y="-20" width="560" height="470" />
            {CELDAS.map((c) => (
              <rect
                key={`${c.x}-${c.y}`}
                className={`rp-esc__celda rp-esc__celda--${c.dosis}`}
                style={{ '--c': c.c }}
                x={c.x + 1.5}
                y={c.y + 1.5}
                width={CELDA - 3}
                height={CELDA - 3}
                rx="2"
              />
            ))}
          </g>

          {/* Acompañar, sequía: el terreno se pone anaranjado, empezando
              por el ambiente bajo */}
          <g className="rp-esc rp-esc--sequia">
            <path className="rp-esc__seco rp-esc__seco--bajo" d={AMB_BAJO} />
            <rect className="rp-esc__seco rp-esc__seco--todo" x="-20" y="-20" width="560" height="470" />
          </g>

          {/* Acompañar, calor: sol fuerte y el aire que reverbera */}
          <g className="rp-esc rp-esc--calor">
            <rect className="rp-esc__calido" x="-20" y="-20" width="560" height="470" />
            <g className="rp-esc__sol" transform="translate(440 78)">
              <g className="rp-esc__rayos">
                {Array.from({ length: 8 }, (_, i) => (
                  <line key={i} className="rp-esc__rayo" x1="0" y1="-44" x2="0" y2="-62" transform={`rotate(${i * 45})`} />
                ))}
              </g>
              <circle className="rp-esc__sol-disco" r="30" />
            </g>
            {[150, 260, 370].map((x, i) => (
              <path
                key={x}
                className="rp-esc__vaho"
                style={{ '--i': i }}
                d={`M${x} 340 c 10 -14, -10 -28, 0 -42 s -10 -28, 0 -42`}
              />
            ))}
          </g>

          {/* Acompañar, lluvia: cruza una llovizna y el verde se aviva */}
          <g className="rp-esc rp-esc--lluvia">
            <rect className="rp-esc__nublado" x="-20" y="-20" width="560" height="470" />
            <path className="rp-esc__verdor" d={AMB_MEDIO} fillRule="evenodd" />
            <g className="rp-esc__gotas">
              {GOTAS.map((g) => (
                <line
                  key={g.i}
                  className="rp-esc__gota"
                  style={{ '--d': `${g.d}s` }}
                  x1={g.x}
                  y1={g.y}
                  x2={g.x - 8}
                  y2={g.y + 22}
                />
              ))}
            </g>
          </g>

          {/* Cerrar: la cosechadora pasa y deja el mapa de rinde */}
          <g className="rp-esc rp-esc--cerrar">
            {PASADAS.map((p) => (
              <rect
                key={p.i}
                className={`rp-esc__pasada ${p.i % 2 ? 'rp-esc__pasada--vuelta' : ''}`}
                style={{ '--i': p.i }}
                x="0"
                y={p.y}
                width="520"
                height={PASADA_ALTO}
                fill="url(#rpRindeMapa)"
              />
            ))}
          </g>

          {/* Análisis: un barrido recorre el lote (todas las escenas) */}
          <rect className="rp-esc__barrido" x="-90" y="-20" width="90" height="470" fill="url(#rpLoteBarrido)" />

          {/* Viento de ambiente: ráfagas que cruzan, sin respuesta */}
          <g className="rp-lote__viento">
            {RAFAGAS.map((d, i) => (
              <path key={i} className="rp-lote__rafaga" style={{ '--i': i }} d={d} pathLength="1" />
            ))}
          </g>
        </g>
      </g>

      <path className="rp-lote__outline" d={LOTE} pathLength="1" />
    </svg>

    {/* Notificaciones de Rinde Plus: una por escena, ocultas hasta que su
        escena las muestra. aria-hidden: son decorativas y cambian solas. */}
    {avisos && (
      <div className="rp-lote__avisos" aria-hidden="true">
        {AVISOS.map((id) => (
          <div key={id} className={`rp-lote__aviso rp-lote__aviso--${id}`}>
            <span className="rp-lote__aviso-cabecera">
              <span className="rp-lote__aviso-marca">{avisos.marca}</span>
              <span className="rp-lote__aviso-hora">{avisos.ahora}</span>
            </span>
            <span className="rp-lote__aviso-texto">{avisos[id]}</span>
          </div>
        ))}
      </div>
    )}
  </figure>
);

export default LoteMap;
