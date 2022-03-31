import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './routes'
import store from './store/store'
import i18n from './plugins/vue-i18n'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
