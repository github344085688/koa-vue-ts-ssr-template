declare module 'vue/types/vue' {
  interface Vue {
    $errorAlert: any,
    $closeErrorAlert:any
    title:any
  }
}
function getTitle (vm: any) {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

const serverTitleMixin = {
  created () {
    const title = getTitle(this)
    if (title) {
      (this as any).$ssrContext.title = title
    }
  }
}

const clientTitleMixin = {
  mounted () {
    const title = getTitle(this)
    if (title) {
      document.title = title
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin

//
// declare module 'vue/types/vue' {
// // 3. 声明为 Vue 补充的东西
//   interface Vue {
//     $msgt: any,
//     $closeErrorAlert:any
//   }
// }
//
//
// export default function(Vue:any) {
//   // //添加全局API
//   Vue.prototype.$msgt = msgBox
// }

//
// declare module 'vue/types/vue' {
//   // 可以使用 `VueConstructor` 接口
//   // 来声明全局属性
//   interface VueConstructor {
//     $myGlobal: string
//   }
// }

// ComponentOptions 声明于 types/options.d.ts 之中
// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//      showMyName?: any
//   }
// }
