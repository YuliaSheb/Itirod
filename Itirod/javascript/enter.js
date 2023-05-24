
const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();
    // cautch the valu which is type user login page
    const email = document.querySelector(".user-username").value;
    const pass = document.querySelector(".user-password").value;


    const Email = localStorage.getItem("Username");
    const Password = localStorage.getItem("Password");

    if( email == "" && pass == ""){
        Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else
    {
        if(email == Email && pass == Password){
            Swal.fire(
                'Good job!',
                'login successful!',
                'success'
            );
            setTimeout(()=>{
                location.href='./main.html';
                },1000)
        }else
        {
            Swal.fire(
                'Opps..!',
                'Something is wrong!',
                'error'
            );
        }
    };


};