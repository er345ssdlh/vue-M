/*
 * @Author: lzy
 * @Date: 2020-07-01 17:14:33
 * @FilePath: \my-init-M\src\router\index.js
 */
import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import { setDocumentTitle } from '../utils/utils'

Vue.use(VueRouter)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    meta: { name: 'layout', keepAlive: false },
    props: (route) => ({ query: route.query }),
    component: () => import('../views/home.vue'),
    children: [ // 底部栏 icon: 底部栏图标
      {
        path: '/index',
        name: 'index',
        meta: { name: '首页', icon: 'search', keepAlive: true, scrollPosition: { x: 0, y: 0 } },
        props: (route) => ({ query: route.query }),
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/vote',
        name: 'vote',
        meta: { name: '活动', icon: 'friends-o', keepAlive: true, scrollPosition: { x: 0, y: 0 } },
        props: (route) => ({ query: route.query }),
        component: () => import('../views/home/vote.vue')
      },
      {
        path: '/my',
        name: 'my',
        meta: { name: '我的', icon: 'search', keepAlive: true, scrollPosition: { x: 0, y: 0 } },
        props: (route) => ({ query: route.query }),
        component: () => import('../views/home/my.vue')
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.VUE_APP_PATH_NAME,
  routes,
  // 设置返回对应位置的操作
  scrollBehavior (to) {
    const { scrollPosition = {} } = to.meta // 因为scrollBehavior参数有适配，我们就改一下思路
    return scrollPosition
  }
})

router.beforeEach((to, from, next) => {
  store.commit('userPath', to.fullPath) // 当前的 path，刷新不丢失
  const { name } = to.meta
  if (name) {
    setDocumentTitle(name)
  }
  next()
})

export default router
