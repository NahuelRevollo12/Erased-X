import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBEug-lCO6V7734p1iTPKwXEDgbTzrcHU0",
  authDomain: "erased-x.firebaseapp.com",
  projectId: "erased-x",
  storageBucket: "erased-x.appspot.com",
  messagingSenderId: "787296741901",
  appId: "1:787296741901:web:01a53e6b29f250ad248344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, 'productos');