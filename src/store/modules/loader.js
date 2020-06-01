const store = {
  namespaced: true,
  state: {
    loader: false
  },

  getters: {
    status: state => state.loader
  },

  mutations: {
    updateStatus: (state, status) => (state.loader = status)
  },

  actions: {
    updateStatusAction: ({ commit }, status) => commit('updateStatus', status)
  }
};

export default store;
