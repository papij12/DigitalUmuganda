// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKz54wNzpnmkqCZyzgfTzIXro05xsbl6o",
  authDomain: "digital-umuganda.firebaseapp.com",
  projectId: "digital-umuganda",
  storageBucket: "digital-umuganda.appspot.com",
  messagingSenderId: "555539006046",
  appId: "1:555539006046:web:683bfdb32fd31687006acf",
  measurementId: "G-J4KR1RYQFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const firestore = getFirestore(app);