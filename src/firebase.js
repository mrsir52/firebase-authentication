import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAceWkLWIcpkpYJLYTgRAVUOViwOybyAgI",
  authDomain: "poker-f4d00.firebaseapp.com",
  databaseURL: "https://poker-f4d00.firebaseio.com",
  projectId: "poker-f4d00",
  storageBucket: "poker-f4d00.appspot.com",
  messagingSenderId: "771281025792"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();


//do we need to export firebase?
export default firebase;
