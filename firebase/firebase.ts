// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCagydmoRBhaUCYLzuYXJYXH7odvW528rI",
  authDomain: "grid-4253e.firebaseapp.com",
  projectId: "grid-4253e",
  storageBucket: "grid-4253e.appspot.com",
  messagingSenderId: "1040543968745",
  appId: "1:1040543968745:web:2f0929a53d84c4546b6f78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };