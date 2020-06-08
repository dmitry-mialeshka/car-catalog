import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import comments from "./modules/comments";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    comments,
  },
  strict: process.env.NODE_ENV !== 'production',
});
