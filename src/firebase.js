import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDmKJcGPp_CgfU599Ss2iXK185RDxVlpWo",
  authDomain: "chat-c9827.firebaseapp.com",
  projectId: "chat-c9827",
  storageBucket: "chat-c9827.firebasestorage.app",
  messagingSenderId: "614498318734",
  appId: "1:614498318734:web:84403f155c157cbe790cdf"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
