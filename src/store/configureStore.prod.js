import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleWare from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas/index'

const nextRootReducer = require('../reducers/index').default

const sagaMiddleware = createSagaMiddleWare()

const finalCreateStore = compose(
	applyMiddleware(sagaMiddleware),
	applyMiddleware(routerMiddleware)
)(createStore);

export default function configureStore(initialState) {
	const store = finalCreateStore(rootReducer, initialState)

	sagaMiddleware.run(rootSaga)

	return store
}
