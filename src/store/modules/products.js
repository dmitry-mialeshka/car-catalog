import products from '../../data/products.json';

const SET_LOADING = 'SET_LOADING';
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_SEARCH_PRODUCTS = 'SET_SEARCH_PRODUCTS';
const SET_TOTAL = 'SET_TOTAL';
const SET_SEARCH = 'SET_SEARCH';
const SET_BRANDS = 'SET_BRANDS';
const SET_MODELS = 'SET_MODELS';
const SET_YEARS = 'SET_YEARS';
const SET_PRODUCT = 'SET_PRODUCT';

const state = () => ({
  loading: false,
  all: [],
  one: null,
  brands: [],
  models: [],
  years: [],
  searchProducts: [],
  total: 0,
  search: {
    make: null,
    model: null,
    year: null,
  }
});

const getters = {};

const mutations = {
  [SET_LOADING]: (state, loading) => state.loading = loading,
  [SET_PRODUCTS](state, products) {
    state.all = products
  },
  [SET_BRANDS](state, products) {
    state.brands = products.map(p => p.make)
  },
  [SET_MODELS](state, models) {
    state.models = Array.from(new Set(models.map(m => m.model_name))).sort();
  },
  [SET_YEARS](state, models) {
    state.years = Array.from(new Set(models.map(m => m.model_year))).sort();
  },
  [SET_TOTAL](state, products) {
    state.total = products.reduce((acc, product) => acc += product.models.length, 0)
  },
  [SET_SEARCH](state, search) {
    state.search = search
  },
  [SET_SEARCH_PRODUCTS](state, products) {
    state.searchProducts = products
  },
  [SET_PRODUCT](state, data) {
    const makes = state.all.find((make) => make._id === data.make_id)
    makes && (state.one = makes.models.find((model) => model.model_id === data.model_id))
  }
};

const actions = {
  setProducts: ({commit}) => {
    commit(SET_LOADING, true);
    const localProducts = localStorage.getItem('products');
    if (!localProducts) {
      localStorage.setItem('products', JSON.stringify(products.makes));
    }
    const parsedProducts = localProducts ? JSON.parse(localProducts) : products.makes
    commit(SET_PRODUCTS, parsedProducts);
    commit(SET_BRANDS, parsedProducts);

    const models = parsedProducts.map(p => p.models).reduce((acc, arr) => acc.concat(...arr), []);
    commit(SET_MODELS, models);
    commit(SET_YEARS, models);

    commit(SET_SEARCH_PRODUCTS, parsedProducts);
    commit(SET_TOTAL, parsedProducts);
    commit(SET_LOADING, false);
  },
  setProduct: ({commit}, data) => {
    commit(SET_PRODUCT, data)
  },
  setSearch: ({commit}, search) => {
    commit(SET_SEARCH, search);
  },
  search: ({commit, state}) => {
    commit(SET_LOADING, true);
    const make = state.search.make;
    const model = state.search.model;
    const year = state.search.year;

    let searchProducts = state.all;
    let models = searchProducts.map(p => p.models).reduce((acc, arr) => acc.concat(...arr), []);

    if (make) {
      searchProducts = searchProducts.filter(p => p.make === make);
      models = searchProducts.map(p => p.models).reduce((acc, arr) => acc.concat(...arr), []);
    }
    if (model) {
      searchProducts = searchProducts
        .filter(p => p.models.some(m => m.model_name === model))
        .map(p => ({...p, models: p.models.filter(m => m.model_name === model)}));
      models = searchProducts.map(p => p.models).reduce((acc, arr) => acc.concat(...arr), []);
    }
    if (year) {
      searchProducts = searchProducts
        .filter(p => p.models.some(m => m.model_year === year))
        .map(p => ({...p, models: p.models.filter(m => m.model_year === year)}));
    }

    searchProducts = searchProducts.length ? searchProducts : state.all;

    commit(SET_SEARCH_PRODUCTS, searchProducts);
    commit(SET_BRANDS, searchProducts);
    commit(SET_MODELS, models);
    commit(SET_YEARS, models);
    commit(SET_TOTAL, searchProducts);
    commit(SET_LOADING, false);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
