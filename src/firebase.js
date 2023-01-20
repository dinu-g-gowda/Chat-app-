// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA63muGZyxtae-mJ4_0XAMOw0daWrX2uds",
  authDomain: "chat-app-37140.firebaseapp.com",
  projectId: "chat-app-37140",
  storageBucket: "chat-app-37140.appspot.com",
  messagingSenderId: "498743625849",
  appId: "1:498743625849:web:fe2d89220839c954b06ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)