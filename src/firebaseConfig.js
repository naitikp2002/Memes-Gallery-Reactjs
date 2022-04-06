// Create new file "firebaseCinfig.js" in ./src and USe this template
import firebase from 'firebase'
require('firebase/auth')


const app = firebase.initializeApp({
        apiKey: "AIzaSyC9rzBa2Fy78DHxeDaaNLSREVUX3UM7hdg",
  authDomain: "demo3-4c6b7.firebaseapp.com",
  projectId: "demo3-4c6b7",
  storageBucket: "demo3-4c6b7.appspot.com",
  messagingSenderId: "449653900739",
  appId: "1:449653900739:web:782695af47539909ec2976"
     })
const db = app.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();


export const auth = app.auth()
export default db ;
