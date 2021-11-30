import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPCfz4EqNl5FYptvgNJaHB9qYM7haUSSc",
    authDomain: "meetstart-990b4.firebaseapp.com",
    projectId: "meetstart-990b4",
    storageBucket: "meetstart-990b4.appspot.com",
    messagingSenderId: "910532185378",
    appId: "1:910532185378:web:cdf12795cc5b75e601697b"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth;

export { firebase, app, auth };