import Vue from "vue";
import Router from "vue-router";

const _import = file => () => import("@/components/" + file + ".vue");
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: _import("main/Home")
  },
  {
    path: "/detail/:pk",
    name: "detail",
    component: _import("main/Detail")
  },
  {
    path: "/detail/:pk/:address/:type",
    name: "detailtype",
    component: _import("main/Detail")
  },
  {
    path: "/detail/:pk/:address",
    name: "detailwithouttype",
    component: _import("main/Detail")
  },
];

const router = new Router({
  mode: "history",
  routes: routes,
/*   scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  } */
});

export default router;
