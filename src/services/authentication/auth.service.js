
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR7DMcALNG5EXrZN7xeAhLp9L42ra6d3U",
  authDomain: "whatsinmyfridge-ff353.firebaseapp.com",
  projectId: "whatsinmyfridge-ff353",
  storageBucket: "whatsinmyfridge-ff353.appspot.com",
  messagingSenderId: "552970958934",
  appId: "1:552970958934:web:90ee4ed6a21309590263f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


