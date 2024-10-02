"use strict";

const toggle_image = document.querySelector(".toggle_image");

const toggle_input = document.querySelector(".toggle_input");


  function togglePassword() {
    toggle_input.classList.toggle("hidden-password");

    if (toggle_input.classList.contains("hidden-password")) {
      toggle_input.type = "password";
      toggle_image.src = "images/show.jpg"; 
    } else {
      toggle_input.type = "text";
      toggle_image.src = "images/hide.jpg";
    }
  }

 
  toggle_image.addEventListener("click", togglePassword);



/*       On load Effect          */


const main_login = document.querySelector(".main_login");

window.addEventListener("DOMContentLoaded", ()=>{

main_login.classList.add("main_login_animation");  
    
});

