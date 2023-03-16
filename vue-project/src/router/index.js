import { createRouter, createWebHistory } from "vue-router";
import CatalogView from "../views/CatalogView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Catalog",
      component: CatalogView,
    },
    {
      path: "/CartView",
      name: "Cart",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CartView.vue"),
    },
  ],
});

export default router;
