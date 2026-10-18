// Números de la sección Impacto, compartidos por los tres idiomas: los textos
// viven en src/i18n/locales y acá solo hay datos. Para la próxima campaña se
// actualizan los datos por cultivo (y los de historia); las tablas, los
// totales y las cifras redondeadas de los indicadores se calculan solos.
//
// Fuente: backup de producción del 17/10/2026, analizado aparte.
// - Todo es de la campaña 2025/26, la última completa; la historia va al pie.
// - Se excluye la organización Crea (sus datos duplican los de Aapresid).
// - A los lotes sin superficie cargada se les asignan 65 ha, el tamaño
//   típico de un lote en la base.
// - Cultivo de cada ciclo productivo: el cargado en la campaña o, si falta,
//   el de los reportes de la plataforma. A la superficie que sigue sin
//   cultivo (HA_SIN_CULTIVO) se le asigna la misma proporción de cultivos
//   que al resto, así las hectáreas por cultivo suman la superficie total.
// - Entran maíz, soja, trigo y girasol; arroz y cultivos menores van en
//   "Otros cultivos" (solo aparecen en el detalle de hectáreas).

export const IMPACTO_FECHA_CORTE = '2026-10-17';
export const IMPACTO_CAMPANA = '2025/26';

// Parte del rinde que Rinde Plus atribuye al manejo de brechas: estima entre
// el 10 % y el 25 %; para los números se usa el 15 %, en la parte baja.
export const PORCENTAJE_BRECHAS = 0.15;
export const RANGO_BRECHAS = [0.1, 0.25];

// Coeficientes de carbono en t de CO₂ por t de grano extra (solo el carbono
// del grano extra, no el de todo el cultivo).
// - Maíz, soja y trigo: los de la landing de VigIA, derivados de la tabla de
//   su informe técnico (CO₂ del cultivo ÷ grano extra del cultivo; p. ej.
//   maíz 20.378 t ÷ 5.920 t = 3,442).
// - Girasol (VigIA no lo tiene), con la misma estructura y estos supuestos:
//   índice de cosecha 0,33 y 89 % de materia seca en el grano.
//   · fijado: biomasa total (grano seco ÷ IC, más 20 % de raíces)
//     × 45 % de carbono × 44/12
//   · vuelve al suelo: fijado menos el CO₂ del grano que se cosecha
//   · queda estable: 16,3 % de lo que vuelve al suelo (promedio de los otros
//     tres cultivos)
// `hectareas`: superficie 2025/26; `rindeKgHa`: promedio de los rindes
// cosechados registrados, ponderado por superficie.
export const CULTIVOS_IMPACTO = [
  { id: 'maiz', hectareas: 43524, rindeKgHa: 9052, co2: { fijado: 3.442, suelo: 2.031, estable: 0.3463 } },
  { id: 'soja', hectareas: 32837, rindeKgHa: 3629, co2: { fijado: 4.246, suelo: 2.819, estable: 0.4348 } },
  { id: 'trigo', hectareas: 16859, rindeKgHa: 4762, co2: { fijado: 4.19, suelo: 2.77, estable: 0.4783 } },
  { id: 'girasol', hectareas: 7956, rindeKgHa: 2230, co2: { fijado: 5.34, suelo: 3.871, estable: 0.6311 } },
];

export const HA_OTROS_CULTIVOS = 10143;
// Superficie sin cultivo cargado, repartida en la proporción del resto.
export const HA_SIN_CULTIVO = 38620;

// Ambientes de 2025/26 con al menos un valor de análisis de suelo (fósforo,
// materia orgánica, pH y demás) que la plataforma interpreta.
export const ANALISIS_SUELO = 2404;

// Superficie con datos productivos acumulada, 2005/06 a 2025/26 (la campaña
// en curso, 2026/27, no se cuenta). Un lote con datos en 10 campañas cuenta
// 10 veces; `hectareasUnicas` es la superficie contando cada lote una vez.
export const HISTORIA = {
  hectareas: 708334,
  ciclos: 11393,
  lotes: 6885,
  empresas: 408,
  campanas: 21,
  desde: '2005/06',
  hasta: '2025/26',
  enCurso: '2026/27',
  hectareasUnicas: 444000,
};

// Emisiones de un auto por año (t de CO₂), la misma equivalencia que VigIA
// (3.300 t ≈ 750 autos).
const T_CO2_POR_AUTO = 4.4;

/* ---- Derivados ---- */

const suma = (f) => CULTIVOS_IMPACTO.reduce((t, c) => t + f(c), 0);
const granoExtraT = (c, pct = PORCENTAJE_BRECHAS) => (c.hectareas * c.rindeKgHa * pct) / 1000;

