import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIdDNCCu7pVJL4OmZYnssRVS8mN7jAenI",
  authDomain: "investyou-app.firebaseapp.com",
  projectId: "investyou-app",
  storageBucket: "investyou-app.firebasestorage.app",
  messagingSenderId: "204354435975",
  appId: "1:204354435975:web:9f95331fab6130bcc5b122",
  measurementId: "G-CBHXBC42B8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
