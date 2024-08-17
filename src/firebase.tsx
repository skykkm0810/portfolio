import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArGurPpbNUnHxfNQv4lyi3A3bgUO3HA7g",
  authDomain: "portfolio-c6b26.firebaseapp.com",
  databaseURL: "https://portfolio-c6b26-default-rtdb.firebaseio.com",
  projectId: "portfolio-c6b26",
  storageBucket: "portfolio-c6b26.appspot.com",
  messagingSenderId: "808791203964",
  appId: "1:808791203964:web:95f358a80e669287e069f9",
  measurementId: "G-7E1M2NQQRT",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
