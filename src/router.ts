import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/:path(.*)*",
      name: "NotFound",
      redirect: { name: "home" },
    },
  ],
  sensitive: true,
});
