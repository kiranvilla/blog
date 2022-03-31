import i18n from "../plugins/vue-i18n";

const myBlogsModule = {
  namespaced: true,
  state: {
    header: i18n.t('message.blogsApp'),
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
  },

  getters: {
    myTotalBlogs: (state) => state.blogs.length
  },

  mutations: {
    addBlog(state, payload) {
      state.blogs.push(payload)
    },
    deleteBlog(state, index) {
      state.blogs.splice(index, 1)
    }
  }
}

export default myBlogsModule