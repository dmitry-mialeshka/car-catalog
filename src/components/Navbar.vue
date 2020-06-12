<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="primary">
      <b-navbar-brand href="/">
        Home
      </b-navbar-brand>
      <SearchFilter v-if="this.$route.path==='/'"/>
    </b-navbar>
  </div>
</template>

<script>
  import SearchFilter from "./SearchFilter";

  export default {
    name: "Navbar",
    components: { SearchFilter },
  }
</script>

<style scoped>

</style>
