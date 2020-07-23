<!--
 * @Author: lzy
 * @Date: 2020-07-22 13:41:22
 * @FilePath: \my-init-M\src\views\home\my.vue
-->
<template>
  <div id="my">
    <div class="forBox" :style="randomRgb()" v-for="item in 100" :key='item'>{{item}} ===>my</div>
  </div>
</template>

<script>
import scroll from './mixins/scroll'
import { randomRgb } from '../../utils/utils'
export default {
  name: 'my',
  data () {
    return {
    }
  },
  mixins: [scroll],
  created () {
    console.log('2')
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
</style>
