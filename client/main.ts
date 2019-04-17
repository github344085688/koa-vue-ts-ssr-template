import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './createStore'
import Component from 'vue-class-component'
import plugins from './plugins'
import flex from './config'
// import titleMixin from './config/title'
Vue.use(flex)
Vue.use(plugins)
// Vue.mixin(titleMixin)
Component.registerHooks([
  'asyncData' // for ssr
])

export const createApp = () => {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
