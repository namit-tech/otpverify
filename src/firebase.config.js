// // firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from 'firebase/compat/app';
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD-4kWwOJEtKHm4bnJLSyJN87-uGQ0sis",
  authDomain: "otp-project-72f3a.firebaseapp.com",
  projectId: "otp-project-72f3a",
  storageBucket: "otp-project-72f3a.appspot.com",
  messagingSenderId: "1008869233794",
  appId: "1:1008869233794:web:67a03850ab7d2756e0909b",
  measurementId: "G-MLK26KLP3X",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


