import * as firebase from 'firebase/app';
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDoMLWYsifcgbQdmrpr35mxOr43U00nffQ",
    authDomain: "cricket-d584a.firebaseapp.com",
    databaseURL: "https://cricket-d584a.firebaseio.com",
    projectId: "cricket-d584a",
    storageBucket: "",
    messagingSenderId: "432728130520",
    appId: "1:432728130520:web:b6a9d2e440b22d006568ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firebaseDatabase = firebase.database();

  export  {
       firebaseDatabase
  }