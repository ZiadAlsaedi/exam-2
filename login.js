async function logIn() {
let name=document.getElementById("name")
let password = document.getElementById("password")
let res= await fetch("https://6657369e9f970b3b36c865b0.mockapi.io/logIn")
let users=await res.json()
let user=users.find(user=> user.name===name.value && user.password===password.value)
let Error=document.getElementById("Error")
if(user){
    Error.style.display="none"
window.location.href="home.html"
localStorage.setItem("name",user.userName )

}
else{     Error.style.display="block"
}






}
