import Vue from "vue";
import VueRouter from "vue-router";
import Quem from "../views/Quem.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "quem",
    component: Quem,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
