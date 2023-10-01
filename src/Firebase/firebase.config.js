// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrx4JWdT5YYFR0prcoaRDANkyNL8n4ofE",
  authDomain: "auth-context-54fac.firebaseapp.com",
  projectId: "auth-context-54fac",
  storageBucket: "auth-context-54fac.appspot.com",
  messagingSenderId: "722539652243",
  appId: "1:722539652243:web:f2059c4c8c3748f23f1966",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
