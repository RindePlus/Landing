# Rinde Plus · Landing

Landing de [rindeplus.com](https://rindeplus.com): una sola página (React + Vite) que cuenta qué hace la plataforma de inteligencia agronómica Rinde Plus. El ingreso a la plataforma es el botón «Ingresar» del header, que lleva a `https://app.rindeplus.com/login`.

## Desarrollo

El gestor de paquetes es `pnpm`.

```bash
pnpm install
pnpm dev       # servidor local
pnpm lint
pnpm build     # genera docs/ (el prebuild lo borra antes)
pnpm preview
```

## Deploy

GitHub Pages sirve la carpeta `docs/` de `main` en rindeplus.com (ver `public/CNAME`). `docs/` es salida de `pnpm build`: se regenera, no se edita a mano. El build copia `index.html` a `docs/404.html` para que cualquier ruta cargue la app, que la normaliza a `/`.

## Idiomas

Español (latam), inglés (US) y portugués (BR). Los textos viven en `src/i18n/locales/{es,en,pt}.jsx` y se leen con `useI18n()`. El idioma sale de la elección guardada o del navegador, y se cambia con el selector ES/EN/PT del header.

## Estructura

```
src/
├── App.jsx                 # normaliza rutas a "/" y widget de WhatsApp
├── components/
│   ├── HomePage.jsx        # hero, beneficios, audiencias, CTA, instalar app
│   ├── Functionalities.jsx # los cinco momentos de la campaña
│   ├── Header.jsx          # menú, tema, idioma, Ingresar
│   ├── Footer.jsx
│   └── ...
├── data/                   # links de login y redes
├── hooks/                  # tema claro/oscuro, intersection observer
└── i18n/                   # provider, config y diccionarios
```
