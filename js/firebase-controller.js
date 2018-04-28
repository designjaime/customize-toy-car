// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDGcInocp3B9uScWtFj_1l4EJRfJBJFLX0",
    authDomain: "carstomize-ed240.firebaseapp.com",
    databaseURL: "https://carstomize-ed240.firebaseio.com",
    projectId: "carstomize-ed240",
    storageBucket: "carstomize-ed240.appspot.com",
    messagingSenderId: "873421605960"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// firebase.auth().signInAnonymously().catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//     console.error(error);
// });

// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         // User is signed in.
//         var isAnonymous = user.isAnonymous;
//         var uid = user.uid;

//         console.log(user);
//     } else {
//         // User is signed out.
//         // ...
//         console.log('Signed out...');
//     }
//     // ...
// });

function loadData(collectionName, callback) {
    console.log('loading ... ' + collectionName);
    db.collection(collectionName).get().then((querySnapshot) => {
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.data());
        // });
        callback(querySnapshot);
    });
}
