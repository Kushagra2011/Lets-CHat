// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyB51BhsBCSixI6fMIhF3fLkf6vJxcxpS-s",
    authDomain: "letschat-bdde0.firebaseapp.com",
    databaseURL: "https://letschat-bdde0-default-rtdb.firebaseio.com",
    projectId: "letschat-bdde0",
    storageBucket: "letschat-bdde0.appspot.com",
    messagingSenderId: "639768464153",
    appId: "1:639768464153:web:924876d38fc85af781d388"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
    
}



