import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutMeview from "../views/AboutMeView.vue";
import MyProjectsView from "../views/MyProjectsView.vue";
import MyActivitiesView from "../views/MyActivitiesView.vue";
import ContactMeView from "../views/ContactMeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutMeview,
  },
  {
    path: "/myprojects",
    name: "myprojects",
    component: MyProjectsView,
  },
  {
    path: "/myactivities",
    name: "myactivities",
    component: MyActivitiesView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactMeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
