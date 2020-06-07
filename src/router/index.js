import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HomePage from "../views//HomePage";
import User from "../views//User";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../views/About.vue")
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: () =>
      import( "../views/HomePage.vue")
  },
  {
    path: "/HomePage/HomePage",
    name: "HomePage",
    component: () =>
      import( "../views/HomePage/index.vue")
  },
  {
    path: "/User/User",
    name: "User",
    component: () =>
      import( "../views/User/index.vue")
  },
  {
    path: "/",
    name: "User",
    component: User
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import( "../views/Home.vue")
  }

];

const router = new VueRouter({
  routes
});

export default router;
