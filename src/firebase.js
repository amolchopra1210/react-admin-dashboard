    import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-panel-d85df.firebaseapp.com",
  projectId: "react-admin-panel-d85df",
  storageBucket: "react-admin-panel-d85df.appspot.com",
  messagingSenderId: "417967942316",
  appId: "1:417967942316:web:99d4c83032e2ba0db78d09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
