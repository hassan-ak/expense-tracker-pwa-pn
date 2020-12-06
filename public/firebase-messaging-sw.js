// Imports
// Firebase SDK imports
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// Firebase initialaization
firebase.initializeApp({
    apiKey: "AIzaSyDixYwZLgRUwoDKW7DOqGClDoAGxsQM6DU",
    authDomain: "project07a2-hassanalikhan.firebaseapp.com",
    projectId: "project07a2-hassanalikhan",
    storageBucket: "project07a2-hassanalikhan.appspot.com",
    messagingSenderId: "677199351911",
    appId: "1:677199351911:web:219e6247c5fc12b07a44c2"
})

// Messaging call
firebase.messaging(); 