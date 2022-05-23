//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyACm8X_hQpiXbY7uNYoGOgfvYIpG578EaI",
    authDomain: "kwitter-75822.firebaseapp.com",
    databaseURL: "https://kwitter-75822-default-rtdb.firebaseio.com",
    projectId: "kwitter-75822",
    storageBucket: "kwitter-75822.appspot.com",
    messagingSenderId: "804425991418",
    appId: "1:804425991418:web:2af8102d33af8f00ea7543"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name=message_data['name']
message=message_data['message']
like=message_data['like']
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>"
message_with_tag="<h4 class='message_h4'>"+messeage+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up' > like="+like+"</span> </button> <hr>"
rows=name_with_tag+message_with_tag+like_button+span_with_tag
document.getElementById("output").innerHTML+=width

function send()
{
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push(
          {
                name :user_name ,
                message:msg,
                like:0
          }
    )
    document.getElementById("msg").value=""

                                            
}

//End code
    } });  }); }
getData();
