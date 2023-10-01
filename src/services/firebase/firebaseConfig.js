// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import  { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYKMh5knKirxZ3fq20rh05qjmh0uARaME",
  authDomain: "coder-6a04c.firebaseapp.com",
  projectId: "coder-6a04c",
  storageBucket: "coder-6a04c.appspot.com",
  messagingSenderId: "615734441704",
  appId: "1:615734441704:web:34304ba7dc8ca2eda9bb5d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);