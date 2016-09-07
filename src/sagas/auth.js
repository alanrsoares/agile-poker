import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import * as firebase from 'firebase'

import actions from '../actions'
import * as actionTypes from '../constants/action-types'
import { auth } from '../lib/firebaseApp'

function signInWithEmailAndPassword (email, password) {
  const provider = new firebase.auth.GoogleAuthProvider()

  const promiseBody = (resolve, reject) => {
    auth.signInWithRedirect(provider)
        .then(resolve)
        .catch(reject)
  }

  return new Promise(promiseBody)
}

function* checkAuth() {
  if (auth.currentUser) {
    console.log(auth.currentUser)
    yield put(actions.authLogin(auth.currentUser))
  }
}

function* openAuth() {
  if (auth.currentUser) {
    console.log(auth.currentUser)
    yield put(actions.authLogin(auth.currentUser))
    return
  }

	try {
    const authData = yield call(signInWithEmailAndPassword)
    yield put(actions.authLogin(authData))
  } catch (e) {
    yield put(actions.authLogout())
  }
}

export function* authWatcher() {
	yield [
		takeEvery(actionTypes.AUTH_OPEN, openAuth),
    takeEvery(actionTypes.AUTH_CHECK, checkAuth)
	]
}
