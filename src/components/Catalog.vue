<template>
  <div class="container">
      <div class="row">
          <div class="col-md-4">
              <h2> Found {{ total }} ads</h2>
          </div>
          <div class="col-md-8">
              <SearchFilter/>
          </div>
      </div>
    <b-card-group columns>
      <div v-for="model in list" :key="model.id">
          <router-link  :to="{ name: 'product', params: { make_id: model.model_make_id, model_id: model.model_id} }" >
        <b-card img-src="https://static.av.by/images/noimage.png"
                img-top
                img-alt="Car"
                class="col">
          <b-card-text class="align-bottom">
            <div class="row">
              <div class="col-sm-12">
                <span><strong>{{ model.model_make_name }} {{ model.model_name }}, <span>{{ model.model_year }}</span></strong></span>
              </div>
              <div class="col-sm-12 text-truncate">
                <span>{{ model.model_transmission_type }}, {{ model.model_trim }}, {{ model.model_engine_fuel }}</span>
              </div>
            </div>
          </b-card-text>
        </b-card>
          </router-link>
      </div>
    </b-card-group>
    <div class="row">
      <div class="col">
       <Pagination
         v-on:currentPage="setCurrentPage"
         v-on:perPage="setPerPage"
         :currentPage="currentPage"
         :perPage="perPage"
         :total="total"
       />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import SearchFilter from './SearchFilter';
  import Pagination from "./Pagination";

  export default {
    name: "Catalog",
      components: {Pagination, SearchFilter},
      created() {
      this.setProducts();
    },
    data() {
      return {
        perPage: 6,
        currentPage: 1,
      }
    },




    computed: {
      ...mapState({
        loading: state => state.products.loading,
        products: state => state.products.all,
        searchProducts: state => state.products.searchProducts,
        total: state => state.products.total,
        }),
      list () {
        const items = this.searchProducts.map(p => p.models).reduce((acc, arr) => acc.concat(...arr), []);
        return items.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        )
      },
  },
    methods: {
      setCurrentPage(value){
         this.currentPage = value
      },
      setPerPage(value){
          this.perPage = value
      },
      ...mapActions("products", ["setProducts"]),
    },
  }
</script>
<style scoped>

</style>
