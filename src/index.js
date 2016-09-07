import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import actions from './actions'
import * as selectors from './selectors';

import AppLayout from './layouts/App'
import App from './containers/App'

import SignIn from './containers/SignIn'

import configureStore from './store'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

const checkAuth = store => (nextState, replace, callback) => {
  if (!selectors.isUserLoggedIn(store.getState())) {
    replace({
			pathname: '/signin',
			state: { nextPathname: nextState.location.pathname },
		});
  }
  callback()
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={App} onEnter={checkAuth(store)} />
        <Route path="/signin" component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
