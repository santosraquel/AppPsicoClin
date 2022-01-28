import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtxBys2Ea7_eok9niAiaqjeRy5iCOd7Xk",
  authDomain: "psicoclin-33249.firebaseapp.com",
  projectId: "psicoclin-33249",
  storageBucket: "psicoclin-33249.appspot.com",
  messagingSenderId: "467091038865",
  appId: "1:467091038865:web:ff2ec9e275da2c64c61530"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;