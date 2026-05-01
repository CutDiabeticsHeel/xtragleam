var toggle = document.querySelector(".nav-toggle");
var cross = document.querySelector(".nav-list__svg")
var menu = document.querySelector(".nav-list");
var timer = document.querySelector(".timer")
const countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
toggle.addEventListener("click", () => menu.classList.add("opened"))
cross.addEventListener("click", () => menu.classList.remove("opened"))

var x = setInterval(function() {
    const nowDate = new Date().getTime();
    var distance = countDownDate - nowDate;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));
    timer.textContent = hours + "hrs " + minutes + "mins " + seconds + "sec";
    if (distance <= 0) {
        clearInterval(x);
        timer.textContent = "Акция закончилась";
    }
}, 1000)