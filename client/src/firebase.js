import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBSRJwbDHd2wH0Hl7mXzLHw5s7BAA-288",
  authDomain: "artfolio-420319.firebaseapp.com",
  projectId: "artfolio-420319",
  storageBucket: "artfolio-420319.appspot.com",
  messagingSenderId: "508173063288",
  appId: "1:508173063288:web:f034c4396e8a5efe70498d",
  measurementId: "G-RZDPM95VB1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
