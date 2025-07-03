// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // IMPORTAÇÃO NOVA

const firebaseConfig = {
  apiKey: "AIzaSyA14Mwjrq7TinPcwTZqKaxmLhsrdFk4YzY",
  authDomain: "clinica-app-4bad9.firebaseapp.com",
  projectId: "clinica-app-4bad9",
  storageBucket: "clinica-app-4bad9.appspot.com",
  messagingSenderId: "821869659568",
  appId: "1:821869659568:web:b53dc3cac6b20d5b930275",
  measurementId: "G-KZ0EG1NB14",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app); // INICIALIZAR AUTH

export { app, analytics, db, auth }; // EXPORTAR AUTH
