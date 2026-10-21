import { LOTE_HERO } from './LotesMosaic';
import './LoteMap.css';

/* Lote de ejemplo del hero: un potrero con tres ambientes (colores de mapa
   de rinde), surcos de siembra y curvas de nivel.
   Es uno de los potreros del fondo (LOTE_HERO, en LotesMosaic.jsx): se
   dibuja en sus mismas coordenadas, así el script de HomeView.astro puede
   correr el fondo para que coincidan.

   Escenas: cada tanto pasa en el lote un momento de la campaña (planificar,
   preparar, fertilizar, acompañar, cerrar) y Rinde Plus responde con una
   notificación; entre escena y escena, a veces, cruza una ráfaga de viento.
   Acá están todas las capas, ocultas; src/scripts/escenasLote.js elige
   cuál corre (data-escena / data-clima en la figura) y LoteMap.css la
   anima. Qué representa cada una: doc/ANIMACION_LOTE.md.

   Colores en HomePage.css y LoteMap.css (tokens --rp-zone-* y demás) para
   que flipeen en dark; `var()` no funciona en atributos de presentación
   SVG. */

const { d: LOTE, bbox } = LOTE_HERO;
// Margen para que el trazo del borde no se corte.
const PAD = 4;
const VIEWBOX = `${bbox.x - PAD} ${bbox.y - PAD} ${bbox.w + PAD * 2} ${bbox.h + PAD * 2}`;
// Los ambientes, las curvas y las escenas están dibujados en un lienzo de
// 520 × 430: se estiran sobre la caja del lote.
const LIENZO = `translate(${bbox.x} ${bbox.y}) scale(${bbox.w / 520} ${bbox.h / 430})`;

// Ambientes en el lienzo de 520 × 430.
const AMB_ALTO = 'M170 0 C 214 86, 316 128, 410 146 C 462 156, 502 190, 540 214 V0 Z';
const AMB_BAJO = 'M0 236 C 84 218, 156 262, 194 326 C 216 364, 228 398, 236 440 H0 Z';
const AMB_BAJO_2 = 'M316 262 C 334 232, 392 228, 414 252 C 432 274, 404 300, 366 302 C 332 304, 302 286, 316 262 Z';
// El ambiente medio es el resto: el lienzo menos los otros (evenodd).
const AMB_MEDIO = `M-20 -20 H560 V460 H-20 Z ${AMB_ALTO} ${AMB_BAJO} ${AMB_BAJO_2}`;
// Los bordes entre ambientes, para dibujarlos de a uno (Planificar).
const BORDES = [
  'M170 0 C 214 86, 316 128, 410 146 C 462 156, 502 190, 540 214',
  'M0 236 C 84 218, 156 262, 194 326 C 216 364, 228 398, 236 440',
  AMB_BAJO_2,
];

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

// Fertilizar: una gota en el centro de cada ambiente.
const GOTA = 'M0 -15 C 6 -7, 10 -1, 10 4 A 10 10 0 0 1 -10 4 C -10 -1, -6 -7, 0 -15 Z';
const GOTAS_DOSIS = [
  { x: 430, y: 62, k: 0 }, // alto
  { x: 290, y: 200, k: 1 }, // medio
  { x: 84, y: 352, k: 2 }, // bajo
  { x: 366, y: 268, k: 2 }, // bajo, la mancha
];

// Pasadas de la cosechadora (Cerrar): diez franjas, una dirección cada una.
const PASADA_ALTO = 43;
const PASADAS = Array.from({ length: 10 }, (_, i) => ({ y: i * PASADA_ALTO, i }));

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
        {/* Cerrar: el mapa de rinde que deja la cosecha. Sigue a los
            ambientes (alto, medio, bajo), con los colores de un mapa de
            rinde; cada pasada lo descubre en su franja. */}
        <pattern id="rpRindeMapa" x="0" y="0" width="520" height="430" patternUnits="userSpaceOnUse">
          <rect className="rp-lote__rinde--mid" x="0" y="0" width="520" height="430" />
          <path className="rp-lote__rinde--high" d={AMB_ALTO} />
          <path className="rp-lote__rinde--low" d={AMB_BAJO} />
          <path className="rp-lote__rinde--low" d={AMB_BAJO_2} />
          <ellipse className="rp-lote__rinde--high" cx="210" cy="150" rx="70" ry="26" opacity="0.6" />
          <ellipse className="rp-lote__rinde--low" cx="420" cy="380" rx="60" ry="22" opacity="0.6" />
        </pattern>
      </defs>

      <g clipPath="url(#rpLoteClip)">
        <g transform={LIENZO}>
          {/* ambiente medio de base; alto y bajo por encima */}
          <rect className="rp-lote__zone rp-lote__zone--mid" x="0" y="0" width="520" height="430" />
          <path className="rp-lote__zone rp-lote__zone--high" d={AMB_ALTO} />
          <path className="rp-lote__zone rp-lote__zone--low" d={AMB_BAJO} />
          <path className="rp-lote__zone rp-lote__zone--low" d={AMB_BAJO_2} />
        </g>
        <rect x={bbox.x} y={bbox.y} width={bbox.w} height={bbox.h} fill="url(#rpLoteRows)" />

        <g transform={LIENZO}>
          {/* curvas de nivel */}
          <path className="rp-lote__contour" d="M20 210 C 120 180, 220 230, 330 200 C 410 178, 470 206, 520 190" />
          <path className="rp-lote__contour" d="M20 290 C 110 262, 200 318, 300 300 C 380 286, 450 312, 520 300" />
          <path className="rp-lote__contour" d="M60 120 C 160 104, 250 150, 360 124 C 420 110, 470 124, 520 116" />

          {/* ---- Escenas (ocultas hasta que el script las active) ---- */}

          {/* Planificar: los ambientes se marcan uno por uno */}
          <g className="rp-esc rp-esc--planificar">
            <path className="rp-esc__ambiente rp-esc__ambiente--1" d={AMB_ALTO} />
            <path className="rp-esc__ambiente rp-esc__ambiente--2" d={AMB_MEDIO} fillRule="evenodd" />
            <path className="rp-esc__ambiente rp-esc__ambiente--3" d={`${AMB_BAJO} ${AMB_BAJO_2}`} />
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

          {/* Fertilizar: mapa de prescripción. Cada ambiente se tiñe de
              azul (más oscuro, más dosis) y recibe su
              gota. */}
          <g className="rp-esc rp-esc--fertilizar">
            <path className="rp-esc__dosis rp-esc__dosis--1" d={AMB_ALTO} />
            <path className="rp-esc__dosis rp-esc__dosis--2" d={AMB_MEDIO} fillRule="evenodd" />
            <path className="rp-esc__dosis rp-esc__dosis--3" d={`${AMB_BAJO} ${AMB_BAJO_2}`} />
            {GOTAS_DOSIS.map((g) => (
              <g key={`${g.x}-${g.y}`} transform={`translate(${g.x} ${g.y})`}>
                <path className="rp-esc__gota-dosis" style={{ '--k': g.k }} d={GOTA} />
              </g>
            ))}
          </g>

          {/* Acompañar, sequía: el terreno se pone anaranjado, empezando
              por el ambiente bajo */}
          <g className="rp-esc rp-esc--sequia">
            <path className="rp-esc__seco rp-esc__seco--bajo" d={`${AMB_BAJO} ${AMB_BAJO_2}`} />
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
