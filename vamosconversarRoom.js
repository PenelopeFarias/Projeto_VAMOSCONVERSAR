const firebaseConfig = {
    apiKey: "AIzaSyBH3BSZLveVjdduJABkl5Y5cVynts44lug",
    authDomain: "kwitter-ca9fd.firebaseapp.com",
    databaseURL: "https://vamosconversar-3a049-default-rtdb.firebaseio.com/",
    projectId: "kwitter-ca9fd",
    storageBucket: "kwitter-ca9fd.appspot.com",
    messagingSenderId: "233404545966",
    appId: "1:233404545966:web:d45ee8e87c49cc23f7a63f"
  };

firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
    roomName = document.getElementById("roomName").value;

    firebase.database().ref("/").child(roomName).update
  ({ 
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() 
{  firebase.database().ref("/").on('value', function(snapshot)
       { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
          { childKey  = childSnapshot.key;
               roomNames = childKey;

       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";

      document.getElementById("output").innerHTML += row;

    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name); 
  localStorage.setItem("roomName", name); 
  window.location = "kwitterPage.html";
}

function logout()
{
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
