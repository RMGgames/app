//Poner inicializador de Firebase
function send()
{
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase.auth().onAuthStateChanged(email);
}
