import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Badge from "primevue/badge";
import InputText from "primevue/inputtext";
import Sidebar from "primevue/sidebar";
import Paginator from "primevue/paginator";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Badge", Badge);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Sidebar", Sidebar);
  nuxtApp.vueApp.component("Paginator", Paginator);
});