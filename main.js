"use strict";

const lines_container = document.querySelector(".navbar .lines");

const nav_content = document.querySelector(".nav_content");

const lines = document.querySelectorAll(".navbar .lines div");



lines_container.addEventListener("click", ()=>{

nav_content.classList.toggle("nav_content_toggle");   
    
lines[0].classList.toggle("line_one"); 

lines[1].classList.toggle("line_two"); 

lines[2].classList.toggle("line_three");  
    
});
