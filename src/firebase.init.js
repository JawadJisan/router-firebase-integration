// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4vhWxFkm7YnGH57l3P_T4nXknTV6aApA",
  authDomain: "router-firebase-integrat-efa4d.firebaseapp.com",
  projectId: "router-firebase-integrat-efa4d",
  storageBucket: "router-firebase-integrat-efa4d.appspot.com",
  messagingSenderId: "431013745133",
  appId: "1:431013745133:web:6ce285305dc802702017e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app