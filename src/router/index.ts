import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Veritas Divining",
    category: "Veritas Services",
    component: () => import("@/views/LandingView.vue"),
  },
  {
    path: "/services",
    name: "Services",
    category: "Veritas Services",
    component: () => import("@/views/TarotReadingServices.vue"),
  },
  {
    path: "/terms-of-service",
    name: "Terms of Service",
    category: "Veritas Services",
    component: () => import("@/views/TermsOfService.vue"),
  },
  {
    path: "/disclaimer",
    name: "Disclaimer",
    category: "Veritas Services",
    component: () => import("@/views/Disclaimer.vue"),
  },
  {
    path: "/divination",
    name: "Divination",
    category: "Reference",
    component: () => import("@/views/DivinationSpecifics.vue"),
  },
  {
    path: "/good-question",
    name: "Good Questions",
    category: "Reference",
    component: () => import("@/views/GoodQuestions.vue"),
  },
  {
    path: "/bookings",
    name: "Schedule a reading",
    category: "Veritas Services",
    component: () => import("@/views/SchedulingView.vue"),
  },
  {
    path: "/tarot",
    name: "Tarot",
    category: "Reference",
    component: () => import("@/views/TarotHub.vue"),
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    category: "Veritas Services",
    component: () => import("@/views/Testimonials.vue"),
  },
  {
    path: "/resources",
    name: "Resources",
    category: "Reference",
    component: () => import("@/views/TarotResources.vue"),
  },
  {
    path: "/ethics",
    name: "Ethics",
    category: "Reference",
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve({ ...savedPosition });
        } else {
          resolve({ top: 0, left: 0 });
        }
      }, 600);
    });
  },
});

interface cleanRoute {
  path: string;
  name: string;
  category: string | undefined;
}

const cleanRoutes: cleanRoute[] = [];
for (const route of routes) {
  if (route.path && route.name && route.name !== "NotFound") {
    cleanRoutes.push({
      path: route.path,
      name: route.name,
      category: route.category,
    });
  }
}

const siteMap = cleanRoutes.reduce(
  (categorized: { [key: string]: any[] }, route: cleanRoute) => {
    if (typeof route?.category === "string") {
      if (!Object.keys(categorized).includes(route.category)) {
        return {
          ...categorized,
          [route.category]: [route],
        };
      } else {
        if (Array.isArray(categorized[route.category])) {
          categorized[route.category].push(route);
        }
        return categorized;
      }
    } else {
      if (!Object.keys(categorized).includes("Uncategorized")) {
        return {
          ...categorized,
          Uncategorized: [route],
        };
      } else {
        categorized.Uncategorized.push(route);
        return categorized;
      }
    }
  },
  {}
);

export { routes, siteMap };

export default router;
