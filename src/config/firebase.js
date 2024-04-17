// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0tmmQW2wo1A6BjgCbE6NkuRSJ2BKn5_4',
  authDomain: 'portalberita-514a3.firebaseapp.com',
  projectId: 'portalberita-514a3',
  storageBucket: 'portalberita-514a3.appspot.com',
  messagingSenderId: '143956173639',
  appId: '1:143956173639:web:da20700b9570bed6bea262'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

// DB
const db = getFirestore(app)

export { db, auth }
