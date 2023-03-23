import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBGuKEUcdt1bf9xDCGyn9_4usyKSOsA7N4',
	authDomain: 'react-journal-app-5edc9.firebaseapp.com',
	projectId: 'react-journal-app-5edc9',
	storageBucket: 'react-journal-app-5edc9.appspot.com',
	messagingSenderId: '529139262977',
	appId: '1:529139262977:web:b8abd9492861e56eccc200',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAuthProvider, firebase }
