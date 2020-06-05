<template>
  <div id="app">
   <SearchFilter />
    <router-view></router-view>
    <Footer />

  </div>
</template>

<script>
<<<<<<< product-page
export default {
  name: "App",
import { mapActions } from 'vuex';
import Footer from './components/Footer';
import SearchFilter from './components/SearchFilter';

export default {
  name: 'App',
  created() {
    this.getProducts();
  },
  components: {
    Catalog,
    Footer
  },
>>>>>>> master
  computed: {},
};
</script>

<style lang="scss">
<<<<<<< product-page
@import "index";
=======
  @import "index";
html, body {
  height: 100%;
}
>>>>>>> master
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
