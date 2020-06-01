import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
  },
  strict: process.env.NODE_ENV !== 'production',
});
