import {
  USER_INFO,
  INIT_STATE,
  SET_CONTACT_USERID
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
  }
}
