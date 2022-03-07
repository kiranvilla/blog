<template>
  <div>
    <NavHeader :header="header" @changeHeader="handleChangeHeader" />
    <div class="main-container">
      <NavSideBar />
      <router-view></router-view>
    </div>
    <NavFooter />
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
import NavSideBar from '../components/content/NavSideBar.vue'

export default {
  components: {
    NavHeader,
    NavFooter,
    NavSideBar,
  },

  data() {
    return {
      header: 'Nav Header One'
    }
  },

  methods: {
    handleChangeHeader(value) {
      this.header = value
    }
  }
}
</script>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 300px auto;
}
</style>
