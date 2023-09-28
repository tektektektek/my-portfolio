import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEs from './locales/es/translation.json';
import translationFr from './locales/fr/translation.json';

//translations
const resources = {
    es: {
        translation: translationEs,
    },
    fr: {
        translation: translationFr,
    },
};

i18n.use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'fr',
        fallbackLng: 'fr', // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
