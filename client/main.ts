import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import Component from 'vue-class-component'
import VeeValidate from 'vee-validate'
import config from './config/validation'
import plugins from './plugins'
import configureBehavior from './config'
import mixin from './mixin'
import { sync } from 'vuex-router-sync'
Vue.use(VeeValidate, config)
Vue.mixin(mixin)
Vue.mixin(configureBehavior)
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
