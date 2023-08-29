// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7tfUCowxSzACP1f8WYte7wDKtJLFf57M",
  authDomain: "market-place-app-30e63.firebaseapp.com",
  projectId: "market-place-app-30e63",
  storageBucket: "market-place-app-30e63.appspot.com",
  messagingSenderId: "298603806410",
  appId: "1:298603806410:web:190435c288a6d290a27e33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
