// Dibujos de las lecciones de Educación: SVG estáticos, sin cifras, que
// muestran la relación que explica cada concepto. Colores y trazos en
// InnerPages.css (.dg-*), así siguen el tema claro/oscuro: los del mapa de
// ambientes son los mismos del lote del hero (--rp-mapa-*). Los textos
// llegan en `e` (etiquetas de cada lección en paginas.*.js).

const Svg = ({ children, label }) => (
  <svg viewBox="0 0 320 200" className="dg" role="img" aria-label={label}>
    {children}
  </svg>
);

export const DiagramaAmbientes = ({ e, label }) => (
  <Svg label={label}>
    <defs>
      <clipPath id="dgLote">
        <path d="M24 30 L296 18 L306 176 L18 186 Z" />
      </clipPath>
      <pattern id="dgSurcos" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-8)">
        <line x1="0" y1="0" x2="0" y2="9" className="dg-surco" />
      </pattern>
    </defs>
    <g clipPath="url(#dgLote)">
      <path className="dg-amb dg-amb--alto" d="M0 0 H320 V64 C 230 84, 140 48, 0 96 Z" />
      <path className="dg-amb dg-amb--medio" d="M0 96 C 140 48, 230 84, 320 64 V122 C 232 140, 122 104, 0 152 Z" />
      <path className="dg-amb dg-amb--bajo" d="M0 152 C 122 104, 232 140, 320 122 V200 H0 Z" />
      <rect width="320" height="200" fill="url(#dgSurcos)" />
    </g>
    <path className="dg-contorno" d="M24 30 L296 18 L306 176 L18 186 Z" />
    <g className="dg-pildora">
      <rect x="196" y="34" width="56" height="20" rx="10" />
      <text x="224" y="48" textAnchor="middle">{e.alto}</text>
      <rect x="64" y="98" width="62" height="20" rx="10" />
      <text x="95" y="112" textAnchor="middle">{e.medio}</text>
      <rect x="206" y="150" width="54" height="20" rx="10" />
      <text x="233" y="164" textAnchor="middle">{e.bajo}</text>
    </g>
  </Svg>
);

export const DiagramaAguaUtil = ({ e, label }) => {
  const x0 = 30;
  const ancho = 260;
  const hoy = 0.48;
  const umbral = 0.6;
  return (
    <Svg label={label}>
      {/* El perfil: la parte que el cultivo no puede usar va por debajo. */}
      <text className="dg-label" x={x0} y="58">{e.hoy} · 48 %</text>
      <rect className="dg-pista" x={x0} y="70" width={ancho} height="36" rx="8" />
      <rect className="dg-agua" x={x0} y="70" width={ancho * hoy} height="36" rx="8" />
      {[0.25, 0.5, 0.75].map((p) => (
        <line key={p} className="dg-tick" x1={x0 + ancho * p} y1="106" x2={x0 + ancho * p} y2="112" />
      ))}
      <line className="dg-umbral" x1={x0 + ancho * umbral} y1="62" x2={x0 + ancho * umbral} y2="114" />
      <text className="dg-label dg-label--fuerte" x={x0 + ancho * umbral + 6} y="58">{e.umbral}</text>
      <text className="dg-dato" x={x0} y="132">0 %</text>
      <text className="dg-dato" x={x0 + ancho} y="132" textAnchor="end">100 %</text>
      <text className="dg-label" x={x0} y="150">{e.pmp}</text>
      <text className="dg-label" x={x0 + ancho} y="150" textAnchor="end">{e.cc}</text>
    </Svg>
  );
};

