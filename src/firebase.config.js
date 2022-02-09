import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoTvYhxDGUHvv18T8sbvmnTAfG4Oe4hkY",
  authDomain: "house-marketplace-app-20d99.firebaseapp.com",
  projectId: "house-marketplace-app-20d99",
  storageBucket: "house-marketplace-app-20d99.appspot.com",
  messagingSenderId: "49339853326",
  appId: "1:49339853326:web:dc500a990519eab63baa5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
