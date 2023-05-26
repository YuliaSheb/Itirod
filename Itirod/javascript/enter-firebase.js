// // Инициализируем Firebase и базу данных
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, orderByChild, equalTo, get} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

var firebaseConfig = {
    apiKey: "AIzaSyDfjEShk64tGfRt_TP4oZ3f6mtykg4QXI0",
    authDomain: "my-site-989c4.firebaseapp.com",
    projectId: "my-site-989c4",
    storageBucket: "my-site-989c4.appspot.com",
    messagingSenderId: "405113297068",
    appId: "1:405113297068:web:060b04ac8c735341eae709",
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  
  const usernameInput = document.querySelector('.user-username');
  const passwordInput = document.querySelector('.user-password');
  const loginBtn = document.querySelector('.login');
  
  loginBtn.addEventListener('click', () => {
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      const usersRef = get(ref(database,'users'));
  
      const query = orderByChild(usersRef, 'username').equalTo(username);
        query.once('value', snapshot => {
          if (snapshot.exists()) {
              const userData = snapshot.val()[Object.keys(snapshot.val())[0]];
  
              if (userData.password === password) {
                  Swal.fire({
                      icon: 'success',
                      title: 'Login successful',
                      showConfirmButton: false,
                      timer: 1500
                  });
                  setTimeout(() => {
                      window.location.href = './main.html';
                  }, 1500);
              } else {
                  Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Incorrect password!'
                  });
              }
          } else {
              Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'User does not exist!'
              });
          }
      });
  });