export const HA_CULTIVOS = suma((c) => c.hectareas); // 101.176
export const HA_TOTAL = HA_CULTIVOS + HA_OTROS_CULTIVOS; // 111.319
export const GRANO_T = suma((c) => granoExtraT(c)); // 91.675
export const GRANO_RANGO_T = RANGO_BRECHAS.map((p) => suma((c) => granoExtraT(c, p))); // 61.117 y 152.792
export const CO2_FIJADO = suma((c) => granoExtraT(c) * c.co2.fijado); // 343.977
export const CO2_SUELO = suma((c) => granoExtraT(c) * c.co2.suelo); // 214.074
export const CO2_ESTABLE = suma((c) => granoExtraT(c) * c.co2.estable); // 35.677
export const AUTOS_EQUIVALENTES = redondearA(CO2_ESTABLE / T_CO2_POR_AUTO, 100); // 8.100

/* ---- Redondeos para mostrar ---- */

function redondearA(n, paso) {
  return Math.round(n / paso) * paso;
}
const truncarA = (n, paso) => Math.floor(n / paso) * paso;
// Medios al par, como el análisis de origen: girasol 2.230 × 0,15 = 334,5 → 334.
const redondearPar = (n) => {
  const r = Math.round(n);
  return Math.abs(n % 1) === 0.5 && r % 2 !== 0 ? r - 1 : r;
};
// Dos cifras significativas: 61.117 → 61.000; 152.792 → 150.000.
const significativas = (n, cifras = 2) => {
  const paso = 10 ** Math.max(0, Math.floor(Math.log10(n)) + 1 - cifras);
  return redondearA(n, paso);
};

// Valores de la fila de indicadores y del pie ("+" = al menos; "~" = cerca).
export const CIFRAS = {
  hectareas: truncarA(HA_TOTAL, 10000), // +110.000
  grano: truncarA(GRANO_T, 10000), // +90.000
  carbono: redondearA(CO2_ESTABLE, 100), // ~35.700
  suelo: truncarA(ANALISIS_SUELO, 100), // +2.400
  historia: truncarA(HISTORIA.hectareas, 100000), // +700.000
  granoRango: GRANO_RANGO_T.map((t) => significativas(t)), // 61.000 y 150.000
  co2Fijado: redondearA(CO2_FIJADO, 1000), // ~344.000
  co2Suelo: redondearA(CO2_SUELO, 100), // ~214.100
};

/** Formateador de números enteros por locale ('es-AR', 'en-US', 'pt-BR'). */
export const formateador = (locale) => {
  const nf = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
  return (n) => nf.format(n);
};

/** Porcentaje entero por locale: 0,15 → "15 %" (es) / "15%" (en, pt). */
export const formateadorPct = (locale) => {
  const nf = new Intl.NumberFormat(locale, { style: 'percent', maximumFractionDigits: 0 });
  return (n) => nf.format(n);
};

/**
 * Filas de las tablas (la última es el total), ya formateadas.
 * @param {(n: number) => string} fmt
 * @param {(n: number) => string} pct
 * @param {Record<string, string>} nombres nombre de cada cultivo por id (y `otros`)
 * @param {string} total
 */
export const filasImpacto = (fmt, pct, nombres, total) => ({
  grano: [
    ...CULTIVOS_IMPACTO.map((c) => [
      nombres[c.id],
      fmt(c.hectareas),
      fmt(c.rindeKgHa),
      fmt(redondearPar(c.rindeKgHa * PORCENTAJE_BRECHAS)),
      `${fmt(granoExtraT(c))} t`,
    ]),
    [total, fmt(HA_CULTIVOS), '', '', `${fmt(GRANO_T)} t`],
  ],
  carbono: [
    ...CULTIVOS_IMPACTO.map((c) => {
      const t = granoExtraT(c);
      return [nombres[c.id], fmt(t * c.co2.fijado), fmt(t * c.co2.suelo), fmt(t * c.co2.estable)];
    }),
    [total, `~${fmt(CIFRAS.co2Fijado)}`, `~${fmt(CIFRAS.co2Suelo)}`, fmt(CO2_ESTABLE)],
  ],
  hectareas: [
    ...CULTIVOS_IMPACTO.map((c) => [nombres[c.id], fmt(c.hectareas), pct(c.hectareas / HA_TOTAL)]),
    [nombres.otros, fmt(HA_OTROS_CULTIVOS), pct(HA_OTROS_CULTIVOS / HA_TOTAL)],
    [total, fmt(HA_TOTAL), ''],
  ],
});
