import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDEAYrbRGwEK0eSVbW_fTi0s23bERSNAQM",
  authDomain: "chat-b5a39.firebaseapp.com",
  projectId: "chat-b5a39",
  storageBucket: "chat-b5a39.appspot.com",
  messagingSenderId: "1097188729087",
  appId: "1:1097188729087:web:2eae0a8afbd3e68cc0ecca"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
