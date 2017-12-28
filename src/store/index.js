import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  userInfo: null,
  contactUserId: '',  // 联系人，当前查看的联系人/活动ID，用于获取详情
  navIndex: '/',
  activeRowData: null // 我的活动首页点击编辑后的rowData
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
})
