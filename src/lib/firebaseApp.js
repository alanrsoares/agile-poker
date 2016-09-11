import * as firebase from 'firebase'
import config from '../constants/firebase'
import actions from '../actions'

const app = firebase.initializeApp(config)

export const auth = app.auth()
export const database = app.database()

export default app

export const initAuth = dispatch =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(
      authUser => {
        if (authUser) {
          dispatch(actions.authLogin(authUser))
        }

        resolve()
        unsubscribe()
      },

      error => reject(error)
    )
  })
