// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Sitio estático publicado en GitHub Pages desde /docs, como VigIA-Landing.
// Astro genera un .html por página, así que no hace falta el truco del
// 404.html que usaba la SPA de Vite.
export default defineConfig({
  // public/CNAME tiene que coincidir con site, o Pages pierde el dominio.
  site: 'https://rindeplus.com',
  base: '/',
  outDir: './docs',
  trailingSlash: 'ignore',
  integrations: [react()],
  // Español en la raíz (/), inglés bajo /en/ y portugués de Brasil bajo
  // /pt/. Cada idioma tiene su página en src/pages; Astro.currentLocale dice
  // en cuál se está renderizando.
  i18n: {
    locales: ['es', 'en', 'pt'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  build: {
    assets: 'assets',
  },
});
