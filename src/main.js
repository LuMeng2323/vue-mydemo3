// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用element-ui
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementui)
//引用less
import less from 'less'
Vue.use(less)
//引用全局样式表
import './assets/css/global.css'
//引用axios
import axios from 'axios'
axios.defaults.baseURL="http://127.0.0.1:8081/api/"
// axios.intercetors.request.use(config=>{
//   console.log(config)
//   // 最后必须return config
//   config.headers.Authorization=window.sessionStorage.getItem('token')
//   return config
// })
Vue.prototype.$http=axios





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
