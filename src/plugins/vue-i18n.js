import Vue from "vue";
import VueI18n from "vue-i18n";

// Localisation language list
import { enLocales } from '../locales/en'
import { ruLocales } from '../locales/ru'
import { frLocales } from '../locales/fr'
import { arLocales } from '../locales/ar'


Vue.use(VueI18n);

const messages = {
  en: {
    message: enLocales
  },
  ru: {
    message: ruLocales
  },
  fr: {
    message: frLocales
  },
  ar: {
    message: arLocales
  }
}

// get current selected language
const lang = localStorage.getItem("language") || "en";

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: lang, // set locale
  messages // set locale messages
});

export default i18n;