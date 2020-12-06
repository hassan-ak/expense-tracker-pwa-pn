// Imports
// Firebase Imports
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/messaging';   // for cloud messaging

// Firebase Configrations
const config = {
    apiKey: "AIzaSyDixYwZLgRUwoDKW7DOqGClDoAGxsQM6DU",
    authDomain: "project07a2-hassanalikhan.firebaseapp.com",
    projectId: "project07a2-hassanalikhan",
    storageBucket: "project07a2-hassanalikhan.appspot.com",
    messagingSenderId: "677199351911",
    appId: "1:677199351911:web:219e6247c5fc12b07a44c2"
}

// App initilization
firebase.initializeApp(config)

// Function export
export default firebase; 