import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHCn4P-LnjhlkL_diQ4ufDcvrFHWzHbfM",
  authDomain: "expense-tracker-455da.firebaseapp.com",
  projectId: "expense-tracker-455da",
  storageBucket: "expense-tracker-455da.appspot.com",
  messagingSenderId: "168227145578",
  appId: "1:168227145578:web:678d7be139a21c5749c713"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);