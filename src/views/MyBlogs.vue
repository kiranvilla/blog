<template>
  <div class="app-listing">
    <div v-for="(item, index) in blogs" :key="index" class="blog">
      <span class="delete-blog" @click="deleteBlog(index)">Delete</span>
      <h2>{{ item.title }}</h2>
      <p>{{ item.body }}</p>
    </div>

    <div class="add-blog">
      <button @click="handleOpenFormModal">Add Blog</button>
    </div>

    <AppModal
      header="Warning!"
      subTitle="Are you sure?"
      v-if="showWarningModal"
    >
      <div class="action-container">
        <span @click="cancelDelete">Cancel</span>
        <button @click="confirmDelete">Delete</button>
      </div>
    </AppModal>

    <AppModal
      header="Add blog"
      v-if="showBlogModal"
      @closeModal="closeModal"
    >
      <form ref="formRef" class="form-container" @submit.prevent="submitForm">
        <input type="text" placeholder="Name" v-model="title" required>
        <input type="text" placeholder="Description" v-model="body" required>
        <input type="submit" value="Add blog">
      </form>
    </AppModal>
  </div>
</template>

<script>
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
      // blogs: []
      blogs: [
        {
          title: 'Max',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
          title: 'William',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
          title: 'Robert',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
          title: 'Sam',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
      ]
    }
  },

  methods: {
    deleteBlog(index) {
      this.showWarningModal = true
      this.blogIndex = index
    },
    confirmDelete() {
      this.blogs.splice(this.blogIndex, 1)
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
      this.blogs.push({
        title: this.title,
        body: this.body
      })
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
.action-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.action-container button {
  height: 40px;
  color: #fff;
  background: red;
  border: 1px solid red;
  font-size: 18px;
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
}
.add-blog {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
.add-blog button {
  height: 50px;
  padding: 5px;
  box-sizing: border-box;
  background: black;
  color: #fff;
  font-size: 18px;
}
</style>