export const DiagramaCarryOver = ({ e, label }) => (
  <Svg label={label}>
    <line className="dg-eje" x1="34" y1="22" x2="34" y2="160" />
    <line className="dg-eje" x1="34" y1="160" x2="300" y2="160" />
    <line className="dg-limite" x1="34" y1="104" x2="300" y2="104" />
    <text className="dg-label dg-label--peligro" x="296" y="96" textAnchor="end">{e.limite}</text>
    <path className="dg-curva" d="M36 30 C 86 66, 128 88, 186 104 C 226 115, 262 124, 300 130" />
    <circle className="dg-punto dg-punto--neutro" cx="36" cy="30" r="4" />
    <line className="dg-guia" x1="120" y1="84" x2="120" y2="160" />
    <circle className="dg-punto dg-punto--peligro" cx="120" cy="84" r="4.5" />
    <circle className="dg-punto" cx="186" cy="104" r="4.5" />
    {/* Días de espera: de la siembra al cruce con el límite. */}
    <path className="dg-llave" d="M120 172 V178 H186 V172" />
    <text className="dg-label dg-label--fuerte" x="153" y="194" textAnchor="middle">{e.espera}</text>
    <text className="dg-label" x="36" y="176">{e.aplicacion}</text>
    <text className="dg-label" x="116" y="152" textAnchor="end">{e.siembra}</text>
  </Svg>
);

export const DiagramaDosis = ({ e, label }) => (
  <Svg label={label}>
    <line className="dg-eje" x1="34" y1="22" x2="34" y2="160" />
    <line className="dg-eje" x1="34" y1="160" x2="300" y2="160" />
    <text className="dg-label" x="300" y="178" textAnchor="end">{e.dosis}</text>
    <text className="dg-label" x="42" y="30">{e.rinde}</text>
    <path className="dg-area" d="M36 150 C 80 92, 140 60, 200 48 C 228 43, 256 42, 296 47 L296 160 L36 160 Z" />
    <path className="dg-curva" d="M36 150 C 80 92, 140 60, 200 48 C 228 43, 256 42, 296 47" />
    <line className="dg-guia" x1="168" y1="54" x2="168" y2="160" />
    <line className="dg-guia dg-guia--tenue" x1="250" y1="42" x2="250" y2="160" />
    <circle className="dg-punto" cx="168" cy="54" r="5" />
    <circle className="dg-punto dg-punto--neutro" cx="250" cy="42" r="4" />
    <text className="dg-label dg-label--fuerte" x="164" y="178" textAnchor="middle">{e.optima}</text>
    <text className="dg-label" x="250" y="32" textAnchor="middle">{e.maximo}</text>
  </Svg>
);

export const DiagramaBalance = ({ e, label }) => (
  <Svg label={label}>
    <rect className="dg-franja" x="150" y="18" width="100" height="142" rx="4" />
    <text className="dg-label dg-label--fuerte" x="200" y="34" textAnchor="middle">{e.critico}</text>
    <line className="dg-eje" x1="30" y1="160" x2="300" y2="160" />
    <line className="dg-umbral" x1="30" y1="100" x2="300" y2="100" />
    <text className="dg-label" x="34" y="94">{e.umbral}</text>
    <path className="dg-curva" d="M30 52 C 60 46, 84 66, 112 72 C 140 78, 164 108, 192 116 C 206 120, 214 112, 222 106" />
    <path className="dg-curva dg-curva--pronostico" d="M222 106 C 240 98, 262 82, 300 72" />
    <line className="dg-guia" x1="222" y1="106" x2="222" y2="160" />
    <circle className="dg-punto" cx="222" cy="106" r="4.5" />
    <text className="dg-label" x="222" y="178" textAnchor="middle">{e.hoy}</text>
    <text className="dg-label" x="296" y="178" textAnchor="end">{e.pronostico}</text>
  </Svg>
);

// Una semana y media de DPV: la mayoría en la zona sana, un día suelto
// arriba (no pesa) y una racha de cuatro días (pesa).
const DPV = [92, 98, 60, 96, 104, 88, 52, 48, 44, 50, 90, 100, 94, 138, 106];

