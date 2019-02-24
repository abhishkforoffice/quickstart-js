var db = firebase.firestore();
var userRef = db.collection("users");

userRef.doc('Abhishek').set({
    first: "Abhishek",
    last: "Jain",
    born: 1992
})
.then(function() {
    console.log(`Success`);
})
.catch(function(error) {
    console.error('Fail');
});

userRef.doc('Aman').set({
    first: "Aman",
    last: "Jain",
    born: 1993
})
.then(function(docRef) {
    console.log('Success');
})
.catch(function(error) {
    console.error('Fail');
});