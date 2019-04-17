import Vue from 'vue'
import { createApp } from '../client/main'
declare module 'vue/types/vue' {
  interface Vue {
  }
}
const { app, router, store } = createApp()

if ((<any>window).__INITIAL_STATE__) {
  store.replaceState((<any>window).__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#app')
})
