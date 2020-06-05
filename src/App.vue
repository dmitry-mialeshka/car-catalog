<template>
  <div id="app">
    <SearchFilter />
    <Catalog />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import SearchFilter from './components/SearchFilter';

export default {
  name: 'App',
  created() {
    this.setProducts();
  },
  components: {
    Catalog,
    Footer,
    SearchFilter
  },
  computed: {},
  methods: {
    ...mapActions('products', ['setProducts']),
  },
};
</script>

<style lang="scss">
  @import "index";
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
