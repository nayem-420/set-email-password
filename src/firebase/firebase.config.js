// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiuWgl7nHlfw16bwXBvMg-AH_JbH_POj0",
  authDomain: "set-email-password-auth.firebaseapp.com",
  projectId: "set-email-password-auth",
  storageBucket: "set-email-password-auth.appspot.com",
  messagingSenderId: "122007716386",
  appId: "1:122007716386:web:4ed0e58f6c98317a5dc07b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;