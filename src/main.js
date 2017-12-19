// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import baseUrl from './config/env'
import ElementUI from 'element-ui'
import store from './store/'
import { sync } from 'vuex-router-sync'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import 'animate.css'
Vue.use(ElementUI)
sync(store, router)
Vue.prototype.$http = axios
axios.defaults.baseURL = baseUrl

// 拦截所有40x的错误
axios.interceptors.response.use(function (res) {
  return res
}, function (err) {
  if (err.response) {
    const status = err.response.status
    if (status === 401) {
      router.push({path: '/login'})
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
