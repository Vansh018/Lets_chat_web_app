
room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

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

//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>";
      console.log(firebase_message_id);
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}