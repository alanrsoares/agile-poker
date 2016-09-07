import config from '../constants/firebase'
import * as firebase from 'firebase'

firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()

export default firebase
