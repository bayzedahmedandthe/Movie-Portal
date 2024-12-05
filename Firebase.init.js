// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS-AcZJ1KWHcCaeWmmvOWdEe7zp6MgReg",
    authDomain: "assaignment-10-c8283.firebaseapp.com",
    projectId: "assaignment-10-c8283",
    storageBucket: "assaignment-10-c8283.firebasestorage.app",
    messagingSenderId: "191167918252",
    appId: "1:191167918252:web:476f4d9df33a402cd6ef09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;