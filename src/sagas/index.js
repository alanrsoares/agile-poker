import { fork } from 'redux-saga/effects'

import { authWatcher } from './auth'

export default function* rootSaga() {
	yield fork(authWatcher)
}
