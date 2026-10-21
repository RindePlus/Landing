/* Mosaico de lotes vistos desde arriba, de fondo del hero. Una grilla de potreros con vértices
   compartidos y corridos al azar (semilla fija: se dibuja siempre igual),
   cada uno con un tono de cultivo y surcos en su propio ángulo; los
   caminos son el color del fondo asomando entre lotes. Colores en
   HomePage.css (.rp-mosaic__*) para que flipeen en dark.

   El del hero (CampoHero) es más grande y uno de sus potreros, de 2 × 2
   celdas, es el lote resaltado (LOTE_HERO): LoteMap lo dibuja con sus
   ambientes encima, con la misma forma, y el script de HomeView.astro
   corre el fondo para que los dos coincidan. Muchas hectáreas, una
   remarcada. */

const CELL_W = 200;
const CELL_H = 180;
const TONES = 6; // .rp-mosaic__lote--0 … --5

// PRNG determinístico (mulberry32)
const rng = (seed) => () => {
  let t = (seed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const pathDe = (puntos) =>
  `M${puntos.map((p) => p.map((n) => n.toFixed(1)).join(' ')).join(' L')} Z`;

// `resaltado` = [fila, columna] de la esquina de un potrero de 2 × 2 celdas
// que se dibuja como uno solo.
const buildLotes = ({ cols, rows, seed, resaltado }) => {
  const rand = rng(seed);
  const W = cols * CELL_W;
  const H = rows * CELL_H;
  // vértices compartidos: los bordes del lienzo quedan fijos
  const pts = Array.from({ length: rows + 1 }, (_, r) =>
    Array.from({ length: cols + 1 }, (_, c) => {
      const edgeX = c === 0 || c === cols;
      const edgeY = r === 0 || r === rows;
      return [
        c * CELL_W + (edgeX ? 0 : (rand() - 0.5) * CELL_W * 0.5),
        r * CELL_H + (edgeY ? 0 : (rand() - 0.5) * CELL_H * 0.45),
      ];
    }),
  );
  const [hr, hc] = resaltado ?? [-9, -9];
  if (resaltado) {
    // El potrero resaltado tiene que leerse como un lote prolijo: los
    // vértices del medio de cada lado van casi sobre la recta entre sus
    // esquinas (los vecinos los comparten, así que todo sigue encajando).
    const enderezar = (p, a, b) => {
      p[0] = (a[0] + b[0]) / 2 + (rand() - 0.5) * CELL_W * 0.08;
      p[1] = (a[1] + b[1]) / 2 + (rand() - 0.5) * CELL_H * 0.08;
    };
    enderezar(pts[hr][hc + 1], pts[hr][hc], pts[hr][hc + 2]);
    enderezar(pts[hr + 1][hc + 2], pts[hr][hc + 2], pts[hr + 2][hc + 2]);
    enderezar(pts[hr + 2][hc + 1], pts[hr + 2][hc], pts[hr + 2][hc + 2]);
    enderezar(pts[hr + 1][hc], pts[hr][hc], pts[hr + 2][hc]);
  }
  const enResaltado = (r, c) => r >= hr && r < hr + 2 && c >= hc && c < hc + 2;
  const lotes = [];
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const tone = Math.floor(rand() * TONES);
      const angle = Math.round((rand() - 0.5) * 70);
      if (enResaltado(r, c)) continue;
      lotes.push({
        id: `${r}-${c}`,
        d: pathDe([pts[r][c], pts[r][c + 1], pts[r + 1][c + 1], pts[r + 1][c]]),
        tone,
        angle,
      });
    }
  }
  let lote = null;
  if (resaltado) {
    // contorno del potrero grande: las ocho esquinas de sus cuatro celdas
    const contorno = [
      pts[hr][hc], pts[hr][hc + 1], pts[hr][hc + 2],
      pts[hr + 1][hc + 2], pts[hr + 2][hc + 2],
      pts[hr + 2][hc + 1], pts[hr + 2][hc], pts[hr + 1][hc],
    ];
    const xs = contorno.map((p) => p[0]);
    const ys = contorno.map((p) => p[1]);
    const x = Math.min(...xs);
    const y = Math.min(...ys);
    lote = {
      id: 'resaltado',
      d: pathDe(contorno),
      tone: 1,
      angle: -6,
      bbox: { x, y, w: Math.max(...xs) - x, h: Math.max(...ys) - y },
    };
    lotes.push(lote);
  }
  return { W, H, lotes, lote };
};

// Más grande que cualquier pantalla: el script del hero elige qué parte se
// ve, así que tiene que sobrar campo alrededor del lote resaltado.
const CAMPO_HERO = buildLotes({ cols: 18, rows: 12, seed: 20261021, resaltado: [5, 10] });

export const LOTE_HERO = CAMPO_HERO.lote;

const Mosaico = ({ campo, idBase, className = '', preserveAspectRatio = 'xMidYMid slice' }) => (
  <svg
    className={`rp-mosaic ${className}`}
    viewBox={`0 0 ${campo.W} ${campo.H}`}
    preserveAspectRatio={preserveAspectRatio}
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      {campo.lotes.map((l) => (
        <pattern
          key={l.id}
          id={`${idBase}-${l.id}`}
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform={`rotate(${l.angle})`}
        >
          <line className="rp-mosaic__row" x1="0" y1="0" x2="0" y2="10" />
        </pattern>
      ))}
    </defs>
    {campo.lotes.map((l) => (
      <g key={l.id}>
        <path className={`rp-mosaic__lote rp-mosaic__lote--${l.tone}`} d={l.d} />
        <path d={l.d} fill={`url(#${idBase}-${l.id})`} />
        <path className="rp-mosaic__road" d={l.d} />
      </g>
    ))}
  </svg>
);

// Fondo del hero. Sin JS se ve recortado al centro.
export const CampoHero = () => (
  <Mosaico campo={CAMPO_HERO} idBase="rpCampoRows" className="rp-mosaic--hero" />
);
