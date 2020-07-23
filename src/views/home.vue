<!--
 * @Author: lzy
 * @Date: 2020-07-01 17:14:33
 * @FilePath: \my-init-M\src\views\home.vue
-->
<template>
    <div class="tag">
      <keep-alive>
          <router-view class="view"></router-view>
      </keep-alive>
      <van-tabbar>
        <van-tabbar-item
        v-for='item in routerList'
        :key='item.name'
        :class="gettersUserPath === item.path ? 'home-nav_button--select' : ''"
        class="home-nav_button"
        @click="handleClickNav(item.path)"
        :icon="item.meta.icon">{{item.meta.name}}</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
import { Toast } from 'vant'
import { getActivityInformation } from '../api/index'

import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'index',
  components: {
  },
  data () {
    return {
      routerList: [],
      isRouterAlive: false
    }
  },
  created () {
    // 获取路由遍历路由
    this.routerList = this.$router.options.routes[0].children.filter(item => {
      return item.path !== ''
    })
  },
  computed: {
    gettersNames () { // demo
      return this.$store.getters.gettersName
    },
    gettersUserPath () {
      return this.$store.getters.gettersUserPath
    },
    ...mapState({ // demo
      name: 'name'
    })
  },
  methods: {
    ...mapActions([ // demo
      'aEdit'
    ]),
    ...mapMutations({ // demo
      edit: 'edit'
    }),
    handleClickNav (opt) {
      if (opt === this.gettersUserPath) {
        this.isRouterAlive = true
        setTimeout(() => {
          this.isRouterAlive = false
        }, 1000)
        return
      }
      this.$router.replace({ path: opt })
    },
    async init () { // demo
      const res = await getActivityInformation({ a: 1 })
      console.log(res)
      Toast(this.name)// vuex里的
    },
    handleStore () { // demo
      this.edit('asdas')
    }
  }
}
</script>

<style lang='scss' scoped>
.van-tabbar-item--active{
  color: #646566;
}
.home-nav_button--select{
  color: red;
}
</style>
