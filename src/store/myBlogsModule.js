const myBlogsModule = {
  namespaced: true,
  state: {
    header: 'Blogs App',
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
    changeHeader(state, payload) {
      state.header = payload
    },
    addBlog(state, payload) {
      state.blogs.push(payload)
    },
    deleteBlog(state, index) {
      state.blogs.splice(index, 1)
    }
  }
}

export default myBlogsModule