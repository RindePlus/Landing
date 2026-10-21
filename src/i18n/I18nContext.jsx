import { createContext, useContext } from 'react';
import { DEFAULT_LOCALE, LOCALES } from './config';
import es from './locales/es';
import en from './locales/en';
import pt from './locales/pt';

export const DICTIONARIES = { es, en, pt };

// El idioma sale de la ruta (/ = es, /en/ = en, /pt/ = pt): cada página de
// Astro lo pasa como `lang` a sus componentes. En Astro cada isla de React se
// monta por separado, así que el provider va en cada una (ver conIdioma).
const I18nContext = createContext({ locale: DEFAULT_LOCALE, dict: es });

export const I18nProvider = ({ locale = DEFAULT_LOCALE, children }) => {
  const valid = LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  return (
    <I18nContext.Provider value={{ locale: valid, dict: DICTIONARIES[valid] }}>
      {children}
    </I18nContext.Provider>
  );
};

// Envuelve un componente para usarlo desde Astro: recibe `lang` y le da el
// diccionario por contexto a todo lo que tenga adentro.
export const conIdioma = (Component) => {
  const ConIdioma = ({ lang, ...props }) => (
    <I18nProvider locale={lang}>
      <Component {...props} />
    </I18nProvider>
  );
  ConIdioma.displayName = `ConIdioma(${Component.displayName || Component.name})`;
  return ConIdioma;
};

export const useI18n = () => useContext(I18nContext);
