<template>
  <div>
    {{ 'test' }}
    <div v-for="product in products" :key="product._id">
      {{ product._id }}
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: "Catalog",
    computed: mapState({
      products: state => state.products.all,
    }),
    created() {
      console.log(this.makes);
    }
  }
</script>

<style scoped>

</style>
