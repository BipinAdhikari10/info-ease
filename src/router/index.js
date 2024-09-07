import Vue from "vue";
import Router from "vue-router";
import InfoHome from "@/components/InfoHome.vue";
import InfoAbout from "@/components/InfoAbout.vue";
import InfoServices from "@/components/InfoServices.vue";
import InfoFilim from "@/components/InfoFilim.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "InfoHome",
      component: InfoHome,
    },
    {
      path: "/about",
      name: "InfoAbout",
      component: InfoAbout,
    },
    {
      path: "/services",
      name: "InfoServices",
      component: InfoServices,
    },
    {
      path: "/filim",
      name: "InfoFilim",
      component: InfoFilim,
    },
  ],
});
