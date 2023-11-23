let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.addEventListener("click",toggel);
function toggel(){
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}


let home=document.querySelector("#nov-home");
let about=document.querySelector("#nov-about");
// let services=document.querySelector("#nov-services");
let project=document.querySelector("#nov-project");
let contact=document.querySelector("#nov-contact");


home.addEventListener("click",removeToggel);
about.addEventListener("click",removeToggel);
// services.addEventListener("click",removeToggel);
project.addEventListener("click",removeToggel);
contact.addEventListener("click",removeToggel);

function removeToggel(){
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
}



// about date section 

let todayDate=new Date();

let date = document.querySelector(".date span");
// console.log(date.innerText);
date.innerText=todayDate.toLocaleDateString();


// console.log(todayDate);
// todayDate.getDate





