import { isAuthenticated } from './selectors'
import AppLayout from './layouts/AppLayout'
import App from './containers/App'
import SignIn from './containers/SignIn'
import DashBoard from './containers/DashBoard'

export const paths = {
  ROOT: '/',
  SIGN_IN: '/signin',
  HOME: '/',
  DASH: '/dashboard'
}

const requireAuth = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      replace(paths.SIGN_IN)
    }
  }
}

const requireUnauth = getState => {
  return (nextState, replace) => {
    if (isAuthenticated(getState())) {
      replace(paths.DASH)
    }
  }
}


export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: AppLayout,
    childRoutes: [
      {
        indexRoute: {
          component: App
        }
      },
      {
        path: paths.DASH,
        component: DashBoard,
        onEnter: requireAuth(getState)
      },
      {
        path: paths.SIGN_IN,
        component: SignIn,
        onEnter: requireUnauth(getState)
      }
    ]
  }
}
