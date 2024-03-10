
var userName= document.getElementById("name");
var email= document.getElementById("email");
var password= document.getElementById("password");
var registerBtn= document.getElementById("btn");


registerBtn.addEventListener("click", function (e){
    e.preventDefault()

    if( userName.value==""|| email.value==""|| password.value==""){
        alert("Please Enter your Info...")
        
    }
    else{

        localStorage.setItem("username",userName.value);
        localStorage.setItem("email" ,    email.value);
        localStorage.setItem("password" ,password.value);

        //clear inputs 

    //    document.getElementById("userName").value=""
    //    document.getElementById("email").value=""
    //    document.getElementById("password").value=""

        setTimeout(
            ()=> { window.location="login.html"
        },1500)
    }
})
