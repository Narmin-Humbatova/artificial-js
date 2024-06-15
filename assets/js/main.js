const hamburgerMenu = document.querySelector(".fa-bars")
const iconXmark = document.querySelector(".fa-xmark")

hamburgerMenu.addEventListener("click", function(){
    // alert("Hamburger Menu")
    document.querySelector(".mobile-menu").classList.add("aktiv")
})


iconXmark.addEventListener("click", function(){
    document.querySelector("mobile-menu").classList.remove("aktiv")
})