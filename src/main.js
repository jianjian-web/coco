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
axios.defaults.withCredentials = true

// axios.interceptors.request.use(function (req) {
//   console.dir(req)
//   return req
// })

// 拦截所有40x的错误
axios.interceptors.response.use(function (res) {
  // console.dir(res)
  const code = res.data && res.data.code
  if (!code) {
    console.log('结果无data数据')
  } else if (code === 'SESSION_TIMEOUT') { // 会话超时
    router.push({path: '/login'})
  } else if (code === 'SUCCESS') {
    return res
  } else {
    ElementUI.Message.error(res.data.message)
    console.dir(res)
  }
}, function (err) {
  console.dir(err)
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
