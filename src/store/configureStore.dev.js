import { createStore, compose, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleWare from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas/index'

const nextRootReducer = require('../reducers').default

const sagaMiddleware = createSagaMiddleWare()

const finalCreateStore = compose(
	applyMiddleware(
		sagaMiddleware,
		routerMiddleware(browserHistory)
	),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
	const redStyle = 'height: 40px; color: #f6534e; font-size: large;'
	const blueStyle = 'height: 40px; color: #2baaed; '

	if (!window.devToolsExtension) {
		/*	eslint no-console: 0 */
		console.info('%c#fedlove ♥\n%cDownload Redux DevTools for a better dev experience\n%chttps://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd',
			`${redStyle}`,
			`${blueStyle}font-size: small; font-weight: bold; `,
			`${blueStyle}font-size: x-small;`);
	}

	const store = finalCreateStore(rootReducer, initialState)

	sagaMiddleware.run(rootSaga)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}
