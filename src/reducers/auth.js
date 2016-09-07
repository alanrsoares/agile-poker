import { handleActions } from 'redux-actions'

import * as types from '../constants/action-types'
import * as auth from '../constants/auth'

const INITIAL_STATE = {
  username: null,
  uid: null,
  status: auth.AUTH_ANONYMOUS
}

const actionHandlers = {
  [types.AUTH_OPEN]: () => ({
    status: auth.AUTH_AWAITING_RESPONSE,
    username: 'guest',
    uid: null
  }),
  [types.AUTH_LOGIN]: (state, { payload: { username, uid, email } }) => ({
    status: auth.AUTH_LOGGED_IN,
    username,
    uid,
    email
  }),
  [types.AUTH_LOGOUT]: () => INITIAL_STATE
}

export default handleActions(actionHandlers, INITIAL_STATE)
