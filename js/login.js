var userName= document.getElementById("name")
var getName=localStorage.getItem("username")

var email=document.getElementById("email")
var getEmail=localStorage.getItem("email")

var password=document.getElementById("password")
var getPassword=localStorage.getItem("password")

var signBtn=document.getElementById("btn")

signBtn.addEventListener( "click", function (y){
    y.preventDefault()

    if( userName.value==""|| email.value==""|| password.value==""){
        alert("Please Enter your Info...")
        
    }else{

        if((userName.value === userName.value.trim() && getName.trim() )&&(email.value=== email.value.trim() &&getEmail.trim() )
            &&( password.value ===password.value.trim() && getPassword.trim()) )
        {

           setTimeout( ()=> { window.location="indix.html"},1500)
           alert("you can go and complete you data in user page")
       
        }
        
        else{
            alert("your Info not corrict..")
        }
    }
    
})
