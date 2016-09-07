import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import actions from './actions'

import AppLayout from './layouts/App'
import App from './containers/App'

import SignIn from './containers/SignIn'

import configureStore from './store'

import { checkAuth } from './helpers/auth'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={App} onEnter={() => store.dispatch(actions.authCheck())} />
        <Route path="/signin" component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
