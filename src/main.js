// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 安装fastClick（npm install fastclick --save）后引入fastClick 解决移动端点击延迟300毫秒问题
import fastClick from 'fastclick'
// 浏览器默认样式初始化
import './assets/styles/reset.css'
// 处理移动端一像素边框处理方案
import './assets/styles/border.css'
// 引入字体icon
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
// 使用fastClick
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
