import Vue from 'vue'
import Vuex from 'vuex'
import { author } from './module/author'
Vue.use(Vuex)

export const createStore = () =>
  new Vuex.Store({
    modules: {
      author
    }
  })
