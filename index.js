var firebase = require("firebase");

// Initialize Firebase
var firebaseConfig = {
// Enter Firebase config information here
  };
  firebase.initializeApp(firebaseConfig);

var email = "example@example.com"
var password = "examplePassword"

// // If there are no user registered, use this method
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log ("ERROR: " + errorCode + " - " + errorMessage);
//   });

// Assuming that there is a registered user
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log ("ERROR: " + errorCode + " - " + errorMessage);
  });

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var name, email, uid, emailVerified;
        name = user.displayName;
        email = user.email;
        emailVerified = user.emailVerified;
        uid = user.uid; 
        console.log(name, email, emailVerified, uid);
    } else {
      console.log("No user is signed in.")
    }
  });