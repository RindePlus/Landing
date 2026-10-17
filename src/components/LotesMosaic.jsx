/* Mosaico de lotes vistos desde arriba, de fondo del hero y del cierre de
   la home. Una grilla de potreros con vértices
   compartidos y corridos al azar (semilla fija: se dibuja siempre igual),
   cada uno con un tono de cultivo y surcos en su propio ángulo; los
   caminos son el color del fondo asomando entre lotes. Colores en
   HomePage.css (.rp-mosaic__*) para que flipeen en dark. */

const COLS = 8;
const ROWS = 4;
const W = 1600;
const H = 720;
const TONES = 6; // .rp-mosaic__lote--0 … --5

// PRNG determinístico (mulberry32)
const rng = (seed) => () => {
  let t = (seed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const buildLotes = () => {
  const rand = rng(20260928);
  const cw = W / COLS;
  const rh = H / ROWS;
  // vértices compartidos: los bordes del lienzo quedan fijos
  const pts = Array.from({ length: ROWS + 1 }, (_, r) =>
    Array.from({ length: COLS + 1 }, (_, c) => {
      const edgeX = c === 0 || c === COLS;
      const edgeY = r === 0 || r === ROWS;
      return [
        c * cw + (edgeX ? 0 : (rand() - 0.5) * cw * 0.5),
        r * rh + (edgeY ? 0 : (rand() - 0.5) * rh * 0.45),
      ];
    }),
  );
  const lotes = [];
  for (let r = 0; r < ROWS; r += 1) {
    for (let c = 0; c < COLS; c += 1) {
      const quad = [pts[r][c], pts[r][c + 1], pts[r + 1][c + 1], pts[r + 1][c]];
      lotes.push({
        id: `${r}-${c}`,
        d: `M${quad.map((p) => p.map((n) => n.toFixed(1)).join(' ')).join(' L')} Z`,
        tone: Math.floor(rand() * TONES),
        angle: Math.round((rand() - 0.5) * 70),
      });
    }
  }
  return lotes;
};

const LOTES = buildLotes();

const LotesMosaic = () => (
  <svg
    className="rp-mosaic"
    viewBox={`0 0 ${W} ${H}`}
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      {LOTES.map((l) => (
        <pattern
          key={l.id}
          id={`rpMosaicRows-${l.id}`}
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform={`rotate(${l.angle})`}
        >
          <line className="rp-mosaic__row" x1="0" y1="0" x2="0" y2="10" />
        </pattern>
      ))}
    </defs>
    {LOTES.map((l) => (
      <g key={l.id}>
        <path className={`rp-mosaic__lote rp-mosaic__lote--${l.tone}`} d={l.d} />
        <path d={l.d} fill={`url(#rpMosaicRows-${l.id})`} />
        <path className="rp-mosaic__road" d={l.d} />
      </g>
    ))}
  </svg>
);

export default LotesMosaic;
