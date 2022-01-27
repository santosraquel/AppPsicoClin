import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBSdHSZiuy_XCguaZIn-_KEOsIOgY124Rs",
    authDomain: "psicoclin-6d2a1.firebaseapp.com",
    projectId: "psicoclin-6d2a1",
    storageBucket: "psicoclin-6d2a1.appspot.com",
    messagingSenderId: "850599210525",
    appId: "1:850599210525:web:a60f6988146a3cead060f4"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

  const database = firebase.firestore();

  export default database;