async function signUp() {
    let name = document.getElementById("name")
    let userName = document.getElementById("userName")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let vaild=true
    let userNameEror=document.getElementById("UnameError")
    if(userName.value.length<3){
        userNameEror.style.display="block"
        vaild=false
    }
    else { userNameEror.style.display="none"
}
var usV = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,15}$/;
let nameError=document.getElementById("nameError")
if(!usV.test(name.value)){
    nameError.style.display="block"
    vaild=false
}
else { nameError.style.display="none"}
const emailV = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emailError=document.getElementById("emailError")
if(emailV.test(email)){
    emailError.style.display="block"
    vaild=false
}
else{    emailError.style.display="none"
}
let passworError=document.getElementById("passworError")
if(password.value.length<4){
    passworError.style.display="block"
    vaild=false
}
else {    passworError.style.display="none"
}

if (vaild) {
   
    let res= await fetch("https://6657369e9f970b3b36c865b0.mockapi.io/logIn", {
        method: 'POST',
        body: JSON.stringify({
            userName: userName.value,
            name:name.value,
            email: email.value,
            password: password.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    let data = await res.json()
    window.location.href="login.html"

    
 
}




    
}