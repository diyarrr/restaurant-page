import loadHome from  "./load-home.js";
import loadMenu from "./load-menu.js";

window.onload = function() {
    loadHome()
}

const content = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");

homeButton.addEventListener("click", function() {
    content.textContent = "";
    loadHome();
})

menuButton.addEventListener("click", function() {
    content.textContent = "";
    loadMenu();
})