<template>
  <div id="app">
    <SearchFilter/>
    <Catalog />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Catalog from './components/Catalog';
import SearchFilter from "./components/SearchFilter";

export default {
  name: 'App',
  created() {
    this.setProducts();
  },
  components: {
    SearchFilter,
    Catalog,
  },
  computed: {},
  methods: {
    ...mapActions('products', ['setProducts']),
  },
};
</script>

<style lang="scss">
  @import "index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
