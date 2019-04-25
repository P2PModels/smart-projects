import i18n from "i18next";
import Backend from 'i18next-fetch-backend';
import { initReactI18next } from "react-i18next";
//import es from './languages/es'
i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'es',
    fallbackLng: 'en',
    defaultNS: 'App',
    load: 'languageOnly',
    backend: {
      loadPath: 'locale/{{lng}}/{{ns}}.json'
    },

    // allow keys to be phrases having `:`, `.`
    nsSeparator: false,
    keySeparator: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
