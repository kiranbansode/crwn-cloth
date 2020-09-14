import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCeUgiwkd3lFU5SPAsDe0fZIhHejF9HcFk",
  authDomain: "crwn-db-d75eb.firebaseapp.com",
  databaseURL: "https://crwn-db-d75eb.firebaseio.com",
  projectId: "crwn-db-d75eb",
  storageBucket: "crwn-db-d75eb.appspot.com",
  messagingSenderId: "762789276061",
  appId: "1:762789276061:web:b174316ea6a170695ea774",
  measurementId: "G-1HVLH7H548",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
