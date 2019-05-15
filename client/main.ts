import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import Component from 'vue-class-component'
import plugins from './plugins'
import flex from './config'
import mixin from './mixin'
import { sync } from 'vuex-router-sync'
Vue.mixin(mixin)
Vue.mixin(flex)
Vue.use(plugins)
Component.registerHooks([
  'asyncData' // for ssr
])
export const createApp = () => {
  const router = createRouter()
  const store = createStore()
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
