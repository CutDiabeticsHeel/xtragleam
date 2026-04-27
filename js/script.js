var toggle = document.querySelector(".nav-toggle");
var menu = document.querySelector(".nav-list");
var countDownDate = new Date("Apr 30, 2026 15:05:30").getTime();
var timer = document.querySelector(".timer")
toggle.addEventListener("click", function() {
    console.log("click");
    menu.classList.toggle("opened")
})

// setInterval(function() {
//     var nowDate = new Date().getTime();
//     var distance = countDownDate - nowDate;
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / (1000));

//     timer.textContent = hours + "hrs " + minutes + "mins " + seconds + "sec";
// })
