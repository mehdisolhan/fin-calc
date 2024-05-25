import { createI18n } from "vue-i18n";
import { language } from "./language";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    locale: "tr",
    fallbackLocale: "tr",
    messages: language,
    globalInjection: true,
  });

  nuxtApp.vueApp.use(i18n);
});
