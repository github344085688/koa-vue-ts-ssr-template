import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const main = (): any => import(/* webpackChunkName: "group-foo" */ '..//views/main/main.ts')
const warehouse = (): any => import(/* webpackChunkName: "warehouse" */ '../views/foo.vue')
const cs = (): any => import(/* webpackChunkName: "warehouse" */ '../views/cs.vue')
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
        component: warehouse
      },
      {
        path: '/cs',
        name: 'cs',
        component: cs
      }
    ]
  })
