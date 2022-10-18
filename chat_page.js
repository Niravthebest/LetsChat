var firebaseConfig = {
    apiKey: "AIzaSyDoaMOFnh2imMAHimh0njQ-qBnnAdbEwOM",
    authDomain: "kwitter-8f27e.firebaseapp.com",
    databaseURL: "https://kwitter-8f27e-default-rtdb.firebaseio.com",
    projectId: "kwitter-8f27e",
    storageBucket: "kwitter-8f27e.appspot.com",
    messagingSenderId: "185115968653",
    appId: "1:185115968653:web:cffa76ec49c352311c4ec4"
  };
  
  
  firebase.initializeApp(firebaseConfig);


function back() {
    
window.location = "chat_room.html";
}


function logout() {
  window.location = "index.html";
}

function send() {
  friebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });

  document.getElementById("talk_here").innerHTML = "";
}