import config from '../constants/firebase'
import * as firebase from 'firebase'

console.log(config)
firebase.initializeApp(config)


console.log(firebase.auth().signInWithPopUp)
export const auth = firebase.auth()
export const database = firebase.database()

export default firebase
