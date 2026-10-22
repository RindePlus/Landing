# ADR-001 · Pantallas grandes

- **Estado:** aceptada
- **Fecha:** 2026-10-22
- **Origen:** la misma corrección hecha en la landing de VigIA.

## Contexto

La home se diseñó y probó en notebook (1366 × 768). Medida con Playwright en monitores grandes:

- El hero medía `100svh` sin tope: en 2560 × 1440 quedaban **474 px vacíos** arriba del título (294 px en 1920 × 1080). El contenido no crece con el alto y el resto queda vacío.
- Todos los tamaños de letra usaban `clamp(…vw…)` y llegaban al tope cerca de los 1300 px de ancho: de 1366 a 2560 el título medía 54 px y el texto 15–17 px, en una franja de 1000–1320 px.
- El header no tenía ancho máximo: en 2560 el menú quedaba pegado al borde izquierdo y el contenido, centrado.
- Cada componente tenía su propio ancho máximo (1000, 1040, 1120, 1160, 1320), sin un token común.
- La banda de Beneficios (fotos) medía `min(86svh, 820px)`, con ~240 px de aire arriba y abajo del texto.

## Decisión

1. **Ninguna sección mide una pantalla**, salvo el hero, con tope: `min(100svh, 880px)`.
2. **Escalones por ancho de ventana**, con `min-width`, no por resolución. El escalado de Windows (125–150 %) hace que un monitor 2560 entregue 1700–2050 px a la página.

   | Ancho de ventana | `html` font-size | `--ancho-contenido` | `--ancho-amplio` | Logo del header | Botones / íconos del header |
   |---|---|---|---|---|---|
   | < 1800 px | 16 px | 1160 px | 1320 px | 46 px | 34 / 18 px |
   | ≥ 1800 px | 17 px | 1240 px | 1400 px | 50 px | 36 / 19 px |
   | ≥ 2300 px | 18 px | 1320 px | 1480 px | 54 px | 38 / 20 px |

3. **Texto en rem y espaciados en px.** Subir el font-size del `html` agranda el texto sin inflar los márgenes entre secciones. Los `clamp(…vw…)` que ya existían se quedan, porque resuelven el tramo celular → notebook y en escritorio ya están en su tope en rem: por encima de 1300 px sólo los mueven los escalones.
4. **Anchos máximos como tokens** en `src/index.css`:
   - `--ancho-contenido` para el hero (menos 40 px) y el footer.
   - `--ancho-amplio` para Funcionalidades y el header (más su margen).
   - Las columnas de texto y los bloques internos (Impacto, CTA, Instalar, bajadas, Beneficios) van en **rem**: crecen junto con el texto y conservan sus renglones.
5. **Lo que va en px y acompaña al texto** (el logo y los íconos del header) crece en los mismos escalones, con los tokens `--header-*`. `--header-reserva` es el lugar que deja el hero para el header fijo.
6. **El título del hero tiene tope** (`3.4rem`: 54 / 58 / 61 px). Por estar en rem, la relación con la bajada se mantiene en 2,7 en todos los escalones.
7. **La banda de Beneficios** pasa a `min(86svh, 680px)` en escritorio. En 1366 × 768 sigue igual (86svh = 660 px), y en celular conserva su tope anterior.

## Alternativas descartadas

- **Texto fluido con `vw` en todo el rango:** en un 2560 al 150 % de escalado (1707 px) se vería distinto que en un 1920 al 100 % del mismo tamaño físico, y no se puede probar por escalones.
- **Escalones por resolución o `device-pixel-ratio`:** la página no conoce la resolución física, sólo el ancho que le da el sistema.
- **Contenedor a todo el ancho:** renglones larguísimos y el contenido separado de los bordes por nada.
- **Subir también los espaciados:** más aire entre secciones, que era justamente el problema.
- **Quitar el `100svh` del hero:** en notebook se asomaría la sección siguiente debajo del carrusel de clientes. Se eligió un tope.

## Consecuencias

- En 1366 × 768 y 390 × 844 la página queda igual. En celular, el único cambio es el pie de Funcionalidades: el padding de abajo pasa de 56 a 40 px, porque tenía 151 px de aire.
- En 1920 × 1080 y en 2560 × 1440 / 2560 × 1080, el hero mide 880 px, con ~90 px entre el header y el título. El texto crece 6 % y 12,5 %, y la página es 240–590 px más corta.
- Cualquier ancho nuevo de contenedor usa los tokens, o rem si es una columna de texto. Nada de px sueltos para anchos máximos.
- **Cada cambio de alto, ancho o espaciado se verifica** en 1366×768, 1536×864, 1920×1080, 2560×1440, 2560×1080 y 390×844 antes de darlo por terminado (ver `DESIGN.md` → Pantallas grandes).
- El modo dispositivo del navegador sirve para las proporciones. El tamaño físico del texto sólo se juzga en un monitor real.
