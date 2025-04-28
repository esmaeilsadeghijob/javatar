import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json";
import fn from "./i18n/fn.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        fn: { translation: fn },
    },
    lng: "fn",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
