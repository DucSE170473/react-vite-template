import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkYDH550o_tKIZXLLXSCQnOCFcCAiqHWo",
  authDomain: "ttco-corp.firebaseapp.com",
  projectId: "ttco-corp",
  storageBucket: "ttco-corp.firebasestorage.app",
  messagingSenderId: "1084506312181",
  appId: "1:1084506312181:web:6e24076caa70c419daa4bc",
  measurementId: "G-S7ME8T9CR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
