// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDRdzTe2_z_5no422iEIS3a0FP6u2xUTqw",
    authDomain: "fancz-boyz.firebaseapp.com",
    projectId: "fancz-boyz",
    storageBucket: "fancz-boyz.appspot.com",
    messagingSenderId: "93260134643",
    appId: "1:93260134643:web:09ac21d4177ebe5e055f86",
    measurementId: "G-XQ39TCR7VZ"
 
}
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};