
var firebaseConfig = {
    apiKey: "AIzaSyA8OV09DZMc8DonuwKOCZRA0U5U_dVdPDY",
    authDomain: "lets-chat-54cdf.firebaseapp.com",
    databaseURL: "https://lets-chat-54cdf-default-rtdb.firebaseio.com",
    projectId: "lets-chat-54cdf",
    storageBucket: "lets-chat-54cdf.appspot.com",
    messagingSenderId: "885322833496",
    appId: "1:885322833496:web:9afb2353d474615256b42d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

//ADD YOUR FIREBASE LINKS HERE

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML = row
    //End code
    });});}
getData();


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("romm_name");
    window.location = "kwitter.html";
}

