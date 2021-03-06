import { takeEvery } from 'redux-saga'
import { push } from 'react-router-redux'
import { put, call } from 'redux-saga/effects'
import * as firebase from 'firebase'

import actions from '../actions'
import * as actionTypes from '../constants/action-types'
import { auth } from '../lib/firebase'

function* openAuth({ payload: provider = new firebase.auth.GoogleAuthProvider() }) {
  try {
    const authData = yield call([auth, auth.signInWithPopup], provider)

    yield [
      put(actions.authLogin(authData.user)),
      put(push('/dashboard'))
    ]
  } catch (e) {
    console.error(e)
    yield put(actions.authLogout())
  }
}

export function* authWatcher() {
	yield takeEvery(actionTypes.AUTH_OPEN, openAuth)
}
