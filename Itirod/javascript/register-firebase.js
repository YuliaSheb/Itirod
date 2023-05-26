// Инициализируем Firebase и базу данных
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

var firebaseConfig = {
    apiKey: "AIzaSyDfjEShk64tGfRt_TP4oZ3f6mtykg4QXI0",
    authDomain: "my-site-989c4.firebaseapp.com",
    projectId: "my-site-989c4",
    storageBucket: "my-site-989c4.appspot.com",
    messagingSenderId: "405113297068",
    appId: "1:405113297068:web:060b04ac8c735341eae709",
    databaseURL: "https://my-site-989c4-default-rtdb.firebaseio.com"
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
  
  // Обработчик нажатия кнопки "Register"
var registerButton = document.querySelector('.login');
registerButton.addEventListener('click', function() {
    var name = document.querySelector('.user-name').value;
    var surname = document.querySelector('.user-surname').value;
    var username = document.querySelector('.user-username').value.replace(/[^a-zA-Z0-9_\-]/g, '_');;
    var password = document.querySelector('.user-password').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    // Сохраняем данные в базу данных Firebase
    const newUser = {
        name: name,
        surname: surname,
        username: username.replace('.', '_'),
        password: password,
        gender: gender,
        focus: 0,
        breaks: 0,
        all_time: 0,
        all_tree: 0
      };
    
      // Сохраняем данные в базу данных Firebase
      set(ref(db, 'users/' + username.replace('.', '_')), newUser).then(function() {
        // Показываем сообщение об успешной регистрации
        setTimeout(()=>{
            location.href='./enter.html';
            },2000)
      }).catch(function(error) {
        console.error("Error adding document: ", error);
      });
    });