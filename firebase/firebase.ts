// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCHnWeHsMKwlflK0VBxEVgQmJiFL5LBXUY",
  authDomain: "gridape-e1675.firebaseapp.com",
  projectId: "gridape-e1675",
  storageBucket: "gridape-e1675.appspot.com",
  messagingSenderId: "369533664726",
  appId: "1:369533664726:web:ec0341c4fbfd11944c7877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
