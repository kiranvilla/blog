import Home from './views/HomePage.vue'
import MyBlogs from './views/MyBlogs.vue'
import AllBlogs from './views/AllBlogs.vue'

import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/my-blogs',
    component: MyBlogs
  },
  {
    path: '/all-blogs',
    component: AllBlogs
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
