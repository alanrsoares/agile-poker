import { createActions } from 'redux-actions'
import * as actionTypes from '../constants/action-types'

const actionKeys = Object.keys(actionTypes)

export default createActions(...actionKeys)
