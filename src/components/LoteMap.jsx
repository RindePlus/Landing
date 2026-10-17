/* Lote de ejemplo del hero: un potrero con tres ambientes (colores de mapa
   de rinde), surcos de siembra y curvas de nivel. Solo el dibujo: sin
   leyenda ni cifras.
   Colores en HomePage.css (.rp-lote, tokens --rp-zone-*) para que
   flipeen en dark; `var()` no funciona en atributos de presentación SVG. */

const LOTE =
  'M46 74 L458 36 C 472 118, 484 206, 488 298 C 404 330, 306 354, 214 374 L 62 394 Z';

const LoteMap = ({ aria }) => (
  <figure className="rp-lote">
    <svg
      className="rp-lote__map"
      viewBox="0 0 520 430"
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
      </defs>

      <g clipPath="url(#rpLoteClip)">
        {/* ambiente medio de base; alto y bajo por encima */}
        <rect className="rp-lote__zone rp-lote__zone--mid" x="0" y="0" width="520" height="430" />
        <path
          className="rp-lote__zone rp-lote__zone--high"
          d="M170 0 C 214 86, 316 128, 410 146 C 462 156, 502 190, 540 214 V0 Z"
        />
        <path
          className="rp-lote__zone rp-lote__zone--low"
          d="M0 236 C 84 218, 156 262, 194 326 C 216 364, 228 398, 236 440 H0 Z"
        />
        <path
          className="rp-lote__zone rp-lote__zone--low"
          d="M316 262 C 334 232, 392 228, 414 252 C 432 274, 404 300, 366 302 C 332 304, 302 286, 316 262 Z"
        />
        <rect x="0" y="0" width="520" height="430" fill="url(#rpLoteRows)" />

        {/* curvas de nivel */}
        <path className="rp-lote__contour" d="M20 210 C 120 180, 220 230, 330 200 C 410 178, 470 206, 520 190" />
        <path className="rp-lote__contour" d="M20 290 C 110 262, 200 318, 300 300 C 380 286, 450 312, 520 300" />
        <path className="rp-lote__contour" d="M60 120 C 160 104, 250 150, 360 124 C 420 110, 470 124, 520 116" />
      </g>

      <path className="rp-lote__outline" d={LOTE} pathLength="1" />
    </svg>
  </figure>
);

export default LoteMap;
