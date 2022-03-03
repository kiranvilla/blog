<template>
  <div class="app-listing">
    <div v-for="(item, index) in blogs" :key="index" class="blog">
      <span class="delete-blog" @click="deleteBlog(index)">Delete</span>
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
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
  </div>
</template>

<script>
import AppModal from '../AppModal.vue'

export default {
  components: {
    AppModal
  },

  data() {
    return {
      showWarningModal: false,
      blogIndex: null,
      blogs: [
        {
          name: 'Max',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
          name: 'William',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
          name: 'Robert',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
          name: 'Sam',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
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
</style>