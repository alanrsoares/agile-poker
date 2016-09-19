import { createStore, compose, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleWare from 'redux-saga'

import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleWare()

export function configureStore(initialState) {
	let middleware = applyMiddleware(
		sagaMiddleware,
		routerMiddleware(browserHistory)
	)

	if (process.env.NODE_ENV !== 'production') {
    if (typeof window.devToolsExtension === 'function') {
      middleware = compose(middleware, window.devToolsExtension());
    }
  }

	const store = createStore(reducers, middleware, initialState)

	sagaMiddleware.run(rootSaga)

	if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    });
  }

	return store
}
