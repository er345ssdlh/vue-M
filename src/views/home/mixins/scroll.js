/*
 * @Author: lzy
 * @Date: 2020-07-16 11:27:35
 * @FilePath: \my-init-M\src\views\home\mixins\scroll.js
 * 解决 下一页再返回上一页时，位置重新到开始位置问题，滚动位置保留
 * 必须添加keep-alive 缓存
 * keep-alive 组件时 存在 activated 与  deactivated 生命周期
 * activated页面出来时触发 this.$route获取当前的路由实例
 * deactivated 生命周期页面离开时触发 this.$route获取去的那个页面的路由实例
 * 结合mixins 我们就即能做到 保留滚动位置 又能优化代码
 */
export default {
  data () {
    return {
      scroll: 0,
      meta: {}
    }
  },
  methods: {
    menu () {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  activated () {
    this.meta = this.$route.meta
    window.addEventListener('scroll', this.menu)
  },
  deactivated () {
    this.meta.scrollPosition.y = this.scroll
  }
}
