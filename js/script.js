var toggle = document.querySelector(".nav-toggle");
var menu = document.querySelector(".nav-list");
var timer = document.querySelector(".timer")
toggle.addEventListener("click", function() {
    console.log("click");
    menu.classList.toggle("opened")
})

var x = setInterval(function() {
    const countDownDate = new Date("Apr 27, 2026 16:03:00").getTime();
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