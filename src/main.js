import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import router from './routes'

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    header: 'Blogs App'
  },
  mutations: {
    changeHeader(state, payload) {
      state.header = payload.title
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
