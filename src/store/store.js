import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import makes from "./modules/makes";
import loader from "./modules/loader";

Vue.use(Vuex);

export default new Vuex.Store({
  root: {
    namespaced: true,
    getters,
    actions,
    mutations,
    modules: {
      loader,
      makes,
    },
  },
});
