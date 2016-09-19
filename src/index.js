import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { configureStore } from './core/store'
import { initAuth } from './core/auth'
import { getRoutes } from './routes'

const store = configureStore()

const Root = ({ store }) => (
  <Provider store={store}>
    <Router
      history={syncHistoryWithStore(browserHistory, store)}
      routes={getRoutes(store.getState)}
    />
  </Provider>
)

const renderApp = () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )
}

initAuth(store.dispatch)
  .then(renderApp)
  .catch(e => console.error(e))
