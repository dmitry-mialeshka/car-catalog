<template>
  <div class="container">
    <b-form inline>
      <b-form-select
          v-model="makeSearch"
          @input="search"
          :options="getBrands"
          size="sm"
      ></b-form-select>
      <b-form-select
          v-model="modelSearch"
          @input="search"
          :options="getModels"
          size="sm"
      ></b-form-select>
      <b-form-select
          v-model="yearSearch"
          @input="search"
          :options="getYears"
          size="sm"
      ></b-form-select>
    </b-form>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";

  export default {
    name: "SearchFilter",
    computed: {
      ...mapState({
        brands: (state) => state.products.brands,
        models: (state) => state.products.models,
        years: (state) => state.products.years,
        searchFilter: (state) => state.products.search,
      }),
      makeSearch: {
        get() {
        return this.searchFilter.make;
      },
      set(make) {
        return this.setSearch({ ...this.searchFilter, make });
      },
    },
    modelSearch: {
        get() {
        return this.searchFilter.model;
      },
      set(model) {
        return this.setSearch({ ...this.searchFilter, model });
      },
    },
    yearSearch: {
        get() {
        return this.searchFilter.year;
      },
      set(year) {
        return this.setSearch({ ...this.searchFilter, year });
      },
    },
    getBrands() {
      const brands = [{ text: "Select brand", value: null }];
      brands.push(...this.brands);
      return brands;
    },
    getModels() {
      const models = [{ text: "Select model", value: null }];
      models.push(...this.models);
      return models;
    },
    getYears() {
      const years = [{ text: "Select year", value: null }];
      years.push(...this.years);
      return years;
    },
    },
    methods: {
      ...mapActions({
        setSearch: "products/setSearch",
        search: "products/search",
      }),
    },
  };
</script>

<style scoped></style>
