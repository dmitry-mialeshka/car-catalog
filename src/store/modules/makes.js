import {loadJSON} from '../../services/remote';

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
      dispatch("root/loader/updateStatusAction", true, { root: true });
      const localMakes = JSON.parse(localStorage.getItem('makes'));
      if (localMakes) {
        commit('saveMakesData', localMakes);
        dispatch('root/loader/updateStatusAction', false, { root: true });
      } else {
        loadJSON('../../../data/makes.json')
          .then((makes) => {
            commit('saveMakesData', makes);
            localStorage.setItem('makes', JSON.stringify(makes));
            dispatch('root/loader/updateStatusAction', false, { root: true });
          })
          .catch((err) => console.log(err));
      }
    },
  },
};

export default store;
