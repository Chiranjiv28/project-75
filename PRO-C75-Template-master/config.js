import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBfWWxDYVRhZiP6HmYHTyCL_H_bs9SCQ7I",
  authDomain: "eride-e195b.firebaseapp.com",
  projectId: "eride-e195b",
  storageBucket: "eride-e195b.appspot.com",
  messagingSenderId: "905816139252",
  appId: "1:905816139252:web:679f30c7fbcf02c94345a1",
  measurementId: "G-VFE7R46Z9F"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
