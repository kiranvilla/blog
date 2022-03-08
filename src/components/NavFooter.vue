<template>
  <div class="footer">
    <h2>Nav Footer, {{ header }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String
    }
  }
}
</script>

<style scoped>
.footer {
  background: gray;
  padding: 10px;
  text-align: center;
  padding: 10px;
}
h2 {
  color: yellow;
}
</style>