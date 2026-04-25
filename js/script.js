var toggle = document.querySelector(".nav-toggle");
var menu = document.querySelector(".nav-list")

toggle.addEventListener("click", function() {
    console.log("click");
    menu.classList.toggle("opened")
})