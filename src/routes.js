import Home from './views/HomePage.vue'
import MyBlogs from './views/MyBlogs.vue'
import AllBlogs from './views/AllBlogs.vue'
import SingleBlog from './views/SingleBlog.vue'

import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/my-blogs',
    component: MyBlogs,
    name: 'my-blogs'
  },
  {
    path: '/all-blogs',
    component: AllBlogs,
    name: 'all-blogs'
  },
  {
    path: '/single-blog/:id',
    component: SingleBlog,
    name: 'single-blog'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
