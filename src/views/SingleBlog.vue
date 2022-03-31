<template>
  <div class="single-blog">
    <div v-if="singleBlog">
      <div>
        <h2>user id: {{ singleBlog.userId }}</h2>
        <p>id: {{ singleBlog.id }}</p>
        <p>title: {{ singleBlog.title }}</p>
        <p>body: {{ singleBlog.body }}</p>
      </div>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      singleBlog: null
    }
  },

  mounted() {
    console.log('query', this.$route)
    this.singleBlog = JSON.parse(this.$route.query.details)
    // axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
    //   .then(response => {
    //     this.singleBlog = response.data
    //   })
  }
}
</script>

<style scoped>
.single-blog {
  padding: 10px;
}
</style>
