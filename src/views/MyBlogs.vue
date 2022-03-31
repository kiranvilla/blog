<template>
  <div class="app-listing">
    <div v-for="(item, index) in blogs" :key="index" class="blog">
      <span class="delete-blog" :class="{'ar-layout': $i18n.locale === 'ar'}" @click="deleteBlog(index)">{{ $t('message.delete') }}</span>
      <h2>{{ item.title }}</h2>
      <p>{{ item.body }}</p>
    </div>

    <div class="add-blog" :class="{'ar-btn': $i18n.locale === 'ar'}">
      <button @click="handleOpenFormModal">{{ $t('message.addBlog') }}</button>
    </div>

    <AppModal
      :header="$t('message.warning')"
      :subTitle="$t('message.areYouSure')"
      v-if="showWarningModal"
    >
      <div class="action-container">
        <span @click="cancelDelete">{{ $t('message.cancel') }}</span>
        <button @click="confirmDelete">{{ $t('message.delete') }}</button>
      </div>
    </AppModal>

    <AppModal
      :header="$t('message.addBlog')"
      v-if="showBlogModal"
      @closeModal="closeModal"
    >
      <form ref="formRef" class="form-container" @submit.prevent="submitForm">
        <input type="text" :placeholder="$t('message.name')" v-model="title" required>
        <input type="text" :placeholder="$t('message.description')" v-model="body" required>
        <input type="submit" :value="$t('message.addBlog')">
      </form>
    </AppModal>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

import AppModal from '../components/AppModal.vue'

export default {
  components: {
    AppModal
  },

  // mounted() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(json => {
  //       this.blogs = json
  //     })
  // },

  data() {
    return {
      title: '',
      body: '',
      showBlogModal: false,
      showWarningModal: false,
      blogIndex: null,
    }
  },

  computed: {
    ...mapState({
      blogs: state => state.myBlogsModule.blogs
    }),
    ...mapGetters({
      myTotalBlogs: 'myBlogsModule/myTotalBlogs'
    }),
    // blogs() {
    //   return this.$store.state.myBlogsModule.blogs
    // },
    // myTotalBlogs() {
    //   return this.$store.getters['myBlogsModule/myTotalBlogs']
    // }
  },

  methods: {
    ...mapMutations({
      deleteBlogFromState: 'myBlogsModule/deleteBlog',
      addBlogToTheState: 'myBlogsModule/addBlog'
    }),
    deleteBlog(index) {
      this.showWarningModal = true
      this.blogIndex = index
    },
    confirmDelete() {
      this.deleteBlogFromState(this.blogIndex)
      this.blogIndex = null
      this.showWarningModal = false
    },
    cancelDelete() {
      this.blogIndex = null
      this.showWarningModal = false
    },
    handleOpenFormModal() {
      this.showBlogModal = true
    },
    submitForm() {
      this.addBlogToTheState({
        title: this.title,
        body: this.body
      })
      // this.$store.commit('myBlogsModule/addBlog', {
      //   title: this.title,
      //   body: this.body
      // })
      // this.blogs.push({
      //   title: this.title,
      //   body: this.body
      // })
      this.showBlogModal = false
      this.title = ''
      this.body = ''
    },
    closeModal() {
      this.showBlogModal = false
    }
  }
}
</script>

<style scoped>
.app-listing {
  padding: 10px;
}
.blog {
  background: rgb(183, 183, 212);
  padding: 10px;
  margin: 5px;
  position: relative;
}
.delete-blog {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: red;
}
.ar-layout {
  right: unset;
  left: 5px;
}
.action-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.action-container span {
  cursor: pointer;
}
.action-container button {
  height: 40px;
  color: #fff;
  background: red;
  border: 1px solid red;
  font-size: 18px;
  cursor: pointer;
}
.form-container {
  width: 100%;
}
.form-container input {
  width: 100%;
  margin-top: 10px;
  height: 40px;
  box-sizing: border-box;
  border: 2px solid black;
  padding: 10px;
}
.form-container input[type='submit'] {
  background: black;
  color: #fff;
  cursor: pointer;
}
.add-blog {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
.ar-btn {
  right: unset;
  left: 50px;
}
.add-blog button {
  cursor: pointer;
  height: 50px;
  padding: 5px;
  box-sizing: border-box;
  background: black;
  color: #fff;
  font-size: 18px;
}
</style>