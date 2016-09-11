import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import AppLayout from './layouts/App'
import App from './containers/App'
import SignIn from './containers/SignIn'
import DashBoard from './containers/DashBoard'

import configureStore from './store'

const store = configureStore()

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={DashBoard} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
