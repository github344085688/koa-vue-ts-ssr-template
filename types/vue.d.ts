import Vue from 'vue'
declare module 'vue/types/vue' {
  interface VueConstructor {
    title?:any
    this?:any
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    title?:any
    this?:any
  }
}
