import makes from "../../data/makes.json";
const store = {
  namespaced: true,
  state: {
    makes: {},
  },

  getters: {
    makes: (state) => state.makes,
  },

  mutations: {
    saveMakesData: (state, makes) => ({
      ...state,
      data: makes,
    }),
  },

  actions: {
    loadDataAction: ({ commit, dispatch }) => {
      dispatch('root/loader/updateStatusAction', true, { root: true });
      const localMakes = localStorage.getItem('makes');
      if (localMakes) {
        commit('saveMakesData', JSON.parse(localMakes));
        dispatch("root/loader/updateStatusAction", false, { root: true });
      } else {
        commit('saveMakesData', makes);
        localStorage.setItem('makes', JSON.stringify(makes));
        dispatch('root/loader/updateStatusAction', false, { root: true });
      }
    },
  },
};

export default store;
