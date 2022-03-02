<template>
  <div>
    <NavHeader :header="header" @changeHeader="handleChangeHeader" />
    <AppContent />
    <NavFooter />
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import NavFooter from './components/NavFooter.vue'
import AppContent from './components/content/AppContent.vue'

export default {
  components: {
    NavHeader,
    NavFooter,
    AppContent
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

<style>

</style>
