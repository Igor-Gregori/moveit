import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCc-izjo0ErrDxNQkuTW85loBGBhosha6E",
    authDomain: "moveit-6b127.firebaseapp.com",
    projectId: "moveit-6b127",
    storageBucket: "moveit-6b127.appspot.com",
    messagingSenderId: "305891819652",
    appId: "1:305891819652:web:1f550ac601e528b7a3c2d1",
    measurementId: "G-E646JRD8BC"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app();
 }

export default firebase;