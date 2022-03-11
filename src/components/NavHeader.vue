<template>
  <div class="header">
    <h2 @click="handleChangeHeader">{{ header }}</h2>
    <h3>My total blogs: {{ myTotalBlogs }}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      header: (state) => state.myBlogsModule.header,
    }),
    ...mapGetters({
      myTotalBlogs: 'myBlogsModule/myTotalBlogs'
    })
  },
  methods: {
    handleChangeHeader() {
      this.$store.commit('myBlogsModule/changeHeader', 'Header changed')
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
h2, h3 {
  color: #fff;
}
</style>