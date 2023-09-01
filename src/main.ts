import { createApp } from "vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Homepage from "./pages/Home.vue";
import Support from "./pages/Support.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLinkedin,
  faTelegram,
  faDiscord,
  faYoutube,
  faMastodon,
  faTwitter,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPaw, faInbox, faCloud } from "@fortawesome/free-solid-svg-icons";

const routes: Array<RouteRecordRaw> = [
  { path: "/:pathMatch(.*)*", component: PageNotFound, name: "NotFound" },
  { path: "/", component: Homepage, name: "home" },
  { path: "/support", component: Support, name: "support" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

// Add Icons
library.add(
  faLinkedin,
  faTelegram,
  faDiscord,
  faYoutube,
  faMastodon,
  faPaw,
  faInbox,
  faTwitter,
  faTiktok,
  faInstagram,
  faCloud
);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
