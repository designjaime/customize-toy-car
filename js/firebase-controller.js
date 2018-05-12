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

function loadData(collectionName, callback) {
    console.log('loading ... ' + collectionName);
    db.collection(collectionName).get().then((querySnapshot) => {
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.data());
        // });
        callback(querySnapshot);
    });
}
