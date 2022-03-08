<template>
  <div class="header">
    <h2 @click="handleChangeHeader">{{ $store.state.header }}</h2>
  </div>
</template>

<script>
export default {
  methods: {
    handleChangeHeader() {
      this.$store.commit('changeHeader', { title: 'header changed' })
      // this.$store.state.header = 'header changed'
      // this.$emit('changeHeader', 'Header changed')
    }
  }
}
</script>

<style scoped>
.header {
  background: black;
  text-align: center;
  padding: 10px;
}
h2 {
  color: #fff;
}
</style>