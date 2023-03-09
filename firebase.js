import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyClwzQigSQ8LfdjBg7u_eG_gGdOkP1gqmw",
  authDomain: "quatrun-6d711.firebaseapp.com",
  projectId: "quatrun-6d711",
  storageBucket: "quatrun-6d711.appspot.com",
  messagingSenderId: "679167722805",
  appId: "1:679167722805:web:5dfc047bd1ed428974787c"
};
firebase.initializeApp(firebaseConfig);

// Use Firebase Authentication and Firestore
export const auth = firebase.auth();
export const db = firebase.firestore();