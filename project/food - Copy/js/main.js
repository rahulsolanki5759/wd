const toggleBtn = document.getElementsByClassName("toggle")[0];
const navBar  = document.getElementsByClassName("navbar")[0];

toggleBtn = addEventListener("click", ()=>{
    navBar.classList.toggle("show");
})