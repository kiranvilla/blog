<template>
  <div class="app-content">
    <NavSideBar />
    <AppListing />
  </div>
</template>

<script>
import NavSideBar from './NavSideBar.vue'
import AppListing from './AppListing.vue'

export default {
  components: {
    NavSideBar,
    AppListing
  }
}
</script>

<style scoped>
.app-content {
  display: grid;
  grid-template-columns: 300px auto;
}
</style>