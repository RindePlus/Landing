# Info de los indicadores de Impacto

Textos de los botones ⓘ de la sección Impacto, que se sacaron de la home el 21/10/2026. Se guardan acá por si se quieren volver a mostrar (en un modal, una página o un PDF de metodología). Los números son los de `src/data/impactoDatos.js` (backup de producción del 17/10/2026), ya calculados.

Las versiones en inglés y portugués, y el código del modal (`ImpactSection.jsx`, `ImpactSection.css` y la clave `impacto.modal` de `src/i18n/locales/{es,en,pt}.jsx`), están en el historial de git: commit `c8cbfcb` (rama `feat/ui-ajustes`).

También se sacó la línea de fuente del pie: «Datos de la base de Rinde Plus al 17/10/2026. El botón ⓘ de cada número explica cómo se calcula.»

## Hectáreas monitoreadas en la última campaña (2025/26)

Indicador: +110.000 ha.

**Qué mide.** La superficie que Rinde Plus monitoreó en la última campaña completa.

**Cómo se compone.**

| Cultivo | Hectáreas | % |
|---|---|---|
| Maíz | 43.524 | 39% |
| Soja | 32.837 | 29% |
| Trigo | 16.859 | 15% |
| Girasol | 7.956 | 7% |
| Otros cultivos | 10.143 | 9% |
| Total | 111.319 |  |

**A tener en cuenta.** A la superficie sin cultivo cargado se le asignó la misma proporción de cultivos que al resto.

## Grano extra por el manejo de brechas

Indicador: +90.000 t.

**Qué mide.** El grano que se suma en maíz, soja, trigo y girasol por decidir con el análisis de brechas de Rinde Plus.

**Cómo se calcula.** Para cada cultivo: hectáreas de 2025/26 × rinde promedio registrado × 15%. Rinde Plus estima que entre el 10% y el 25% del rinde de los lotes con manejo de brechas se debe a ese manejo; acá se usa un 15%, en la parte baja del rango. Con el 10% serían unas 61.000 t; con el 25%, unas 150.000 t.

**A tener en cuenta.** Es una estimación sobre el rinde promedio de cada cultivo, no una medición lote por lote. A la superficie sin cultivo cargado (35%) se le asignó la misma proporción de cultivos que al resto. Entran maíz, soja, trigo y girasol (el 91% de la superficie); no entran arroz ni los cultivos menores.

## CO₂ extra en el suelo

Indicador: ~35.700 t.

**Qué mide.** El carbono extra que deja en el suelo ese grano extra, a través del rastrojo y las raíces.

**Cómo se calcula.** Grano extra de cada cultivo × coeficientes de carbono por tonelada. Para maíz, soja y trigo son los mismos que usa VigIA, tomados de su informe técnico; los de girasol se calcularon con el mismo método, con su índice de cosecha. El número destacado es la columna «Queda estable».

**A tener en cuenta.** Es una estimación por coeficientes, no una medición de carbono en el suelo de cada lote, y no constituye un certificado de bonos de carbono.

## Análisis de suelo interpretados

Indicador: +2.400.

**Qué mide.** Cuántos ambientes de 2025/26 tienen un análisis de suelo cargado (fósforo, materia orgánica, pH y demás) que la plataforma interpreta para el diagnóstico y la fertilización.

**Cómo se calcula.** Se cuentan los ambientes con al menos uno de esos valores (2.404).

## Historia de datos

Pie de la sección: +700.000 ha de datos productivos en 21 campañas (2005/06 a 2025/26).

**Qué mide.** La superficie con datos productivos acumulada en la base.

**Cómo se calcula.** Cada vez que un lote tiene datos en una campaña se suma su superficie. Son 708.334 ha en 11.393 ciclos productivos de 6.885 lotes de 408 empresas, entre 2005/06 y 2025/26. La campaña en curso, 2026/27, no se cuenta.

**A tener en cuenta.** Un lote con datos en 10 campañas cuenta 10 veces; contado una sola vez por lote, la superficie es de unas 444.000 ha.
