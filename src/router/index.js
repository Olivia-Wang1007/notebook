import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views//User";
import newPage from "../views/newPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/",
    name: "newPage",
    component: newPage,
  },

  {
    path: "/HomePage/HomePage",
    name: "HomePage",
    component: () => import("../views/HomePage/index.vue"),
  },
  {
    path: "/User/User",
    name: "User",
    component: () => import("../views/User/index.vue"),
  },
  {
    path: "/",
    name: "User",
    component: User,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/newPage",
    name: "newPage",
    component: () => import("../views/newPage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
