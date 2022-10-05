import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Veritas Divining",
    component: () => import("@/views/LandingView.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("@/views/TarotReadingServices.vue"),
  },
  {
    path: "/terms-of-service",
    name: "Terms of Service",
    component: () => import("@/views/TermsOfService.vue"),
  },
  {
    path: "/divination",
    name: "Divination",
    component: () => import("@/views/DivinationSpecifics.vue"),
  },
  {
    path: "/good-question",
    name: "Good Questions",
    component: () => import("@/views/GoodQuestions.vue"),
  },
  {
    path: "/schedule",
    name: "Schedule a reading",
    component: () => import("@/views/SchedulingView.vue"),
  },
  {
    path: "/tarot",
    name: "Tarot",
    component: () => import("@/views/TarotHub.vue"),
  },
  {
    path: "/resources",
    name: "Resources",
    component: () => import("@/views/TarotResources.vue"),
  },
  {
    path: "/ethics",
    name: "ethics",
    component: () => import("@/views/CodeOfConduct.vue"),
  },
  //wildcard
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition, behavior: "smooth" };
    } else {
      return { top: 0, left: 0, behavior: "smooth" };
    }
  },
});

const siteMap = routes.map((route) => {
  if (route.path && route.name)
    return {
      path: route.path,
      name: route.name,
    };
});

export { routes };

export default router;
