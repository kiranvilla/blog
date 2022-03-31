<template>
  <div class="side-bar">
    <router-link :to="{ name: 'home' }">
      <h2>{{ $t('message.home') }}</h2>
    </router-link>
    <router-link :to="{ name: 'my-blogs' }">
      <h2>{{ $t('message.myBlogs') }}</h2>
    </router-link>
    <router-link :to="{ name: 'all-blogs' }">
      <h2>{{ $t('message.allBlogs') }}</h2>
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