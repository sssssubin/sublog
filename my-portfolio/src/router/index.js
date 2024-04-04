import Vue from "vue";
import VueRouter from "vue-router";

// Layouts
import DefaultLayout from "../layouts/DefaultLayout.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue"

// Pages
import Main from "../pages/main.vue";
import Dashboard from "../pages/dashboard/home.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    meta: { layout: DefaultLayout },
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { layout: DashboardLayout },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
