# Rinde Plus · Landing

Landing de [rindeplus.com](https://rindeplus.com): una sola página (Astro + islas de React) que cuenta qué hace la plataforma de inteligencia agronómica Rinde Plus. El ingreso a la plataforma es el botón «Ingresar» del header, que lleva a `https://app.rindeplus.com/login`.

## Desarrollo

El gestor de paquetes es `pnpm`. Node 22.12 o superior.

```bash
pnpm install
pnpm dev       # servidor local (http://localhost:4321)
pnpm lint      # ESLint
pnpm check     # astro check (tipos en .astro)
pnpm build     # genera docs/
pnpm preview   # sirve docs/ como en producción
pnpm validate  # lint + check + build
```

## Deploy

GitHub Pages sirve la carpeta `docs/` de `main` en rindeplus.com (ver `public/CNAME` y `site` en `astro.config.mjs`). `docs/` es salida de `pnpm build`: Astro la vacía y la regenera, no se edita a mano. Las rutas que no existen caen en `docs/404.html` (`src/pages/404.astro`), que manda a la home del idioma conservando query y hash.

## Idiomas

Español (latam) en `/`, inglés (US) en `/en/` y portugués (BR) en `/pt/`: una página HTML por idioma, con su `<title>`, descripción, `canonical` y `hreflang`. Los textos viven en `src/i18n/locales/{es,en,pt}.jsx` y se leen con `useI18n()`. Cada componente recibe el idioma de la página como `lang` (los exports van envueltos en `conIdioma`). El selector ES/EN/PT del header lleva a la otra URL y vuelve a la misma sección.

## Estructura

```
src/
├── pages/                  # index.astro, en/, pt/ y 404.astro
├── views/HomeView.astro    # la home: qué secciones son estáticas y cuáles islas
├── layouts/BaseLayout.astro# <head>, tema sin flash, header, footer, WhatsApp
├── components/
│   ├── HomePage.jsx        # hero, beneficios, clientes, CTA, instalar app
│   ├── ImpactSection.jsx   # indicadores y tablas por cultivo
│   ├── Functionalities.jsx # los cinco momentos de la campaña
│   ├── Header.jsx          # menú, tema, idioma, Ingresar
│   ├── Footer.jsx
│   ├── WhatsAppWidget.jsx  # botón flotante (se abre con data-abrir-whatsapp)
│   └── ...
├── data/                   # links de login y redes
├── hooks/                  # tema claro/oscuro, intersection observer
├── i18n/                   # provider, config y diccionarios
└── index.css               # tokens y estilos base (ver DESIGN.md)
```

Las secciones sin estado (hero, CTA, instalar, créditos, footer) se renderizan a HTML al compilar y no cargan JavaScript. Las que tienen interacción se hidratan como islas: el header al cargar, el widget de WhatsApp cuando el navegador está libre, y clientes, impacto, funcionalidades y beneficios al llegar a la pantalla.
