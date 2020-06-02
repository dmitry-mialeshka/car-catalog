<template>
  <div id="app">
      <div class="page-content">
      <Catalog />
      </div>
      <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

export default {
  name: 'App',
  created() {
    this.getProducts();
  },
  components: {
    Catalog,
    Footer
  },
  computed: {},
  methods: {
    ...mapActions('products', ['getProducts']),
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
.page-content{
    min-height: calc(100vh - 80px);
}
</style>
