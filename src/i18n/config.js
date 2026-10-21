// Idiomas del sitio: español en la raíz (/), inglés en /en/ y portugués de
// Brasil en /pt/. Para sumar uno se agrega acá, en HTML_LANG/LOCALE_LABELS,
// su diccionario en ./locales, en astro.config.mjs y su página en src/pages.
export const LOCALES = ['es', 'en', 'pt'];
export const DEFAULT_LOCALE = 'es';

// Valor de <html lang> por idioma: español latam, inglés US, portugués BR.
export const HTML_LANG = {
  es: 'es-419',
  en: 'en-US',
  pt: 'pt-BR',
};

// og:locale por idioma.
export const OG_LOCALE = {
  es: 'es_AR',
  en: 'en_US',
  pt: 'pt_BR',
};

export const LOCALE_LABELS = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
};

// Ruta de la home en cada idioma.
export const HOME_PATH = {
  es: '/',
  en: '/en/',
  pt: '/pt/',
};

// Idioma de la página a partir de Astro.currentLocale.
export const idiomaDe = (locale) => (LOCALES.includes(locale) ? locale : DEFAULT_LOCALE);
