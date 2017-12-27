import Vue from 'vue'
import Router from 'vue-router'
const Active = () => import('@/components/Active')
const AddActive = () => import('@/components/Active/AddActive.vue')
const Details = () => import('@/components/Active/DetailsActive')
const Login = () => import('@/components/Login/Login.vue')
const Contact = () => import('@/components/contact/')
const ContactDetails = () => import('@/components/contact/ContactDetails')
const Team = () => import('@/components/Team/')
const Record = () => import('@/components/Record')
const Recharge = () => import('@/components/Account/Recharge')
const Shopping = () => import('@/components/Account/Shopping')
const Ecp = () => import('@/components/Setting/Ecp')
const PassWord = () => import('@/components/Setting/PassWord')

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
    { // 联系人详情
      path: '/contact/details',
      name: 'contactDetails',
      component: ContactDetails
    },
    { // 通话记录
      path: '/record',
      name: 'Record',
      component: Record
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    { // 充值记录
      path: '/account/recharge',
      name: 'Recharge',
      component: Recharge
    },
    { // 消费记录
      path: '/account/consumption',
      name: 'Consumption',
      component: Shopping
    },
    { // Ecp设置
      path: '/setting/ecp',
      name: 'Ecp',
      component: Ecp
    },
    { // 修改密码
      path: '/setting/password',
      name: 'PassWord',
      component: PassWord
    }
  ]
})
