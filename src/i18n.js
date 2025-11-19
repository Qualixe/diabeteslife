// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// translations (import or load dynamically)
import en from "./locales/en.json";
import bn from "./locales/bn.json";

i18n
  .use(LanguageDetector) // detects from navigator, localStorage, querystring etc.
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, bn: { translation: bn } },
    lng: "en", // Add this line - forces English as default
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "querystring", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng"
    },
    interpolation: { escapeValue: false }
  });

export default i18n;