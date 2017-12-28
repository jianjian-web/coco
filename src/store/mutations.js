import {
  USER_INFO,
  INIT_STATE,
  SET_CONTACT_USERID,
  SET_NAV_INDEX,
  SET_ACTIVE_DATA
} from './mutation-types.js'

export default {
  [USER_INFO] (state, value) {
    state.userInfo = value
  },
  [INIT_STATE] (state) {
    state.userInfo = null
  },
  [SET_CONTACT_USERID] (state, id) {
    state.contactUserId = id
  },
  [SET_NAV_INDEX] (state, index) {
    state.navIndex = index
  },
  [SET_ACTIVE_DATA] (state, rowData) {
    state.activeRowData = rowData
  }
}
