$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
   event.preventDefault();

var submitBtn = document.getElementById("save");
var mainText = document.getElementById("form");
function submitClick(){
   var firebaseRef = firebase.database().ref();
   var messageText = mainText.value;
   firebaseRef.push().set(messageText);
}
});
