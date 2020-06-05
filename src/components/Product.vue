<template>
  <div class="container">
      <div v-if="product">
    <h2>{{ product.model_make_name}} {{ product.model_name }}</h2>
    <div class="row">
      <div class="col-sm-4">
        <b-card
          img-src="https://static.av.by/images/noimage.png"
          img-top
          img-alt="Card image"
          class="mb-3"
             >
          <b-card-text class="align-bottom">
            <div class="row">
              <div class="col-md-12">
                  <b-button v-b-toggle.collapse class="col-sm-12" >Show more info</b-button>
              </div>
            </div>
          </b-card-text>
        </b-card>
      </div>
       <div class="col-sm-8">
           <div class="container">
               <div class="row">
                   <div class="col-md-4 chr">
                       <div class="col-sm-2"></div>
                       <h1>Maximum speed</h1>
                       <p>{{product.model_top_speed_kph}} km/h</p>
                   </div>
                   <div class="col-md-4 chr">
                       <div class="col-sm-2">
                       </div>
                       <h1>Fuel</h1>
                       <p>{{product.model_engine_fuel}}</p>
                   </div>
               </div>
               <div class="row">
                   <div class="col-md-4 chr">
                       <div class="col-sm-2 "></div>
                       <h1>Engine volume</h1>
                       <p>{{product.model_engine_cc}}</p>
                   </div>
                   <div class="col-md-4 chr">
                       <div class="col-sm-2"></div>
                       <h1>Engine type</h1>
                       <p>{{product.model_engine_type}}</p>
                   </div>
                   <div class="col-md-10">
                           <b-collapse id="collapse">
                               <b-card class="table-responsive" >
                                   <b-table :items="items" :fields="fields" class="table-sm"></b-table>
                               </b-card>
                           </b-collapse>
                   </div>
                   <div class="col-md-10">
                       <h1>{{make.make}}</h1>
                       <p>{{make.description}}</p>
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
      this.setProducts()
      this.getProduct(this.$route.params)
      const { model_make_id,...make } = this.product
      this.items = Object.entries(make).filter(([key,]) => key !== 'model_id').map(([key, value]) => ({ characteristic: key, value: value || 'none' }));
      this.make=this.products.find((make)=>make._id===model_make_id)
  },
    data() {
        return {
            fields: ['characteristic', 'value'],
            items:  [],
            make:{}
        }
    },
    computed: mapState({
        product: (state) => state.products.one,
        products: state => state.products.all,
  }),
    methods:{
        ...mapActions("products",["getProduct","setProducts"])
    }
};
</script>

<style scoped>
.row {
    text-align:center;
}
.chr {
    border-radius:20px;
    margin:30px;
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
