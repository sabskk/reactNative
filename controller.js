// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXACOnHiHemi7JLDvVqPUJclL6ctparW4",
  authDomain: "mobile3190-1be65.firebaseapp.com",
  projectId: "mobile3190-1be65",
  storageBucket: "mobile3190-1be65.firebasestorage.app",
  messagingSenderId: "24138615076",
  appId: "1:24138615076:web:5f248692b552aa75eccbb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore (app); // <<< Firestore