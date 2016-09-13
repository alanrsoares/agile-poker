import { isAuthenticated } from './selectors'
import AppLayout from './layouts/AppLayout'
import App from './containers/App'
import SignIn from './containers/SignIn'
import DashBoard from './containers/DashBoard'
import Session from './containers/Session'

export const paths = {
  ROOT: '/',
  HOME: '/',
  DASHBOARD: '/dashboard',
  SESSION: '/session/:id',
  SIGN_IN: '/signin'
}

const requireAuth = getState =>
  (_, replace) => {
    if (!isAuthenticated(getState())) {
      replace(paths.SIGN_IN)
    }
  }

const requireUnauth = getState =>
  (_, replace) => {
    if (isAuthenticated(getState())) {
      replace(paths.DASHBOARD)
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
        path: paths.DASHBOARD,
        component: DashBoard,
        onEnter: requireAuth(getState)
      },
      {
        path: paths.SESSION,
        component: Session,
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
