var toggle = document.querySelector(".nav-toggle");
var cross = document.querySelector(".nav-list__svg")
var menu = document.querySelector(".nav-list");
var timer = document.querySelector(".timer");
toggle.addEventListener("click", () => menu.classList.add("opened"))
cross.addEventListener("click", () => menu.classList.remove("opened"))

var timer = document.querySelector(".timer");
const countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
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

const categories = document.querySelectorAll(".categories__button");
const products = document.querySelectorAll(".product-list__item");
const viewAll = document.querySelector(".catalog__link")
viewAll.addEventListener("click", function(){
    for (const product of products) {
        product.classList.remove("visually-hidden")
    }
})
for (const category of categories) {
    category.addEventListener("click", function() {
        const selectedCategory = category.getAttribute("data-categories");
        for (const product of products) {
            if (selectedCategory == product.getAttribute("data-categories")){
                product.classList.remove("visually-hidden")
            } else {
                product.classList.add("visually-hidden")
            }
            let productPosition = product.getBoundingClientRect()
            window.scrollTo({
                    top: productPosition.y,
                    left: 0,
                    behavior: "smooth",
            });
        }
    });
}

const submit = document.querySelector(".input-email__button");
const input = document.querySelector(".input-email")
input.addEventListener("input", function() {
    if (!input.checkValidity()){
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
})

const addProducts = document.querySelectorAll(".add-to-cart");
const cart = document.querySelector(".cart-counter");
let cartCounter = 0;
for (addProduct of addProducts) {
    addProduct.addEventListener("click", () =>{
        cartCounter++;
        cart.textContent = cartCounter;
    })
}
const addFavorites = document.querySelectorAll(".product-list__item-favorites")
const wishlist = document.querySelector(".favorites-counter")
let favoritesCounter = 0;
for (addFavorite of addFavorites) {
    addFavorite.addEventListener("click", () =>{
        favoritesCounter++;
        wishlist.textContent = favoritesCounter;
    })
}