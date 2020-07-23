<!--
 * @Author: lzy
 * @Date: 2020-07-22 13:41:22
 * @FilePath: \my-init-M\src\views\home\index.vue
-->
<template>
  <div id="index">
    <van-pull-refresh v-model="isLoading" :head-height="60" @refresh="onRefresh">
      <template #pulling>
        <van-loading color="#1989fa" />
      </template>
      <!-- 释放提示 -->
      <template #loosing>
        <van-loading color="#1989fa" />
        <!-- <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" /> -->
      </template>
      <!-- 加载提示 -->
      <template #loading>
        <van-loading color="#1989fa" />
        <!-- <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" /> -->
      </template>
      <p>刷新次数: {{ count }}</p>
      <div class="forBox" :style="randomRgb()" v-for="item in 100" :key='item'>{{item}} ===>home</div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from 'vant'
import scroll from './mixins/scroll'
import { randomRgb } from '../../utils/utils'
export default {
  name: 'index',
  data () {
    return {
      count: 0,
      isLoading: false
    }
  },
  mixins: [scroll],
  created () {
  },
  methods: {
    randomRgb () {
      return randomRgb()
    },
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.forBox{
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-bottom: 10px;
}
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
</style>
