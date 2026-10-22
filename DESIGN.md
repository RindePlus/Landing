---
name: Rinde Plus
description: Landing agro técnica y sobria de inteligencia agronómica por lote, con la estética de la landing de VigIA y la marca de Rinde Plus.
colors:
  canvas: "#f3f2ee"
  surface: "#fbfaf8"
  surface-2: "#e9e7e1"
  border: "#d8d5cd"
  border-muted: "#e4e1da"
  border-strong: "#b1ada3"
  ink: "#161b24"
  ink-muted: "#424956"
  ink-subtle: "#525a68"
  marino: "#0f2747"
  azul: "#1a62e2"
  amarillo: "#f2cd00"
  accent: "#1a56cc"
  accent-soft: "#e2e8f4"
  campo: "#3b6e25"
  agua: "#2a6f73"
  alerta: "#8a5300"
  perdida: "#b3261e"
  carbono: "#7a4b26"
  whatsapp: "#25d366"
  whatsapp-ink: "#0b2e13"
  on-marino-fg: "#ece8df"
  on-marino-muted: "#b8c6e0"
  on-marino-subtle: "#9fb1d3"
  dark-canvas: "#181818"
  dark-surface: "#1f1f1f"
  dark-ink: "#ece8df"
  dark-marino-bg: "#0f1a2e"
typography:
  display:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600
    letterSpacing: "-0.03em"
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5rem"
  data:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontWeight: 500
    letterSpacing: "-0.04em"
rounded:
  sm: "6px"
  btn: "8px"
  card: "12px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.btn}"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.whatsapp-ink}"
    rounded: "{rounded.btn}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
  footer:
    backgroundColor: "{colors.marino}"
    textColor: "{colors.on-marino-muted}"
---

# Design System: Rinde Plus

> Fuente normativa: los tokens de [`src/index.css`](src/index.css). Este archivo los resume para la skill `impeccable` y para quien diseñe. Si un valor de acá no coincide con `index.css`, manda `index.css`; actualizá este archivo.

## Overview

La estética es la de la landing de VigIA BioEstrés (repo `VigIA-Landing`), con la marca de Rinde Plus: donde VigIA usa su verde bosque, acá va el **azul marino**, y los detalles de marca toman el **amarillo** del logo.

La página se lee como un buen informe agronómico: papel neutro, tinta oscura, datos precisos y color sólo donde significa algo. Es sobria y de densidad media. Se evitan los recursos de landing generada:
- títulos con degradé;
- etiquetas en mayúsculas de colores;
- desenfoques al aparecer;
- pulsos y animaciones infinitas.

## Colors

