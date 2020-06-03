import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode:"history",
  routes:[
    {
      path: "/",
      component:() => import("../components/Catalog")
    },
    {
      path: "/:make_id/:model_id",
      name:'product',
      component:() => import("../components/Product")
    }
  ]
})