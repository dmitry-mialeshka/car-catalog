<template>
  <b-pagination
    align="center"
    v-model="currentPageChild"
    :total-rows="total"
    :per-page="perPageChild"
    @input="handleClick"
  ></b-pagination>
</template>
<script>
export default {
  name: "Pagination",
  props:["currentPage","total","perPage"],
  data(){
    return{
      currentPageChild: this.currentPage,
      perPageChild : this.perPage
    }
  },
  methods:{
    handleClick(){
      this.$emit('currentPage',this.currentPageChild)
      this.$emit('perPage',this.perPageChild)
    }
  }
}
</script>
<style scoped>

</style>
