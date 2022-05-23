var firebaseConfig = {
    apiKey: "AIzaSyCEwMuCqtD65nUTGQoqCBQ2emRL9-VGUdU",
    authDomain: "pro93lets-chat-kwitter.firebaseapp.com",
    databaseURL: "https://pro93lets-chat-kwitter-default-rtdb.firebaseio.com",
    projectId: "pro93lets-chat-kwitter",
    storageBucket: "pro93lets-chat-kwitter.appspot.com",
    messagingSenderId: "223284555274",
    appId: "1:223284555274:web:eb89a0968b2730ab85f9f3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




  user_name=localStorage.getItem("user_name")
  document.getElementById("welcome").innerHTML="Welcome " +user_name+" !"

  function addRoom()
  {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
          purpouse:"add room"
      })
      localStorage.setItem("room_name",room_name)
      window.Location="kwitter_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    console.log("Room Name ="+Room_names);
    row="<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name)
    window.location="index.html"

}

function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location("index.html")
}