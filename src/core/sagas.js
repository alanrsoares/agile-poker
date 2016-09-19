import { fork } from 'redux-saga/effects'

import { authWatcher } from './auth/sagas'

export default function* rootSaga() {
	yield fork(authWatcher)
}
