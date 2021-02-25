import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// export const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// }
export const firebaseConfig = {
  apiKey: 'AIzaSyBGlxgC5ZY-Vn6ozNW7SSDwq5HjQQNvNj0',
  authDomain: 'tutoronline-303614.firebaseapp.com',
  projectId: 'tutoronline-303614',
  storageBucket: 'tutoronline-303614.appspot.com',
  messagingSenderId: '169470411670',
  appId: '1:169470411670:web:7847619b4a844b99ac53b7',
  measurementId: 'G-357KFJNZGZ'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const app = firebase.app()
const fbAuth = firebase.auth()
const db = firebase.firestore()
const fbNow = firebase.firestore.Timestamp.now()
const storage = firebase.storage()

export { fbAuth, db, fbNow, storage }

console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(')
