import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDc19Qda8T3qdq7nRSSSep04QQ6POK7JXQ",
    authDomain: "block-master-7f1c3.firebaseapp.com",
    projectId: "block-master-7f1c3",
    storageBucket: "block-master-7f1c3.appspot.com",
    messagingSenderId: "67844887054",
    appId: "1:67844887054:web:ae5bca9d39e0f192b2a25f"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
  
  export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
  }