### Marca
- **Azul marino** (#0f2747): el lugar del verde bosque de VigIA. Fondo del footer. En oscuro, como fondo pasa a #0f1a2e.
- **Azul** (#1a62e2) y **amarillo** (#f2cd00): los dos colores del logo. El amarillo no pasa como texto sobre el fondo claro: va en trazos (la línea de la sección activa del menú), íconos y puntos, o sobre el marino.
- **Acento de interacción** (#1a56cc): enlaces, foco y hover. Es el azul del logo un punto más oscuro, para que pase AA como texto chico. En oscuro, #8fb0ef.

### Con significado (no son de marca)
- **Verde campo** (#3b6e25): el cultivo a salvo, el grano.
- **Agua** (#2a6f73), **ámbar alerta** (#8a5300), **rojo pérdida** (#b3261e), **tierra** (#7a4b26, carbono en el suelo).
- **WhatsApp** (#25d366) con texto oscuro (#0b2e13): el blanco no llega a 3:1.

### Neutros
- **Piedra** (#f3f2ee): fondo de la página. **Superficie** (#fbfaf8): tarjetas y paneles.
- **Tinta** (#161b24): texto principal y botón principal. **Tinta suave** (#424956, 8:1) y **tenue** (#525a68, 6,2:1): se leen también al sol, en el celular.
- **Sobre el marino:** texto #ece8df y secundarios teñidos de azul (#b8c6e0, #9fb1d3), no grises neutros.
- **Oscuro:** fondos neutros #181818 / #1f1f1f y texto en blanco cálido #ece8df.

## Typography

- **Títulos y texto:** IBM Plex Sans, títulos en 600. **Cifras:** Chivo Mono 500 (indicadores de Impacto), con el separador de miles en IBM Plex Sans (`.rp-impact__sep`) para que "110.000" no se lea "110 . 000".
- **Carga:** alojadas en `public/fonts/` (`@font-face` en `index.css`), variables, sólo latin y latin-ext; IBM Plex Sans latin se precarga en `src/layouts/BaseLayout.astro`. Sin Google Fonts.
- **Escalas:** `--text-*` con su `--leading-*`, `--space-*` y `--ease-fluid` / `--dur-*`, las mismas de VigIA.

## Components

- **Header:** logo a la izquierda, menú al centro, acciones a la derecha (tema, idioma, Ingresar). Transparente arriba de todo; al bajar, fondo translúcido con desenfoque y una línea fina. Se oculta al bajar un tramo sostenido (120 px) y vuelve con un gesto corto hacia arriba. La sección activa lleva una línea amarilla debajo. En celular: ☰ | logo centrado | idioma + ingresar, con el menú, el tema y el ingreso en un drawer.
- **Botón principal:** tinta sobre papel (negro en claro, blanco cálido en oscuro), 8 px de radio.
- **Footer:** banda marino, logo de la versión oscura (amarillo y azul claro se leen sobre el marino), redes en círculos con borde, cuatro datos de contacto con títulos chicos en mayúsculas e íconos amarillos, y el copyright en un renglón fino.
- **Tarjetas:** superficie, borde de 1 px, 12 px de radio, sombra mínima.

### Lote del hero (Signature Component)
- **Qué es:** uno de los potreros del mosaico de fondo, resaltado con sus ambientes y alineado con el fondo (muchas hectáreas, una remarcada).
- **Escenas:** cada tanto pasa un momento de la campaña (planificar, preparar, fertilizar, acompañar con una condición de clima, cerrar), Rinde Plus lo analiza (un barrido azul) y responde con una notificación. Una por vez, con calma entre medio; el viento cruza en la calma, sin respuesta. Todo en [`doc/ANIMACION_LOTE.md`](doc/ANIMACION_LOTE.md).

## Pantallas grandes

Decisión completa en [`doc/ADR-001-pantallas-grandes.md`](doc/ADR-001-pantallas-grandes.md).

- **Alto:** ninguna sección mide `100vh`/`100svh`. El hero es la excepción, con tope: `min(100svh, 880px)`. Las bandas con `min-height` llevan un tope en px.
- **Escalones por ancho de ventana** (`min-width`), no por resolución, porque el escalado de Windows cambia el ancho que recibe la página:
  - Desde 1800 px: `html` a 17 px, `--ancho-contenido` 1240, `--ancho-amplio` 1400.
  - Desde 2300 px: `html` a 18 px, 1320 y 1480.
  - Por debajo de 1800: 16 px, 1160 y 1320.
- **Unidades:** el texto va en rem y los espaciados en px, así crece el texto sin inflar el aire entre secciones.
- **Anchos:** los contenedores de página usan los tokens `--ancho-contenido` y `--ancho-amplio`. Las columnas de texto y los bloques internos van en rem.
- **Lo que va en px y acompaña al texto** (logo, botones e íconos del header) usa `--header-*`, que crece en los mismos escalones.
- **Título del hero:** con tope en rem. Antes de ensanchar una columna, medir cuántos renglones ocupa el título: con menos renglones, el bloque queda más bajo.

**Regla para agentes:** cada cambio de alto, ancho o espaciado se verifica en 1366×768, 1536×864, 1920×1080, 2560×1440, 2560×1080 y 390×844 antes de darlo por terminado. En cada tamaño se revisa:
- que no haya scroll lateral;
- el aire arriba y abajo de cada sección, marcando lo que pase de ~120 px sin motivo;
- los anchos máximos;
- los tamaños de título y texto.

Se comparan las medidas antes y después, y se confirma que 1366 y 390 no cambiaron sin querer. Se sacan capturas del hero en 1366, 1920 y 2560, en claro y oscuro. Al final, `pnpm validate`. El modo dispositivo sirve para las proporciones; el tamaño físico del texto se juzga en un monitor real.

## Do's and Don'ts

### Do:
- **Do** usar los tokens de `index.css`, sin hex sueltos en los componentes.
- **Do** dar a cada color su significado: azul y amarillo son la marca; verde, ámbar, rojo y tierra dicen algo del cultivo.
- **Do** animar sólo opacidad y transform, con `var(--ease-fluid)`, con alternativa para `prefers-reduced-motion`.
- **Do** verificar en celular (390 px) y escritorio, claro y oscuro, con `playwright-cli` (`npx -y @playwright/cli@0.1.22`).

### Don't:
- **Don't** usar el verde bosque de VigIA ni azules de librería (#0969da y similares).
- **Don't** usar degradés en el texto, pulsos ni animaciones infinitas.
- **Don't** poner amarillo como texto sobre el fondo claro.
