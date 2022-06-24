// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDZx65DKIsCdSu2AuP8fqTUXM0bsFmZbDs",
  authDomain: "reactfirebasewebsite-c8001.firebaseapp.com",
  databaseURL: "https://reactfirebasewebsite-c8001-default-rtdb.firebaseio.com",
  projectId: "reactfirebasewebsite-c8001",
  storageBucket: "reactfirebasewebsite-c8001.appspot.com",
  messagingSenderId: "1009204905814",
  appId: "1:1009204905814:web:87e2f4b11319d91bad78f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

