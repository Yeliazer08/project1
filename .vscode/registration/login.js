
let name1 = document.getElementById("username");
let pw = document.getElementById("password");
let form = document.getElementById("reg");
let signupLink = document.getElementById("signup");


form.addEventListener("submit", function(){
 

 if(name1.value === ""){
   document.getElementById("msg").innerHTML = "Please enter a username";
   
 } else {
   document.getElementById("msg").innerHTML = "";
 }

 if(pw.value === ""){
   document.getElementById("msg2").innerHTML = "Please enter a password";
   
 } else {
   document.getElementById("msg2").innerHTML = "";
 }
});


signupLink.addEventListener("click", function(event) {
  event.preventDefault(); 
  window.location.href = "reg.html"; 
});
