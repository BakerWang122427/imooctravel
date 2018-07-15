import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  /*  actions: {
      changeCity (ctx, city) {
        ctx.commit('changeCity', city)
      }
    }, */
  mutations: mutations,
  // vuex中的getter类似就是组件中的computed计算方法；用来计算新的变量
  getters: {
    doubleCity: function (state) {
      return state.city + ' ' + state.city
    }
  }
})
