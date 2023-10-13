import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSI10hTc5vhqOFriVwxmVJPz8JCYRsrAM",
  authDomain: "ecommerce-app-961c8.firebaseapp.com",
  projectId: "ecommerce-app-961c8",
  storageBucket: "ecommerce-app-961c8.appspot.com",
  messagingSenderId: "327292159937",
  appId: "1:327292159937:web:bbd22218b0ae8416a51140",
  measurementId: "G-QVX6E1L1K5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
