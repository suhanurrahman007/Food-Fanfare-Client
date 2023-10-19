// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuu3Pc_3cwtcn7EX5PnEkm3j1C9R1zG7Y",
  authDomain: "food-store-2a07d.firebaseapp.com",
  projectId: "food-store-2a07d",
  storageBucket: "food-store-2a07d.appspot.com",
  messagingSenderId: "360825135741",
  appId: "1:360825135741:web:bbc1be247527b0c11e0714",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth

