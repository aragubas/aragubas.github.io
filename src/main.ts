import { createApp } from 'vue'
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"
import "./style.css"
import App from "./App.vue";
import Homepage from "./pages/Home.vue";
import Support from "./pages/Support.vue";
import PageNotFound from "./pages/PageNotFound.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/:pathMatch(.*)*", component: PageNotFound, name: "NotFound" },
  { path: "/", component: Homepage, name: "home" },
  { path: "/support", component: Support, name: "support" }
]
 
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);

app.use(router);
app.mount("#app");
