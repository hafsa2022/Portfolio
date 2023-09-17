import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import VueScrollReveal from "vue-scroll-reveal";
import { autoAnimatePlugin } from "@formkit/auto-animate";

loadFonts();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(autoAnimatePlugin)
  .use(VueScrollReveal, {
    class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 1800,
    scale: 1,
    distance: "50px",
  })
  .mount("#app");
