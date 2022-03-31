import Vue from "vue";
import VueI18n from "vue-i18n";

// Localisation language list
import { locales as en } from '../locales/en'
import { locales as ru } from '../locales/ru'
import { locales as fr } from '../locales/fr'
import { locales as ar } from '../locales/ar'


Vue.use(VueI18n);

const messages = {
  en, ru, fr, ar
}

// get current selected language
const lang = localStorage.getItem("language") || "en";

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: lang, // set locale
  messages // set locale messages
});

export default i18n;