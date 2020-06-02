<template>
  <div class="container">
    <h2> Found {{ total }} ads</h2>
    <b-card-group columns>
      <div v-for="model in list" :key="model.id">
        <b-card img-src="https://static.av.by/images/noimage.png"
                img-top
                img-alt="Card image"
                class="mb-3">
          <b-card-text class="align-bottom">
            <div class="row">
              <div class="col-sm-12">
                <span><strong>{{ model.model_make_id }} {{ model.model_name }}, <span>{{ model.model_year }}</span></strong></span>
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
  import { mapState } from "vuex";

  export default {
    name: "Catalog",
    data() {
      return {
        perPage: 6,
        currentPage: 1,
      }
    },
    computed: {
      ...mapState({
        loading: state => state.products.loadnig,
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
  }
</script>

<style scoped>

</style>
