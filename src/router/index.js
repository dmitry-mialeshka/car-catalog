import Vue from "vue"
import Router from "vue-router"
import Catalog from '../components/Catalog';
import Product from "../components/Product";
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Catalog,
    },
    {
      path: "/:make_id/:model_id",
      name: 'product',
      component: Product,
    }
  ]
})
