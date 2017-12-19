import {
  USER_INFO,
  INIT_STATE
} from './mutation-types.js'

export default {
  [USER_INFO] (state, value) {
    state.userInfo = value
  },
  [INIT_STATE] (state) {
    state.userInfo = null
  }
}
