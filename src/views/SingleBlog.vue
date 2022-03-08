<template>
  <div>
    <div v-if="singleBlog">
      <div>
        <h2>user id: {{ singleBlog.userId }}</h2>
        <h2>id: {{ singleBlog.id }}</h2>
        <h2>title: {{ singleBlog.title }}</h2>
        <h2>body: {{ singleBlog.body }}</h2>
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
    this.singleBlog = this.$route.query.details
    // axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
    //   .then(response => {
    //     this.singleBlog = response.data
    //   })
  }
}
</script>
