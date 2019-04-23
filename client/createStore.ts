import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const createStore = () =>
  new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      getInfo ({ commit }, id) {
        console.log('gggggggggggggggggggggg')
        commit('setItem', { id, 'item': 'item' })
      }
    },
    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    }
  })
