# Animación del lote del hero

El lote dibujado a la derecha del hero no es sólo una ilustración: cada tanto pasa en él **un momento de la campaña** y Rinde Plus **responde con una notificación**. Este documento registra qué representa el conjunto, cada escena, sus textos y cómo cambiarlas.

## Qué representa el conjunto

- **El lote es uno entre muchos.** Es uno de los potreros del mosaico de fondo (2 × 2 celdas), alineado con el fondo: muchas hectáreas, una remarcada.
- **Las escenas recorren toda la campaña, del plan al cierre**, con los mismos cinco momentos de la sección «Qué hace» (`Functionalities.jsx`). Ninguna escena sola es «lo que hace Rinde Plus»: el ciclo completo muestra que acompaña cada lote durante toda la campaña.
- **Cada escena tiene tres tiempos**: la condición (lo que pasa en el lote), el análisis (un barrido azul recorre el lote: Rinde Plus mirando) y la respuesta (una notificación de Rinde Plus, como las que manda la plataforma).
- **El clima no es lo central.** Las condiciones de clima (sequía, calor, lluvia) son variantes de un solo momento, Acompañar el cultivo. Así no se lee como una app de alertas climáticas, que además es el terreno de VigIA BioEstrés.
- **El viento es ambiente**: ráfagas que cruzan el lote en la calma entre escenas, sin análisis ni respuesta.

### Reglas

1. **Sólo se responde con lo que la plataforma hace hoy.** Cada notificación sale de una función que ya está en la web («Qué hace»). Si se agrega una escena, su respuesta tiene que estar respaldada ahí.
2. **Una escena por vez**, con calma entre medio: nunca dos animaciones a la vez ni el lote siempre en movimiento.
3. **Sólo con el hero en pantalla y la pestaña visible.** Con `prefers-reduced-motion` no corre nada y el lote queda quieto.
4. Las líneas onduladas del lote son **curvas de nivel** (relieve), no viento: no se animan.

## Las escenas

| Escena (`data-escena`) | Momento de la campaña | Qué pasa en el lote | Notificación (es / en / pt) |
|---|---|---|---|
| `planificar` | Planificar | Los bordes de los ambientes se dibujan uno por uno y cada ambiente se ilumina | «Rinde potencial por ambiente, listo.» / «Potential yield by zone, ready.» / «Produtividade potencial por ambiente, pronta.» |
| `preparar` | Preparar el lote | Aparecen nueve puntos de muestreo de suelo en grilla, cada uno con una onda | «Análisis de suelo interpretado.» / «Soil test interpreted.» / «Análise de solo interpretada.» |
| `fertilizar` | Fertilizar | Mapa de prescripción: cada ambiente se pinta de un azul (más oscuro, más dosis) y recibe una gota | «Dosis óptima económica por ambiente.» / «Economic optimum rate by zone.» / «Dose de máxima eficiência econômica por ambiente.» |
| `acompanar` + `data-clima="sequia"` | Acompañar el cultivo | El terreno se pone anaranjado, empezando por el ambiente bajo | «Riego necesario para llegar al rinde objetivo.» / «Irrigation needed to reach the target yield.» / «Irrigação necessária para atingir a produtividade-alvo.» |
| `acompanar` + `data-clima="calor"` | Acompañar el cultivo | Sol fuerte en una esquina, el lote más cálido y el aire que reverbera | «Alerta de estrés térmico para los próximos días.» / «Heat stress alert for the coming days.» / «Alerta de estresse térmico para os próximos dias.» |
| `acompanar` + `data-clima="lluvia"` | Acompañar el cultivo | Cruza una llovizna y después el verde se aviva | «Riesgo de enfermedades fúngicas después de la lluvia.» / «Fungal disease risk after the rain.» / «Risco de doenças fúngicas depois da chuva.» |
| `cerrar` | Cerrar y aprender | La cosechadora pasa en franjas, ida y vuelta, y deja el mapa de rinde por ambiente | «Brecha de rinde por ambiente, calculada.» / «Yield gap by zone, calculated.» / «Lacuna de produtividade por ambiente, calculada.» |
| viento (`data-viento`) | — (ambiente) | Tres ráfagas finas cruzan el lote, escalonadas | Sin notificación |

De dónde sale cada respuesta en «Qué hace»: rinde potencial por ambiente y riego necesario (Planificar), análisis de suelo (Preparar el lote), dosis óptima económica (Fertilizar), alertas de estrés térmico y de enfermedades fúngicas (Acompañar el cultivo), brecha de rendimiento por ambiente (Cerrar y aprender).

## Tiempos

| | Duración |
|---|---|
| Primera escena | 3,2 s después de que el hero entra en pantalla (deja terminar el dibujo de entrada del lote) |
| Cada escena | 10 s (`--esc-dur`): condición 0–2,2 s · análisis 2,2–3,3 s · notificación 3,3–9,5 s (5,5 s a la vista, con el lote en su estado final, para que alcance a leerse) · se desvanece 8,8–9,6 s |
| Calma entre escenas | 5,5 s |
| Viento | En el 60 % de las calmas, 3,4 s en el medio de la calma |

Orden: las cinco escenas salen mezcladas al azar y no se repiten hasta que pasaron todas; al empezar otra vuelta, la primera no repite la última. En Acompañar, el clima sale al azar sin repetir el anterior.

## Dónde está cada cosa

| Qué | Archivo |
|---|---|
| Capas de cada escena (SVG) y notificaciones | `src/components/LoteMap.jsx` |
| Animaciones, colores y línea de tiempo | `src/components/LoteMap.css` |
| Qué escena corre y cuándo (orden, calma, viento, pausa fuera de pantalla) | `src/scripts/escenasLote.js` |
| Textos de las notificaciones | `src/i18n/locales/{es,en,pt}.jsx`, clave `hero.avisos` |
| Forma del lote y su lugar en el mosaico | `src/components/LotesMosaic.jsx` (`LOTE_HERO`) |

### Cómo cambiar algo

- **Un texto**: `hero.avisos` en los tres diccionarios. Corto, una línea o dos, con los términos que ya usa la web en ese idioma.
- **Un tiempo**: las constantes al principio de `escenasLote.js`; si cambia la duración de la escena, también `--esc-dur` y los porcentajes de los `@keyframes` comunes (`rp-esc-envolvente`, `rp-esc-barrido`, `rp-esc-aviso`) en `LoteMap.css`.
- **Una escena nueva**:
  1. su id en `ESCENAS` (o un clima en `CLIMAS`) de `escenasLote.js`;
  2. su capa `<g className="rp-esc rp-esc--<id>">` en `LoteMap.jsx`, dibujada en el lienzo de 520 × 430 que se estira sobre el lote;
  3. su notificación: el id en `AVISOS` de `LoteMap.jsx` y el texto en los tres diccionarios;
  4. en `LoteMap.css`, su selector en la envolvente y en `rp-esc-aviso`, y las animaciones de sus elementos;
  5. una fila en la tabla de este documento, con de dónde sale la respuesta en «Qué hace».
- **Sacar una escena**: lo mismo al revés; que no quede su texto huérfano en los diccionarios.

### Cómo verla sin esperar

En la consola del navegador, con el hero a la vista:

```js
const f = document.querySelector('.rp-lote');
f.dataset.clima = 'lluvia';      // sólo para acompanar
f.dataset.escena = 'acompanar';  // planificar | preparar | fertilizar | acompanar | cerrar
// el viento: f.dataset.viento = ''
```

El script puede pisarla con la escena que le toca; para revisar con calma conviene bloquear `escenasLote.js` (por ejemplo con `page.route` en `playwright-cli`).
