import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALsIAOd5F2D91gXpPUCmyT60R1Os4vx4Y",
    authDomain: "sparta-react-1efca.firebaseapp.com",
    projectId: "sparta-react-1efca",
    storageBucket: "sparta-react-1efca.appspot.com",
    messagingSenderId: "208887319236",
    appId: "1:208887319236:web:3fe4d3f70ca605adc4d791",
    measurementId: "G-CJ0XQVVLX4",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
