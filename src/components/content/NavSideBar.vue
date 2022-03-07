<template>
  <div class="side-bar">
    <router-link to="/">
      <h2>Home</h2>
    </router-link>
    <router-link to="/my-blogs">
      <h2>My Blogs</h2>
    </router-link>
    <router-link to="/all-blogs">
      <h2>All Blogs</h2>
    </router-link>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.side-bar {
  padding: 10px;
  background: rgb(196, 190, 190);
}
</style>