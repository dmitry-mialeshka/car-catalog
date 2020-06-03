<template>
  <div class="container">
      <div v-if="product">
    <h2>Selected car: {{ product.model_make_name}} {{ product.model_name }}</h2>
    <div class="row">
      <div class="col-sm-4">
        <b-card
          img-src="https://static.av.by/images/noimage.png"
          img-top
          img-alt="Card image"
          class="mb-3"
          @click="getProduct(model.model_id)"
        >
          <b-card-text class="align-bottom">
            <div class="row">
              <div class="col-md-8">
                <span><strong>{{ product.model_make_name }} {{ product.model_name }},
                    <span>{{ product.model_year }}</span></strong></span>
              </div>
            </div>
          </b-card-text>
        </b-card>
      </div>
       <div class="col-md-8">
           <div class="container">
               <div class="row">
                   <div class="col-md-4">
                       <div class="col-sm-2"></div>
                       <h1>Maximum speed</h1>
                       <p>300 km/h</p>
                   </div>
                   <div class="col-md-4">
                       <div class="col-sm-2">
                       </div>
                       <h1>Fuel</h1>
                       <p>Gasoline - Premium</p>
                   </div>
               </div>
               <div class="row">
                   <div class="col-md-4">
                       <div class="col-sm-2 "></div>
                       <h1>Engine volume</h1>
                       <p>1390</p>
                   </div>
                   <div class="col-md-4">
                       <div class="col-sm-2"></div>
                       <h1>Engine type</h1>
                       <p>in-line</p>
                   </div>
               </div>
           </div>
       </div>
    </div>
      </div>
      <h1 v-else>Not Found!</h1>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: "Product",
  created() {
      this.getProduct(this.$route.params)
  },
    computed: mapState({
    product: (state) => state.products.one ,
  }),
    methods:{
        ...mapActions("products",["getProduct"])
    }
};
</script>

<style scoped>
.row {
    text-align:center;
}
.col-md-4 {
    border-radius:20px;
    margin:10px;
    border:1px solid #000;
    display:inline-block;
    float:none !important;
}

.row h1, .row p {
    font-style:italic;
    text-align:left;
}
.row h1 {
    font-size:1.4em;
}

.row p {
    font-size:1em;
}
</style>
