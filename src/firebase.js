import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAttTXHLjE8LJiIDBJUc04U8W16Vrux36s",
  authDomain: "todo-react-firebase-463cf.firebaseapp.com",
  projectId: "todo-react-firebase-463cf",
  storageBucket: "todo-react-firebase-463cf.appspot.com",
  messagingSenderId: "412420388938",
  appId: "1:412420388938:web:cdf936020f579373100eb3"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db }