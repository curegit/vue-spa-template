import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import WorkspaceView from "./views/AboutView.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/:catchAll(.*)",
            redirect: { name: "home" },
        },
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: WorkspaceView,
        },
    ],
})
