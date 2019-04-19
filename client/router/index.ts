import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const main = (): any => import(/* webpackChunkName: "group-foo" */ '..//views/main/main.ts')
const foo = (): any => import(/* webpackChunkName: "warehouse" */ '../views/foot/foot.ts')
const csst = (): any => import(/* webpackChunkName: "warehouse" */ '../views/cs/cs.ts')
export const createRouter = () =>
  new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: { name: 'Login' }
      },
      {
        path: '/Login',
        name: 'Login',
        component: main
      },
      {
        path: '/foo',
        name: 'foo',
        component: foo
      },
      {
        path: '/cs',
        name: 'cs',
        component: csst
      }
    ]
  })
