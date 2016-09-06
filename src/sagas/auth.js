import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import * as firebase from 'firebase'

import actions from '../actions'
import * as actionTypes from '../constants/action-types'
import { auth } from '../lib/firebaseApp'

function signInWithEmailAndPassword (email, password) {
  return new Promise((success, reject) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(success)
        .catch(reject)
  })
}

function* openAuth() {
	try {
    yield put(actions.listenToAuth())
    const authData = yield call(signInWithEmailAndPassword, 'test@email.com', 'some-password')
    yield put(actions.authLogin(authData))
  } catch (e) {
    console.error(e)
    //yield put(actions.feedbackDisplayError(e))
    yield put(actions.authLogout())
  }
}

export function* authWatcher() {
	yield [
		takeEvery(actionTypes.AUTH_OPEN, openAuth)
	]
}
