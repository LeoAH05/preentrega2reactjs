
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAIH3lwFcy7DksXO8JWGQ56jmuBzU6rerI",
  authDomain: "blackpool-libreria.firebaseapp.com",
  projectId: "blackpool-libreria",
  storageBucket: "blackpool-libreria.firebasestorage.app",
  messagingSenderId: "831953463674",
  appId: "1:831953463674:web:23a5eb0fcdb62bf4230ec3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);