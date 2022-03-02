<template>
  <div class="header">
    <h2 @click="handleChangeHeader">{{ header }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: 'Nav header two'
    }
  }, // Array or Object

  methods: {
    handleChangeHeader() {
      this.$emit('changeHeader', 'Header changed')
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