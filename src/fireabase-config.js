import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMIAN,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const Fire = initializeApp(firebaseConfig);

export const db = getFirestore(Fire);

export const auth = getAuth(Fire);

export const storage = getStorage(Fire);

