<template>
  <div>
    <DefaultLayout />
  </div>
</template>

<script>
import DefaultLayout from './Layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
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
