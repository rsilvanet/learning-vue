import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD4Z-6xP22ErAgoN_OuARjNHxYeSWhAfBY",
    authDomain: "turnout-43d47.firebaseapp.com",
    databaseURL: "https://turnout-43d47.firebaseio.com",
    projectId: "turnout-43d47",
    storageBucket: "",
    messagingSenderId: "557618673688"
};

export const FirebaseApp = firebase.initializeApp(config);