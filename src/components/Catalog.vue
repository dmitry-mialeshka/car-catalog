<template>
  <div class="container w-auto h-auto">
    <div class="row">
      <div class="col">
        <h2> Found {{ total }} ads</h2>
      </div>
    </div>
    <b-card-group columns>
      <div v-for="model in list" :key="model.id">
        <b-card img-src="https://static.av.by/images/noimage.png"
                img-top
                img-alt="Car"
                class="col">
          <b-card-text class="align-bottom">
            <div class="row">
              <div class="col-sm-12">
                <router-link
                    :to="{ name: 'product', params: { make_id: model.model_make_id, model_id: model.model_id} }">
                  <span><strong>{{ model.model_make_name }} {{ model.model_name }}, <span>{{ model.model_year }}</span></strong></span>
                </router-link>
              </div>
              <div class="col-sm-12 text-truncate">
                <span>{{ model.model_transmission_type }}, {{ model.model_trim }}, {{ model.model_engine_fuel }}</span>
              </div>
            </div>
          </b-card-text>
        </b-card>
      </div>
    </b-card-group>
    <div class="row">
      <div class="col">
        <b-pagination
            align="center"
            v-model="currentPage"
            :total-rows="total"
            :per-page="perPage"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: "Catalog",
    components: {},
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
      list() {
        const items = this.searchProducts.map(p => p.models).reduce((acc, arr) => acc.concat(...arr), []);
        return items.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        )
      },
    },
    methods: {
      ...mapActions("products", ["setProducts"]),
    },
  }
</script>
<style scoped>

</style>
