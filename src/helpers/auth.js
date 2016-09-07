import * as firebase from 'firebase'
import { auth } from '../lib/firebaseApp'

function checkCurrentUser() {
  return new Promise((resolve, reject) => {
    if (auth.currentUser) {
      resolve(auth.currentUser)
    } else {
      reject({ error: 'not authenticated' })
    }
  })
}

export function checkAuth (nextState, replace, callback) {
  console.log(auth)
  console.log(auth.hasOwnProperty('currentUser'))
  console.log(JSON.stringify(auth))
  callback()
}
