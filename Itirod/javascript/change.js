const change_button = document.querySelector(".change");
change_button.onclick = (e) => {
  e.preventDefault();

  const fname = document.querySelector(".user-name").value;
  const lname = document.querySelector(".user-surname").value;
  const email = document.querySelector(".user-username").value;
  const pass = document.querySelector(".user-password").value;

  const storedName = localStorage.getItem("Name");
  const storedSurname = localStorage.getItem("Surname");
  const storedUsername = localStorage.getItem("Username");
  const storedPassword = localStorage.getItem("Password");

  if (fname != "") {
    localStorage.setItem("Name", fname);
  }
  if (lname != "") {
    localStorage.setItem("Surname", lname);
  }
  if (email != "") {
    localStorage.setItem("Username", email);
  }
  if (pass != "") {
    localStorage.setItem("Password", pass);
  }

  if (
    fname != storedName ||
    lname!= storedSurname ||
    email != storedUsername ||
    pass != storedPassword
  ) {
    setTimeout(()=>{
        location.href='./profile.html';
        },1000)
  }
};