<!--
 * @Author: lzy
 * @Date: 2020-07-22 13:41:22
 * @FilePath: \my-init-M\src\views\home\vote.vue
-->
<template>
  <div id="vote">
    <!-- 三个列表 如果滚动一个，另外tab里的列表肯定也跟着滚动，因为在一个页面内，思路每个盒子单独滚动不就好了？解决，每个列表的div设置宽高
    百分之百，然后 overflow: auto; 两句css完美解决-->
    <van-tabs v-model="active">
      <van-tab title="标签 1" :key='1'>
        <div class="forBox" :style="randomRgb()" v-for="item in 200" :key='item'>{{item}} ===>vote---2</div>
      </van-tab>
      <van-tab title="标签 2" :key='2'>
        <div class="forBox" :style="randomRgb()" v-for="item in 200" :key='item'>{{item}} ===>vote---2</div>
      </van-tab>
      <van-tab title="标签 3" :key='3'>
        <div class="forBox" :style="randomRgb()" v-for="item in 60" :key='item'>{{item}} ===>vote---3</div>
      </van-tab>
      <van-tab title="标签 4" :key='4'>
        <div class="forBox" :style="randomRgb()" v-for="item in 100" :key='item'>{{item}} ===>vote---4</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import scroll from './mixins/scroll'
import { randomRgb } from '../../utils/utils'
import { setlocal, getlocal } from '../../utils/localStorage'
export default {
  name: 'vote',
  data () {
    return {
      active: 0,
      routerList: []
    }
  },
  watch: {
    active (news, old) {
      setlocal('newsActive', news)
      console.log(news, old)
    }
  },
  mixins: [scroll],
  computed: {
  },
  created () {
    this.active = getlocal('newsActive') || 0
  },
  mounted () {
  },
  methods: {
    randomRgb () {
      return randomRgb()
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
::v-deep {
  .van-tabs--line .van-tabs__wrap{
    position: sticky;
    top: 0;
  }
  .van-tab__pane, .van-tab__pane-wrapper{
    height: 100vh;
    overflow: auto;
  }
}
</style>
