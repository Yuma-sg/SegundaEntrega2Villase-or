import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFRMfwlkepNK90Mcv2c7-Ko0TzNRQv_bo",
  authDomain: "mrjugo-2b755.firebaseapp.com",
  projectId: "mrjugo-2b755",
  storageBucket: "mrjugo-2b755.firebasestorage.app",
  messagingSenderId: "81867180442",
  appId: "1:81867180442:web:44192cd0368a9427add223"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()