export const DiagramaDpv = ({ e, label }) => {
  const x = (i) => 40 + i * 18;
  const linea = DPV.map((v, i) => `${i ? 'L' : 'M'}${x(i)} ${v}`).join(' ');
  return (
    <Svg label={label}>
      <rect className="dg-zona dg-zona--alto" x="30" y="20" width="276" height="46" />
      <rect className="dg-zona dg-zona--sano" x="30" y="66" width="276" height="58" />
      <rect className="dg-zona dg-zona--bajo" x="30" y="124" width="276" height="40" />
      <text className="dg-label" x="300" y="34" textAnchor="end">{e.alto}</text>
      <text className="dg-label" x="300" y="80" textAnchor="end">{e.sano}</text>
      <text className="dg-label" x="300" y="158" textAnchor="end">{e.bajo}</text>
      <path className="dg-curva dg-curva--fina" d={linea} />
      {DPV.map((v, i) => (
        <circle
          key={i}
          className={`dg-punto ${v < 66 ? 'dg-punto--alerta' : v > 124 ? 'dg-punto--neutro' : ''}`}
          cx={x(i)}
          cy={v}
          r="3.5"
        />
      ))}
      <path className="dg-llave" d="M144 38 V32 H198 V38" />
      <text className="dg-label" x="40" y="182">{e.dias}</text>
    </Svg>
  );
};

// NDVI en una grilla de 14 × 8 píxeles: un lote con una mancha de menos
// vigor (abajo a la izquierda) y una franja mejor (arriba a la derecha).
const ndvi = (c, r) => {
  const mancha = Math.hypot(c - 3, r - 6) / 4;
  const franja = (c + (7 - r)) / 20;
  const v = 0.25 + Math.min(1, mancha) * 0.45 + franja * 0.35 + (((c * 7 + r * 13) % 5) - 2) * 0.03;
  return Math.max(0, Math.min(4, Math.floor(v * 4.2)));
};

export const DiagramaNdvi = ({ e, label }) => (
  <Svg label={label}>
    {Array.from({ length: 8 }, (_, r) =>
      Array.from({ length: 14 }, (_, c) => (
        <rect
          key={`${r}-${c}`}
          className={`dg-px dg-px--${ndvi(c, r)}`}
          x={20 + c * 20}
          y={14 + r * 18}
          width="19"
          height="17"
        />
      )),
    )}
    {[0, 1, 2, 3, 4].map((n) => (
      <rect key={n} className={`dg-px dg-px--${n}`} x={196 + n * 20} y="172" width="19" height="10" />
    ))}
    <text className="dg-label" x="190" y="181" textAnchor="end">{e.bajo}</text>
    <text className="dg-label" x="300" y="196" textAnchor="end">{e.alto}</text>
    <text className="dg-label" x="20" y="181">{e.pixel}</text>
  </Svg>
);

export const DiagramaBrecha = ({ e, label }) => {
  const piso = 164;
  const barras = [
    { id: 'base', h: 62 },
    { id: 'fertilizando', h: 96 },
    { id: 'cosechado', h: 86, fuerte: true },
    { id: 'potencial', h: 132, techo: true },
  ];
  const techo = piso - 132;
  const cosechado = piso - 86;
  return (
    <Svg label={label}>
      <line className="dg-limite dg-limite--techo" x1="24" y1={techo} x2="300" y2={techo} />
      {barras.map((b, i) => (
        <g key={b.id}>
          <rect
            className={`dg-barra${b.fuerte ? ' dg-barra--fuerte' : ''}${b.techo ? ' dg-barra--techo' : ''}`}
            x={36 + i * 62}
            y={piso - b.h}
            width="40"
            height={b.h}
            rx="4"
          />
          <text className="dg-label" x={56 + i * 62} y={piso + 18} textAnchor="middle">{e[b.id]}</text>
        </g>
      ))}
      {/* La brecha: lo que le falta al cosechado para llegar al techo del
          agua, encima de su barra. */}
      <rect className="dg-hueco" x="160" y={techo} width="40" height={cosechado - techo} rx="4" />
      <text className="dg-label dg-label--fuerte" x="180" y={techo - 8} textAnchor="middle">{e.brecha}</text>
      <line className="dg-eje" x1="24" y1={piso} x2="300" y2={piso} />
    </Svg>
  );
};
