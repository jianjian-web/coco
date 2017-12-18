import Vue from 'vue'
import Router from 'vue-router'
const Active = () => import('@/components/Active')
const AddActive1 = () => import('@/components/Active/AddActive1.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Active',
      component: Active
    },
    {
      path: '/addActive',
      name: 'AddActive1',
      component: AddActive1
    }
  ]
})
