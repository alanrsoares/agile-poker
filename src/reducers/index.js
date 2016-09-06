import { combineReducers } from 'redux'

import auth from './auth'
import flip from './flip'

export default combineReducers({
  auth,
  flip
})
