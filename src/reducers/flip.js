import { handleActions } from 'redux-actions'

import * as types from '../constants/action-types'

const INITIAL_STATE = true

const actionHandlers = {
  [types.TOGGLE_FLIP]: state => !state
}

export default handleActions(actionHandlers, INITIAL_STATE)
