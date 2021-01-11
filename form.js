// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyByGj6yCDJZEjBpK9EKn2mSfc7BSwAJxmg",
    authDomain: "rmggames-3dbe6.firebaseapp.com",
    databaseURL: "https://rmggames-3dbe6.firebaseio.com/",
    projectId: "rmggames-3dbe6",
    storageBucket: "rmggames-3dbe6.appspot.com",
    messagingSenderId: "774457474280",
    appId: "1:774457474280:web:e49ab95d78e3ed01d61d5d",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");


    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up!");
}

function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");


    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In! as: " + email.value);
}

function signOut() {
    auth.signOut();
    alert("Signed Out!");
}

function resetPassword() {
    var resetEmail = document.getElementById("resetEmail");
    const promise = auth.sendPasswordResetEmail(resetEmail.value);
    window.alert("Te hemos enviado un correo para que reestablezcas tu contraseña");
}

function validate()
{
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    
    if(email.match(pattern))
        {
            form.classList.add('valid')
            form.classList.remove('invalid')
        }else{
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
    if(email == "")
        {
            form.classlist.remove('invalid')
            form.classlist.remove('valid')
        }
}