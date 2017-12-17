import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import('@/components/Layout')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }
  ]
})
