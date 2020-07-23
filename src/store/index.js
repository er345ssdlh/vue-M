/*
 * @Author: lzy
 * @Date: 2020-07-01 17:14:33
 * @FilePath: \my-init-M\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userPath: '',
    name: 'helloVueX', // demo
    age: '12' // demo
  },
  getters: {
    gettersName (state) { // demo
      return '姓名:' + state.name
    },
    gettersUserPath (state) {
      return state.userPath
    }
  },
  mutations: {
    userPath (state, opt) {
      state.userPath = opt.split('?')[0]
    },
    edit (state, payload) { // demo
      state.name = payload
      Vue.set(state, 'age', 15) // 添加
      Vue.delete(state, 'age') // 删除
    }
  },
  actions: {
    aEdit (context, payload) { // demo
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('edit', payload)
          resolve()
        }, 2000)
      })
    }
  }
})

export default store
