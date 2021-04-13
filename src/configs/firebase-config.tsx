import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA1f4nAqixavRDPHo2EhTJfey8U6Odw7s4",
    authDomain: "moveit-free.firebaseapp.com",
    projectId: "moveit-free",
    storageBucket: "moveit-free.appspot.com",
    messagingSenderId: "19032337013",
    appId: "1:19032337013:web:8aac1426bda513125ae63c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app();
 }

export default firebase;