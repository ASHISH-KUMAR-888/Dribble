"use strict";

const password_image = document.querySelector(".password_image");

const password = document.querySelector(".password");


  function togglePassword() {
    
password.classList.toggle("hidden-password");

    if (password.classList.contains("hidden-password")) {
      password.type = "password";
      password_image.src = "images/show.jpg"; 
    } else {
      password.type = "text";
      password_image.src = "images/hide.jpg";
    }
  }

 
  password_image.addEventListener("click", togglePassword);


/* ------------ Check Box ----------- */


const checkbox = document.querySelector(".checkbox");

const btn = document.querySelector(".btn");

/*
         checkbox

*/


checkbox.addEventListener("click", ()=>{
    
if(checkbox.checked){
    btn.disabled = false;
    btn.style.opacity = 1;
    btn.style.cursor = "pointer";
    btn.classList.toggle("btn_toggle");
}
else{
    btn.disabled = true;
    btn.style.opacity = .5;
    btn.style.cursor = "not-allowed";
    btn.classList.remove("btn_toggle");
}     
    
});


/*       On load Effect          */


const main_signup = document.querySelector(".main_signup");

window.addEventListener("DOMContentLoaded", ()=>{

main_signup.classList.add("main_signup_animation");  
    
});

