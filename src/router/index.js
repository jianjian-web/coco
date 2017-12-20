import Vue from 'vue'
import Router from 'vue-router'
const Active = () => import('@/components/Active')
const AddActive = () => import('@/components/Active/AddActive.vue')
const Details = () => import('@/components/Active/DetailsActive')
const Login = () => import('@/components/Login/Login.vue')
const Contact = () => import('@/components/contact/')
const Team = () => import('@/components/Team/')
const Message = () => import('@/components/Message/')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/pc',
  routes: [
    {
      path: '/',
      redirect: '/active'
    },
    { // 我的活动
      path: '/active',
      name: 'Active',
      component: Active
    },
    { // 我的活动--进行中活动详情
      path: '/active/details',
      name: 'Details',
      component: Details
    },
    { // 添加活动
      path: '/addActive',
      name: 'AddActive1',
      component: AddActive
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { // 联系人
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})
