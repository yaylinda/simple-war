import Vue from "vue";
import VueRouter from "vue-router";
import SimpleWarView from "../views/SimpleWarView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "games",
    component: SimpleWarView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
