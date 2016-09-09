import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import AppLayout from './layouts/App'
import App from './containers/App'
import SignIn from './containers/SignIn'

import configureStore from './store'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={App} />
        <Route path="/signin" component={SignIn} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
