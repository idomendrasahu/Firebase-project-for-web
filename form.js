
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApTBWPPew5gFLwhZ38IJKt8z1Do8uV5v4",
  authDomain: "authentication-project-a0f4e.firebaseapp.com",
  databaseURL: "https://authentication-project-a0f4e-default-rtdb.firebaseio.com",
  projectId: "authentication-project-a0f4e",
  storageBucket: "authentication-project-a0f4e.appspot.com",
  messagingSenderId: "690156670945",
  appId: "1:690156670945:web:15afa584dcf63dab05cca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })