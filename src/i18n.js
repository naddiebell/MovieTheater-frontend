import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  sv: {
    translation: {
      "Welcome to React": "Välkommen att reagera",
      "Tickets Button": "Biljetter",
      "Description": "Beskrivning",
      "About Us": "Om Oss",
      "Home Header": "Stockholms Amerikanska Klassikerfilm",
      "Clear Selections": "Rensa",
      "Ticket Page H1": "Biljetter till föreställningar i Stockholm",
    },
  },
  en: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "Tickets Button": "Tickets",
      "Description": "Description",
      "About Us": "About Us",
      "Home Header": "American Classic Movie Theater",
      "Clear Selections": "Clear",
      "Ticket Page H1": "Tickets for Movies in Stockholm",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "sv",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
