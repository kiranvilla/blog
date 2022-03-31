<template>
  <div class="header">
    <h2>{{ $t('message.blogsApp') }}</h2>
    <div class="lang">
      <span @click="$i18n.locale = 'en'" :style="{color: $i18n.locale==='en' ? 'cyan' : 'yellow'}">EN</span> |
      <span @click="$i18n.locale = 'ru'" :style="{color: $i18n.locale==='ru' ? 'cyan' : 'yellow'}">RU</span> |
      <span @click="$i18n.locale = 'fr'" :style="{color: $i18n.locale==='fr' ? 'cyan' : 'yellow'}">FR</span> |
      <span @click="$i18n.locale = 'ar'" :style="{color: $i18n.locale==='ar' ? 'cyan' : 'yellow'}">AR</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      myTotalBlogs: 'myBlogsModule/myTotalBlogs'
    })
  },
}
</script>

<style scoped>
.header {
  background: black;
  text-align: center;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h2, h3 {
  color: #fff;
}
.lang {
  color: #fff;
}
.lang span {
  cursor: pointer;
}
</style>