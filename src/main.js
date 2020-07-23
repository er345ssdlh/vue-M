/*
 * @Author: lzy
 * @Date: 2020-07-01 17:14:33
 * @FilePath: \my-init-M\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './vant'
import './utils/filters'
import './styles/index.scss'
// import VuePageStack from 'vue-page-stack'
// router 路由配置
// name 当前VuePageStack组件name命名，引用组件按照这个name来设定
// keyName 当前router的params值，keyName获取需要keyName + '-dir'，例this.$route.params["stack-key-1-dir"]
// Vue.use(VuePageStack, { router: router, name: 'VuePageStack', keyName: 'stack-key-1' })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
