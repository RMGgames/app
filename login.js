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

function signIn()
{
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => window.location.replace("bounced.html"));

    window.location.replace("bounced-verified-with-password-35591312200519737070gAbxRyrIBEUX.html");
    

}
