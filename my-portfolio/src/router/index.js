import Vue from "vue";
import VueRouter from "vue-router";

// Layouts
import DefaultLayout from "../layouts/DefaultLayout.vue";

// Pages
import Main from "../pages/main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    meta: { layout: DefaultLayout },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
