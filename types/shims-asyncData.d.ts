import Vue from 'vue'
import { Route } from 'vue-router'
import { Store } from 'vuex'

type AsyncData = (asyncDataParams: AsyncDataParams) => Promise<void>

interface AsyncDataParams {
    route: Route
    store: Store<any>
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        asyncData?: AsyncData
    }
   }

// import Vue from 'vue'
//
// declare module 'vue/types/vue' {
//   interface VueConstructor {
//     $store?: any
//     $options?: any
//     title?:any
//   }
// }
