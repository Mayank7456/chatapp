import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCwy2KjTxjm77JTy8_woG0HPoSLm8iF7xw",
  authDomain: "application-dcb9a.firebaseapp.com",
  projectId: "application-dcb9a",
  storageBucket: "application-dcb9a.appspot.com",
  messagingSenderId: "900272945638",
  appId: "1:900272945638:web:d94ebc90c6daccd770be27"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
