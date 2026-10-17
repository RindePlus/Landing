// Idiomas del sitio. Todo vive en "/": el idioma sale de la elección guardada
// o del navegador, y se cambia con el selector del header. Para sumar uno se
// agrega acá, en HTML_LANG/LOCALE_LABELS y su diccionario en ./locales.
export const LOCALES = ['es', 'en', 'pt'];
export const DEFAULT_LOCALE = 'es';
export const STORAGE_KEY = 'rp-locale';

// Valor de <html lang> por idioma: español latam, inglés US, portugués BR.
export const HTML_LANG = {
  es: 'es-419',
  en: 'en-US',
  pt: 'pt-BR',
};

export const LOCALE_LABELS = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
};
