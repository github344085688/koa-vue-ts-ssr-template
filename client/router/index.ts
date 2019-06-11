import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = (): any => import(/* webpackChunkName: "group-foo" */ '..//views/login/index.ts')
const main = (): any => import(/* webpackChunkName: "group-foo" */ '..//views/main/main.ts')
const foo = (): any => import(/* webpackChunkName: "warehouse" */ '../views/foot/foot.ts')
const csst = (): any => import(/* webpackChunkName: "warehouse" */ '../views/cs/cs.ts')
export const createRouter = () =>
  new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: { name: 'login' }
      },
      {
        path: '/login',
        name: 'login',
        component: login
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
