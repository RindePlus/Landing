import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, HTML_LANG, LOCALES, STORAGE_KEY } from './config';
import es from './locales/es';
import en from './locales/en';
import pt from './locales/pt';

const DICTIONARIES = { es, en, pt };

// Elección guardada primero; si no hay, el primer idioma del navegador que
// el sitio tenga (es-AR → es, pt-BR → pt); si no, español.
function detectLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (LOCALES.includes(stored)) return stored;
  } catch {
    /* localStorage unavailable — ignore */
  }
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const lang of langs) {
    const base = (lang || '').slice(0, 2).toLowerCase();
    if (LOCALES.includes(base)) return base;
  }
  return DEFAULT_LOCALE;
}

const I18nContext = createContext({ locale: DEFAULT_LOCALE, dict: es, setLocale: () => {} });

export const I18nProvider = ({ children }) => {
  const [locale, setLocaleState] = useState(detectLocale);
  const dict = DICTIONARIES[locale] || DICTIONARIES[DEFAULT_LOCALE];

  const setLocale = useCallback((next) => {
    if (!LOCALES.includes(next)) return;
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage unavailable — ignore */
    }
  }, []);

  // <html lang>, título y descripción siguen al idioma activo.
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale];
    document.title = dict.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', dict.meta.description);
  }, [locale, dict]);

  const value = useMemo(() => ({ locale, dict, setLocale }), [locale, dict, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useI18n = () => useContext(I18nContext);
