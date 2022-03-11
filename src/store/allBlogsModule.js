import axios from 'axios'

const allBlogsModule = {
  namespaced: true,
  state: {
    blogs: []
  },

  mutations: {
    setBlogs(state, payload) {
      state.blogs = payload
    },
    addBlog(state, payload) {
      state.blogs.push(payload)
    },
    deleteBlog(state, index) {
      state.blogs.splice(index, 1)
    }
  },

  actions: {
    getBlogs({ commit, state, rootState }) {
      console.log('state', state)
      console.log('rootState', rootState)
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          commit('setBlogs', response.data)
        })
        .catch(error => {
          console.log('error', error.response)
        })
    },
    deleteBlogFromServer({ commit }, id) {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          if (response.status === 200) commit('deleteBlog', id)
        })
        .catch(error => {
          console.log('error', error.response)
        })
    }
  }
}

export default allBlogsModule