import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/App'
import configureStore from './store'

const store = configureStore()

const checkAuthIndex = (...args) => {
  console.log({ checkAuthIndex: args })
}

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={App} onEnter={checkAuthIndex} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
