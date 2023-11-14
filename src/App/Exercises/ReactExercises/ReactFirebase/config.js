// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAA7n5Ys3EEBFgUoq9CQP87OV3tAgpZvC4',
  authDomain: 'pomeranian-boilerplate-5ee19.firebaseapp.com',
  projectId: 'pomeranian-boilerplate-5ee19',
  storageBucket: 'pomeranian-boilerplate-5ee19.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
