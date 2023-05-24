const submit_button = document.querySelector(".login");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.querySelector(".user-name").value;
    const lname = document.querySelector(".user-surname").value;
    const email = document.querySelector(".user-username").value;
    const pass = document.querySelector(".user-password").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    localStorage.setItem('Name', fname);
    localStorage.setItem('Surname', lname);
    localStorage.setItem('Username', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Focus', 0);
    localStorage.setItem('Breaks', 0);
    localStorage.setItem('All_time', 0);
    localStorage.setItem('All_tree', 0);
    localStorage.setItem("Gender", gender);

   if(fname == "" && lname == "" && email == "" && pass == ""){
        Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20)
        {
            Swal.fire(
                'Good job!',
                'Register successful!',
                'success'
            );
            setTimeout(()=>{
                    location.href='./enter.html';
                    },2000)

        }
        else
    {
        Swal.fire(
            'Opps..!',
            'Input mim six digit password!',
            'error'
        );
    }
    }
}
