import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import Demo1 from "@/views/Demo1.vue";
import Demo2 from "@/views/Demo2.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/demo1",
    name: "Demo1",
    component: Demo1,
  },
  {
    path: "/demo2",
    name: "Demo2",
    component: Demo2,
  },
  {
    path: "/",
    redirect:"/home"
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
