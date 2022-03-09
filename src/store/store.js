import Vuex from 'vuex'
import Vue from 'vue'

import myBlogsModule from './myBlogsModule'
import allBlogsModule from './allBlogsModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    myBlogsModule,
    allBlogsModule
  }
})

export default store