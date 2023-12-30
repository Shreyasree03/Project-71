import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCfohJ2CCFt4JyHEHNDcTYFkn1D5SqQXjQ",
    authDomain: "project-70-a3a2a.firebaseapp.com",
    projectId: "project-70-a3a2a",
    storageBucket: "project-70-a3a2a.appspot.com",
    messagingSenderId: "723689168885",
    appId: "1:723689168885:web:0817fe4f957c0e9aa64abc"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
