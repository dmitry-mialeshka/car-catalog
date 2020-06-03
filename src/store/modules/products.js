import products from '../../data/products.json';

const state = () => ({
  all: [],
  one:{},
  total: 0,
});

const getters = {};

const mutations = {
  setProducts (state, products) {
    state.all = products
    state.total = products.reduce((acc, product) => acc += product.models.length, 0)
  },
  setProduct(state, data) {
    const makes = state.all.find((make) => make._id === data.make_id) || {}
    state.one = makes.models.find((model) => model.model_id === data.model_id)
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
  getProduct: ({ commit }, data)=>{
   commit('setProduct', data)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
