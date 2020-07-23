<!--
 * @Author: lzy
 * @Date: 2020-07-01 17:14:33
 * @FilePath: \my-init-M\src\App.vue
-->
<template>
  <div id="app">
      <keep-alive>
          <router-view class="view" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view class="view" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  beforeUpdate () {
    this.hideLoading() // 隐藏加载动画
  },
  methods: {
    hideLoading () {
      document.getElementById('lds-roller-wrapper').style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/common/var.scss';
#app {
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  background-color: $bg-color;
}
</style>
