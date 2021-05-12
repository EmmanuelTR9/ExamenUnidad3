 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCrK1sYZI4ksP1FrPmDw8eX1zz9nUaU0m4",
    authDomain: "unidad3examen.firebaseapp.com",
    databaseURL: "https://unidad3examen-default-rtdb.firebaseio.com",
    projectId: "unidad3examen",
    storageBucket: "unidad3examen.appspot.com",
    messagingSenderId: "1095563971569",
    appId: "1:1095563971569:web:277dcfed423240c5f95250"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Declaro Variable para mi base de datos
  var basedatos = firebase.database();

  // Variable para comunuicarme con mi html
  var app = document.getElementById('app');

  // ejemplo de innerHTML app.innerHTML = '<p>Hola que hay</p>';

  // Consumir datos de Realtime
  
  /*var coleccion = firebase.database().ref().child('mensaje');
  coleccion.on('value', (snaphot) => {
      console.log(snaphot.val())
  });*/

  function readval(){
    var coleccion = basedatos.ref().child('users/username/');
      coleccion.on('value', (snapshot) => {
      console.log(snapshot.val());
      app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
    });
  }
  
  function readget(){
      basedatos.ref('users').child('username').get().then(function(snapshot) {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
      }
      else {
        console.log("No data available");
        app.innerText = 'No data available';
      }
    }).catch(function(error) {
      console.error(error);
    });
  }


  //Agregar colección a base de datos
  function writecollection() {
    basedatos.ref('users').set({
      username: "Emmanuel",
      email: "Emmanueltr9@gmail.com",
    });
    console.log("Agregar datos");
  }
  
  