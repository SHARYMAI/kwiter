var firebaseConfig = {
  apiKey: "AIzaSyBQHbUDiwhF1OxEUTeclMEZk1lbGt--J8A",
  authDomain: "lista-de-citas.firebaseapp.com",
  databaseURL: "https://lista-de-citas-default-rtdb.firebaseio.com",
  projectId: "lista-de-citas",
  storageBucket: "lista-de-citas.appspot.com",
  messagingSenderId: "473762840366",
  appId: "1:473762840366:web:94ec59f43f1790f2f604bf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE



user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "¡Bienvenido " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      });
    });
  }

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="kwitter_page.html";
  }


      
