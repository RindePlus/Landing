// Mapa de ambientes del lote del hero (LoteMap.jsx), en su lienzo de
// 520 × 430. Lo usan la imagen de base y las escenas, así todas siguen las
// mismas manchas. Qué representa cada escena: doc/ANIMACION_LOTE.md.
//
// Como los mapas interpolados de rinde o NDVI: manchas irregulares en
// franjas anidadas sobre un lote mayormente sano (verde claro de base).
// Siguen el relieve: el bajo arriba a la izquierda y en un pozo a la
// derecha; lo muy alto abajo, al medio y en las esquinas de la derecha; dos
// manchas medias sueltas, como en un lote real. Las formas no se pisan
// entre niveles distintos salvo anidadas (rojo dentro de naranja dentro de
// amarillo), así los ambientes armados con evenodd salen limpios.

// [nivel, path]: los niveles van de low2 (muy bajo, rojo) a high2 (muy alto,
// verde); high es la base y no tiene manchas propias.
export const MAPA = [
  // muy alto (verde)
  ['high2', 'M-20 300 C 30 282, 70 300, 110 296 C 150 292, 178 316, 200 340 C 222 364, 250 370, 262 400 C 272 424, 280 440, 286 450 H-20 Z'],
  ['high2', 'M400 450 C 420 400, 470 370, 540 360 V450 Z'],
  ['high2', 'M236 168 C 244 140, 290 132, 326 126 C 360 120, 372 104, 412 110 C 452 116, 500 132, 506 168 C 512 198, 478 214, 446 206 C 420 200, 402 218, 370 216 C 338 214, 316 202, 286 204 C 258 206, 230 192, 236 168 Z'],
  ['high2', 'M440 -20 H540 V90 C 510 80, 480 60, 460 34 C 450 16, 444 0, 440 -20 Z'],
  // medio (amarillo): alrededor de los bajos y en dos manchas sueltas
  ['mid', 'M-20 -20 H286 C 276 18, 248 40, 222 58 C 200 74, 206 98, 188 116 C 170 134, 140 132, 122 152 C 104 172, 112 200, 92 222 C 72 242, 30 236, -20 244 Z'],
  ['mid', 'M300 30 C 318 14, 356 16, 374 30 C 390 42, 380 62, 358 66 C 336 70, 312 64, 302 52 C 296 44, 294 36, 300 30 Z'],
  ['mid', 'M258 262 C 270 238, 318 236, 352 240 C 388 244, 410 228, 440 236 C 470 244, 478 272, 456 292 C 436 310, 404 304, 380 320 C 356 336, 318 338, 292 322 C 268 308, 248 286, 258 262 Z'],
  ['mid', 'M300 404 C 314 388, 344 386, 366 396 C 384 404, 390 424, 380 450 H306 C 296 436, 292 418, 300 404 Z'],
  // bajo (naranja)
  ['low', 'M-20 -20 H196 C 186 14, 160 34, 138 52 C 118 68, 122 92, 100 108 C 78 124, 50 118, 30 136 C 14 150, 0 158, -20 160 Z'],
  ['low', 'M318 266 C 334 252, 366 258, 384 254 C 410 248, 432 260, 426 278 C 420 294, 394 290, 374 302 C 354 314, 326 310, 316 294 C 308 282, 308 274, 318 266 Z'],
  // muy bajo (rojo)
  ['low2', 'M-20 -20 H118 C 110 8, 92 22, 70 36 C 52 48, 48 66, 28 76 C 12 84, -2 86, -20 88 Z'],
  ['low2', 'M352 270 C 362 262, 382 264, 392 270 C 400 276, 396 286, 384 288 C 372 290, 358 288, 352 282 C 348 278, 348 274, 352 270 Z'],
];

const de = (nivel) => MAPA.filter(([n]) => n === nivel).map(([, d]) => d);

// Los tres ambientes con que trabaja la plataforma (Planificar, Fertilizar,
// sequía): alto = las manchas verde oscuro; bajo = las zonas problema, con
// su borde amarillo; medio = el resto (lienzo menos los otros, evenodd).
export const AMB_ALTO = de('high2').join(' ');
export const AMB_BAJO = de('mid').join(' ');
export const AMB_MEDIO = `M-20 -20 H560 V460 H-20 Z ${AMB_ALTO} ${AMB_BAJO}`;

// Bordes de los ambientes, para dibujarlos en tres tandas (Planificar).
const bajos = de('mid');
export const BORDES = [AMB_ALTO, `${bajos[0]} ${bajos[1]}`, `${bajos[2]} ${bajos[3]}`];

// --- En qué nivel cae un punto ---
// Aplana los paths (sólo usan M, H, V, C y Z absolutos) a polígonos y
// prueba con ray casting. Lo usan las celdas de Fertilizar y el mapa de
// rinde de Cerrar.
const aPoligono = (d) => {
  const t = d.match(/[MHVCZ]|-?\d*\.?\d+/g);
  const pts = [];
  let x = 0;
  let y = 0;
  let cmd = '';
  let i = 0;
  const num = () => Number(t[i++]);
  while (i < t.length) {
    if (/[MHVCZ]/.test(t[i])) cmd = t[i++];
    if (cmd === 'Z') continue;
    if (cmd === 'M') {
      x = num();
      y = num();
      pts.push([x, y]);
    } else if (cmd === 'H') {
      x = num();
      pts.push([x, y]);
    } else if (cmd === 'V') {
      y = num();
      pts.push([x, y]);
    } else if (cmd === 'C') {
      const [x1, y1, x2, y2, x3, y3] = [num(), num(), num(), num(), num(), num()];
      for (let k = 1; k <= 12; k += 1) {
        const s = k / 12;
        const u = 1 - s;
        pts.push([
          u * u * u * x + 3 * u * u * s * x1 + 3 * u * s * s * x2 + s * s * s * x3,
          u * u * u * y + 3 * u * u * s * y1 + 3 * u * s * s * y2 + s * s * s * y3,
        ]);
      }
      x = x3;
      y = y3;
    }
  }
  return pts;
};

const adentro = (pts, px, py) => {
  let dentro = false;
  for (let a = 0, b = pts.length - 1; a < pts.length; b = a, a += 1) {
    const [xa, ya] = pts[a];
    const [xb, yb] = pts[b];
    if (ya > py !== yb > py && px < ((xb - xa) * (py - ya)) / (yb - ya) + xa) dentro = !dentro;
  }
  return dentro;
};

const POLIGONOS = MAPA.map(([nivel, d]) => [nivel, aPoligono(d)]);
const ORDEN = ['low2', 'low', 'mid', 'high2'];

/** Nivel del mapa en (x, y): low2 | low | mid | high | high2. */
export const nivelEn = (x, y) => {
  for (const nivel of ORDEN) {
    if (POLIGONOS.some(([n, pts]) => n === nivel && adentro(pts, x, y))) return nivel;
  }
  return 'high';
};

export const NIVELES = ['low2', 'low', 'mid', 'high', 'high2'];
