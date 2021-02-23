import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  sv: {
    translation: {
      "Tickets Button": "Biljetter",
      "Description": "Beskrivning",
      "About Us": "Om Oss",
      "Home Header": "Stockholms Retro Bio",
      "Clear Selections": "Rensa",
      "Ticket Page H1": "Biljetter till föreställningar i Stockholm",
      "Playing": "Toplistan",
      "Family Movies": "Barn & Familj",
      "American Movies": "Amerikanska Filmer",
      "Choose Seats": "Välj Dina Platser",
      "Pay": "Betala",
      "Email Success": "Tack för att du tittade på våra favorit amerikanska klassiska filmer med oss! Din betalning lyckades. Klicka på knappen för att skicka ditt kvitto till din e-post!",
      "Unsuccess": "Vi beklagar, men din betalning misslyckades. Var god försök igen!",
      "Send Email": "kvitto",
    },
  },
  en: {
    translation: {
      "Tickets Button": "Tickets",
      "Description": "Description",
      "About Us": "About Us",
      "Home Header": "Stockholm's Retro Bio",
      "Clear Selections": "Clear",
      "Ticket Page H1": "Tickets for Movies in Stockholm",
      "Playing": "Top Selling",
      "Family Movies": "Family Friendly",
      "American Movies": "American Classics",
      "Choose Seats": "Select Your Seats",
      "Pay": "Pay",
      "Email Success": "Thank you for watching our favorite American classic films with us! Your payment was successful. Click the button to send your receipt to your email!",
      "Unsuccess": "Your payment did not go through.  Please try again!",
      "Send Email": "Send Email",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "sv",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
