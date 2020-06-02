import products from '../../data/products.json';

const state = () => ({
  all: [],
  total: 0,
});

const getters = {};

const mutations = {
  setProducts (state, products) {
    state.all = products
    state.total = products.reduce((acc, product) => acc += product.models.length, 0)
  }
};

const actions = {
  getProducts: ({ commit }) => {
    const localProducts = localStorage.getItem('products');
    if (!localProducts) {
      localStorage.setItem('products', JSON.stringify(products.makes));
    }
    commit('setProducts', localProducts ? JSON.parse(localProducts) : products.makes);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
